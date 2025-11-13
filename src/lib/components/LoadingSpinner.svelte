<script lang="ts">
  type Props = {
    message?: string;
  };

  let { message = 'Loading...' }: Props = $props();
</script>

<div class="flex items-center justify-center py-12">
  <div class="text-center">
    <div
      class="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-500"
    ></div>
    <p class="text-gray-600 dark:text-gray-400">{message}</p>
  </div>
</div>