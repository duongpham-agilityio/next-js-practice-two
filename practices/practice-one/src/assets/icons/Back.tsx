import { SVGProps, memo } from 'react';

const BackIconComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={25}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M10.5 24.833v-7c14 0 17.5-7.175 17.5-17.5-1.82 6.93-7 10.5-14 10.5h-3.5v-7L0 14.893l10.5 9.94Z"
    />
  </svg>
);
export const BackIcon = memo(BackIconComponent);
