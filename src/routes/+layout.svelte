<script lang="ts">
  import '../app.css';
  import { themeStore } from '$lib/state/theme.svelte.ts';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let { children } = $props();

  const currentTheme = themeStore.current;
</script>

<div class="flex min-h-screen flex-col">
  <Header />
  
  <main class="flex-1">
    {@render children()}
  </main>
  
  <Footer />
</div>