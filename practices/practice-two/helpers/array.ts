export const findItemInListByAnyField = <T>({
  list,
  field,
}: {
  list: T[];
  field: Partial<T>;
}) => {
  return list.find((item) => {
    return Object.entries(field).every(
      ([key, value]) => item[key as keyof T] === value,
    );
  });
};
