// Helpers
import { generateUrlSearchParams } from '@/helpers';

describe('generateUrlSearchParams', () => {
  test('generates URL search params from key-value pairs', () => {
    const params = { name: 'John', age: '30', country: 'USA' };
    const result = generateUrlSearchParams(params);

    expect(result).toBe('?name=John&age=30&country=USA');
  });

  test('omits empty values', () => {
    const params = { name: 'John', age: '', country: 'USA' };
    const result = generateUrlSearchParams(params);

    expect(result).toBe('?name=John&country=USA');
  });

  test('returns an empty string for an empty object', () => {
    const params = {};
    const result = generateUrlSearchParams(params);

    expect(result).toBe('?');
  });

  test('handles all values as empty strings', () => {
    const params = { name: '', age: '', country: '' };
    const result = generateUrlSearchParams(params);

    expect(result).toBe('?');
  });

  test('handles values that are falsy but not empty strings', () => {
    const params = { name: 'John', age: '0', country: 'USA' };
    const result = generateUrlSearchParams(params);

    expect(result).toBe('?name=John&age=0&country=USA');
  });

  test('handles single key-value pair', () => {
    const params = { name: 'John' };
    const result = generateUrlSearchParams(params);

    expect(result).toBe('?name=John');
  });
});
