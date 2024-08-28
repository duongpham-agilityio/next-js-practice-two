import { render, screen } from '@testing-library/react';

// Components
import { FooterSocialList } from '@/components';
// Constants
import { FOOTER_SOCIALS } from '@/constants/data';

describe('FooterSocialList Component', () => {
  it('renders correctly with all social links', () => {
    render(<FooterSocialList />);

    const section = screen.getByRole('list');

    expect(section).toBeInTheDocument();

    FOOTER_SOCIALS.forEach(({ id, href, icon }, index) => {
      const link = screen.getAllByRole('link')[index];

      expect(link).toBeInTheDocument();
      expect(link.closest('a')).toHaveAttribute('href', href);
    });
  });
});
