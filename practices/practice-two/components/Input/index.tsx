import clsx from 'clsx';
import { memo, InputHTMLAttributes } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = ({ className = '', ...props }: InputProps) => (
  <input
    className={clsx(
      ['border', 'border-px', 'border-border-100'],
      ['text-text-primary'],
      ['p-5'],
      className,
    )}
    {...props}
  />
);

export default memo(Input);
