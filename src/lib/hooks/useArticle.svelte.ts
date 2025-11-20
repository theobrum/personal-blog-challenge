import type { Article } from '@prisma/client';
import type { Result, ApiError } from '$lib/api/client';
import { getErrorMessage } from '$lib/utils/errors.ts';

type FetchFunction = (slug: string) => Promise<Result<Article, ApiError>>;

export function useArticle(fetchFn: FetchFunction, slug: string) {
  let article = $state<Article | null>(null);
  let loading = $state(true);
  let error = $state<string | null>(null);

  async function load() {
    loading = true;
    error = null;
    
    const result = await fetchFn(slug);
    
    if (result.success) {
      article = result.data;
    } else {
      error = getErrorMessage(result.error);
    }
    
    loading = false;
  }

  return {
    get article() { return article; },
    get loading() { return loading; },
    get error() { return error; },
    load
  };
}

export async function fetchArticleBySlug(slug: string) {
  const { api } = await import('$lib/api/client');
  return api.articles(slug).get();
}