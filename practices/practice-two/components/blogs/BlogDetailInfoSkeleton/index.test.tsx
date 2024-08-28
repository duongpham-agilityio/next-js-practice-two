/* eslint-disable jsx-a11y/aria-role */
import { render, screen } from '@testing-library/react';

// Components
import { BlogDetailInfoSkeleton } from '@/components';

jest.mock('@/components', () => ({
  ...jest.requireActual('@/components'),
  BlogDetailHeaderSkeleton: () => <div role="header-skeleton" />,
  BlogDetailContentSkeleton: () => <div role="content-skeleton" />,
}));

describe('BlogDetailInfoSkeleton Component', () => {
  test('renders BlogDetailHeaderSkeleton and BlogDetailContentSkeleton', () => {
    render(<BlogDetailInfoSkeleton />);

    // Check if BlogDetailHeaderSkeleton is rendered
    expect(screen.getByRole('header-skeleton')).toBeInTheDocument();

    // Check if BlogDetailContentSkeleton is rendered
    expect(screen.getByRole('content-skeleton')).toBeInTheDocument();
  });
});
