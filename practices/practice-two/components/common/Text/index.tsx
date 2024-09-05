import clsx from 'clsx';
import { createElement, HTMLAttributes } from 'react';

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  as?: string;
}

export const Text = ({ as = 'p', children, ...props }: TextProps) => {
  const className = clsx(['text-text-primary'], props.className);

  return createElement(as, { ...props, className }, children);
};
