import clsx from 'clsx';

// Constants
import { BLOGS_PER_PAGE_LIMIT } from '@/constants';
// Components
import { BlogCardSkeleton } from '@/components';
// Helpers
import { isLargeBlogCard } from '@/helpers';

export const BlogListTemplateSkeleton = () => (
  <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
    {Array.from({ length: BLOGS_PER_PAGE_LIMIT }).map((_, index) => (
      <li
        key={index}
        className={clsx(
          isLargeBlogCard(index) ? 'col-span-1 md:col-span-2' : 'col-span-1',
        )}
      >
        <BlogCardSkeleton />
      </li>
    ))}
  </ul>
);
