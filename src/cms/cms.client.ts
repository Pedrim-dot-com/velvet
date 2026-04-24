export const getCMS = async <T>(path: string): Promise<T> => {
  const res = await fetch(`/content/${path}`);

  if (!res.ok) {
    throw new Error(`CMS error: ${path}`);
  }

  return res.json();
};
