export const toStringify = (obj: any): string => {
  return JSON.stringify(obj, null, 2);
};

export const toStringifyMin = (obj: any): string => {
  return JSON.stringify(obj, null, 0);
};
