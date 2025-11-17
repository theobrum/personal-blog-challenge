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

  <section>
    <div class="mb-8 flex items-center gap-3">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Latest Articles</h2>
      <div class="h-1 w-16 bg-blue-600"></div>
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
        <a
          href="/blog"
          class="inline-block border-b-2 border-gray-900 font-medium text-gray-900 transition-colors hover:border-gray-600 hover:text-gray-600 dark:border-white dark:text-white dark:hover:border-gray-300 dark:hover:text-gray-300"
        >
          View all articles
        </a>
      </div>
    {/if}
  </section>
</Container>