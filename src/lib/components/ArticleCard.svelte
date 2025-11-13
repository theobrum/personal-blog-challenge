<script lang="ts">
  import { formatDate } from '$lib/utils/date.ts';
  import type { Article } from '@prisma/client';

  type Props = {
    article: Article;
  };

  let { article }: Props = $props();
</script>

<article class="group">
  <a href="/blog/{article.slug}" class="block">
    <h3
      class="text-xl font-bold text-gray-900 transition-colors group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-300"
    >
      {article.title}
    </h3>
    <time class="mt-2 block text-sm text-gray-600 dark:text-gray-400">
      {formatDate(article.publishedDate)}
    </time>
  </a>
</article>