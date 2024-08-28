import { render, screen } from '@testing-library/react';

// Components
import { BlogListTemplateSkeleton } from '@/components';
// Constants
import { BLOGS_PER_PAGE_LIMIT } from '@/constants';
// Helpers
import { isLargeBlogCard } from '@/helpers';

jest.mock('@/helpers', () => ({
  isLargeBlogCard: jest.fn(),
}));

describe('BlogListTemplateSkeleton Component', () => {
  beforeEach(() => {
    //
    (isLargeBlogCard as jest.Mock).mockReset();
  });

  test('renders the correct number of blog card skeletons', () => {
    render(<BlogListTemplateSkeleton />);

    const skeletons = screen.getAllByRole('listitem');

    expect(skeletons).toHaveLength(BLOGS_PER_PAGE_LIMIT);
  });

  test('renders blog card skeletons with correct layout', () => {
    (isLargeBlogCard as jest.Mock)
      .mockImplementationOnce(() => true)
      .mockImplementationOnce(() => false)
      .mockImplementation(() => false);

    render(<BlogListTemplateSkeleton />);

    const items = screen.getAllByRole('listitem');

    expect(items[0]).toHaveClass('col-span-1 md:col-span-2');

    expect(items[1]).toHaveClass('col-span-1');

    items.slice(2).forEach((item) => {
      expect(item).toHaveClass('col-span-1');
    });
  });
});
