import { render, screen } from '@testing-library/react';

// COmponents
import { BlogDetailHeaderSkeleton } from '@/components';

describe('BlogDetailHeaderSkeleton Component', () => {
  test('renders the correct number and size of skeletons', () => {
    render(<BlogDetailHeaderSkeleton />);

    const skeletons = screen.getAllByTestId('skeleton-item');

    expect(skeletons).toHaveLength(7);

    const [largeSkeleton, mediumSkeleton, ...smallSkeletons] = skeletons;

    expect(largeSkeleton).toHaveClass('w-full h-48 md:h-96 xl:h-[402px]');
    expect(mediumSkeleton).toHaveClass('w-[70%] h-3');

    expect(smallSkeletons[0]).toHaveClass('w-11 h-3 md:hidden');
    expect(smallSkeletons[1]).toHaveClass('h-3 w-16');
    expect(smallSkeletons[2]).toHaveClass('h-3 w-12');
    expect(smallSkeletons[3]).toHaveClass('w-11 h-3 hidden md:block');
    expect(smallSkeletons[4]).toHaveClass('h-3 w-16');
  });
});
