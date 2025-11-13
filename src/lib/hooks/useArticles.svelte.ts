import type { Article } from '@prisma/client';
import type { Result, ApiError } from '$lib/api/client';

type FetchFunction = () => Promise<Result<Article[], ApiError>>;

export function useArticles(fetchFn: FetchFunction) {
  let articles = $state<Article[]>([]);
  let loading = $state(true);
  let error = $state<string | null>(null);

  async function load() {
    loading = true;
    error = null;
    
    const result = await fetchFn();
    
    if (result.success) {
      articles = result.data;
    } else {
      error = result.error.message;
    }
    
    loading = false;
  }

  return {
    get articles() { return articles; },
    get loading() { return loading; },
    get error() { return error; },
    load
  };
}

export async function fetchAllArticles() {
  const { api } = await import('$lib/api/client');
  return api.articles.get();
}

export async function fetchLatestArticles() {
  const { api } = await import('$lib/api/client');
  return api.articles_latest.get();
}