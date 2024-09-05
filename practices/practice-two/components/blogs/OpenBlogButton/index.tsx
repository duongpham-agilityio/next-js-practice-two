import { FaExternalLinkAlt } from 'react-icons/fa';
import { GrFormNext } from 'react-icons/gr';
import Link from 'next/link';

// Models
import { BlogType } from '@/models';

export interface OpenBlogButtonProps extends Pick<BlogType, 'title'> {
  href: string;
  isExternal?: boolean;
}

export const OpenBlogButton = ({
  title,
  href,
  isExternal = false,
}: OpenBlogButtonProps) => (
  <Link
    aria-label={`Read more the ${title}`}
    className="text-text-200 inline-flex items-center gap-2"
    href={href}
    target={isExternal ? '_blank' : '_self'}
  >
    Read more {isExternal ? <FaExternalLinkAlt /> : <GrFormNext />}
  </Link>
);
