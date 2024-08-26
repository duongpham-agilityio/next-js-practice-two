/**
 * Generates a URL search params string from a record of key-value pairs.
 * @param searchParam An object containing key-value pairs to be converted into URL search parameters.
 * @returns A string representing the URL search parameters.
 */
export const generateUrlSearchParams = (
  searchParam: Record<string, string>,
): string =>
  `?${Object.entries(searchParam)
    .map(([key, value]) => (value ? `${key}=${value}` : ''))
    .filter((value) => Boolean(value))
    .join('&')}`;
