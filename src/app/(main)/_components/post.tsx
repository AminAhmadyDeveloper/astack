'use client';

import { ZodProvider } from '@autoform/zod';
import { toast } from 'sonner';
import { z } from 'zod';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRef } from 'react';
import type { UseFormReturn } from 'react-hook-form';

import { AutoForm } from '@/components/ui/autoform';
import { Button } from '@/components/ui/button';
import { FirstTruthy } from '@/components/utils/first-truthy';
import { client } from '@/lib/jstack-client';

const postSchema = z.object({
  name: z.string().min(1),
});

type PostSchema = z.infer<typeof postSchema>;

export const RecentPost = () => {
  const queryClient = useQueryClient();
  const form = useRef<UseFormReturn<PostSchema> | null>(null);

  const { data: recentPost, isPending: isLoadingPosts } = useQuery({
    queryKey: ['get-recent-post'],
    queryFn: async () => {
      const res = await client.post.recent.$get();
      return await res.json();
    },
  });

  const { mutate: createPost, isPending } = useMutation({
    mutationFn: async ({ name }: { name: string }) => {
      const res = await client.post.create.$post({ name });
      return await res.json();
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['get-recent-post'] });
      form.current?.reset();
    },
    onError: ({ message }) => {
      toast.error(message);
    },
  });

  return (
    <div className="w-full max-w-sm space-y-2 rounded-md bg-black/15 px-8 py-6 text-zinc-100/75 backdrop-blur-lg">
      <FirstTruthy states={[isLoadingPosts, !!recentPost]}>
        <p className="text-base/6 text-[#ececf399]">Loading posts...</p>
        <p className="text-base/6 text-[#ececf399]">
          Your recent post: &quot;{recentPost?.name}&quot;
        </p>
        <p className="text-base/6 text-[#ececf399]">You have no posts yet.</p>
      </FirstTruthy>
      <AutoForm
        schema={new ZodProvider(postSchema)}
        onSubmit={(values) => createPost(values)}
        onFormInit={(formPrimitive) => (form.current = formPrimitive)}
      >
        <Button
          className="w-full"
          variant="secondary"
          size="lg"
          isLoading={isPending}
          type="submit"
        >
          Sign In
        </Button>
      </AutoForm>
    </div>
  );
};
