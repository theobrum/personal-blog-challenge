<script lang="ts">
  import { Heart, Coffee } from 'lucide-svelte';
  import SocialLinks from './SocialLinks.svelte';
</script>

<footer class="border-t border-gray-200 dark:border-gray-800">
  <div class="mx-auto max-w-5xl px-4 py-8">
    <div class="flex flex-col items-center justify-between gap-4 sm:flex-row">
      <p class="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
        Made with 
        <Heart size={16} class="fill-red-500 text-red-500" />
        and 
        <Coffee size={16} />
      </p>

      <SocialLinks />
    </div>
  </div>
</footer>