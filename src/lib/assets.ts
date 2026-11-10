/** Public, versioned Cloudflare R2 assets. Keep v1 immutable; publish changes under a new version. */
export const ASSET_BASE_URL = 'https://assets.buysimplethings.org/v1';

export function asset(path: string): string {
  return `${ASSET_BASE_URL}/${path.replace(/^\/+/, '')}`;
}
