import { json } from '@sveltejs/kit';
import { newsletterService } from '$lib/server/services/newsletter.service';
import { ApiError } from '$lib/server/services/error-handler.service';
import type { NewsletterSubscriber } from '@prisma/client';
import type { RequestHandler } from './$types';

export interface NewsletterResponse {
  success: boolean;
  subscriber: NewsletterSubscriber;
}

export const POST: RequestHandler = async ({ request }) => {
  try {
    const body = await request.json();
    const subscriber: NewsletterSubscriber = await newsletterService.subscribe(body.email);
    
    const response: NewsletterResponse = { success: true, subscriber };
    return json(response, { status: 201 });
  } catch (error) {
    if (error instanceof ApiError) {
      return new Response(error.message, { status: error.statusCode });
    }
    console.error('Error subscribing to newsletter:', error);
    return new Response('Failed to subscribe', { status: 500 });
  }
};