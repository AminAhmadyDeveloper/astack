'use client';

import { ZodProvider } from '@autoform/zod';
import { toast } from 'sonner';
import { z } from 'zod';

import { useMutation } from '@tanstack/react-query';
import React from 'react';

import { AutoForm, fieldConfig } from '@/components/ui/autoform';
import { Button } from '@/components/ui/button';
import { authClient } from '@/lib/auth-client';

const signUpSchema = z.object({
  email: z.string().min(1),
  name: z.string().min(1),
  password: z
    .string()
    .min(1)
    .superRefine(
      fieldConfig({
        inputProps: {
          type: 'password',
        },
      }),
    ),
});

type SignUpSchema = z.infer<typeof signUpSchema>;

export const SignUpForm = () => {
  const signUpMutation = useMutation({
    mutationKey: ['SIGN_UP'],
    mutationFn: async (values: SignUpSchema) => {
      const { data, error } = await authClient.signUp.email(values);
      if (error) throw error;
      return data;
    },
    onError: ({ message }) => {
      toast.error(message);
    },
    onSuccess: () => {
      toast.success('signed up successfully');
    },
  });

  return (
    <div>
      <AutoForm
        schema={new ZodProvider(signUpSchema)}
        onSubmit={(values) => signUpMutation.mutate(values)}
      >
        <Button
          className="w-full"
          variant="secondary"
          size="lg"
          isLoading={signUpMutation.isPending}
          type="submit"
        >
          Sign Up
        </Button>
      </AutoForm>
    </div>
  );
};
