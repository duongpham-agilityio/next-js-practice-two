import { SVGProps, memo } from 'react';

const PencilIconComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="#fff" d="m18 0-3 3 6 6 3-3-6-6Zm-6 6L0 18v6h6l12-12-6-6Z" />
  </svg>
);
export const PencilIcon = memo(PencilIconComponent);
