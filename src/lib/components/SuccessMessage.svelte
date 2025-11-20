<script lang="ts">
  interface Props {
    message: string;
  }

  let { message }: Props = $props();
</script>

<div 
  class="rounded-lg border border-green-200 bg-green-50 p-4 text-sm font-medium text-green-800 dark:border-green-800 dark:bg-green-950 dark:text-green-200" 
  role="status"
>
  {message}
</div>