// __tests__/BlogCard.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';

// Components
import { BlogCard } from '@/components';
// Models
import { BlogType } from '@/models';

// Mock constants
jest.mock('@/constants', () => ({
  BLUR_DATA_URL: {
    DYNAMIC_IMAGE: 'data:image/svg+xml;base64,...',
  },
}));

describe('BlogCard Component', () => {
  const mockBlog: BlogType = {
    id: '1',
    author: 'John Doe',
    imageURL: 'https://example.com/image.jpg',
    title: 'Sample Blog',
    externalLink: 'https://example.com',
    topicId: '',
    body: [],
    createdAt: 0,
    updatedAt: 0,
  };

  test('renders BlogCard with correct content', () => {
    render(<BlogCard {...mockBlog} />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Sample Blog')).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: /Card background/i }),
    ).toHaveAttribute(
      'src',
      '/_next/image?url=https%3A%2F%2Fexample.com%2Fimage.jpg&w=3840&q=75',
    );

    // Check for the OpenBlogButton
    expect(screen.getByRole('link', { name: /Read more/i })).toHaveAttribute(
      'href',
      mockBlog.externalLink,
    );
  });

  test('calls onDelete and onEdit when respective buttons are clicked', () => {
    const onDelete = jest.fn();
    const onEdit = jest.fn();

    render(<BlogCard {...mockBlog} onDelete={onDelete} onEdit={onEdit} />);

    const buttons = screen.getAllByRole('button');

    // Click delete button
    fireEvent.click(buttons[0]);
    expect(onDelete).toHaveBeenCalledWith(mockBlog.id);

    // Click edit button
    fireEvent.click(buttons[1]);
    expect(onEdit).toHaveBeenCalledWith(mockBlog.id);
  });

  test('applies large class when large prop is true', () => {
    render(<BlogCard {...mockBlog} large={true} />);

    expect(
      screen.getByRole('img', { name: /Card background/i }).closest('div'),
    ).toHaveClass('h-80');
  });

  test('applies default class when large prop is false', () => {
    render(<BlogCard {...mockBlog} large={false} />);

    expect(
      screen.getByRole('img', { name: /Card background/i }).closest('div'),
    ).toHaveClass('h-80 lg:h-52');
  });
});
