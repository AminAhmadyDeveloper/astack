import React from 'react';

import type { NextPage } from 'next';

import { SignInForm } from '@/app/(authentication)/sign-in/_components/sign-in-form';

const SignInPage: NextPage = () => {
  return (
    <div>
      <SignInForm />
    </div>
  );
};

export default SignInPage;
