import { revalidateTag } from 'next/cache';
import fetchMock from 'jest-fetch-mock';

// Constants
import { ENDPOINT, ERROR_MESSAGE, SUCCESS_MESSAGE } from '@/constants';
// Actions
import { addBlogAction, editBlogAction, deleteBlogAction } from '@/actions';
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

  describe('addBlogAction', () => {
    it('should return success message on successful response', async () => {
      fetchMock.mockResolvedValue({
        ok: true,
      } as Response);

      const formData = { ...BLOG, title: 'Test Blog', content: 'Test Content' };
      const result = await addBlogAction(formData);

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
      const result = await addBlogAction(formData);

      expect(result).toEqual({
        message: ERROR_MESSAGE.ADD_BLOG,
        isError: true,
      });
      expect(revalidateTag).not.toHaveBeenCalled();
    });
  });

  describe('editBlogAction', () => {
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
      const result = await editBlogAction(formData);

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
      const result = await editBlogAction(formData);

      expect(result).toEqual({
        message: ERROR_MESSAGE.UPDATE_BLOG,
        isError: true,
      });
      expect(revalidateTag).not.toHaveBeenCalled();
    });
  });

  describe('deleteBlogAction', () => {
    it('should return success message on successful response', async () => {
      fetchMock.mockResolvedValue({
        ok: true,
      } as Response);

      const blogId = '123';
      const result = await deleteBlogAction(blogId);

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
      const result = await deleteBlogAction(blogId);

      expect(result).toEqual({
        message: ERROR_MESSAGE.DELETE_BLOG,
        isError: true,
      });
      expect(revalidateTag).not.toHaveBeenCalled();
    });
  });
});
