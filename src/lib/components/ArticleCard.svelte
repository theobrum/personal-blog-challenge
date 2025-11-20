<script lang="ts">
  import { Calendar } from 'lucide-svelte';
  import { formatDate } from '$lib/utils/date';
  import type { Article } from '@prisma/client';

  interface Props {
    article: Article;
  }

  let { article }: Props = $props();
</script>

<article class="group rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6 transition-shadow hover:shadow-md">
  <a href="/blog/{article.slug}" class="block">
    <h3 class="mb-3 text-2xl font-bold text-[hsl(var(--foreground))] transition-colors group-hover:text-[hsl(var(--primary))]">
      {article.title}
    </h3>
    
    <div class="mb-4 flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))]">
      <Calendar size={16} />
      <time datetime={article.publishedDate.toString()}>
        {formatDate(article.publishedDate)}
      </time>
    </div>
    
    <p class="text-[hsl(var(--muted-foreground))] leading-relaxed">
      {article.excerpt}
    </p>
  </a>
</article>