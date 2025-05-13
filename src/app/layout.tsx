import type { Metadata } from 'next';
import { Inter, Roboto_Mono } from 'next/font/google'; // Changed from GeistSans/GeistMono
import './globals.css';
import { Providers } from '@/components/providers';
import { MainLayout } from '@/components/layout/main-layout';
import { APP_NAME } from '@/lib/constants';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter', // Updated CSS variable name
});

const roboto_mono = Roboto_Mono({ 
  subsets: ['latin'],
  variable: '--font-roboto-mono', // Updated CSS variable name
});

export const metadata: Metadata = {
  title: {
    default: APP_NAME,
    template: `%s | ${APP_NAME}`,
  },
  description: 'Learn Data Architecture with interactive modules and exercises.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${roboto_mono.variable} antialiased font-sans`}>
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
