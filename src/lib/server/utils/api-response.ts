import { json } from '@sveltejs/kit';
import { errorHandler, ApiError } from '$lib/server/services/error-handler.service.ts';

export function handleApiError(error: unknown) {
  const handled = errorHandler.handle(error);
  return json(
    { message: handled.message },
    { status: handled.statusCode }
  );
}

export function apiSuccess<T>(data: T, status = 200) {
  return json(data, { status });
}