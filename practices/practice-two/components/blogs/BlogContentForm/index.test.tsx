// __tests__/BlogContentForm.test.tsx
import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from '@testing-library/react';

// Components
import { BlogContentForm } from '@/components';
// Models
import { BlogBodyType } from '@/models';

jest.mock('@/helpers', () => ({
  findItemInListByAnyField: jest.fn(),
}));

describe('BlogContentForm Component', () => {
  const initialContent: BlogBodyType[] = [
    { id: '1', subtitle: 'Subtitle 1', content: 'Content 1' },
    { id: '2', subtitle: 'Subtitle 2', content: 'Content 2' },
  ];

  const mockOnChangeContent = jest.fn();

  test('renders sections and handles changes correctly', async () => {
    render(
      <BlogContentForm
        content={initialContent}
        isInvalid={false}
        onChangeContent={mockOnChangeContent}
      />,
    );

    // Verify initial rendering of sections
    initialContent.forEach(({ subtitle, content }) => {
      expect(screen.getByDisplayValue(subtitle)).toBeInTheDocument();
      expect(screen.getByDisplayValue(content)).toBeInTheDocument();
    });

    // Simulate change in subtitle
    act(() => {
      fireEvent.change(screen.getAllByPlaceholderText('Subtitle')[0], {
        target: { value: 'Updated Subtitle 1' },
      });
    });

    expect(mockOnChangeContent).toHaveBeenCalledWith(initialContent);

    // Simulate change in content
    act(() => {
      fireEvent.change(screen.getAllByPlaceholderText('Content')[0], {
        target: { value: 'Updated Content 1' },
      });
    });
    expect(mockOnChangeContent).toHaveBeenCalledWith(initialContent);
  });

  test('handles adding a new section', async () => {
    render(
      <BlogContentForm
        content={initialContent}
        isInvalid={false}
        onChangeContent={mockOnChangeContent}
      />,
    );

    const buttons = screen.getAllByRole('button');

    // Simulate clicking the add section button
    act(() => {
      fireEvent.click(buttons[buttons.length - 1]);
    });

    // Verify new section is added
    expect(screen.getAllByPlaceholderText('Subtitle').length).toBe(
      initialContent.length + 1,
    );
  });

  test('handles removing a section', async () => {
    render(
      <BlogContentForm
        content={initialContent}
        isInvalid={false}
        onChangeContent={mockOnChangeContent}
      />,
    );

    const buttons = screen.getAllByRole('button');

    // Simulate clicking the remove section button
    fireEvent.click(buttons[buttons.length - 2]);

    // Verify section is removed
    expect(screen.getAllByPlaceholderText('Subtitle').length).toBe(
      initialContent.length - 1,
    );
  });
});
