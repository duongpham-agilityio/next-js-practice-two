'use client';

import { Spinner } from '@nextui-org/react';

export const LoadingIndicator = () => (
  <div className="fixed z-[100] w-full h-full opacity-50 flex justify-center items-center">
    <Spinner size="lg" color="danger" />
  </div>
);
