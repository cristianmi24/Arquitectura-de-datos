"use client";

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/language-context';
import { useFeedback } from '@/hooks/use-feedback';
import { ADMIN_PASSWORD, LOCAL_STORAGE_KEYS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { format } from 'date-fns';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { EyeOffIcon, EyeIcon } from 'lucide-react';

export default function AdminPage() {
  const { t, language } = useLanguage();
  const { submissions, clearSubmissions } = useFeedback();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  // Attempt to authenticate from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedAuth = localStorage.getItem('adminAuthenticated');
      if (storedAuth === 'true') {
        setIsAuthenticated(true);
      }
      document.title = `${t('nav.admin')} | ${t('appName')}`;
    }
  }, [t]);

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
      if (typeof window !== 'undefined') {
        localStorage.setItem('adminAuthenticated', 'true');
      }
    } else {
      setError(t('adminPage.loginError'));
      if (typeof window !== 'undefined') {
        localStorage.removeItem('adminAuthenticated');
      }
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
    if (typeof window !== 'undefined') {
      localStorage.removeItem('adminAuthenticated');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-12rem)]">
        <Card className="w-full max-w-md shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-primary">{t('adminPage.loginTitle')}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1">
              <label htmlFor="password" className="text-sm font-medium">{t('adminPage.passwordLabel')}</label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={t('adminPage.passwordPlaceholder')}
                  onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                  className="pr-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <Button onClick={handleLogin} className="w-full">{t('adminPage.loginButton')}</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl font-bold text-primary">{t('adminPage.title')}</h1>
        <Button onClick={handleLogout} variant="outline">Logout</Button>
      </div>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>{t('adminPage.suggestionsReceivedTitle')}</CardTitle>
          <CardDescription>
            {submissions.length > 0 
              ? `Total submissions: ${submissions.length}`
              : t('adminPage.noSuggestions')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {submissions.length > 0 ? (
            <ScrollArea className="h-[500px] pr-4">
              <div className="space-y-6">
                {submissions.map(submission => (
                  <Card key={submission.id} className="bg-card border shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-lg">{t('adminPage.submittedBy', { name: submission.name, email: submission.email })}</CardTitle>
                      <CardDescription>{t('adminPage.submittedOn', { date: format(new Date(submission.timestamp), 'PPP p', { locale: language === 'es' ? require('date-fns/locale/es') : require('date-fns/locale/en-US') }) })}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm whitespace-pre-wrap">{submission.message}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          ) : (
            <p className="text-muted-foreground text-center py-8">{t('adminPage.noSuggestions')}</p>
          )}
        </CardContent>
        {submissions.length > 0 && (
          <CardFooter>
            <Button onClick={clearSubmissions} variant="destructive" className="mt-4">
              Clear All Submissions
            </Button>
          </CardFooter>
        )}
      </Card>
    </div>
  );
}
