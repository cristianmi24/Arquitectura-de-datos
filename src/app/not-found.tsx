"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/language-context';
import { AlertTriangleIcon } from 'lucide-react';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center py-12"> {/* Adjust min-h based on header/footer height */}
      <AlertTriangleIcon className="w-24 h-24 text-destructive mb-8" />
      <h1 className="text-5xl font-bold text-primary mb-4">{t('notFound.title')}</h1>
      <p className="text-xl text-muted-foreground mb-8">{t('notFound.message')}</p>
      <Button asChild size="lg">
        <Link href="/">{t('notFound.goHome')}</Link>
      </Button>
    </div>
  );
}
