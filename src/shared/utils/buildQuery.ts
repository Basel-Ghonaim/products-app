type QueryValue =
  | string
  | number
  | boolean
  | Array<string | number | boolean>
  | undefined;
export const buildQueryStringFromParams = (params: Record<string, QueryValue>) => {
  const queryString = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (Array.isArray(value) && value.length === 0) return;

    if (value !== undefined && value !== null) {
      const stringValue = Array.isArray(value)
        ? value.join(",")
        : String(value);

      queryString.append(key, stringValue);
    }
  });

  return queryString.toString();
};
