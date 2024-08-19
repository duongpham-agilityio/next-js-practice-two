'use client';

import { extendVariants, Button as NextUIButton } from '@nextui-org/react';
import clsx from 'clsx';

const Button = extendVariants(NextUIButton, {
  variants: {
    variant: {
      primary: clsx(
        ['bg-background-300', 'hover:bg-background-200'],
        ['rounded-md'],
      ),
      outline: clsx(
        ['bg-transparent', 'hover:bg-background-100'],
        ['text-text-primary', 'hover:text-text-300'],
        [
          'rounded-md',
          'border',
          'border-solid',
          'border-border-100',
          'hover:border-border-200',
        ],
      ),
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export default Button;
