// Services
import { getBlog } from '@/services';
// Models
import { BlogType } from '@/models';
// Components
import { BlogDetailHeader, BlogDetailContent } from '@/components';
// Helpers
import { convertDateInBlog } from '@/helpers';

export interface BlogDetailInfoProps {
  blogId: BlogType['id'];
}

export const BlogDetailInfo = async ({ blogId }: BlogDetailInfoProps) => {
  const { author, title, imageURL, body, createdAt } = await getBlog(blogId);

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
