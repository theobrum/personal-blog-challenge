<script lang="ts">
  import Container from '$lib/components/Container.svelte';
  import ArticleCard from '$lib/components/ArticleCard.svelte';
  import LoadingSpinner from '$lib/components/LoadingSpinner.svelte';
  import ErrorMessage from '$lib/components/ErrorMessage.svelte';
  import EmptyState from '$lib/components/EmptyState.svelte';
  import AuthorBio from '$lib/components/AuthorBio.svelte';
  import { useArticles, fetchLatestArticles } from '$lib/hooks/useArticles.svelte';

  const articlesState = useArticles(fetchLatestArticles);

  $effect(() => {
    articlesState.load();
  });
</script>

<Container>
  <AuthorBio />
</Container>

<!-- Línea divisoria con margen -->
<div class="px-6 md:px-8">
  <hr class="border-t border-[hsl(var(--border))]" />
</div>

<Container>
  <section>
    <!-- Latest Articles con línea decorativa a la derecha -->
    <div class="mb-8 flex items-start gap-3">
      <h2 class="text-3xl font-bold text-[hsl(var(--foreground))]">Latest Articles</h2>
      <div class="mt-[27px] h-1 w-13 bg-[#27a6f5] opacity-90"></div>
    </div>

    {#if articlesState.loading}
      <LoadingSpinner message="Loading articles..." />
    {:else if articlesState.error}
      <ErrorMessage message={articlesState.error} />
    {:else if articlesState.articles.length === 0}
      <EmptyState message="No articles found." />
    {:else}
      <div class="space-y-8">
        {#each articlesState.articles as article (article.id)}
          <ArticleCard {article} />
        {/each}
      </div>

      <div class="mt-12">
        <a href="/blog" class="relative inline-block font-medium text-[hsl(var(--foreground))] transition-opacity hover:opacity-70">
          <span class="absolute bottom-0 left-0 right-0 h-1 bg-[#27a6f5] opacity-90"></span>
          <span class="relative">View all articles</span>
        </a>
      </div>
    {/if}
  </section>
</Container>

<!-- Línea divisoria final con margen -->
<div class="px-6 md:px-8">
  <hr class="border-t border-[hsl(var(--border))]" />
</div>