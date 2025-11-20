<script lang="ts">
  interface Props {
    children?: import('svelte').Snippet;
    class?: string;
  }
  
  let { children, class: className = '' }: Props = $props();
</script>

<div class="px-4 py-6 md:px-4 md:py-8 lg:px-4 lg:py-12 {className}">
  {@render children?.()}
</div>