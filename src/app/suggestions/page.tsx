"use client";

import { FeedbackForm } from '@/components/feedback-form';
import { useLanguage } from '@/context/language-context';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function SuggestionsPage() {
  const { t, language } = useLanguage();

  if (typeof document !== 'undefined') {
    document.title = `${t('nav.suggestions')} | ${t('appName')}`;
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-primary">{t('suggestionsPage.title')}</CardTitle>
          <CardDescription className="text-lg">{t('suggestionsPage.description')}</CardDescription>
        </CardHeader>
        <CardContent>
          <FeedbackForm />
        </CardContent>
      </Card>
    </div>
  );
}
