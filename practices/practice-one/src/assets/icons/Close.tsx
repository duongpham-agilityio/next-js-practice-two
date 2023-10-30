import { SVGProps } from 'react';

export const CloseIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={19}
    fill="none"
    {...props}
  >
    <path
      fill="#E33535"
      d="M9.484 0A9.476 9.476 0 0 0 0 9.484C0 14.73 4.24 19 9.484 19 14.73 19 19 14.729 19 9.484 19 4.24 14.729 0 9.484 0Zm-8.07 9.484a8.069 8.069 0 0 1 8.07-8.07 8.03 8.03 0 0 1 4.46 1.35L3.894 15.326a8.058 8.058 0 0 1-2.48-5.842Zm8.07 8.103a7.913 7.913 0 0 1-4.49-1.382L15.042 3.643c1.539 1.476 2.512 3.549 2.512 5.841.032 4.46-3.611 8.103-8.07 8.103Z"
    />
  </svg>
);
