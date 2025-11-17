<script lang="ts">
  import { Sun, Moon } from 'lucide-svelte';
  import { themeStore } from '$lib/state/theme.svelte.ts';
</script>

<button
  onclick={() => themeStore.toggle()}
  aria-label="Toggle theme"
  class="flex h-10 w-10 items-center justify-center rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--background))] text-[hsl(var(--foreground))] transition-colors hover:bg-[hsl(var(--muted))]"
>
  {#if themeStore.isDark}
    <Sun size={20} />
  {:else}
    <Moon size={20} />
  {/if}
</button>