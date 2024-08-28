import { Metadata } from 'next';
import { Suspense } from 'react';

// Components
import {
  BlogDetailInfo,
  BlogDetailInfoSkeleton,
  RelatedBlogs,
  RelatedBlogsSkeleton,
} from '@/components';
import { getBlog } from '@/services';

interface BlogDetailPageProps {
  params: { blogId: string };
}

export const generateMetadata = async ({
  params: { blogId },
}: BlogDetailPageProps): Promise<Metadata> => {
  const { title, body, imageURL } = await getBlog(blogId);

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

const BlogDetailPage = ({ params: { blogId } }: BlogDetailPageProps) => {
  return (
    <>
      <Suspense fallback={<BlogDetailInfoSkeleton />}>
        <BlogDetailInfo blogId={blogId} />
      </Suspense>
      <div className="mt-10">
        <Suspense fallback={<RelatedBlogsSkeleton />}>
          <RelatedBlogs />
        </Suspense>
      </div>
    </>
  );
};

export default BlogDetailPage;
