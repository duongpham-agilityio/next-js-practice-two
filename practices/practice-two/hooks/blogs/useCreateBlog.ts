import { useDisclosure } from '@nextui-org/react';

// Hooks
import { useToast, useBlogForm } from '@/hooks';
// Constants
import { DEFAULT_VALUE_BLOG_FORM } from '@/constants/data';
import { FORM_TITLE, SUCCESS_MESSAGE, ToastStatus } from '@/constants';
// Actions
import { addBlogAction } from '@/actions';

export const useCreateBlog = () => {
  const toast = useToast();
  const {
    isOpen: isOpenCreateForm,
    onClose: handleCloseCreateForm,
    onOpen: handleOpenCreateForm,
  } = useDisclosure();
  const {
    isSubmitting,
    blogFormControl: createBlogControl,
    handleSubmit: handleSubmitCreateBlogForm,
  } = useBlogForm({
    value: DEFAULT_VALUE_BLOG_FORM,
    action: addBlogAction,
    onSuccess: () => {
      toast({
        title: FORM_TITLE.ADD_BLOG,
        message: SUCCESS_MESSAGE.ADD_BLOG,
      });
      handleCloseCreateForm();
    },
    onError: ({ message }) =>
      toast({
        message,
        title: FORM_TITLE.ADD_BLOG,
        status: ToastStatus.ERROR,
      }),
  });

  return {
    isSubmitting,
    isOpenCreateForm,
    createBlogControl,
    handleCloseCreateForm,
    handleOpenCreateForm,
    handleSubmitCreateBlogForm,
  };
};
