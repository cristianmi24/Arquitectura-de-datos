"use client";

import type { CourseProgress, Topic, Module } from '@/types';
import { useLocalStorage } from './use-local-storage';
import { LOCAL_STORAGE_KEYS } from '@/lib/constants';
import { courseModules } from '@/data/course-content'; // To get total topics
import { useCallback } from 'react';

export function useCourseProgress() {
  const [progress, setProgress] = useLocalStorage<CourseProgress>(
    LOCAL_STORAGE_KEYS.COURSE_PROGRESS,
    {}
  );

  const toggleTopicCompletion = useCallback((moduleId: string, topicId: string) => {
    setProgress(prevProgress => {
      const newProgress = { ...prevProgress };
      if (!newProgress[moduleId]) {
        newProgress[moduleId] = {};
      }
      newProgress[moduleId][topicId] = !newProgress[moduleId][topicId];
      return newProgress;
    });
  }, [setProgress]);

  const isTopicCompleted = useCallback((moduleId: string, topicId: string): boolean => {
    return !!progress[moduleId]?.[topicId];
  }, [progress]);

  const getModuleProgress = useCallback((module: Module): number => {
    if (!progress[module.id] || module.topics.length === 0) {
      return 0;
    }
    const completedTopics = module.topics.filter(topic => isTopicCompleted(module.id, topic.id)).length;
    return (completedTopics / module.topics.length) * 100;
  }, [progress, isTopicCompleted]);

  const getTotalProgress = useCallback((): number => {
    let totalTopics = 0;
    let completedTopics = 0;

    courseModules.forEach(module => {
      totalTopics += module.topics.length;
      module.topics.forEach(topic => {
        if (isTopicCompleted(module.id, topic.id)) {
          completedTopics++;
        }
      });
    });

    return totalTopics === 0 ? 0 : (completedTopics / totalTopics) * 100;
  }, [isTopicCompleted]);
  
  const resetProgress = useCallback(() => {
    setProgress({});
  }, [setProgress]);

  return {
    progress,
    toggleTopicCompletion,
    isTopicCompleted,
    getModuleProgress,
    getTotalProgress,
    resetProgress,
  };
}
