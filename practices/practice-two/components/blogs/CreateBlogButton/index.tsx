'use client';

import dynamic from 'next/dynamic';
import { FaPenFancy } from 'react-icons/fa6';

// Components
import { Button } from '@/components';
// Hooks
import { useCreateBlog } from '@/hooks';

const BlogForm = dynamic(() => import('@/components/blogs/BlogForm'), {
  ssr: false,
  loading: () => <></>,
});

const CreateBlogButton = () => {
  const {
    isSubmitting,
    isOpenCreateForm,
    createBlogControl,
    handleCloseCreateForm,
    handleOpenCreateForm,
    handleSubmitCreateBlogForm,
  } = useCreateBlog();

  return (
    <>
      <Button startContent={<FaPenFancy />} onClick={handleOpenCreateForm}>
        Add blog
      </Button>
      {isOpenCreateForm && (
        <BlogForm
          control={createBlogControl}
          isSubmitting={isSubmitting}
          onCloseForm={handleCloseCreateForm}
          onSubmit={handleSubmitCreateBlogForm}
        />
      )}
    </>
  );
};

export default CreateBlogButton;
