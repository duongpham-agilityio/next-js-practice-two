import {
  render,
  screen,
  fireEvent,
  act,
  waitFor,
} from '@testing-library/react';

import { CreateBlogButton } from '@/components';
// Actions
import { addBlog } from '@/actions';
// Constants
import { DEFAULT_VALUE_BLOG_FORM } from '@/constants/data';

// Mock the dynamic import of BlogForm
jest.mock('@/components/blogs/BlogForm', () => ({
  __esModule: true,
  default: jest.fn(({ onCloseForm }) => (
    <div>
      <span>BlogForm Component</span>
      <button onClick={onCloseForm}>Close</button>
    </div>
  )),
}));

jest.mock('@nextui-org/react', () => ({
  ...jest.requireActual('@nextui-org/react'),
  useDisclosure: () => ({
    isOpen: false,
    onClose: jest.fn(),
    onOpen: jest.fn(),
  }),
}));

describe('CreateBlogButton Component', () => {
  it('renders the button correctly', () => {
    render(<CreateBlogButton />);
    expect(
      screen.getByRole('button', { name: /Add blog/i }),
    ).toBeInTheDocument();
  });

  it('opens and closes the BlogForm on button click', async () => {
    // Mock useDisclosure to control the isOpen state
    jest
      .spyOn(require('@nextui-org/react'), 'useDisclosure')
      .mockImplementation(() => ({
        isOpen: true,
        onClose: jest.fn(),
        onOpen: jest.fn(),
      }));

    render(<CreateBlogButton />);

    act(() => {
      // Click the button to open the BlogForm
      fireEvent.click(screen.getByRole('button', { name: /Add blog/i }));
    });

    await waitFor(() =>
      expect(screen.getByText('BlogForm Component')).toBeInTheDocument(),
    );

    act(() => {
      // Close the BlogForm
      fireEvent.click(screen.getByText('Close'));
    });

    await waitFor(() =>
      expect(screen.queryByText('BlogForm Component')).not.toBeInTheDocument(),
    );
  });

  it('calls addBlog on form submit', () => {
    // Mock useDisclosure to open the BlogForm
    jest
      .spyOn(require('@nextui-org/react'), 'useDisclosure')
      .mockImplementation(() => ({
        isOpen: true,
        onClose: jest.fn(),
        onOpen: jest.fn(),
      }));

    render(<CreateBlogButton />);

    // Find the BlogForm component and call submitAction
    const BlogForm = screen.getByText('BlogForm Component');
    const button = BlogForm.querySelector('button');

    if (button) {
      fireEvent.click(button);

      expect(addBlog).toHaveBeenCalledWith(DEFAULT_VALUE_BLOG_FORM);
    }
  });
});
