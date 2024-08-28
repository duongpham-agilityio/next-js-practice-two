import { render, screen, fireEvent } from '@testing-library/react';

// Components
import { TopicList } from '@/components';

// Mock the Button component
jest.mock('@/components', () => ({
  ...jest.requireActual('@/components'),
  Button: ({ variant, onClick, children }: any) => (
    <button data-variant={variant} onClick={onClick}>
      {children}
    </button>
  ),
}));

describe('TopicList Component', () => {
  const mockTopics = [
    { id: '1', label: 'Topic 1' },
    { id: '2', label: 'Topic 2' },
  ];

  it('renders correctly with provided topics', () => {
    render(<TopicList selected="1" topics={mockTopics} />);

    // Check if all topics are rendered as buttons
    mockTopics.forEach(({ id, label }) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it('applies correct variant based on selected topic', () => {
    render(<TopicList selected="1" topics={mockTopics} />);

    // Verify that the selected topic button has the 'primary' variant
    expect(screen.getByText('Topic 1')).toHaveAttribute(
      'data-variant',
      'primary',
    );

    // Verify that the non-selected topic button has the 'outline' variant
    expect(screen.getByText('Topic 2')).toHaveAttribute(
      'data-variant',
      'outline',
    );
  });

  it('calls onChangeTopic with correct topicId when a button is clicked', () => {
    const onChangeTopic = jest.fn();

    render(
      <TopicList
        selected="1"
        topics={mockTopics}
        onChangeTopic={onChangeTopic}
      />,
    );

    // Simulate a click on the second topic
    fireEvent.click(screen.getByText('Topic 2'));

    // Verify that onChangeTopic is called with the correct topicId
    expect(onChangeTopic).toHaveBeenCalledWith('2');
  });

  it('does not call onChangeTopic if not provided', () => {
    const onChangeTopic = jest.fn();

    render(<TopicList selected="1" topics={mockTopics} />);

    // Simulate a click on the first topic
    fireEvent.click(screen.getByText('Topic 1'));

    // Verify that onChangeTopic is not called
    expect(onChangeTopic).not.toHaveBeenCalled();
  });
});
