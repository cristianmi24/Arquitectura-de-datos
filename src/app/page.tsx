"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/context/language-context';
import { CheckCircleIcon, LightbulbIcon, PaletteIcon, BarChartIcon, UsersIcon, MessageSquareIcon } from 'lucide-react';
import Image from 'next/image';

export default function HomePage() {
  const { t, language } = useLanguage();

  const features = [
    {
      icon: PaletteIcon,
      titleKey: "homePage.featureModernDesign",
      descriptionKey: "homePage.featureModernDesignDesc",
    },
    {
      icon: LightbulbIcon,
      titleKey: "homePage.featureLightDark",
      descriptionKey: "homePage.featureLightDarkDesc",
    },
    {
      icon: UsersIcon,
      titleKey: "homePage.featureMultilingual",
      descriptionKey: "homePage.featureMultilingualDesc",
    },
    {
      icon: BarChartIcon,
      titleKey: "homePage.featureProgressBar",
      descriptionKey: "homePage.featureProgressBarDesc",
    },
    {
      icon: CheckCircleIcon,
      titleKey: "homePage.featureInteractiveExercises",
      descriptionKey: "homePage.featureInteractiveExercisesDesc",
    },
    {
      icon: MessageSquareIcon,
      titleKey: "homePage.featureFeedback",
      descriptionKey: "homePage.featureFeedbackDesc",
    },
  ];

  return (
    <div className="space-y-12">
      <section className="text-center py-12 md:py-16 bg-card rounded-lg shadow-lg">
        <div className="container mx-auto px-4">
          <Image 
            src="https://www.yarquitectura.com/wp-content/uploads/arquitectura-de-datos.jpg" 
            alt="Data Architecture Abstract" 
            width={1200} 
            height={400}
            className="rounded-lg mb-8 mx-auto object-cover w-full max-h-[300px] md:max-h-[400px]"
            data-ai-hint="data architecture"
          />
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-6">
            {t('homePage.welcomeTitle')}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t('homePage.welcomeMessage')}
          </p>
          <Button asChild size="lg" className="shadow-md hover:shadow-lg transition-shadow">
            <Link href="/content">{t('homePage.startButton')}</Link>
          </Button>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t('homePage.featuresTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <feature.icon className="w-10 h-10 text-primary" />
                  <CardTitle className="text-xl">{t(feature.titleKey)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{t(feature.descriptionKey)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
