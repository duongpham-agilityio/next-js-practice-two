import { renderHook, act } from '@testing-library/react';
import { useForm, ControllerFieldState } from 'react-hook-form';

// Hooks
import { useBlogForm, BlogFormValueType } from '@/hooks';
import { DEFAULT_VALUE_BLOG_FORM } from '@/constants/data';

jest.mock('react-hook-form', () => ({
  useForm: jest.fn(),
}));

describe('useBlogForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should initialize form with default values', () => {
    (useForm as jest.Mock).mockReturnValue({
      control: {},
      handleSubmit: jest.fn(),
      setValue: jest.fn(),
    });

    const { result } = renderHook(() =>
      useBlogForm({ value: DEFAULT_VALUE_BLOG_FORM }),
    );

    expect(useForm).toHaveBeenCalledWith({
      defaultValues: DEFAULT_VALUE_BLOG_FORM,
    });

    expect(result.current.blogFormControl).toBeDefined();
    expect(result.current.checkError).toBeDefined();
    expect(result.current.handleSubmit).toBeDefined();
    expect(result.current.handleChangeValue).toBeDefined();
  });

  test('should handle form value changes', () => {
    (useForm as jest.Mock).mockReturnValue({
      control: {},
      handleSubmit: jest.fn(),
      setValue: jest.fn(),
    });

    const { result } = renderHook(() =>
      useBlogForm({ value: DEFAULT_VALUE_BLOG_FORM }),
    );

    act(() => {
      result.current.handleChangeValue('title', 'New Title');
    });

    expect(result.current.handleChangeValue).toBeDefined();
    expect((useForm as jest.Mock).mock.calls[0][0].defaultValues).toEqual(
      DEFAULT_VALUE_BLOG_FORM,
    );
  });

  test('should correctly handle error state', () => {
    const error: ControllerFieldState['error'] = {
      message: 'Error message',
      type: 'required',
    };
    const { result } = renderHook(() =>
      useBlogForm({ value: DEFAULT_VALUE_BLOG_FORM }),
    );

    const errorState = result.current.checkError(error);

    expect(errorState.isInvalid).toBe(true);
  });
});
