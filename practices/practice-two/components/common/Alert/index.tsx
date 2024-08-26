'use client';

import React, { useEffect, useState } from 'react';

// Components
import { Button } from '@/components';

const alertTypes = {
  success: 'bg-green-100 text-green-800',
  error: 'bg-red-100 text-red-800',
  warning: 'bg-yellow-100 text-yellow-800',
};

interface AlertProps {
  isOpen?: boolean;
  type?: keyof typeof alertTypes;
  message?: string;
  onClose?: () => void;
}

const Alert = ({
  isOpen = false,
  type = 'success',
  message,
  onClose,
}: AlertProps) => {
  const [isOpened, setIsOpened] = useState(isOpen);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsOpened(false);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return isOpened ? (
    <section className="fixed w-fit h-fit right-5 top-5 z-50">
      <div
        className={`p-4 mb-4 text-sm rounded-lg ${alertTypes[type]}`}
        role="alert"
      >
        <div className="flex items-center">
          <span className="flex-1">{message}</span>
          {onClose && (
            <Button
              className="ml-4 p-1.5 text-xl font-bold leading-none text-gray-500 hover:text-gray-900"
              type="button"
              onClick={onClose}
            >
              &times;
            </Button>
          )}
        </div>
      </div>
    </section>
  ) : null;
};

export default Alert;
