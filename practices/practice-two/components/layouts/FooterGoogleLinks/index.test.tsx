// FooterGoogleLinks.test.tsx

import { render, screen } from '@testing-library/react';

// Components
import { FooterGoogleLinks } from '@/components';
// Constants
import { FOOTER_GOOGLE_LINKS } from '@/constants/data';

describe('FooterGoogleLinks Component', () => {
  it('renders correctly with all links', () => {
    render(<FooterGoogleLinks />);

    // Check if the section is rendered
    const section = screen.getByRole('list'); // Using list role for section containing multiple links

    expect(section).toBeInTheDocument();

    // Verify each link is rendered with correct href and label
    FOOTER_GOOGLE_LINKS.forEach(({ href, label }) => {
      const link = screen.getByText(label);

      expect(link).toBeInTheDocument();
      expect(link.closest('a')).toHaveAttribute('href', href);
    });
  });
});
