import { json } from '@sveltejs/kit';
import { articleService } from '$lib/server/services/article.service';
import { ApiError } from '$lib/server/services/error-handler.service';
import type { Article } from '@prisma/client';
import type { RequestHandler } from './$types';

export type ArticleResponse = Article;

export const GET: RequestHandler = async ({ params }) => {
  try {
    const article: Article = await articleService.getBySlug(params.slug);
    return json(article);
  } catch (error) {
    if (error instanceof ApiError) {
      return new Response(error.message, { status: error.statusCode });
    }
    console.error('Error fetching article:', error);
    return new Response('Failed to fetch article', { status: 500 });
  }
};