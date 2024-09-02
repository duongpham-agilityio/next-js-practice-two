'use server';

import { revalidateTag } from 'next/cache';

// Constants
import { ENDPOINT } from '@/constants';
// Hooks
import { BlogFormValueType } from '@/hooks';
// Models
import { BlogType } from '@/models';
// Services
import { createBlog, deleteBlog, editBlog } from '@/services';

export interface FormStateType {
  isError: boolean;
  message: string;
}

export const addBlogAction = async (
  formData: BlogFormValueType,
): Promise<void> => {
  await createBlog(formData);
  revalidateTag(ENDPOINT.BLOGS);
};

export const editBlogAction = async (
  formData: BlogFormValueType,
): Promise<void> => {
  await editBlog(formData);
  revalidateTag(ENDPOINT.BLOGS);
};

export const deleteBlogAction = async (
  blogId: BlogType['id'],
): Promise<void> => {
  await deleteBlog(blogId);
  revalidateTag(ENDPOINT.BLOGS);
};
