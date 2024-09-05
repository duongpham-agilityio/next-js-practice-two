import { notFound } from 'next/navigation';

// Services
import { getBlog } from '@/services';
// Models
import { BlogType } from '@/models';
// Helpers
import { convertDateInBlog } from '@/helpers';
// Mocks
import { BLOG } from '@/mocks';
// Components
import { BlogDetailHeader, BlogDetailContent } from '@/components';

export interface BlogDetailInfoProps {
  blogId: BlogType['id'];
}

const BlogDetailInfo = async ({ blogId }: BlogDetailInfoProps) => {
  const { id, author, title, imageURL, body, createdAt } =
    await getBlog(blogId);

  if (id === BLOG.id) return notFound();

  return (
    <>
      <BlogDetailHeader
        author={author}
        createdAt={convertDateInBlog(createdAt)}
        imageURL={imageURL}
        title={title}
      />
      <BlogDetailContent body={body} />
    </>
  );
};

export default BlogDetailInfo;
