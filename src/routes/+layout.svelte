<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { themeStore } from '$lib/state/theme.svelte';
  import '../app.css';

  let { children } = $props();

  $effect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', themeStore.isDark);
    }
  });
</script>

<div class="mx-auto min-h-screen w-full max-w-[1400px] bg-[hsl(var(--background))] px-4 pt-6 md:px-4 md:pt-8 lg:px-6">
  <div class="mx-auto max-w-full overflow-hidden rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))] sm:max-w-[620] md:max-w-[720px] lg:max-w-[640px]">
    <Header />
  </div>
  
  <div class="mx-auto max-w-full border border-t-0 border-[hsl(var(--border))] bg-[hsl(var(--background))] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[620px]">
    <main id="main">
      {@render children()}
    </main>
    
    <Footer />
  </div>
</div>