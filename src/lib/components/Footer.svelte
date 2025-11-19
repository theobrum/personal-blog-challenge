<script lang="ts">
  import SocialLinks from './SocialLinks.svelte';
  import { Heart, Coffee } from 'lucide-svelte';
</script>

<!-- SIN border-t -->
<footer class="px-6 py-4 md:px-4">
  <div class="flex flex-row items-center justify-between gap-4">
    <p class="flex items-center gap-1 text-sm text-[hsl(var(--muted-foreground))]">
      Made with 
      <Heart size={16} class="text-red-500" fill="currentColor" />
      and 
      <Coffee size={16} class="text-amber-600" />
    </p>

    <!-- Wrapper para achicar iconos en mobile -->
    <div class="[&_svg]:h-2 [&_svg]:w-2 md:[&_svg]:h-5 md:[&_svg]:w-5">
      <SocialLinks />
    </div>
  </div>
</footer>