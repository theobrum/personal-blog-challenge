<script lang="ts">
  type Props = {
    message: string;
  };

  let { message }: Props = $props();
</script>

<div class="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
  <p class="text-red-600 dark:text-red-400">{message}</p>
</div>