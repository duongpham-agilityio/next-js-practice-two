// Services
import { getBlogs, getTopics } from '@/services';
// Components
import { BlogsListSection } from '@/components/';

export const BlogWrapper = async () => {
  const [blogs, topics] = await Promise.all([getBlogs(), getTopics()]);

  return <BlogsListSection blogs={blogs} topics={topics} />;
};
