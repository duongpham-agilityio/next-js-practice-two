// Services
import { getTopics } from '@/services';
// Constants
import { ENDPOINT, ERROR_MESSAGE } from '@/constants';
// Mocks
import { TOPICS } from '@/mocks';

global.fetch = jest.fn();

describe('getTopics', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch and return topics successfully', async () => {
    (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(TOPICS),
    } as unknown as Response);

    const result = await getTopics();

    expect(fetch).toHaveBeenCalledWith(
      `${process.env.BLOGS_API}${ENDPOINT.TOPICS}`,
    );
    expect(result).toEqual(TOPICS);
  });

  it('should throw an error when the fetch fails', async () => {
    (fetch as jest.MockedFunction<typeof fetch>).mockRejectedValueOnce(
      new Error('Network error'),
    );

    await expect(getTopics()).rejects.toThrow(ERROR_MESSAGE.FETCHING);
  });
});
