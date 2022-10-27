export const truncate = (text: any, n: any) =>
  text?.length > n ? text.substr(0, n - 1) + "..." : text;
