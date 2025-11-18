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

<div class="mx-auto max-w-[900px] bg-[hsl(var(--background))] px-4 pt-6 md:px-6 md:pt-8">
  <!-- Header más ancho, con borde y redondeado -->
  <div class="mx-auto max-w-[640px] overflow-hidden rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))]">
    <Header />
  </div>
  
  <!-- Contenedor principal SIN rounded, SIN mb -->
  <div class="mx-auto max-w-[620px] border border-t-0 border-[hsl(var(--border))] bg-[hsl(var(--background))]">
    <main>
      {@render children()}
    </main>
    
    <Footer />
  </div>
</div>