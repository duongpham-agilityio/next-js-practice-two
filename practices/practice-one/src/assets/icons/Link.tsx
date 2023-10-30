import { SVGProps, memo } from 'react';

const LinkIconComponent = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={14}
    fill="none"
    {...props}
  >
    <path
      fill="#C9CED6"
      d="m17.44 6.875-3.663 3.662c-1.464 1.465-3.838 1.465-5.273 0C7.098 9.131 7.01 6.904 8.299 5.44l.176-.175a.437.437 0 0 1 .644-.059.47.47 0 0 1 .059.674l-.147.176c-.967 1.113-.908 2.783.117 3.808a2.794 2.794 0 0 0 3.985 0l3.633-3.633a2.794 2.794 0 0 0 0-3.984 2.812 2.812 0 0 0-3.955 0l-.674.674c-.176.176-.469.176-.674 0-.176-.205-.176-.498 0-.674l.674-.674a3.749 3.749 0 0 1 5.302 0 3.749 3.749 0 0 1 0 5.303Zm-15.909 0 3.662-3.633c1.465-1.465 3.809-1.465 5.303 0a3.75 3.75 0 0 1 .176 5.098l-.176.176c-.146.205-.44.234-.644.058a.47.47 0 0 1-.059-.674l.176-.175c.937-1.114.879-2.784-.147-3.809a2.794 2.794 0 0 0-3.984 0L2.205 7.549a2.794 2.794 0 0 0 0 3.984 2.812 2.812 0 0 0 3.955 0l.674-.674c.176-.175.469-.175.674 0a.496.496 0 0 1 0 .674l-.674.645a3.749 3.749 0 0 1-5.303 0 3.749 3.749 0 0 1 0-5.303Z"
    />
  </svg>
);

const UnlinkIconComponent = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#B0901E"
      d="M.857.492 18.7 14.555c.176.146.235.468.059.644a.438.438 0 0 1-.645.088L.301 1.225C.096 1.078.037.755.213.58.359.375.682.316.857.492ZM17.44 7.875l-2.168 2.197-.732-.586 2.227-2.256a2.794 2.794 0 0 0 0-3.984 2.812 2.812 0 0 0-3.955 0l-.674.674c-.176.176-.469.176-.674 0-.176-.205-.176-.498 0-.674l.674-.674a3.749 3.749 0 0 1 5.302 0 3.749 3.749 0 0 1 0 5.303Zm-5.185 4.6c-1.29.38-2.725.088-3.75-.938a3.661 3.661 0 0 1-1.084-2.9l.967.761c.088.557.351 1.055.761 1.465.586.586 1.377.88 2.14.82l.966.792ZM9.822 4.916v-.03a2.98 2.98 0 0 0-2.138-.82l-.967-.761c1.289-.381 2.754-.088 3.75.937a3.79 3.79 0 0 1 1.113 2.9l-.996-.761a2.637 2.637 0 0 0-.762-1.465ZM4.461 6.293 2.205 8.549a2.794 2.794 0 0 0 0 3.984 2.812 2.812 0 0 0 3.955 0l.674-.674c.176-.175.469-.175.674 0a.496.496 0 0 1 0 .674l-.674.645a3.749 3.749 0 0 1-5.303 0 3.749 3.749 0 0 1 0-5.303L3.7 5.707l.762.586Z"
    />
  </svg>
);

export const LinkIcon = memo(LinkIconComponent);
export const UnlinkIcon = memo(UnlinkIconComponent);
