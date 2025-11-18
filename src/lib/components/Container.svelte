<script lang="ts">
  interface Props {
    children?: import('svelte').Snippet;
    class?: string;
  }
  
  let { children, class: className = '' }: Props = $props();
</script>

<div class="px-6 py-8 md:px-4 md:py-12 {className}">
  {@render children?.()}
</div>