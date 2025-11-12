<script lang="ts">
  import { GithubIcon, LinkedinIcon, XIcon, Heart, Coffee } from 'lucide-svelte';

  const socialLinks = [
    { 
      href: 'https://X.com', 
      label: 'X',
      Component: XIcon
    },
    { 
      href: 'https://github.com', 
      label: 'GitHub',
      Component: GithubIcon
    },
    { 
      href: 'https://linkedin.com', 
      label: 'LinkedIn',
      Component: LinkedinIcon
    },
    { 
      href: 'https://codepen.io', 
      label: 'CodePen',
      icon: 'C'
    }
  ];
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

      <div class="flex items-center gap-4">
        {#each socialLinks as link}
          <a
            href={link.href}
            aria-label={link.label}
            target="_blank"
            rel="noopener noreferrer"
            class="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            {#if link.Component}
              <svelte:component this={link.Component} size={20} />
            {:else if link.icon === 'C'}
              <span class="text-lg font-bold">{link.icon}</span>
            {/if}
          </a>
        {/each}
      </div>
    </div>
  </div>
</footer>