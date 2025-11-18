<script lang="ts">
  import { Mail, CheckCircle } from 'lucide-svelte';
  import Container from '$lib/components/Container.svelte';
  import LoadingSpinner from '$lib/components/LoadingSpinner.svelte';
  import ErrorMessage from '$lib/components/ErrorMessage.svelte';
  import { useNewsletter } from '$lib/hooks/useNewsletter.svelte';

  const newsletterState = useNewsletter();
  let email = $state('');

  async function handleSubmit(e: Event) {
    e.preventDefault();
    await newsletterState.subscribe(email);
    
    if (newsletterState.success) {
      email = '';
    }
  }
</script>

<svelte:head>
  <title>Newsletter - Subscribe for Updates</title>
  <meta name="description" content="Subscribe to Paulina's newsletter to get the latest articles and updates delivered to your inbox." />
</svelte:head>

<Container>
  <div class="text-center">
    <div class="mb-6 flex justify-center">
      <div class="rounded-full bg-blue-100 p-4 dark:bg-blue-900/30">
        <Mail size={48} class="text-blue-600 dark:text-blue-400" />
      </div>
    </div>

    <h1 class="mb-4 text-4xl font-bold text-[hsl(var(--foreground))] md:text-5xl">
      Stay in the Loop
    </h1>
    <p class="mb-8 text-xl text-[hsl(var(--muted-foreground))]">
      Get new articles and updates delivered straight to your inbox
    </p>
  </div>

  {#if newsletterState.success}
    <div class="rounded-lg bg-green-50 p-8 text-center dark:bg-green-900/20">
      <CheckCircle size={48} class="mx-auto mb-4 text-green-600 dark:text-green-400" />
      <h2 class="mb-2 text-2xl font-bold text-[hsl(var(--foreground))]">
        You're Subscribed!
      </h2>
      <p class="mb-6 text-[hsl(var(--muted-foreground))]">
        Thanks for subscribing! Check your inbox for a confirmation email.
      </p>
      <button
        onclick={() => newsletterState.reset()}
        class="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
      >
        Subscribe another email
      </button>
    </div>
  {:else}
    <div class="rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-8 shadow-sm">
      <form onsubmit={handleSubmit} class="space-y-6">
        <div>
          <label for="email" class="mb-2 block text-sm font-medium text-[hsl(var(--foreground))]">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            bind:value={email}
            required
            autocomplete="email"
            placeholder="you@example.com"
            disabled={newsletterState.loading}
            class="w-full rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--background))] px-4 py-3 text-[hsl(var(--foreground))] focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>

        {#if newsletterState.error}
          <ErrorMessage message={newsletterState.error} />
        {/if}

        <button
          type="submit"
          disabled={newsletterState.loading || !email}
          class="w-full rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {#if newsletterState.loading}
            <span class="flex items-center justify-center gap-2">
              <LoadingSpinner message="" />
              Subscribing...
            </span>
          {:else}
            Subscribe
          {/if}
        </button>
      </form>

      <p class="mt-6 text-center text-sm text-[hsl(var(--muted-foreground))]">
        No spam, ever. Unsubscribe at any time.
      </p>
    </div>

    <div class="mt-12 grid gap-6 md:grid-cols-3">
      <div class="text-center">
        <Mail size={32} class="mx-auto mb-3 text-blue-600 dark:text-blue-400" />
        <h3 class="mb-2 font-semibold text-[hsl(var(--foreground))]">
          New Articles
        </h3>
        <p class="text-sm text-[hsl(var(--muted-foreground))]">
          Get notified when I publish new content
        </p>
      </div>

      <div class="text-center">
        <CheckCircle size={32} class="mx-auto mb-3 text-green-600 dark:text-green-400" />
        <h3 class="mb-2 font-semibold text-[hsl(var(--foreground))]">
          Tips & Tricks
        </h3>
        <p class="text-sm text-[hsl(var(--muted-foreground))]">
          Exclusive coding tips and best practices
        </p>
      </div>

      <div class="text-center">
        <CheckCircle size={32} class="mx-auto mb-3 text-purple-600 dark:text-purple-400" />
        <h3 class="mb-2 font-semibold text-[hsl(var(--foreground))]">
          No Spam
        </h3>
        <p class="text-sm text-[hsl(var(--muted-foreground))]">
          Quality over quantity, always
        </p>
      </div>
    </div>
  {/if}
</Container>

<div class="px-6 md:px-4">
  <hr class="border-t border-[hsl(var(--border))]" />
</div>