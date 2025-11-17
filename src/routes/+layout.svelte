<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { themeStore } from '$lib/state/theme.svelte.ts';
  import '../app.css';

  let { children } = $props();

  $effect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', themeStore.isDark);
    }
  });
</script>

<!-- Contenedor externo con padding -->
<div class="min-h-screen bg-[hsl(var(--background))] px-4 py-6 md:px-6 md:py-8">
  <!-- Contenedor principal con borde -->
  <div class="mx-auto max-w-[900px] border border-[hsl(var(--border))] bg-[hsl(var(--background))]">
    <Header />
    
    <main>
      {@render children()}
    </main>
    
    <Footer />
  </div>
</div>