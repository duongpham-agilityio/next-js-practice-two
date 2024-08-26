// Components
import { Container, HighlightBlog } from '@/components';
import BlogListSection from '@/components/blogs/BlogListSection';
// Constants
import { ROUTE } from '@/constants';
// Helpers
import { convertDateInBlog } from '@/helpers';
// Mocks
import { BLOG } from '@/mocks';
// Services
import { getBlogs, getTopics } from '@/services';

const HomePage = async () => {
  const [blogs, topics] = await Promise.all([getBlogs(), getTopics()]);
  const {
    id = '',
    author = '',
    createdAt = Date.now(),
    imageURL = '',
    title = '',
    externalLink = '',
  } = blogs[blogs.length - 1];

  return (
    <Container className="flex flex-col gap-8 py-10">
      <HighlightBlog
        author={author}
        createdAt={convertDateInBlog(createdAt)}
        description={BLOG.body[0].content}
        externalLink={externalLink}
        href={`${ROUTE.BLOGS}/${id}`}
        imageURL={imageURL}
        title={title}
      />
      <BlogListSection blogs={blogs} topics={topics} />
    </Container>
  );
};

export default HomePage;
