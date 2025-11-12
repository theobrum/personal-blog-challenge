import { newsletterService } from '$lib/server/services/newsletter.service';
import { apiHandlerWithStatus } from '$lib/server/utils/api-handler';

export async function POST({ request }) {
  return apiHandlerWithStatus(
    async () => {
      const body = await request.json();
      const subscriber = await newsletterService.subscribe(body.email);
      return { success: true, subscriber };
    },
    201,
    'Failed to subscribe'
  );
}