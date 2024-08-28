import { render, screen, fireEvent, waitFor } from '@testing-library/react';

// Components
import { BlogsListSection } from '@/components';
// Hooks
import { useLoadMore, useTopics } from '@/hooks';
// Mocks
import { BLOGS, TOPICS } from '@/mocks';

// Mock hooks
jest.mock('@/hooks', () => ({
  useLoadMore: jest.fn(),
  useTopics: jest.fn(),
}));

// Mock components
jest.mock('@/components', () => ({
  ...jest.requireActual('@/components'),
  BlogListTemplate: jest.fn(() => <div>BlogListTemplate</div>),
  Button: jest.fn(({ onClick }) => <button onClick={onClick}>Button</button>),
  TopicList: jest.fn(({ onChangeTopic }) => (
    <button onClick={() => onChangeTopic('new-topic-id')}>Change Topic</button>
  )),
}));

describe('BlogsListSection Component', () => {
  const mockDataPerPage = [BLOGS];

  beforeEach(() => {
    (useLoadMore as jest.Mock).mockReturnValue({
      dataPerPage: mockDataPerPage,
      hasNextPage: true,
      fetchNextPage: jest.fn(),
    });
    (useTopics as jest.Mock).mockReturnValue({
      topic: { id: '1' },
      handleChangeTopic: jest.fn(),
    });
  });

  it('renders TopicList and BlogListTemplate correctly', async () => {
    render(<BlogsListSection blogs={BLOGS} topics={TOPICS} />);

    // Check if TopicList is rendered
    expect(screen.getByText('Change Topic')).toBeInTheDocument();

    // Check if BlogListTemplate is rendered
    expect(screen.getByText('BlogListTemplate')).toBeInTheDocument();

    // Check if "Load more" button is present
    expect(screen.getByText('Button')).toBeInTheDocument();
  });

  it('handles topic change correctly', async () => {
    render(<BlogsListSection blogs={BLOGS} topics={TOPICS} />);

    // Simulate topic change
    fireEvent.click(screen.getByText('Change Topic'));

    // Verify the topic change handling
    await waitFor(() => {
      expect(useTopics(TOPICS).handleChangeTopic).toHaveBeenCalledWith(
        'new-topic-id',
      );
    });
  });

  it('loads more blogs when "Load more" button is clicked', async () => {
    const fetchNextPageMock = jest.fn();

    (useLoadMore as jest.Mock).mockReturnValue({
      dataPerPage: mockDataPerPage,
      hasNextPage: true,
      fetchNextPage: fetchNextPageMock,
    });

    render(<BlogsListSection blogs={BLOGS} topics={TOPICS} />);

    // Simulate click on "Load more" button
    fireEvent.click(screen.getByText('Button'));

    // Verify fetchNextPage was called
    await waitFor(() => {
      expect(fetchNextPageMock).toHaveBeenCalled();
    });
  });

  it('shows message when no blogs are available', () => {
    (useLoadMore as jest.Mock).mockReturnValue({
      dataPerPage: [],
      hasNextPage: false,
      fetchNextPage: jest.fn(),
    });

    render(<BlogsListSection blogs={[]} topics={TOPICS} />);

    // Check if the "Oops! No Blogs Available" message is shown
    expect(screen.getByText('Oops! No Blogs Available')).toBeInTheDocument();
  });
});
