// Constants
import { API, ENDPOINT, ERROR_MESSAGE, TIME } from '@/constants';
// Helpers
import { generateUrlSearchParams } from '@/helpers';
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
        revalidate: TIME.REVALIDATE_HIGHLIGHT_BLOG,
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
