import React from 'react';

import type { NextPage } from 'next';

import { SignUpForm } from '@/app/(authentication)/sign-up/_components/sign-up-form';

const SignUpPage: NextPage = () => {
  return (
    <div>
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
