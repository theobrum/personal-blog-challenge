<script lang="ts">
  import Container from '$lib/components/Container.svelte';
  import ArticleCard from '$lib/components/ArticleCard.svelte';
  import LoadingSpinner from '$lib/components/LoadingSpinner.svelte';
  import ErrorMessage from '$lib/components/ErrorMessage.svelte';
  import EmptyState from '$lib/components/EmptyState.svelte';
  import { useArticles, fetchAllArticles } from '$lib/hooks/useArticles.svelte';

  const articlesState = useArticles(fetchAllArticles);

  $effect(() => {
    articlesState.load();
  });
</script>

<svelte:head>
  <title>Blog - Paulina</title>
  <meta name="description" content="Read all articles about web development, coding journey, and more." />
</svelte:head>

<Container>
  <header class="mb-12">
    <h1 class="mb-4 text-4xl font-bold text-[hsl(var(--foreground))] md:text-5xl">
      Blog
    </h1>
    <p class="text-lg text-[hsl(var(--muted-foreground))]">
      Thoughts, tutorials, and experiences from my coding journey
    </p>
  </header>

  <section>
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
    {/if}
  </section>
</Container>

<!-- Línea divisoria final con margen -->
<div class="px-6 md:px-8">
  <hr class="border-t border-[hsl(var(--border))]" />
</div>