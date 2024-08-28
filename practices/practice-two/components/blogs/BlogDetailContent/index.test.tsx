import { render, screen } from '@testing-library/react';

// Components
import { BlogDetailContent, BlogDetailContentProps } from '@/components';

// Sample mock data for testing
const mockBody: BlogDetailContentProps['body'] = [
  { id: '1', content: 'Content for first section', subtitle: 'First Section' },
  {
    id: '2',
    content: 'Content for second section',
    subtitle: 'Second Section',
  },
];

describe('BlogDetailContent Component', () => {
  it('renders correctly with provided body', () => {
    render(<BlogDetailContent body={mockBody} />);

    // Check if the subtitles and contents are rendered
    mockBody.forEach(({ subtitle, content }) => {
      expect(screen.getByText(subtitle)).toBeInTheDocument();
      expect(screen.getByText(content)).toBeInTheDocument();
    });
  });

  it('renders the correct number of sections', () => {
    render(<BlogDetailContent body={mockBody} />);

    // Verify that the correct number of sections are rendered
    const sections = screen.getAllByRole('heading', { level: 2 });

    expect(sections).toHaveLength(mockBody.length);
  });

  it('renders the Container component with correct classes', () => {
    const { container } = render(<BlogDetailContent body={mockBody} />);

    // Verify if the Container component has the expected classes
    const containerElement = container.querySelector('div');

    expect(containerElement).toHaveClass('text-text-primary');
    expect(containerElement).toHaveClass('flex');
    expect(containerElement).toHaveClass('flex-col');
    expect(containerElement).toHaveClass('gap-10');
    expect(containerElement).toHaveClass('xl:w-[720px]');
  });
});
