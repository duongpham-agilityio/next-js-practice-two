import Link from 'next/link';

const NotFoundPage = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="mt-4 text-xl text-gray-600">Page Not Found</p>
      <Link
        replace
        className="mt-8 inline-block px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        href="/"
      >
        Go to Homepage
      </Link>
    </div>
  </div>
);

export default NotFoundPage;
