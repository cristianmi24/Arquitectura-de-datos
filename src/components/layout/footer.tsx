"use client";

import { useLanguage } from '@/context/language-context';
import { APP_NAME } from '@/lib/constants';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
        <p>{t('footer.text', { year: currentYear })}</p>
      </div>
    </footer>
  );
}
