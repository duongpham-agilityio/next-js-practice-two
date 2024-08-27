import { render, screen } from '@testing-library/react';

// Components
import { BlogListTemplate } from '@/components';
// Helpers
import { isLargeBlogCard } from '@/helpers';
// Constants
import { ROUTE } from '@/constants';
// Mocks
import { BLOGS } from '@/mocks';

// Mock BlogCard component
jest.mock('@/components', () => ({
  ...jest.requireActual('@/components'),
  BlogCard: jest.fn(({ title, imageURL, href }) => (
    <div>
      <img alt={title} src={imageURL} />
      <a href={href}>{title}</a>
    </div>
  )),
}));

// Mock isLargeBlogCard helper
jest.mock('@/helpers', () => ({
  isLargeBlogCard: jest.fn(),
}));

describe('BlogListTemplate Component', () => {
  beforeEach(() => {
    (isLargeBlogCard as jest.Mock).mockImplementation(
      (index) => index % 2 === 0,
    ); // Example logic
  });

  it('renders BlogCard components correctly', () => {
    render(<BlogListTemplate blogs={BLOGS} />);

    // Check if BlogCard components are rendered
    BLOGS.forEach((blog, index) => {
      expect(screen.getAllByAltText(blog.title)[index]).toBeInTheDocument();
      expect(screen.getAllByText(blog.title)[index]).toBeInTheDocument();
    });
  });

  it('applies correct classes based on isLargeBlogCard', () => {
    render(<BlogListTemplate blogs={BLOGS} />);

    // Check if the correct CSS classes are applied
    const listItems = screen.getAllByRole('listitem');

    expect(listItems[0]).toHaveClass('col-span-1 md:col-span-2');
    expect(listItems[1]).toHaveClass('col-span-1');
    expect(listItems[2]).toHaveClass('col-span-1 md:col-span-2');
  });
});
