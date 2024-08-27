import { render, screen } from '@testing-library/react';

// Components
import { BlogCardSkeleton } from '@/components';

jest.mock('@nextui-org/react', () => ({
  ...jest.requireActual('@nextui-org/react'),
  Card: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  Skeleton: ({ className, children }: any) => (
    <div className={className}>{children}</div>
  ),
}));

describe('BlogCardSkeleton Component', () => {
  it('renders correctly', () => {
    render(<BlogCardSkeleton />);

    const cardElement = screen.getByRole('presentation');

    expect(cardElement).toBeInTheDocument();

    expect(screen.getAllByText('')).toHaveLength(6);
  });

  it('renders the correct number of Skeleton components with correct classes', () => {
    render(<BlogCardSkeleton />);

    // Check the number of Skeleton components
    const skeletonElements = screen.getAllByText('');

    expect(skeletonElements).toHaveLength(6);

    // Verify classes for each Skeleton component
    expect(skeletonElements[0]).toHaveClass('h-80 bg-default-300');
    expect(skeletonElements[1]).toHaveClass('w-3/12 h-3 rounded-lg');
    expect(skeletonElements[2]).toHaveClass('w-full h-3 rounded-lg');
    expect(skeletonElements[3]).toHaveClass('w-full h-3 rounded-lg');
    expect(skeletonElements[4]).toHaveClass('w-full h-3 rounded-lg');
    expect(skeletonElements[5]).toHaveClass('w-2/5 h-3 rounded-lg');
  });

  it('applies correct structure and classes to the Card component', () => {
    const { container } = render(<BlogCardSkeleton />);

    // Check if the Card component has the expected classes
    const cardElement = container.querySelector('div');

    expect(cardElement).toHaveClass('w-full min-h-[600px]');
    expect(cardElement).toHaveClass('space-y-5');
    expect(cardElement).toHaveClass('flex');
    expect(cardElement).toHaveClass('flex-col');
    expect(cardElement).toHaveClass('rounded-none');
  });
});
