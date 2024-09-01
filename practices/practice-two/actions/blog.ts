'use server';

import { revalidateTag } from 'next/cache';

// Constants
import { API, ENDPOINT, ERROR_MESSAGE, SUCCESS_MESSAGE } from '@/constants';
// Hooks
import { BlogFormValueType } from '@/hooks';
import { BlogType } from '@/models';

export interface FormStateType {
  isError: boolean;
  message: string;
}

export const addBlog = async (formData: BlogFormValueType): Promise<void> => {
  const response = await fetch(`${API.MAIN}${ENDPOINT.BLOGS}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) throw new Error(ERROR_MESSAGE.ADD_BLOG);

  revalidateTag(ENDPOINT.BLOGS);
};

export const editBlog = async (formData: BlogFormValueType): Promise<void> => {
  const response = await fetch(
    `${API.MAIN}${ENDPOINT.BLOGS}/${formData.id ?? ''}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    },
  );

  if (!response.ok) throw new Error(ERROR_MESSAGE.UPDATE_BLOG);

  revalidateTag(ENDPOINT.BLOGS);
};

export const deleteBlog = async (
  blogId: BlogType['id'],
): Promise<FormStateType> => {
  const response = await fetch(`${API.MAIN}${ENDPOINT.BLOGS}/${blogId}`, {
    method: 'DELETE',
  });

  if (!response.ok)
    return {
      message: ERROR_MESSAGE.DELETE_BLOG,
      isError: true,
    };

  revalidateTag(ENDPOINT.BLOGS);

  return {
    message: SUCCESS_MESSAGE.DELETE_BLOG,
    isError: false,
  };
};
