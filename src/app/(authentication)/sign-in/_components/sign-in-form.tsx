'use client';

import { ZodProvider } from '@autoform/zod';
import { toast } from 'sonner';
import { z } from 'zod';

import { useMutation } from '@tanstack/react-query';
import React from 'react';

import { AutoForm, fieldConfig } from '@/components/ui/autoform';
import { Button } from '@/components/ui/button';
import { client } from '@/lib/jstack-client';

const signInSchema = z.object({
  email: z.string().min(1),
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

type SignInSchema = z.infer<typeof signInSchema>;

export const SignInForm = () => {
  const signInMutation = useMutation({
    mutationKey: ['SIGN_IN'],
    mutationFn: async (values: SignInSchema) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const data = await client.auth['sign-in'].email.$post(values as any);
      console.log(data);

      // if (error) throw error;
      return data;
    },
    onError: ({ message }) => {
      toast.error(message);
    },
    onSuccess: () => {
      toast.success('signed in successfully');
    },
  });

  return (
    <div>
      <AutoForm
        schema={new ZodProvider(signInSchema)}
        onSubmit={(values) => signInMutation.mutate(values)}
      >
        <Button
          className="w-full"
          variant="secondary"
          size="lg"
          isLoading={signInMutation.isPending}
          type="submit"
        >
          Sign In
        </Button>
      </AutoForm>
    </div>
  );
};
