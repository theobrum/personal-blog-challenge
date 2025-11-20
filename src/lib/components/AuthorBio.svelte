<script lang="ts">
  import { Hand } from 'lucide-svelte';
  import SocialLinks from './SocialLinks.svelte';
  import { SITE_CONFIG } from '$lib/config/content';
</script>

<section class="mb-1">
  <h1 class="mb-4 flex items-center gap-2 text-2xl font-bold text-[hsl(var(--foreground))] sm:text-3xl md:text-4xl">
    <span class="relative inline-block">
      <span class="absolute top-5 left-0 right-0 h-2 bg-[#27a6f5] opacity-85 sm:top-6 min-w-50 sm:min-w-72 md:min-w-74 md:top-8 md:h-3"></span>
      <span class="relative">Hi, I'm {SITE_CONFIG.author.name}</span>
    </span>
    <Hand size={30} class="inline-block sm:h-9 sm:w-9 md:h-10 md:w-10 z-10" />
  </h1>
  
  <div class="mb-6 space-y-4 text-lg leading-relaxed text-[hsl(var(--muted-foreground))]">
    {#each SITE_CONFIG.author.bio as paragraph}
      <p>{paragraph}</p>
    {/each}
  </div>

  <SocialLinks />
</section>