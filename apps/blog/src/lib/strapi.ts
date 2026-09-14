/**
 * Strapi API Client Helper for Astro Blog
 */
interface Props {
  endpoint: string;
  query?: Record<string, string>;
  wrappedByKey?: string;
  wrappedByList?: boolean;
}

/**
 * Fetches data from the Strapi API
 * @param endpoint - The endpoint to fetch from (e.g. 'articles')
 * @param query - URL query parameters
 * @param wrappedByKey - Optional key to unwrap from the response
 * @param wrappedByList - If true, unwrap the first element of a list
 */
export async function fetchApi<T>({
  endpoint,
  query,
  wrappedByKey,
  wrappedByList,
}: Props): Promise<T> {
  const strapiUrl = import.meta.env.STRAPI_URL || 'http://localhost:1337';
  const strapiToken = import.meta.env.STRAPI_TOKEN;

  if (endpoint.startsWith('/')) {
    endpoint = endpoint.slice(1);
  }

  const url = new URL(`${strapiUrl}/api/${endpoint}`);

  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (strapiToken) {
    headers['Authorization'] = `Bearer ${strapiToken}`;
  }

  const res = await fetch(url.toString(), { headers });
  let data = await res.json();

  if (wrappedByKey) {
    data = data[wrappedByKey];
  }

  if (wrappedByList) {
    data = data[0];
  }

  return data as T;
}
