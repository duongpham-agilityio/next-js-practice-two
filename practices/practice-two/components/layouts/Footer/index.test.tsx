import { render, screen } from '@testing-library/react';

// Components
import { Footer } from '@/components/layouts';

jest.mock('@/components/layouts', () => ({
  ...jest.requireActual('@/components/layouts'),
  Container: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  FooterGoogleLinks: () => <div>FooterGoogleLinks Component</div>,
  FooterSocialList: () => <div>FooterSocialList Component</div>,
}));

describe('Footer Component', () => {
  it('renders correctly with all sections and child components', () => {
    render(<Footer />);

    // Check if the footer element is rendered
    const footer = screen.getByRole('contentinfo');

    expect(footer).toBeInTheDocument();

    // Check the first section
    const firstSection = screen.getByText(
      /Updates delivered straight to your inbox/i,
    );

    expect(firstSection).toBeInTheDocument();

    const firstParagraph = screen.getByText(
      /Sign up to receive newsletters from Gradient Ventures/i,
    );

    expect(firstParagraph).toBeInTheDocument();

    // Check that FooterSocialList is rendered
    expect(screen.getByText('FooterSocialList Component')).toBeInTheDocument();

    // Check that Divider is rendered
    expect(screen.getByRole('separator')).toBeInTheDocument(); // Using separator role for Divider

    // Check that FooterGoogleLinks is rendered
    expect(screen.getByText('FooterGoogleLinks Component')).toBeInTheDocument();
  });
});
