export class ApiError extends Error {
  constructor(
    message: string,
    public statusCode: number
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export const errorHandler = {
  handle(err: unknown, defaultMessage: string = 'Internal server error') {
    if (err instanceof ApiError) {
      return {
        statusCode: err.statusCode,
        message: err.message
      };
    }

    console.error('Unexpected error:', err);
    
    return {
      statusCode: 500,
      message: defaultMessage
    };
  }
};