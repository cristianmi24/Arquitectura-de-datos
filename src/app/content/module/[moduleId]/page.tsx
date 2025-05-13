"use client";

import { useParams, notFound, useRouter } from 'next/navigation';
import Link from 'next/link';
import { courseModules } from '@/data/course-content';
import { useLanguage } from '@/context/language-context';
import { useCourseProgress } from '@/hooks/use-course-progress';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircleIcon, CircleIcon, ArrowLeftIcon } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { useEffect, useState } from 'react';

export default function ModulePage() {
  const params = useParams();
  const moduleId = params.moduleId as string;
  const { t, language } = useLanguage();
  const { toggleTopicCompletion, isTopicCompleted, getModuleProgress } = useCourseProgress();
  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const module = courseModules.find(m => m.id === moduleId);

  if (!module) {
    notFound();
  }
  
  if (typeof document !== 'undefined') {
    document.title = `${t('modulePage.module')} ${module.id}: ${module.title[language]} | ${t('appName')}`;
  }

  const moduleProgress = mounted ? getModuleProgress(module) : 0;

  return (
    <div className="space-y-8">
      <Button variant="outline" onClick={() => router.back()} className="mb-6">
        <ArrowLeftIcon className="mr-2 h-4 w-4" />
        Back to Modules
      </Button>
      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center mb-2">
                {module.icon && <module.icon className="w-10 h-10 text-primary mr-4" />}
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{t('modulePage.module')} {module.id}</p>
                  <CardTitle className="text-3xl">{module.title[language]}</CardTitle>
                </div>
              </div>
              {module.description && <CardDescription className="mt-1 text-md">{module.description[language]}</CardDescription>}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <div className="mb-2 flex justify-between items-center">
              <span className="text-sm font-medium text-foreground">{t('modulePage.progress')}</span>
              <span className="text-sm font-semibold text-primary">{Math.round(moduleProgress)}%</span>
            </div>
            <Progress value={moduleProgress} aria-label={`${t('modulePage.module')} ${module.id} ${t('modulePage.progress')}`} className="w-full h-3 [&>div]:bg-accent"/>
            {moduleProgress === 100 && (
              <p className="mt-2 text-sm text-green-600 dark:text-green-400 flex items-center">
                <CheckCircleIcon className="mr-2 h-4 w-4"/> {t('modulePage.allTopicsCompleted')}
              </p>
            )}
          </div>

          <h3 className="text-2xl font-semibold mb-4 mt-8">{t('modulePage.topics')}</h3>
          <Accordion type="single" collapsible className="w-full">
            {module.topics.map((topic, index) => {
              const completed = mounted ? isTopicCompleted(module.id, topic.id) : false;
              return (
                <AccordionItem value={`item-${index}`} key={topic.id}>
                  <AccordionTrigger className="text-lg hover:no-underline">
                    <div className="flex items-center justify-between w-full">
                      <span className="flex items-center">
                        {completed ? <CheckCircleIcon className="h-5 w-5 mr-3 text-green-500" /> : <CircleIcon className="h-5 w-5 mr-3 text-muted-foreground" />}
                        {topic.title[language]}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="prose dark:prose-invert max-w-none text-base p-4 bg-secondary/30 rounded-md">
                    <div dangerouslySetInnerHTML={{ __html: topic.content[language].replace(/\n/g, '<br />') }} />
                    <Button
                      variant={completed ? "outline" : "default"}
                      size="sm"
                      className="mt-4"
                      onClick={() => toggleTopicCompletion(module.id, topic.id)}
                    >
                      {completed ? t('modulePage.markAsIncomplete') : t('modulePage.markAsCompleted')}
                    </Button>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
