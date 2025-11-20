<script lang="ts">
  import type { ComponentType } from 'svelte';
  
  interface Props {
    icon: ComponentType;
    title: string;
    description: string;
    iconClass?: string;
  }
  
  let { icon: Icon, title, description, iconClass = 'text-blue-600 dark:text-blue-400' }: Props = $props();
</script>

<div class="rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6 transition-shadow hover:shadow-md">
  <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
    <Icon size={24} class={iconClass} />
  </div>
  <h3 class="mb-2 text-xl font-semibold text-[hsl(var(--foreground))]">
    {title}
  </h3>
  <p class="text-[hsl(var(--muted-foreground))]">
    {description}
  </p>
</div>