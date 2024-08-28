// __tests__/RelatedBlogs.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';

// Components
import { RelatedBlogs } from '@/components';
// Services
import { getBlogs } from '@/services';
// Constants
import { ROUTE } from '@/constants';

const mockBlogs = [
  {
    id: '1',
    author: 'John Doe',
    imageURL: 'https://example.com/image1.jpg',
    title: 'Blog Title 1',
  },
  {
    id: '2',
    author: 'Jane Doe',
    imageURL: 'https://example.com/image2.jpg',
    title: 'Blog Title 2',
  },
  {
    id: '3',
    author: 'Alice Smith',
    imageURL: 'https://example.com/image3.jpg',
    title: 'Blog Title 3',
  },
  {
    id: '4',
    author: 'Bob Johnson',
    imageURL: 'https://example.com/image4.jpg',
    title: 'Blog Title 4',
  },
];

describe('RelatedBlogs Component', () => {
  beforeEach(() => {
    fetchMock.enableMocks();
    fetchMock.mockResolvedValue({
      json: () => Promise.resolve(mockBlogs),
    } as Response);
  });

  test('renders a list of blog cards', async () => {
    render(await RelatedBlogs());

    mockBlogs.slice(0, 4).forEach(({ author, title }) => {
      expect(screen.getByText(title)).toBeInTheDocument();
      expect(screen.getByText(author)).toBeInTheDocument();
    });
  });

  test('renders the "See all post" button', async () => {
    render(await RelatedBlogs());

    expect(screen.getByText('See all post')).toBeInTheDocument();
  });
});
