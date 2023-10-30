import { SVGProps, memo } from 'react';

const TriangleDownComponent = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={7}
    height={6}
    fill="none"
    {...props}
  >
    <path
      fill="#C9CED6"
      d="M3.91 5.273 6.513.838a.49.49 0 0 0 0-.483.457.457 0 0 0-.41-.24H.897a.462.462 0 0 0-.421.24.49.49 0 0 0 0 .483l2.603 4.435a.481.481 0 0 0 .832 0Z"
    />
  </svg>
);

const TriangleUpComponent = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={7}
    height={7}
    fill="none"
    {...props}
  >
    <path
      fill="#C9CED6"
      d="m3.91 1.227 2.603 4.435a.49.49 0 0 1 0 .483.457.457 0 0 1-.41.24H.897a.462.462 0 0 1-.421-.24.49.49 0 0 1 0-.482l2.603-4.436a.481.481 0 0 1 .832 0Z"
    />
  </svg>
);

export const TriangleDown = memo(TriangleDownComponent);
export const TriangleUp = memo(TriangleUpComponent);
