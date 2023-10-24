import Link from "next/link";
import { memo } from "react";

const NavComponent = () => {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/news">News</Link>
      </li>
      <li>
        <Link href="/posts">Posts</Link>
      </li>
    </ul>
  );
};

export const Navigation = memo(NavComponent);
