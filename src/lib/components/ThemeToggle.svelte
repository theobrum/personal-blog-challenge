<script lang="ts">
  import { Sun, Moon } from 'lucide-svelte';
  import { themeStore } from '$lib/state/theme.svelte';
  import { Theme } from '$lib/types';

  function handleToggle() {
    themeStore.toggle();
  }
</script>

<button
  onclick={handleToggle}
  aria-label="Toggle theme"
  class="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
>
  {#if themeStore.current === Theme.LIGHT}
    <Sun size={20} />
  {:else}
    <Moon size={20} />
  {/if}
</button>