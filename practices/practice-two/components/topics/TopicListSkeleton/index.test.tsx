import { render, screen } from '@testing-library/react';

// Components
import { TopicListSkeleton } from '@/components';

jest.mock('@/components', () => ({
  ...jest.requireActual('@/components'),
  Button: ({ variant, children, ...props }: any) => (
    <button data-variant={variant} {...props}>
      {children}
    </button>
  ),
}));

jest.mock('@/mocks', () => ({
  TOPICS: [
    { id: '1', label: 'Topic 1' },
    { id: '2', label: 'Topic 2' },
    { id: '3', label: 'Topic 3' },
  ],
}));

describe('TopicListSkeleton Component', () => {
  it('renders correctly with mocked topics', () => {
    render(<TopicListSkeleton />);

    // Check if all topics are rendered as Skeletons containing Buttons
    const topics = screen.getAllByRole('button');

    expect(topics).toHaveLength(3);

    topics.forEach((button) => {
      expect(button).toHaveAttribute('data-variant', 'outline');
    });
  });
});
