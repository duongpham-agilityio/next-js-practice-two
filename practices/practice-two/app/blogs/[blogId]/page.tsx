import { Suspense } from 'react';

// Components
import {
  BlogDetailInfo,
  BlogDetailInfoSkeleton,
  RelatedBlogs,
  RelatedBlogsSkeleton,
} from '@/components';

interface BlogDetailPageProps {
  params: { blogId: string };
}

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
