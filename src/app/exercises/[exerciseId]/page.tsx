"use client";

import { useParams, notFound, useRouter } from 'next/navigation';
import { courseExercises } from '@/data/exercise-content';
import { courseModules } from '@/data/course-content';
import { useLanguage } from '@/context/language-context';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeftIcon, CheckIcon, XIcon } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from 'react';
import type { Question } from '@/types';

export default function ExercisePage() {
  const params = useParams();
  const exerciseId = params.exerciseId as string;
  const { t, language } = useLanguage();
  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const exercise = courseExercises.find(ex => ex.id === exerciseId);

  // State for answers and results
  const [answers, setAnswers] = useState<Record<string, number | undefined>>({});
  const [results, setResults] = useState<Record<string, boolean | undefined>>({});
  const [submitted, setSubmitted] = useState(false);

  if (!exercise) {
    notFound();
  }
  
  const module = courseModules.find(m => m.id === exercise.moduleId);

  if (typeof document !== 'undefined') {
     document.title = `${exercise.title[language]} | ${t('appName')}`;
  }

  const handleAnswerChange = (questionId: string, optionIndex: number) => {
    if (submitted) return; // Don't allow changes after submission
    setAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleSubmit = () => {
    if (!exercise.questions) return;
    const newResults: Record<string, boolean> = {};
    exercise.questions.forEach(q => {
      newResults[q.id] = answers[q.id] === q.correctAnswerIndex;
    });
    setResults(newResults);
    setSubmitted(true);
  };

  const renderQuestion = (question: Question) => (
    <div key={question.id} className="mb-6 p-4 border rounded-lg">
      <p className="font-semibold mb-3">{question.text[language]}</p>
      <RadioGroup
        onValueChange={(value) => handleAnswerChange(question.id, parseInt(value))}
        value={answers[question.id]?.toString()}
        disabled={submitted}
      >
        {question.options.map((option, index) => (
          <div key={index} className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value={index.toString()} id={`${question.id}-opt-${index}`} />
            <Label htmlFor={`${question.id}-opt-${index}`} className={cn(
              "cursor-pointer",
              submitted && index === question.correctAnswerIndex && "text-green-600 font-bold",
              submitted && answers[question.id] === index && index !== question.correctAnswerIndex && "text-red-600 line-through"
            )}>
              {option[language]}
            </Label>
            {submitted && answers[question.id] === index && index === question.correctAnswerIndex && <CheckIcon className="h-5 w-5 text-green-600" />}
            {submitted && answers[question.id] === index && index !== question.correctAnswerIndex && <XIcon className="h-5 w-5 text-red-600" />}
          </div>
        ))}
      </RadioGroup>
      {submitted && results[question.id] === false && (
        <p className="mt-2 text-sm text-red-600">
          {t('exercisePage.incorrectAnswer')} {t('exercisePage.correctAnswer')} {question.options[question.correctAnswerIndex][language]}
        </p>
      )}
      {submitted && results[question.id] === true && (
        <p className="mt-2 text-sm text-green-600">{t('exercisePage.correctAnswer')}</p>
      )}
    </div>
  );


  return (
    <div className="space-y-8">
      <Button variant="outline" onClick={() => router.back()} className="mb-6">
        <ArrowLeftIcon className="mr-2 h-4 w-4" />
        Back to Exercises
      </Button>
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl text-primary">{exercise.title[language]}</CardTitle>
          {module && <CardDescription className="text-md">{t('modulePage.module')} {module.id}: {module.title[language]}</CardDescription>}
          <CardDescription className="text-md pt-2">{exercise.description[language]}</CardDescription>
        </CardHeader>
        <CardContent>
          {exercise.type === "multiple-choice" && exercise.questions && mounted ? (
            <>
              {exercise.questions.map(renderQuestion)}
              {!submitted && (
                <Button onClick={handleSubmit} size="lg" className="mt-6">
                  {t('exercisePage.submitAnswer')}
                </Button>
              )}
              {submitted && (
                 <Button onClick={() => { setSubmitted(false); setAnswers({}); setResults({}); }} size="lg" variant="outline" className="mt-6">
                  Try Again
                </Button>
              )}
            </>
          ) : (
            <p className="text-muted-foreground text-lg py-8 text-center">{t('exercisePage.comingSoon')}</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

