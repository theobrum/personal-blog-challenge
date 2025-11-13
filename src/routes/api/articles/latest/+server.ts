import { json } from '@sveltejs/kit';
import { articleService } from '$lib/server/services/article.service';
import type { Article } from '@prisma/client';
import type { RequestHandler } from './$types';

export type LatestArticlesResponse = Article[];

export const GET: RequestHandler = async () => {
  try {
    const articles: Article[] = await articleService.getLatest();
    return json(articles);
  } catch (error) {
    console.error('Error fetching latest articles:', error);
    return new Response('Failed to fetch latest articles', { status: 500 });
  }
};