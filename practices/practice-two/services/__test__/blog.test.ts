// Services
import { getBlogs, paginationBlogs, getBlog } from '@/services';
// Constants
import { API, ENDPOINT, ERROR_MESSAGE, TIME } from '@/constants';
// Mocks
import { BLOG } from '@/mocks';
import { generateUrlSearchParams } from '@/helpers';

global.fetch = jest.fn();

describe('API Functions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getBlogs', () => {
    it('should fetch and return blogs successfully', async () => {
      const mockBlogs = [{ id: 1, title: 'Test Blog' }];

      (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce(mockBlogs),
      } as unknown as Response);

      const result = await getBlogs();

      expect(fetch).toHaveBeenCalledWith(`${API.MAIN}${ENDPOINT.BLOGS}`, {
        next: {
          tags: [ENDPOINT.BLOGS],
          revalidate: TIME.REVALIDATE_HIGHLIGHT_BLOG,
        },
      });
      expect(result).toEqual(mockBlogs);
    });

    it('should throw an error when the fetch fails', async () => {
      (fetch as jest.MockedFunction<typeof fetch>).mockRejectedValueOnce(
        new Error('Network error'),
      );

      await expect(getBlogs()).rejects.toThrow(ERROR_MESSAGE.FETCHING);
    });
  });

  describe('paginationBlogs', () => {
    it('should fetch and return paginated blogs successfully', async () => {
      const mockPaginationResponse = {
        first: 1,
        hasPrevPage: false,
        hasNextPage: true,
        last: 2,
        totalPages: 2,
        totalItems: 20,
        nextPage: 2,
        prevPage: null,
        data: [{ id: 1, title: 'Paginated Blog' }],
      };

      (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce(mockPaginationResponse),
      } as unknown as Response);

      const searchParams = { page: '1', limit: '10', search: 'test' };
      const result = await paginationBlogs(searchParams);

      expect(fetch).toHaveBeenCalledWith(`${API.PAGINATION}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          publicDataUrl: `${API.MAIN}${ENDPOINT.BLOGS}${generateUrlSearchParams({ search: 'test' })}`,
          page: 1,
          limit: 10,
        }),
      });
      expect(result).toEqual(mockPaginationResponse);
    });

    it('should throw an error when the fetch fails', async () => {
      (fetch as jest.MockedFunction<typeof fetch>).mockRejectedValueOnce(
        new Error('Network error'),
      );

      await expect(paginationBlogs({ page: '1', limit: '10' })).rejects.toThrow(
        ERROR_MESSAGE.FETCHING,
      );
    });
  });

  describe('getBlog', () => {
    it('should fetch and return a single blog successfully', async () => {
      const mockBlog = { id: 1, title: 'Single Blog' };

      (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce(mockBlog),
      } as unknown as Response);

      const result = await getBlog('1');

      expect(fetch).toHaveBeenCalledWith(`${API.MAIN}${ENDPOINT.BLOGS}/1`, {
        next: {
          tags: [ENDPOINT.BLOGS],
          revalidate: TIME.REVALIDATE_HIGHLIGHT_BLOG,
        },
      });
      expect(result).toEqual(mockBlog);
    });

    it('should return a default blog when fetching fails', async () => {
      try {
        (fetch as jest.MockedFunction<typeof fetch>).mockRejectedValueOnce('');
      } catch (error) {
        if (error instanceof Error) {
          expect(error.message).toEqual(ERROR_MESSAGE.FETCHING);
        }
      }
    });
  });
});
