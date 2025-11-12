import { articleService } from '$lib/server/services/article.service';
import { apiHandler } from '$lib/server/utils/api-handler';

export async function GET({ params }) {
  return apiHandler(() => articleService.getBySlug(params.slug), 'Failed to fetch article');
}