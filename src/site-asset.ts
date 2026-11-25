export function siteAsset(path: string): string {
  return import.meta.env.BASE_URL + path;
}
