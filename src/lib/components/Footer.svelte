<script lang="ts">
  import SocialLinks from './SocialLinks.svelte';
  import { Heart, Coffee } from 'lucide-svelte';
</script>

<!-- SIN border-t -->
<footer class="px-4 py-4 md:px-4">
  <div class="flex flex-row items-center justify-between gap-4">
    <p class="flex items-center gap-1 text-[12px] text-[hsl(var(--muted-foreground))] sm:text-sm md:text-base">
      Made with 
      <Heart size={14} class="text-red-500 sm:h-4 sm:w-4 md:h-5 md:w-5" fill="currentColor" />
      and 
      <Coffee size={14} class="text-amber-600 sm:h-4 sm:w-4 md:h-5 md:w-5" />
    </p>

    <!-- Wrapper para achicar iconos en mobile -->
    <div class="[&_svg]:h-2 [&_svg]:w-2 md:[&_svg]:h-5 md:[&_svg]:w-5">
      <SocialLinks />
    </div>
  </div>
</footer>