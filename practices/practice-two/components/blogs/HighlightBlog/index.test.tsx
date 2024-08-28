import { render, screen } from '@testing-library/react';

// Components
import { HighlightBlog, HighlightBlogProps } from '@/components';
// Constants
import { BLUR_DATA_URL } from '@/constants';

const mockProps: HighlightBlogProps = {
  author: 'John Doe',
  createdAt: 'August 28, 2024',
  description: 'This is a test description for the blog.',
  title: 'Test Blog Title',
  imageURL: 'https://example.com/test-image.jpg',
  externalLink: 'https://example.com',
};

describe('HighlightBlog Component', () => {
  test('renders the blog title', () => {
    render(<HighlightBlog {...mockProps} />);
    expect(screen.getByText('Test Blog Title')).toBeInTheDocument();
  });

  test('renders the author and creation date', () => {
    render(<HighlightBlog {...mockProps} />);
    expect(screen.getByText('August 28, 2024 • John Doe')).toBeInTheDocument();
  });

  test('renders the description', () => {
    render(<HighlightBlog {...mockProps} />);
    expect(
      screen.getByText('This is a test description for the blog.'),
    ).toBeInTheDocument();
  });

  test('renders an image with correct properties', () => {
    render(<HighlightBlog {...mockProps} />);
    const image = screen.getByAltText('John Doe') as HTMLImageElement;

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      'src',
      '/_next/image?url=https%3A%2F%2Fexample.com%2Ftest-image.jpg&w=3840&q=75',
    );
  });

  test('renders OpenBlogButton with correct href', () => {
    render(<HighlightBlog {...mockProps} />);
    const button = screen.getByRole('link') as HTMLAnchorElement;

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('href', mockProps.externalLink);
  });

  test('renders OpenBlogButton as external link if externalLink is provided', () => {
    render(<HighlightBlog {...mockProps} />);
    const button = screen.getByRole('link') as HTMLAnchorElement;

    expect(button).toHaveAttribute('href', mockProps.externalLink);
    expect(button).toHaveAttribute('target', '_blank'); // Assuming OpenBlogButton handles the external link with target="_blank"
  });

  test('renders OpenBlogButton with correct href when externalLink is not provided', () => {
    const propsWithoutExternalLink = { ...mockProps, externalLink: '' };

    render(<HighlightBlog {...propsWithoutExternalLink} />);
    const button = screen.getByRole('link') as HTMLAnchorElement;

    expect(button).toHaveAttribute('href', propsWithoutExternalLink.href);
  });
});
