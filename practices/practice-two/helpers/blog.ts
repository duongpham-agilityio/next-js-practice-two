export const convertDateInBlog = (dateAsNumber: number): string => {
  const date = new Date(dateAsNumber);

  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};
