import { json, error } from '@sveltejs/kit';
import { errorHandler } from '$lib/server/services/error-handler.service.ts';

export async function apiHandler<T>(
  handler: () => Promise<T>,
  errorMessage: string = 'Request failed'
): Promise<Response> {
  try {
    const data = await handler();
    return json(data);
  } catch (err) {
    const { statusCode, message } = errorHandler.handle(err, errorMessage);
    return error(statusCode, message);
  }
}

export async function apiHandlerWithStatus<T>(
  handler: () => Promise<T>,
  status: number,
  errorMessage: string = 'Request failed'
): Promise<Response> {
  try {
    const data = await handler();
    return json(data, { status });
  } catch (err) {
    const { statusCode, message } = errorHandler.handle(err, errorMessage);
    return error(statusCode, message);
  }
}