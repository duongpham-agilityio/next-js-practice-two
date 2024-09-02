import Link from 'next/link';

// Components
import { Box, Text } from '@/components';

const NotFoundPage = () => (
  <Box className="flex items-center justify-center min-h-screen bg-gray-100">
    <Box className="text-center">
      <Text as="h1" className="text-6xl font-bold text-gray-800">
        404
      </Text>
      <Text className="mt-4 text-xl text-gray-600">Page Not Found</Text>
      <Link
        replace
        className="mt-8 inline-block px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        href="/"
      >
        Go to Homepage
      </Link>
    </Box>
  </Box>
);

export default NotFoundPage;
