<script lang="ts">
  import { page } from '$app/state';
  import { ArrowLeft, Calendar, User } from 'lucide-svelte';
  import Container from '$lib/components/Container.svelte';
  import LoadingSpinner from '$lib/components/LoadingSpinner.svelte';
  import ErrorMessage from '$lib/components/ErrorMessage.svelte';
  import { useArticle, fetchArticleBySlug } from '$lib/hooks/useArticle.svelte';
  import { formatDate } from '$lib/utils/date';

  const slug = page.params.slug!;
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

<Container>
  {#if articleState.loading}
    <LoadingSpinner message="Loading article..." />
  {:else if articleState.error}
    <div class="space-y-6">
      <ErrorMessage message={articleState.error} />
      <a
        href="/blog"
        class="inline-flex items-center gap-2 text-[hsl(var(--foreground))] transition-colors hover:text-[hsl(var(--primary))]"
      >
        <ArrowLeft size={20} />
        Back to blog
      </a>
    </div>
  {:else if articleState.article}
    <article>
      <a
        href="/blog"
        class="mb-8 inline-flex items-center gap-2 text-[hsl(var(--foreground))] transition-colors hover:text-[hsl(var(--primary))]"
      >
        <ArrowLeft size={20} />
        Back to blog
      </a>

      <header class="mb-8">
        <h1 class="mb-4 text-4xl font-bold text-[hsl(var(--foreground))] md:text-5xl">
          {articleState.article.title}
        </h1>

        <div class="flex flex-wrap items-center gap-4 text-sm text-[hsl(var(--muted-foreground))]">
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

      {#if articleState.article.imageUrl}
        <div class="mb-8">
          <img
            src={articleState.article.imageUrl}
            alt={articleState.article.title}
            class="h-96 w-full rounded-lg object-cover"
          />
        </div>
      {/if}

      <div class="prose prose-lg max-w-none dark:prose-invert">
        <p class="lead text-xl text-[hsl(var(--muted-foreground))]">
          {articleState.article.excerpt}
        </p>
        
        <div class="mt-6 text-[hsl(var(--muted-foreground))]">
          {articleState.article.content}
        </div>
      </div>
    </article>
  {/if}
</Container>

<!-- Línea divisoria final con margen -->
<div class="px-4 md:px-4">
  <hr class="border-t border-[hsl(var(--border))]" />
</div>