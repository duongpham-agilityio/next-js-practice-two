import { revalidateTag } from 'next/cache';
import fetchMock from 'jest-fetch-mock';

// Constants
import { ENDPOINT, ERROR_MESSAGE, SUCCESS_MESSAGE } from '@/constants';
// Actions
import { addBlog, editBlog, deleteBlog } from '@/actions';
// Mocks
import { BLOG } from '@/mocks';

jest.mock('next/cache', () => ({
  revalidateTag: jest.fn(),
}));

describe('Blog API Functions', () => {
  beforeAll(() => {
    fetchMock.enableMocks();
  });

  afterEach(() => {
    fetchMock.resetMocks();
    jest.clearAllMocks();
  });

  describe('addBlog', () => {
    it('should return success message on successful response', async () => {
      fetchMock.mockResolvedValue({
        ok: true,
      } as Response);

      const formData = { ...BLOG, title: 'Test Blog', content: 'Test Content' };
      const result = await addBlog({ isError: false, message: '' }, formData);

      expect(result).toEqual({
        message: SUCCESS_MESSAGE.ADD_BLOG,
        isError: false,
      });
      expect(revalidateTag).toHaveBeenCalledWith(ENDPOINT.BLOGS);
    });

    it('should return error message on failed response', async () => {
      fetchMock.mockResolvedValue({
        ok: false,
      } as Response);

      const formData = { ...BLOG, title: 'Test Blog', content: 'Test Content' };
      const result = await addBlog({ isError: false, message: '' }, formData);

      expect(result).toEqual({
        message: ERROR_MESSAGE.ADD_BLOG,
        isError: true,
      });
      expect(revalidateTag).not.toHaveBeenCalled();
    });
  });

  describe('editBlog', () => {
    it('should return success message on successful response', async () => {
      fetchMock.mockResolvedValue({
        ok: true,
      } as Response);

      const formData = {
        ...BLOG,
        id: '123',
        title: 'Updated Blog',
        content: 'Updated Content',
      };
      const result = await editBlog({ isError: false, message: '' }, formData);

      expect(result).toEqual({
        message: SUCCESS_MESSAGE.UPDATE_BLOG,
        isError: false,
      });
      expect(revalidateTag).toHaveBeenCalledWith(ENDPOINT.BLOGS);
    });

    it('should return error message on failed response', async () => {
      fetchMock.mockResolvedValue({
        ok: false,
      } as Response);

      const formData = {
        ...BLOG,
        id: '123',
        title: 'Updated Blog',
        content: 'Updated Content',
      };
      const result = await editBlog({ isError: false, message: '' }, formData);

      expect(result).toEqual({
        message: ERROR_MESSAGE.UPDATE_BLOG,
        isError: true,
      });
      expect(revalidateTag).not.toHaveBeenCalled();
    });
  });

  describe('deleteBlog', () => {
    it('should return success message on successful response', async () => {
      fetchMock.mockResolvedValue({
        ok: true,
      } as Response);

      const blogId = '123';
      const result = await deleteBlog(blogId);

      expect(result).toEqual({
        message: SUCCESS_MESSAGE.DELETE_BLOG,
        isError: false,
      });
      expect(revalidateTag).toHaveBeenCalledWith(ENDPOINT.BLOGS);
    });

    it('should return error message on failed response', async () => {
      fetchMock.mockResolvedValue({
        ok: false,
      } as Response);

      const blogId = '123';
      const result = await deleteBlog(blogId);

      expect(result).toEqual({
        message: ERROR_MESSAGE.DELETE_BLOG,
        isError: true,
      });
      expect(revalidateTag).not.toHaveBeenCalled();
    });
  });
});
