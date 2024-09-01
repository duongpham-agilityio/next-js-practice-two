'use client';

// Models
import { BlogType } from '@/models';
// Components
import { BlogForm } from '@/components';
// Hooks
import { useEditBlog } from '@/hooks';
// Constants
import { FORM_TITLE } from '@/constants';

interface EditBlogFormProps {
  blog: BlogType;
  onClose: () => void;
}

const EditBlogForm = ({ blog, onClose }: EditBlogFormProps) => {
  const { isSubmitting, editBlogControl, handleSubmitEditBlogForm } =
    useEditBlog({ blog, onSuccess: onClose });

  return (
    <BlogForm
      control={editBlogControl}
      isSubmitting={isSubmitting}
      title={FORM_TITLE.EDIT_BLOG}
      onCloseForm={onClose}
      onSubmit={handleSubmitEditBlogForm}
    />
  );
};

export default EditBlogForm;
