"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/context/language-context";
import { useFeedback } from "@/hooks/use-feedback";
import { useToast } from "@/hooks/use-toast";

export function FeedbackForm() {
  const { t } = useLanguage();
  const { addSubmission } = useFeedback();
  const { toast } = useToast();

  const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    message: z.string().min(10, { message: "Suggestion must be at least 10 characters." }).max(500, { message: "Suggestion cannot exceed 500 characters." }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      addSubmission(values);
      toast({
        title: t('suggestionsPage.successMessage'),
        description: `Thank you, ${values.name}!`,
        variant: "default",
      });
      form.reset();
    } catch (error) {
      toast({
        title: t('suggestionsPage.errorMessage'),
        description: (error as Error).message,
        variant: "destructive",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('suggestionsPage.nameLabel')}</FormLabel>
              <FormControl>
                <Input placeholder={t('suggestionsPage.namePlaceholder')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('suggestionsPage.emailLabel')}</FormLabel>
              <FormControl>
                <Input type="email" placeholder={t('suggestionsPage.emailPlaceholder')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('suggestionsPage.suggestionLabel')}</FormLabel>
              <FormControl>
                <Textarea placeholder={t('suggestionsPage.suggestionPlaceholder')} {...field} className="min-h-[150px]" />
              </FormControl>
              <FormDescription>
                Max 500 characters.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="lg">{t('suggestionsPage.submitButton')}</Button>
      </form>
    </Form>
  );
}
