// Hooks
import { useToast, useBlogForm, UseBlogFormOptions } from '@/hooks';
// Constants
import { FORM_TITLE, SUCCESS_MESSAGE, ToastStatus } from '@/constants';
// Actions
import { editBlog } from '@/actions';
// Models
import { BlogType } from '@/models';

interface UseEditBlogOptions
  extends Pick<UseBlogFormOptions, 'onSuccess' | 'onError'> {
  blog: BlogType;
}

export const useEditBlog = ({
  blog,
  onSuccess,
  onError,
}: UseEditBlogOptions) => {
  const toast = useToast();
  const {
    blogFormControl: editBlogControl,
    isSubmitting,
    handleSubmit: handleSubmitEditBlogForm,
  } = useBlogForm({
    value: blog,
    action: editBlog,
    onSuccess: () => {
      toast({
        title: FORM_TITLE.EDIT_BLOG,
        message: SUCCESS_MESSAGE.UPDATE_BLOG,
      });
      onSuccess && onSuccess();
    },
    onError: ({ message, ...rest }) => {
      toast({
        status: ToastStatus.ERROR,
        title: FORM_TITLE.EDIT_BLOG,
        message,
      });
      onError && onError({ message, ...rest });
    },
  });

  return {
    isSubmitting,
    editBlogControl,
    handleSubmitEditBlogForm,
  };
};
