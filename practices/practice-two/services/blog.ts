// Constants
import { API, ENDPOINT, ERROR_MESSAGE, TIME } from '@/constants';
// Helpers
import { generateUrlSearchParams } from '@/helpers';
// Hooks
import { BlogFormValueType } from '@/hooks';
// Mocks
import { BLOG } from '@/mocks';
// Models
import { BlogsType, BlogType } from '@/models';

export interface PaginationResponseType<T> {
  first: number;
  hasPrevPage: boolean | null;
  hasNextPage: boolean | null;
  last: number;
  totalPages: number;
  totalItems: number;
  nextPage: number | null;
  prevPage: number | null;
  data: T[];
}

export const getBlogs = async (): Promise<BlogsType> => {
  try {
    const data: Response = await fetch(`${API.MAIN}${ENDPOINT.BLOGS}`, {
      next: {
        tags: [ENDPOINT.BLOGS],
      },
      cache: 'no-store',
    });
    const blogs: BlogsType = await data.json();

    return blogs ?? [];
  } catch (error) {
    throw new Error(ERROR_MESSAGE.FETCHING);
  }
};

export const fetchBlogIds = async (): Promise<BlogType['id'][]> => {
  try {
    const data: Response = await fetch(`${API.MAIN}${ENDPOINT.BLOGS}`, {
      next: {
        tags: [ENDPOINT.BLOGS, ENDPOINT.BLOG_IDS],
      },
    });
    const blogs: BlogsType = await data.json();

    return blogs.map(({ id }) => id);
  } catch (error) {
    throw new Error(ERROR_MESSAGE.FETCHING);
  }
};

export const fetchRelatedBlogs = async (): Promise<BlogsType> => {
  try {
    const data: Response = await fetch(`${API.MAIN}${ENDPOINT.BLOGS}`, {
      next: {
        tags: [ENDPOINT.BLOGS, ENDPOINT.RELATED_BLOGS],
      },
    });
    const blogs: BlogsType = await data.json();

    return blogs ?? [];
  } catch (error) {
    throw new Error(ERROR_MESSAGE.FETCHING);
  }
};

export const paginationBlogs = async (
  searchParam: Record<string, string>,
): Promise<PaginationResponseType<BlogType>> => {
  const { page, limit, ...rest } = searchParam;

  try {
    const response: Response = await fetch(`${API.PAGINATION}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        publicDataUrl: `${API.MAIN}${ENDPOINT.BLOGS}${generateUrlSearchParams(rest)}`,
        page: Number(page),
        limit: Number(limit),
      }),
    });
    const data: PaginationResponseType<BlogType> = await response.json();

    return data;
  } catch (error) {
    throw new Error(ERROR_MESSAGE.FETCHING);
  }
};

export const getBlog = async (blogId: BlogType['id']): Promise<BlogType> => {
  try {
    const data: Response = await fetch(
      `${API.MAIN}${ENDPOINT.BLOGS}/${blogId}`,
      {
        next: {
          tags: [ENDPOINT.BLOGS],
          revalidate: TIME.REVALIDATE_HIGHLIGHT_BLOG,
        },
      },
    );

    const blog: BlogType = await data.json();

    return Object.keys(blog).length ? blog : BLOG;
  } catch (error) {
    throw new Error(ERROR_MESSAGE.FETCHING);
  }
};

export const createBlog = async (blog: BlogFormValueType) => {
  const response = await fetch(
    `${API.MAIN}${ENDPOINT.BLOGS}/${blog.id ?? ''}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(blog),
    },
  );

  if (!response.ok) throw new Error(ERROR_MESSAGE.UPDATE_BLOG);
};

export const editBlog = async (blog: BlogFormValueType) => {
  const response = await fetch(
    `${API.MAIN}${ENDPOINT.BLOGS}/${blog.id ?? ''}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(blog),
    },
  );

  if (!response.ok) throw new Error(ERROR_MESSAGE.UPDATE_BLOG);
};

export const deleteBlog = async (blogId: BlogType['id']) => {
  const response = await fetch(`${API.MAIN}${ENDPOINT.BLOGS}/${blogId}`, {
    method: 'DELETE',
  });

  if (!response.ok) throw new Error(ERROR_MESSAGE.DELETE_BLOG);
};
