import { render, screen } from '@testing-library/react';

// Components
import { OpenBlogButton } from '@/components';

describe('OpenBlogButton Component', () => {
  test('renders with correct href and internal link icon', () => {
    const href = 'https://example.com';

    render(<OpenBlogButton href={href} />);

    const link = screen.getByRole('link') as HTMLAnchorElement;

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', href);
    expect(link).toHaveAttribute('target', '_self');
  });

  test('renders with correct href and external link icon', () => {
    const href = 'https://example.com';

    render(<OpenBlogButton href={href} isExternal={true} />);

    const link = screen.getByRole('link') as HTMLAnchorElement;

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', href);
    expect(link).toHaveAttribute('target', '_blank');
  });
});
