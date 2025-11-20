import { prisma } from '$lib/server/prisma';
import type { Article } from '@prisma/client';
import { ApiError } from './error-handler.service';

export const articleService = {
  async getAll(): Promise<Article[]> {
    const articles: Article[] = await prisma.article.findMany({
      orderBy: {
        publishedDate: 'desc'
      }
    });
    
    return articles;
  },

  async getLatest(limit: number = 5): Promise<Article[]> {
    const articles: Article[] = await prisma.article.findMany({
      orderBy: {
        publishedDate: 'desc'
      },
      take: limit
    });
    
    return articles;
  },

  async getBySlug(slug: string): Promise<Article> {
    const article: Article | null = await prisma.article.findUnique({
      where: { slug }
    });

    if (!article) {
      throw new ApiError(
        "We couldn't find that article. It may have been moved or deleted. Please check the URL or browse our blog for other articles.",
        404
      );
    }

    return article;
  }
};