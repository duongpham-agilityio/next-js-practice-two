import { memo } from 'react';
import clsx from 'clsx';

// Models
import { BlogsType } from '@/models';
// Components
import { BlogCard } from '@/components';
// Helpers
import { isLargeBlogCard } from '@/helpers';
// Constants
import { ROUTE } from '@/constants';

export interface BlogListTemplateProps {
  blogs: BlogsType;
}

const BlogListTemplate = ({ blogs }: BlogListTemplateProps) => (
  <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
    {blogs.map(({ id, author, imageURL, title, externalLink }, index) => (
      <li
        key={id}
        className={clsx(isLargeBlogCard(index) ? 'col-span-2' : 'col-span-1')}
      >
        <BlogCard
          author={author}
          externalLink={externalLink}
          href={externalLink ?? `${ROUTE.BLOGS}/${id}`}
          imageURL={imageURL}
          large={isLargeBlogCard(index)}
          title={title}
        />
      </li>
    ))}
  </ul>
);

export default memo(BlogListTemplate);
