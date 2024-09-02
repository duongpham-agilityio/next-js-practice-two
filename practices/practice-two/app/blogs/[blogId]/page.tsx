import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Suspense } from 'react';

// Components
import {
  BlogDetailInfo,
  BlogDetailInfoSkeleton,
  Box,
  RelatedBlogs,
  RelatedBlogsSkeleton,
} from '@/components';
// Services
import { fetchBlogIds, getBlog } from '@/services';
// Layout
import { MainLayout } from '@/layouts';
// Mocks
import { BLOG } from '@/mocks';

interface BlogDetailPageProps {
  params: { blogId: string };
}

export const generateMetadata = async ({
  params: { blogId },
}: BlogDetailPageProps): Promise<Metadata> => {
  const { id, title, body, imageURL } = await getBlog(blogId);

  if (id === BLOG.id) return notFound();

  return {
    title,
    openGraph: {
      title,
      description: body[0]?.content ?? 'No body',
      images: [
        {
          url: imageURL,
          width: 800,
          height: 600,
        },
      ],
    },
  };
};

export async function generateStaticParams() {
  const blogIds = await fetchBlogIds();

  return blogIds.slice(0, 5).map((blogId) => ({
    blogId,
  }));
}

const BlogDetailPage = async ({ params: { blogId } }: BlogDetailPageProps) => (
  <MainLayout>
    <Suspense fallback={<BlogDetailInfoSkeleton />}>
      <BlogDetailInfo blogId={blogId} />
    </Suspense>
    <Box className="mt-10">
      <Suspense fallback={<RelatedBlogsSkeleton />}>
        <RelatedBlogs />
      </Suspense>
    </Box>
  </MainLayout>
);

export default BlogDetailPage;
