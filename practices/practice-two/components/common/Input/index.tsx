import clsx from 'clsx';
import { memo, InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isInvalid?: boolean;
}

const Input = ({ className = '', isInvalid = false, ...props }: InputProps) => (
  <input
    className={clsx(
      'w-full',
      [
        'border',
        'border-px',
        isInvalid ? 'border-red-500' : 'border-border-100',
        'rounded-xl',
      ],
      ['text-text-primary'],
      ['p-3'],
      className,
    )}
    {...props}
  />
);

export default memo(Input);
