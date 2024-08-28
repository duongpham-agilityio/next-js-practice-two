export const findItemInListByAnyField = <T>({
  list,
  field,
}: {
  list: T[];
  field: Partial<T>;
}) => {
  return list.find((item) => {
    const fields = Object.entries(field);

    if (!fields.length) return false;

    return fields.every(([key, value]) => item[key as keyof T] === value);
  });
};
