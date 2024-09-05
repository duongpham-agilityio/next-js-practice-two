import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// Components
import {
  BlogDetailInfoSkeleton,
  Box,
  RelatedBlogsSkeleton,
} from '@/components';
// Services
import { fetchBlogIds, getBlog } from '@/services';
// Mocks
import { BLOG } from '@/mocks';

const RelatedBlogs = dynamic(() => import('@/components/blogs/RelatedBlogs'), {
  loading: () => <RelatedBlogsSkeleton />,
});
const BlogDetailInfo = dynamic(
  () => import('@/components/blogs/BlogDetailInfo'),
  {
    loading: () => <BlogDetailInfoSkeleton />,
  },
);

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
  <>
    <BlogDetailInfo blogId={blogId} />
    <Box className="mt-10">
      <RelatedBlogs />
    </Box>
  </>
);

export default BlogDetailPage;
