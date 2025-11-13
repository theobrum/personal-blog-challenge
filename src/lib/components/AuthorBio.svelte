<script lang="ts">
  import { Hand } from 'lucide-svelte';
  import SocialLinks from './SocialLinks.svelte';
  import { SITE_CONFIG } from '$lib/config/content';

  type Props = {
    showSocialLinks?: boolean;
  };

  let { showSocialLinks = true }: Props = $props();
</script>

<section class="mb-16">
  <h1 class="mb-6 flex items-center gap-3 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
    Hi, I'm {SITE_CONFIG.author.name}
    <Hand size={36} />
  </h1>
  
  <div class="space-y-4 text-gray-700 dark:text-gray-300">
    {#each SITE_CONFIG.author.bio as paragraph}
      <p>{paragraph}</p>
    {/each}
  </div>

  {#if showSocialLinks}
    <div class="mt-6">
      <SocialLinks />
    </div>
  {/if}
</section>