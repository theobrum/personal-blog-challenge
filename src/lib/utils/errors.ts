import type { ApiError } from '$lib/api/client';

export function getErrorMessage(error: ApiError): string {
  if (error.body && typeof error.body === 'string') {
    const trimmed = error.body.trim();
    
    if (trimmed && !trimmed.startsWith('<') && !trimmed.startsWith('{')) {
      return trimmed;
    }
    
    try {
      const bodyObj = JSON.parse(trimmed);
      if (bodyObj && typeof bodyObj === 'object' && 'message' in bodyObj) {
        return bodyObj.message as string;
      }
    } catch (e) {
    }
  }
  
  if (error.body && typeof error.body === 'object' && 'message' in error.body) {
    return (error.body as { message: string }).message;
  }
  
  return error.message.replace(/^HTTP \d+:\s*/i, '');
}