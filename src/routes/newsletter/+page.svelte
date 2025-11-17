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

    <h1 class="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
      Stay in the Loop
    </h1>
    <p class="mb-8 text-xl text-gray-600 dark:text-gray-400">
      Get new articles and updates delivered straight to your inbox
    </p>
  </div>

  {#if newsletterState.success}
    <div class="rounded-lg bg-green-50 p-8 text-center dark:bg-green-900/20">
      <CheckCircle size={48} class="mx-auto mb-4 text-green-600 dark:text-green-400" />
      <h2 class="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
        You're Subscribed!
      </h2>
      <p class="mb-6 text-gray-700 dark:text-gray-300">
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
    <div class="rounded-lg border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <form onsubmit={handleSubmit} class="space-y-6">
        <div>
          <label for="email" class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            bind:value={email}
            required
            placeholder="you@example.com"
            disabled={newsletterState.loading}
            class="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
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

      <p class="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
        No spam, ever. Unsubscribe at any time.
      </p>
    </div>

    <div class="mt-12 grid gap-6 md:grid-cols-3">
      <div class="text-center">
        <Mail size={32} class="mx-auto mb-3 text-blue-600 dark:text-blue-400" />
        <h3 class="mb-2 font-semibold text-gray-900 dark:text-white">
          New Articles
        </h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">
          Get notified when I publish new content
        </p>
      </div>

      <div class="text-center">
        <CheckCircle size={32} class="mx-auto mb-3 text-green-600 dark:text-green-400" />
        <h3 class="mb-2 font-semibold text-gray-900 dark:text-white">
          Tips & Tricks
        </h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">
          Exclusive coding tips and best practices
        </p>
      </div>

      <div class="text-center">
        <CheckCircle size={32} class="mx-auto mb-3 text-purple-600 dark:text-purple-400" />
        <h3 class="mb-2 font-semibold text-gray-900 dark:text-white">
          No Spam
        </h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">
          Quality over quantity, always
        </p>
      </div>
    </div>
  {/if}
</Container>