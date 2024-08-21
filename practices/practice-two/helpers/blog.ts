// Constants
import { BLOGS_PER_PAGE_LIMIT } from '@/constants';

export const convertDateInBlog = (dateAsNumber: number): string => {
  const date = new Date(dateAsNumber);

  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

export const isLargeBlogCard = (index: number): boolean =>
  index % (BLOGS_PER_PAGE_LIMIT - 1) === 0;
