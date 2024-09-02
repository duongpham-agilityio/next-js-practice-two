'use client';

import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from 'react';
import clsx from 'clsx';

// Constants
import { TIME, ToastStatus } from '@/constants';
import { Box, Text } from '@/components';

const toastStatus = {
  success: 'bg-green-500',
  error: 'bg-red-500',
};

interface ToastPayload {
  status?: keyof typeof toastStatus;
  title?: string;
  message?: string;
  duration?: number;
}

interface ToastContextType {
  showToast: (payload?: ToastPayload) => void;
}

interface ToastProviderProps {
  children: ReactNode;
  config?: ToastPayload;
}

export const ToastContext = createContext<ToastContextType | null>(null);

const ToastProvider = ({ children, config = {} }: ToastProviderProps) => {
  const [toastState, setToastState] = useState<Required<ToastPayload>>({
    message: '',
    title: '',
    status: ToastStatus.SUCCESS,
    duration: TIME.TOAST_DURATION,
    ...config,
  });
  const [toastShowing, setToastShowing] = useState(false);

  const handleShowToast = useCallback(
    (payload?: ToastPayload) => {
      if (payload) {
        setToastState((prev) => ({ ...prev, ...payload }));
      }

      setToastShowing(true);
      setTimeout(() => {
        setToastShowing(false);
      }, toastState.duration);
    },
    [toastState.duration],
  );

  const toastProviderValue = useMemo(
    (): ToastContextType => ({ showToast: handleShowToast }),
    [handleShowToast],
  );

  return (
    <ToastContext.Provider value={toastProviderValue}>
      {children}
      {toastShowing && (
        <Box
          className={clsx(
            'fixed min-w-20 h-fit z-[1000] top-5 right-5 px-5 py-3 rounded-lg',
            toastStatus[toastState.status],
          )}
        >
          <Text className="text-xl font-bold">{toastState.title}</Text>
          <Text>{toastState.message}</Text>
        </Box>
      )}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
