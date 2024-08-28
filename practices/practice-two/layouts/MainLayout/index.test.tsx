import { render, screen } from '@testing-library/react';

// Layouts
import { MainLayout } from '@/layouts';

// Mock components
jest.mock('@/components', () => ({
  Header: jest.fn(() => <div>Header Component</div>),
  Footer: jest.fn(() => <div>Footer Component</div>),
}));

describe('MainLayout', () => {
  test('renders Header, Footer, and children correctly', () => {
    render(
      <MainLayout>
        <div>Child Content</div>
      </MainLayout>,
    );

    // Check if Header component is rendered
    expect(screen.getByText('Header Component')).toBeInTheDocument();

    // Check if Divider component is rendered
    expect(screen.getByRole('separator')).toBeInTheDocument();

    // Check if Footer component is rendered
    expect(screen.getByText('Footer Component')).toBeInTheDocument();

    // Check if children content is rendered
    expect(screen.getByText('Child Content')).toBeInTheDocument();
  });

  test('renders Divider between Header and main content', () => {
    const { container } = render(
      <MainLayout>
        <div>Child Content</div>
      </MainLayout>,
    );

    const divider = container.querySelector('hr'); // Assuming Divider renders as <hr>
    expect(divider).toBeInTheDocument();
  });
});
