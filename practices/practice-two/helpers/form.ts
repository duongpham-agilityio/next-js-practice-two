export const convertToFormData = <T extends Record<string, any>>(
  obj: T,
): FormData => {
  const formData = new FormData();

  Object.entries(obj).forEach(([key, value]) => formData.append(key, value));

  return formData;
};

export const parseFormDataToObject = (
  formData: FormData,
): Record<string, any> =>
  Array.from(formData.entries()).reduce(
    (result, [key, value]) => ({ ...result, [key]: value }),
    {},
  );
