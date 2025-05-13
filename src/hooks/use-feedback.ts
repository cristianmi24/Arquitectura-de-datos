"use client";

import type { FeedbackSubmission } from '@/types';
import { useLocalStorage } from './use-local-storage';
import { LOCAL_STORAGE_KEYS } from '@/lib/constants';
import { useCallback } from 'react';

export function useFeedback() {
  const [submissions, setSubmissions] = useLocalStorage<FeedbackSubmission[]>(
    LOCAL_STORAGE_KEYS.FEEDBACK_SUBMISSIONS,
    []
  );

  const addSubmission = useCallback((feedback: Omit<FeedbackSubmission, 'id' | 'timestamp'>) => {
    const newSubmission: FeedbackSubmission = {
      ...feedback,
      id: crypto.randomUUID(),
      timestamp: Date.now(),
    };
    setSubmissions(prevSubmissions => [newSubmission, ...prevSubmissions]);
  }, [setSubmissions]);

  const clearSubmissions = useCallback(() => {
    setSubmissions([]);
  }, [setSubmissions]);

  return {
    submissions,
    addSubmission,
    clearSubmissions,
  };
}
