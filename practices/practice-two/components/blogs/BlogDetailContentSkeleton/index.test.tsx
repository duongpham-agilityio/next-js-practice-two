// __tests__/BlogDetailContentSkeleton.test.tsx
import { render, screen } from '@testing-library/react';

// Components
import { BlogDetailContentSkeleton } from '@/components';
// Mocks
import { BLOG } from '@/mocks';

describe('BlogDetailContentSkeleton Component', () => {
  test('renders the correct number of skeletons', () => {
    render(<BlogDetailContentSkeleton />);

    expect(screen.getAllByTestId('skeleton-item')).toHaveLength(
      6 * BLOG.body.length,
    );
  });
});
