"use client";

import Link from 'next/link';
import { courseModules } from '@/data/course-content';
import { useLanguage } from '@/context/language-context';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CourseProgressBar } from '@/components/course-progress-bar';
import { ArrowRightIcon } from 'lucide-react';

export default function CourseContentPage() {
  const { t, language } = useLanguage();

  if (typeof document !== 'undefined') {
    document.title = `${t('nav.content')} | ${t('appName')}`;
  }

  return (
    <div className="space-y-10">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">{t('courseModulesPage.title')}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">{t('courseModulesPage.description')}</p>
        <Card className="max-w-2xl mx-auto shadow-md">
          <CardContent className="pt-6">
            <CourseProgressBar />
          </CardContent>
        </Card>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courseModules.map((module) => (
          <Card key={module.id} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center mb-2">
                {module.icon && <module.icon className="w-8 h-8 text-primary mr-3" />}
                <CardTitle className="text-xl">{module.title[language]}</CardTitle>
              </div>
              <CardDescription>{module.description?.[language]}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              {/* Optionally, list topics or show module-specific progress here */}
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`/content/module/${module.id}`}>
                  {t('courseModulesPage.viewModule')} <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>
    </div>
  );
}
