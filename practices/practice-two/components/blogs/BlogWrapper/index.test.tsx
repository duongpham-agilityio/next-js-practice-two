import { render, screen } from '@testing-library/react';

// Services
import { getBlogs, getTopics } from '@/services';
// Components
import { BlogWrapper } from '@/components';
import { BlogListSectionProps } from '@/components/blogs/BlogListSection';
// Mocks
import { BLOGS } from '@/mocks';

// Mock the services
jest.mock('@/services', () => ({
  getBlogs: jest.fn(),
  getTopics: jest.fn(),
}));

jest.mock('@/components', () => ({
  ...jest.requireActual('@/components'),
  BlogsListSection: ({ blogs, topics }: BlogListSectionProps) => (
    <div>
      <div data-testid="blogs">{blogs.length} blogs</div>
      <div data-testid="topics">{topics.length} topics</div>
    </div>
  ),
}));

describe('BlogWrapper Component', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear mocks before each test
  });

  it('should fetch blogs and topics and render BlogsListSection', async () => {
    const mockTopics = [
      { id: 1, name: 'Topic 1' },
      { id: 2, name: 'Topic 2' },
    ];

    (getBlogs as jest.Mock).mockResolvedValueOnce(Promise.resolve(BLOGS));
    (getTopics as jest.Mock).mockResolvedValueOnce(mockTopics);

    render(await BlogWrapper());

    // Check if the BlogsListSection received the correct data
    expect(screen.getByTestId('blogs')).toHaveTextContent('6 blogs');
    expect(screen.getByTestId('topics')).toHaveTextContent('2 topics');

    // Ensure the services were called
    expect(getBlogs).toHaveBeenCalled();
    expect(getTopics).toHaveBeenCalled();
  });

  it('should handle empty blogs and topics', async () => {
    (getBlogs as jest.Mock).mockResolvedValueOnce(Promise.resolve([]));
    (getTopics as jest.Mock).mockResolvedValueOnce(Promise.resolve([]));

    render(await BlogWrapper());

    expect(screen.getByTestId('blogs')).toHaveTextContent('0 blogs');
    expect(screen.getByTestId('topics')).toHaveTextContent('0 topics');
  });
});
