import { render, screen } from '@testing-library/react';

// Components
import { RelatedBlogsSkeleton } from '@/components';

describe('RelatedBlogsSkeleton Component', () => {
  test('renders the correct number of BlogCardSkeleton components', () => {
    render(<RelatedBlogsSkeleton />);

    const skeletons = screen.getAllByRole('listitem');

    expect(skeletons).toHaveLength(4);
  });

  test('has the correct container layout and class names', () => {
    render(<RelatedBlogsSkeleton />);

    // Check container class names
    const container = screen.getByRole('list');

    expect(container).toHaveClass('flex');
    expect(container).toHaveClass('gap-5');
    expect(container).toHaveClass('mt-5');
    expect(container).toHaveClass('overflow-x-scroll');
    expect(container).toHaveClass('xl:overflow-x-visible');
  });
});
