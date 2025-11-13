<script lang="ts">
  import { page } from '$app/stores';
  import { ArrowLeft, Calendar, User } from 'lucide-svelte';
  import LoadingSpinner from '$lib/components/LoadingSpinner.svelte';
  import ErrorMessage from '$lib/components/ErrorMessage.svelte';
  import { useArticle, fetchArticleBySlug } from '$lib/hooks/useArticle.svelte.ts';
  import { formatDate } from '$lib/utils/date';

  const slug = $page.params.slug!;
  const articleState = useArticle(fetchArticleBySlug, slug);

  $effect(() => {
    articleState.load();
  });
</script>

<svelte:head>
  {#if articleState.article}
    <title>{articleState.article.title} - Paulina's Blog</title>
    <meta name="description" content={articleState.article.excerpt} />
  {:else}
    <title>Article - Paulina's Blog</title>
  {/if}
</svelte:head>

<article class="mx-auto max-w-3xl px-4 py-12">
  {#if articleState.loading}
    <LoadingSpinner message="Loading article..." />
  {:else if articleState.error}
    <div class="space-y-6">
      <ErrorMessage message={articleState.error} />
      <a
        href="/blog"
        class="inline-flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
      >
        <ArrowLeft size={20} />
        Back to blog
      </a>
    </div>
  {:else if articleState.article}
    <!-- Back Button -->
    <a
      href="/blog"
      class="mb-8 inline-flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
    >
      <ArrowLeft size={20} />
      Back to blog
    </a>

    <!-- Article Header -->
    <header class="mb-8">
      <h1 class="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
        {articleState.article.title}
      </h1>

      <!-- Metadata -->
      <div class="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
        <div class="flex items-center gap-2">
          <User size={16} />
          <span>{articleState.article.author}</span>
        </div>
        <div class="flex items-center gap-2">
          <Calendar size={16} />
          <time datetime={articleState.article.publishedDate.toString()}>
            {formatDate(articleState.article.publishedDate)}
          </time>
        </div>
      </div>
    </header>

    <!-- Featured Image -->
    {#if articleState.article.imageUrl}
      <div class="mb-8">
        <img
          src={articleState.article.imageUrl}
          alt={articleState.article.title}
          class="h-96 w-full rounded-lg object-cover"
        />
      </div>
    {/if}

    <!-- Article Content -->
    <div class="prose prose-lg dark:prose-invert max-w-none">
      <p class="lead text-xl text-gray-700 dark:text-gray-300">
        {articleState.article.excerpt}
      </p>
      
      <div class="mt-6">
        {articleState.article.content}
      </div>
    </div>

    <!-- Footer -->
    <footer class="mt-12 border-t border-gray-200 pt-8 dark:border-gray-800">
      <a
        href="/blog"
        class="inline-flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
      >
        <ArrowLeft size={20} />
        Back to all articles
      </a>
    </footer>
  {/if}
</article>