import { articleService } from '$lib/server/services/article.service';
import { apiHandler } from '$lib/server/utils/api-handler';

export async function GET() {
  return apiHandler(() => articleService.getAll(), 'Failed to fetch articles');
}