"use client";

import { useLanguage } from '@/context/language-context';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { UsersIcon, BriefcaseIcon, CpuIcon, BrainIcon, SettingsIcon, CodeIcon } from 'lucide-react';
import type { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'Credits',
// };
// Metadata for client components should be exported from page.tsx of a Server Component parent, or layout.tsx.
// For now, setting title via useLanguage hook if possible or document.title.

export default function CreditsPage() {
  const { t, language } = useLanguage();

  // Set document title (client-side)
  if (typeof document !== 'undefined') {
    document.title = `${t('nav.credits')} | ${t('appName')}`;
  }

  const creditSections = [
    {
      titleKey: "creditsPage.authors",
      icon: BrainIcon,
      items: [
        { nameKey: "creditsPage.authorName", roleKey: "creditsPage.authorRole", avatar: "AI" }
      ]
    },
    {
      titleKey: "creditsPage.tutors",
      icon: UsersIcon,
      items: [
        { nameKey: "creditsPage.tutorName", roleKey: "creditsPage.tutorRole", avatar: "SM" }
      ]
    },
    {
      titleKey: "creditsPage.developers",
      icon: CodeIcon,
      items: [
        { nameKey: "creditsPage.developerName", roleKey: "creditsPage.developerRole", avatar: "FS" }
      ]
    }
  ];

  const technologies = [
    { nameKey: "creditsPage.techNextJs", icon: SettingsIcon },
    { nameKey: "creditsPage.techTailwindCss", icon: SettingsIcon },
    { nameKey: "creditsPage.techShadcnUi", icon: SettingsIcon },
    { nameKey: "creditsPage.techLucideIcons", icon: SettingsIcon },
    { nameKey: "creditsPage.techGenkit", icon: CpuIcon },
  ];

  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">{t('creditsPage.title')}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t('creditsPage.description')}</p>
      </section>

      {creditSections.map(section => (
        <section key={section.titleKey}>
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <section.icon className="w-7 h-7 text-primary mr-3" />
            {t(section.titleKey)}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {section.items.map(item => (
              <Card key={item.nameKey} className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 flex flex-col items-center text-center">
                  <Avatar className="w-20 h-20 mb-4 border-2 border-primary">
                    <AvatarImage src={`https://picsum.photos/seed/${item.avatar}/80/80`} data-ai-hint="person portrait" />
                    <AvatarFallback>{item.avatar}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-medium">{t(item.nameKey)}</h3>
                  <p className="text-sm text-muted-foreground">{t(item.roleKey)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ))}

      <section>
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <BriefcaseIcon className="w-7 h-7 text-primary mr-3" />
          {t('creditsPage.technologies')}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map(tech => (
             <Card key={tech.nameKey} className="shadow-md hover:shadow-lg transition-shadow">
               <CardContent className="pt-6 flex flex-col items-center text-center space-y-2">
                 <tech.icon className="w-8 h-8 text-accent mb-2" />
                 <p className="text-sm font-medium">{t(tech.nameKey)}</p>
               </CardContent>
             </Card>
          ))}
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">{t('creditsPage.acknowledgements')}</h2>
        <Card className="shadow-md">
          <CardContent className="pt-6">
            <p className="text-muted-foreground">{t('creditsPage.acknowledgementText')}</p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
