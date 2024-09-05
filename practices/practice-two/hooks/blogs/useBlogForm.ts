import { useState } from 'react';
import { useForm } from 'react-hook-form';

// Types
import { BlogType } from '@/models';

export type BlogFormValueType = Omit<
  BlogType,
  'id' | 'createdAt' | 'updatedAt'
> &
  Partial<Pick<BlogType, 'id'>>;

export interface UseBlogFormOptions {
  value: BlogFormValueType;
  action: (value: BlogFormValueType) => Promise<void>;
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export const useBlogForm = (options: UseBlogFormOptions) => {
  const { value, action, onError, onSuccess } = options;
  const [isSubmitting, setSubmitting] = useState(false);
  const { control: blogFormControl, handleSubmit: submit } =
    useForm<BlogFormValueType>({
      defaultValues: value,
    });

  const handleSubmit = submit(async (formValue) => {
    try {
      setSubmitting(true);
      await action(formValue);
      onSuccess && onSuccess();
      setSubmitting(false);
    } catch (error) {
      if (error instanceof Error && onError) {
        onError(error);
      }
    }
  });

  return {
    isSubmitting,
    blogFormControl,
    handleSubmit,
  };
};
