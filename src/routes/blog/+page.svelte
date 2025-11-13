<script lang="ts">
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

<div class="mx-auto max-w-3xl px-4 py-12">
  <header class="mb-12">
    <h1 class="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
      Blog
    </h1>
    <p class="text-lg text-gray-600 dark:text-gray-400">
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
</div>