"use client";

import { useLanguage } from '@/context/language-context';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { UsersIcon, LinkedinIcon, TwitterIcon, GithubIcon } from 'lucide-react';
import Link from 'next/link';

export default function CreditsPage() {
  const { t, language } = useLanguage();

  // Set document title (client-side)
  if (typeof document !== 'undefined') {
    document.title = `${t('nav.credits')} | ${t('appName')}`;
  }

  const teamMembers = [
    {
      nameKey: "creditsPage.member1Name",
      roleKey: "creditsPage.member1Role",
      imageUrl: "https://pbs.twimg.com/profile_images/1909817501640175616/gM7Wv4cw_400x400.jpg", // Unique image URL
      fallback: "WM", // Fallback initials
      aiHint: "woman portrait", // AI hint for image generation
      socials: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      nameKey: "creditsPage.member2Name",
      roleKey: "creditsPage.member2Role",
      imageUrl: "https://media.licdn.com/dms/image/v2/D4E03AQHXYLM__g3Mqg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1677090533027?e=1751500800&v=beta&t=cn8p_F1NyzlqFsUBpBuBME1Z4gBvADgHA-I79k5aeBI", // Unique image URL
      fallback: "M1", // Fallback initials
      aiHint: "man portrait", // AI hint for image generation
      socials: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      nameKey: "creditsPage.member3Name",
      roleKey: "creditsPage.member3Role",
      imageUrl: "https://pbs.twimg.com/profile_images/1856212805537394688/UdaqYNUk_400x400.jpg", // Unique image URL
      fallback: "M2", // Fallback initials
      aiHint: "man portrait", // AI hint for image generation
      socials: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    }
  ];


  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">{t('creditsPage.title')}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t('creditsPage.description')}</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <UsersIcon className="w-7 h-7 text-primary mr-3" />
          {t('creditsPage.teamTitle')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map(item => (
            <Card key={item.nameKey} className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <Avatar className="w-20 h-20 mb-4 border-2 border-primary">
                  <AvatarImage src={item.imageUrl} alt={t(item.nameKey)} data-ai-hint={item.aiHint} />
                  <AvatarFallback>{item.fallback}</AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-medium">{t(item.nameKey)}</h3>
                <p className="text-sm text-muted-foreground mb-4">{t(item.roleKey)}</p>
                <div className="flex space-x-3">
                  {item.socials.linkedin && (
                    <Link href={item.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <LinkedinIcon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                    </Link>
                  )}
                  {item.socials.twitter && (
                    <Link href={item.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter / X">
                       {/* Using a simple SVG for X as lucide might not have it */}
                       <svg className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                       </svg>
                    </Link>
                  )}
                  {item.socials.github && (
                    <Link href={item.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <GithubIcon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                    </Link>
                  )}
                </div>
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
