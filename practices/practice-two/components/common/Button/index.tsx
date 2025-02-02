'use client';

import { extendVariants, Button as NextUIButton } from '@nextui-org/react';
import clsx from 'clsx';
import { memo } from 'react';

const Button = extendVariants(NextUIButton, {
  variants: {
    variant: {
      primary: clsx(
        ['min-w-[unset]'],
        ['bg-red-dark', 'hover:bg-red-primary'],
        ['rounded-md'],
        ['text-white'],
      ),
      outline: clsx(
        ['min-w-[unset]'],
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

export default memo(Button);
