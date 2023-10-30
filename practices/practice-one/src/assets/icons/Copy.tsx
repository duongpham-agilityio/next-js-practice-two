import { SVGProps } from 'react';

export const CopyIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#C9CED6"
      d="M13.125 12.125H7.5a1.851 1.851 0 0 1-1.875-1.875v-7.5A1.87 1.87 0 0 1 7.5.875h4.102c.351 0 .732.176.996.44l1.962 1.962c.264.264.44.645.44.996v5.977a1.87 1.87 0 0 1-1.875 1.875Zm-11.25-7.5h2.813v1.406H1.874a.482.482 0 0 0-.469.469V14c0 .264.205.469.469.469H7.5A.482.482 0 0 0 7.969 14v-.938h1.406V14A1.87 1.87 0 0 1 7.5 15.875H1.875A1.851 1.851 0 0 1 0 14V6.5a1.87 1.87 0 0 1 1.875-1.875Z"
    />
  </svg>
);
