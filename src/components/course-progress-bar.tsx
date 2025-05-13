"use client";

import { Progress } from "@/components/ui/progress";
import { useCourseProgress } from "@/hooks/use-course-progress";
import { useLanguage } from "@/context/language-context";
import { useEffect, useState } from "react";
import { LOCAL_STORAGE_KEYS } from "@/lib/constants";

interface CourseProgressBarProps {
  showLabel?: boolean;
}

export function CourseProgressBar({ showLabel = true }: CourseProgressBarProps) {
  const { getTotalProgress } = useCourseProgress();
  const { t } = useLanguage();
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    // Ensure progress is updated on client-side after hydration
    setCurrentProgress(getTotalProgress());
  }, [getTotalProgress, typeof window !== 'undefined' ? localStorage.getItem(LOCAL_STORAGE_KEYS.COURSE_PROGRESS) : null]);


  return (
    <div className="w-full">
      {showLabel && (
        <div className="mb-2 flex justify-between items-center">
          <span className="text-sm font-medium text-foreground">{t('courseModulesPage.progress')}</span>
          <span className="text-sm font-semibold text-primary">{Math.round(currentProgress)}%</span>
        </div>
      )}
      <Progress value={currentProgress} aria-label={t('courseModulesPage.progress')} className="w-full h-3 [&>div]:bg-accent" />
    </div>
  );
}
