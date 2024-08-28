// Helpers
import { convertDateInBlog, isLargeBlogCard } from '@/helpers';
// Constants
import { BLOGS_PER_PAGE_LIMIT } from '@/constants';

describe('Utility Functions', () => {
  describe('convertDateInBlog', () => {
    test('converts a timestamp to a formatted date string', () => {
      const timestamp = new Date('2023-08-27').getTime();
      const result = convertDateInBlog(timestamp);

      expect(result).toBe('Aug 27, 2023');
    });

    test('converts a different timestamp to a formatted date string', () => {
      const timestamp = new Date('2000-01-01').getTime();
      const result = convertDateInBlog(timestamp);

      expect(result).toBe('Jan 1, 2000');
    });

    test('handles invalid timestamp input', () => {
      const invalidTimestamp = NaN;
      const result = convertDateInBlog(invalidTimestamp);

      expect(result).toBe('Invalid Date');
    });
  });

  describe('isLargeBlogCard', () => {
    test('returns true for indices that are multiples of BLOGS_PER_PAGE_LIMIT - 1', () => {
      const indicesToTest = [
        0,
        BLOGS_PER_PAGE_LIMIT - 1,
        2 * (BLOGS_PER_PAGE_LIMIT - 1),
      ];

      indicesToTest.forEach((index) => {
        expect(isLargeBlogCard(index)).toBe(true);
      });
    });

    test('returns false for indices that are not multiples of BLOGS_PER_PAGE_LIMIT - 1', () => {
      const indicesToTest = [
        1,
        2,
        BLOGS_PER_PAGE_LIMIT - 2,
        BLOGS_PER_PAGE_LIMIT,
      ];

      indicesToTest.forEach((index) => {
        expect(isLargeBlogCard(index)).toBe(false);
      });
    });

    test('returns false for negative indices', () => {
      const negativeIndices = [-1, -2, -BLOGS_PER_PAGE_LIMIT];

      negativeIndices.forEach((index) => {
        expect(isLargeBlogCard(index)).toBe(false);
      });
    });
  });
});
