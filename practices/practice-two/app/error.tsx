'use client';

import { Button } from '@/components';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-red-600">Oops!</h1>
        <p className="mt-4 text-xl text-gray-700">Something went wrong.</p>
        <p className="mt-2 text-lg text-gray-500">
          We are working to fix this issue. Please try again later.
        </p>
        <Button className="mt-5" onClick={reset}>
          Reload page
        </Button>
      </div>
    </div>
  );
}
