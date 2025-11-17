<script lang="ts">
  import SocialLinks from './SocialLinks.svelte';
  import { Heart, Coffee } from 'lucide-svelte';
</script>

<footer class="border-t border-[hsl(var(--border))] px-6 py-8 md:px-8">
  <div class="flex flex-col items-center justify-between gap-4 md:flex-row">
    <p class="flex items-center gap-1 text-sm text-[hsl(var(--muted-foreground))]">
      Made with 
      <Heart size={16} class="text-red-500" fill="currentColor" />
      and 
      <Coffee size={16} class="text-amber-600" />
    </p>

    <SocialLinks />
  </div>
</footer>