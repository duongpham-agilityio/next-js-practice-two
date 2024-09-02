import { useDisclosure } from '@nextui-org/react';
import { useCallback, useState } from 'react';

// Models
import { BlogType } from '@/models';
// Actions
import { deleteBlogAction } from '@/actions';
// Hooks
import { useToast } from '@/hooks';
// Constants
import { SUCCESS_MESSAGE, ToastStatus } from '@/constants';

export const useDeleteBlog = () => {
  const toast = useToast();
  const [isBlogDeleting, setIsBlogDeleting] = useState(false);
  const {
    isOpen: isOpenConfirmModal,
    onClose: handleCloseConfirmModal,
    onOpen: handleOpenConfirmModal,
  } = useDisclosure();

  const handleDeleteBlog = useCallback(async (blogId: BlogType['id']) => {
    try {
      setIsBlogDeleting(true);
      await deleteBlogAction(blogId);
      setIsBlogDeleting(false);
      toast({
        message: SUCCESS_MESSAGE.DELETE_BLOG,
        title: 'Delete blog',
      });
      handleCloseConfirmModal();
    } catch (error) {
      if (error instanceof Error) {
        toast({
          message: error.message,
          title: 'Delete blog',
          status: ToastStatus.ERROR,
        });
      }
    }
  }, []);

  return {
    isBlogDeleting,
    isOpenConfirmModal,
    handleOpenConfirmModal,
    handleCloseConfirmModal,
    handleDeleteBlog,
  };
};
