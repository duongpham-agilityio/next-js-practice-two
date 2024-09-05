'use client';

import dynamic from 'next/dynamic';
import { memo, useCallback, useState } from 'react';
import isEqual from 'react-fast-compare';
import { useDisclosure } from '@nextui-org/react';
import clsx from 'clsx';

// Models
import { BlogsType, BlogType } from '@/models';
// Components
import { BlogCard, LoadingIndicator } from '@/components';
// Helpers
import { isLargeBlogCard } from '@/helpers';
// Constants
import { ROUTE } from '@/constants';
// Hooks
import { useDeleteBlog } from '@/hooks';

const EditBlogForm = dynamic(() => import('@/components/blogs/EditBlogForm'), {
  ssr: false,
});
const ConfirmModal = dynamic(() => import('@/components/common/ConfirmModal'), {
  ssr: false,
});

export interface BlogListTemplateProps {
  blogs: BlogsType;
}

const BlogListTemplate = ({ blogs }: BlogListTemplateProps) => {
  const [blog, setBlog] = useState<BlogType | null>(null);
  const {
    isOpen,
    onClose: closeEditForm,
    onOpen: openEditForm,
  } = useDisclosure();
  const {
    isOpenConfirmModal,
    isBlogDeleting,
    handleDeleteBlog,
    handleCloseConfirmModal,
    handleOpenConfirmModal,
  } = useDeleteBlog();

  const handleEditBlog = useCallback(
    (blogId: BlogType['id']) => {
      const blog = blogs.find(({ id }) => blogId === id);

      setBlog(blog ?? null);
      openEditForm();
    },
    [blogs, openEditForm],
  );

  const openConfirmModal = useCallback(
    (blogId: BlogType['id']) => {
      const blog = blogs.find(({ id }) => blogId === id);

      setBlog(blog ?? null);
      handleOpenConfirmModal();
    },
    [blogs, handleOpenConfirmModal],
  );

  const deleteBlog = useCallback(() => {
    blog && handleDeleteBlog(blog.id);
  }, [blog]);

  const handleCloseForm = useCallback(() => {
    setBlog(null), closeEditForm();
  }, [closeEditForm]);

  return (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {blogs.map(({ id, author, imageURL, title, externalLink }, index) => (
          <li
            key={id}
            className={clsx(
              isLargeBlogCard(index)
                ? 'col-span-1 md:col-span-2'
                : 'col-span-1',
            )}
          >
            <BlogCard
              author={author}
              externalLink={externalLink}
              href={externalLink ?? `${ROUTE.BLOGS}/${id}`}
              id={id}
              imageURL={imageURL}
              large={isLargeBlogCard(index)}
              title={title}
              onDelete={openConfirmModal}
              onEdit={handleEditBlog}
            />
          </li>
        ))}
      </ul>
      {isOpen && !!blog && (
        <EditBlogForm blog={blog} onClose={handleCloseForm} />
      )}
      {isOpenConfirmModal && (
        <ConfirmModal onAccept={deleteBlog} onClose={handleCloseConfirmModal} />
      )}
      {isBlogDeleting && <LoadingIndicator />}
    </>
  );
};

export default memo(BlogListTemplate, isEqual);
