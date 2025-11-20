import type { NewsletterSubscriber } from '@prisma/client';
import type { Result, ApiError } from '$lib/api/client';
import { getErrorMessage } from '$lib/utils/errors.ts';

interface NewsletterResponse {
  success: boolean;
  subscriber: NewsletterSubscriber;
}

export function useNewsletter() {
  let loading = $state(false);
  let error = $state<string | null>(null);
  let success = $state(false);

  async function subscribe(email: string): Promise<void> {
    loading = true;
    error = null;
    success = false;

    const { api } = await import('$lib/api/client');
    const result = await api.newsletter.post({ email }) as Result<NewsletterResponse, ApiError>;

    if (result.success) {
      success = true;
    } else {
      error = getErrorMessage(result.error);
    }

    loading = false;
  }

  function reset() {
    loading = false;
    error = null;
    success = false;
  }

  return {
    get loading() { return loading; },
    get error() { return error; },
    get success() { return success; },
    subscribe,
    reset
  };
}