<script lang="ts">
  type Props = {
    message: string;
  };

  let { message }: Props = $props();
</script>

<div class="py-12 text-center">
  <p class="text-gray-600 dark:text-gray-400">{message}</p>
</div>