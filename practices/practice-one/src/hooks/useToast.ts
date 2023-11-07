import { TOAST } from '@constants/time';
import { useToast as useToastChakra, UseToastOptions } from '@chakra-ui/react';
import { useCallback } from 'react';

export type TUseToast = {
  showToast: (options?: UseToastOptions) => void;
};

export const useToast = (defaultOptions?: UseToastOptions): TUseToast => {
  const toast = useToastChakra();

  /**
   * Handle show toast
   * @param options is the options for useToast of CharkaUI
   * @returns
   */
  const showToast: TUseToast['showToast'] = useCallback(
    (options) =>
      toast({
        ...options,
        duration: TOAST,
        position: 'top-right',
        ...defaultOptions,
      }),
    [],
  );

  return {
    showToast,
  };
};
