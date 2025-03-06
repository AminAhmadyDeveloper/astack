import type { AutoFormFieldProps } from '@autoform/react';
import React from 'react';

import { Input } from '@/components/ui/input';

export const StringField: React.FC<AutoFormFieldProps> = ({
  inputProps,
  error,
  id,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { key, ...props } = inputProps;

  return (
    <Input id={id} className={error ? 'border-destructive' : ''} {...props} />
  );
};
