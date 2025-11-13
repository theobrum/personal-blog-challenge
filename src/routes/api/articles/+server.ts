import { json } from '@sveltejs/kit';
import { articleService } from '$lib/server/services/article.service';
import type { Article } from '@prisma/client';
import type { RequestHandler } from './$types';

export type ArticlesResponse = Article[];

export const GET: RequestHandler = async () => {
  try {
    const articles: Article[] = await articleService.getAll();
    return json(articles);
  } catch (error) {
    console.error('Error fetching articles:', error);
    return new Response('Failed to fetch articles', { status: 500 });
  }
};