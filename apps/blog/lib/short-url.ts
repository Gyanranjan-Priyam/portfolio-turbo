import { SITE_URL } from './consts';

/**
 * Deterministic short code generator for blog posts.
 * Generates a clean 4-5 character alphanumeric short code from a post slug.
 */
export function getShortCode(slug: string): string {
  let hash = 5381;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 33) ^ slug.charCodeAt(i);
    hash |= 0;
  }
  const positiveHash = Math.abs(hash);
  const code = positiveHash.toString(36).substring(0, 5);
  return code;
}

/**
 * Returns the full short URL for a given slug.
 * e.g. "https://blogs.priyam.tech/s/a8f2"
 */
export function getShortUrl(slug: string): string {
  const code = getShortCode(slug);
  return `${SITE_URL}/s/${code}`;
}

/**
 * Resolves a short code back to its full post slug given a list of slugs.
 */
export function resolveSlugFromShortCode(code: string, availableSlugs: string[]): string | null {
  const normalized = code.trim().toLowerCase();
  
  // Exact match on computed short code
  const matched = availableSlugs.find((slug) => getShortCode(slug).toLowerCase() === normalized);
  if (matched) return matched;

  // Fallback: Check if code is already a full slug
  const directMatch = availableSlugs.find((slug) => slug.toLowerCase() === normalized);
  if (directMatch) return directMatch;

  return null;
}
