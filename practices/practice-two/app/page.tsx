import lazy from 'next/dynamic';

// Components
import {
  BlogListTemplateSkeleton,
  Container,
  HighlightBlogSkeleton,
  TopicListSkeleton,
} from '@/components';

export const dynamic = 'force-dynamic';

const HighlightBlog = lazy(() => import('@/components/blogs/HighlightBlog'), {
  loading: () => <HighlightBlogSkeleton />,
});
const BlogWrapper = lazy(() => import('@/components/blogs/BlogWrapper'), {
  loading: () => (
    <>
      <TopicListSkeleton />
      <BlogListTemplateSkeleton />
    </>
  ),
});

const HomePage = () => (
  <Container className="flex flex-col gap-8 py-10">
    <HighlightBlog />
    <BlogWrapper />
  </Container>
);

export default HomePage;
