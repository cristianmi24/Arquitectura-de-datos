"use client";

import Link from 'next/link';
import { courseExercises } from '@/data/exercise-content';
import { courseModules } from '@/data/course-content';
import { useLanguage } from '@/context/language-context';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon, FileTextIcon } from 'lucide-react';

export default function ExercisesPage() {
  const { t, language } = useLanguage();

  if (typeof document !== 'undefined') {
    document.title = `${t('nav.exercises')} | ${t('appName')}`;
  }
  
  const getModuleTitle = (moduleId: string) => {
    const module = courseModules.find(m => m.id === moduleId);
    return module ? module.title[language] : `Module ${moduleId}`;
  }

  return (
    <div className="space-y-10">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">{t('exercisesPage.title')}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t('exercisesPage.description')}</p>
      </section>

      {courseExercises.length > 0 ? (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courseExercises.map((exercise) => (
            <Card key={exercise.id} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <FileTextIcon className="w-8 h-8 text-primary mr-3" />
                  <CardTitle className="text-xl">{exercise.title[language]}</CardTitle>
                </div>
                <CardDescription>
                  <span className="font-semibold">{t('modulePage.module')}:</span> {getModuleTitle(exercise.moduleId)}
                  <br />
                  {exercise.description[language]}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                {/* Additional exercise details if any */}
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={`/exercises/${exercise.id}`}>
                    {t('exercisesPage.startExercise')} <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </section>
      ) : (
        <section className="text-center py-10">
          <p className="text-xl text-muted-foreground">{t('exercisesPage.noExercisesAvailable')}</p>
        </section>
      )}
    </div>
  );
}
