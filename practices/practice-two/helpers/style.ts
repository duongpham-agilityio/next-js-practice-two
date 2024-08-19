export const generateCSSClassWithPrefix = (
  prefix = '',
  cssGroup: string[],
): string =>
  cssGroup.reduce(
    (result, style) => (style ? `${result || ''} ${prefix}${style}` : result),
    '',
  );
