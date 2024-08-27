import { render, screen } from '@testing-library/react';

// Components
import { BlogDetailHeader } from '@/components';

describe('BlogDetailHeader Component', () => {
  const defaultProps = {
    author: 'John Doe',
    createdAt: 'August 26, 2024',
    title: 'Sample Blog Title',
    imageURL: '/images/sample-image.jpg',
  };

  it('renders the image with correct alt text and blur data URL', () => {
    render(<BlogDetailHeader {...defaultProps} />);

    const imageElement = screen.getByAltText('This is the Sample Blog Title');

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute(
      'src',
      '/_next/image?url=%2Fimages%2Fsample-image.jpg&w=3840&q=75',
    );
  });

  it('renders the blog title correctly', () => {
    render(<BlogDetailHeader {...defaultProps} />);

    const titleElement = screen.getByText('Sample Blog Title');

    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveClass(
      'text-text-primary text-xl md:text-3xl xl:text-4xl',
    );
  });

  it('renders the author and created date correctly', () => {
    render(<BlogDetailHeader {...defaultProps} />);

    const authorElement = screen.getByText('John Doe');

    expect(authorElement).toBeInTheDocument();

    const dateElement = screen.getAllByText('August 26, 2024');

    expect(dateElement[0]).toBeInTheDocument();

    // Check for mobile view (hidden by default on desktop)
    expect(dateElement[0]).toHaveClass('text-xs md:hidden');

    // Check for desktop view
    expect(dateElement[1]).toHaveClass('text-xs hidden md:block');
  });

  it('renders the share icon and text correctly', () => {
    render(<BlogDetailHeader {...defaultProps} />);

    const shareText = screen.getByText(/Share/i);

    expect(shareText).toBeInTheDocument();
    expect(shareText).toHaveClass(
      'inline-flex items-center gap-1 text-red-medium',
    );

    const shareIcon = screen.getByRole('img'); // Assuming the FaShareAlt icon is an <svg> element

    expect(shareIcon).toBeInTheDocument();
  });
});
