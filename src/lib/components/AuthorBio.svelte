<script lang="ts">
  import { Hand } from 'lucide-svelte';
  import SocialLinks from './SocialLinks.svelte';
  import { SITE_CONFIG } from '$lib/config/content';
</script>

<section class="mb-12">
  <h1 class="mb-4 flex items-center gap-2 text-4xl font-bold text-[hsl(var(--foreground))] md:text-5xl">
    Hi, I'm {SITE_CONFIG.author.name}
    <Hand size={40} class="inline-block" />
  </h1>
  
  <div class="mb-6 space-y-4 text-lg text-[hsl(var(--muted-foreground))] leading-relaxed">
    {#each SITE_CONFIG.author.bio as paragraph}
      <p>{paragraph}</p>
    {/each}
  </div>

  <SocialLinks />
</section>