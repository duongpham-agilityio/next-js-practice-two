import { FaExternalLinkAlt } from 'react-icons/fa';
import { GrFormNext } from 'react-icons/gr';
import Link from 'next/link';

export interface OpenBlogButtonProps {
  href: string;
  isExternal?: boolean;
}

export const OpenBlogButton = ({
  href,
  isExternal = false,
}: OpenBlogButtonProps) => (
  <Link
    className="text-red-primary inline-flex items-center gap-2"
    href={href}
    target={isExternal ? '_blank' : '_self'}
  >
    Read more {isExternal ? <FaExternalLinkAlt /> : <GrFormNext />}
  </Link>
);
