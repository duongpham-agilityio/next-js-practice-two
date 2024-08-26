import { useCallback, useEffect } from 'react';
import { ControllerFieldState, useForm } from 'react-hook-form';

// Stores
// import { blogFormStore } from '@app/features';

// Types
import { BlogType } from '@/models';

export type BlogFormValueType = Omit<
  BlogType,
  'id' | 'createdAt' | 'updatedAt'
> &
  Partial<Pick<BlogType, 'id'>>;

export interface UseBlogFormOptions {
  isKeepValue?: boolean;
  value: BlogFormValueType;
}

export const useBlogForm = (options: UseBlogFormOptions) => {
  const { value, isKeepValue = false } = options;
  //   const { blog, setBlog, updateBlog } = blogFormStore();
  const {
    control: blogFormControl,
    handleSubmit,
    setValue,
  } = useForm<BlogFormValueType>({
    // defaultValues: isKeepValue ? (blog ?? value) : value,
    defaultValues: isKeepValue ? value : value,
  });

  const checkError = (error: ControllerFieldState['error']) => ({
    isInvalid: !!error && !!error.message,
  });

  const handleChangeValue = useCallback(
    (
      fieldName: keyof BlogFormValueType,
      value: BlogFormValueType[typeof fieldName],
    ) => {
      //   if (isKeepValue) updateBlog({ [fieldName]: value });

      setValue(fieldName, value);
    },
    [isKeepValue, setValue],
  );

  useEffect(() => {
    // if (isKeepValue && !blog) setBlog(value);
  }, [isKeepValue, value]);

  return {
    blogFormControl,
    checkError,
    handleSubmit,
    handleChangeValue,
  };
};
