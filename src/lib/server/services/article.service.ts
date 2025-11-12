import { prisma } from '$lib/server/prisma';
import type { Article } from '@prisma/client';
import { ApiError } from './error-handler.service';

export const articleService = {
  async getAll(): Promise<Article[]> {
    return await prisma.article.findMany({
      orderBy: {
        publishedDate: 'desc'
      }
    });
  },

  async getLatest(limit: number = 5): Promise<Article[]> {
    return await prisma.article.findMany({
      orderBy: {
        publishedDate: 'desc'
      },
      take: limit
    });
  },

  async getBySlug(slug: string): Promise<Article> {
    const article = await prisma.article.findUnique({
      where: { slug }
    });

    if (!article) {
      throw new ApiError('Article not found', 404);
    }

    return article;
  }
};