import { useContext } from 'react';

// Providers
import { ToastContext } from '@/providers';
// Constants
import { ERROR_MESSAGE } from '@/constants';

export const useToast = () => {
  const toastValue = useContext(ToastContext);

  if (!toastValue) throw new Error(ERROR_MESSAGE.NOT_FOUND_CONTEXT);

  return toastValue.showToast;
};
