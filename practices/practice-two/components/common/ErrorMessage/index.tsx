import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

// Components
import { Text } from '@/components';

export interface ErrorMessageProps
  extends HTMLAttributes<HTMLParagraphElement> {
  message?: string;
}

export const ErrorMessage = ({
  message = '',
  className = '',
  ...props
}: ErrorMessageProps) => (
  <Text className={clsx('!text-red-light !mt-2', className)} {...props}>
    {message}
  </Text>
);
