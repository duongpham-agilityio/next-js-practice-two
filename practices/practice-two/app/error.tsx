'use client';

// Components
import { Box, Button, Text } from '@/components';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <Box className="flex items-center justify-center min-h-screen bg-gray-100">
      <Box className="text-center">
        <Text className="text-5xl font-bold !text-red-600">Oops!</Text>
        <Text className="mt-4 text-xl text-gray-700">
          Something went wrong.
        </Text>
        <Text className="mt-2 text-lg text-gray-500">
          We are working to fix this issue. Please try again later.
        </Text>
        <Button className="mt-5" onClick={reset}>
          Reload page
        </Button>
      </Box>
    </Box>
  );
}
