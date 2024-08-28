import { Suspense } from 'react';

// Components
import {
  BlogListTemplateSkeleton,
  BlogWrapper,
  Container,
  HighlightBlog,
  HighlightBlogSkeleton,
  TopicListSkeleton,
} from '@/components';

const HomePage = () => (
  <Container className="flex flex-col gap-8 py-10">
    <Suspense fallback={<HighlightBlogSkeleton />}>
      <HighlightBlog />
    </Suspense>
    <Suspense
      fallback={
        <>
          <TopicListSkeleton />
          <BlogListTemplateSkeleton />
        </>
      }
    >
      <BlogWrapper />
    </Suspense>
  </Container>
);

export default HomePage;
