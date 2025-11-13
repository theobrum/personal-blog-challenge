<script lang="ts">
  import { GithubIcon, LinkedinIcon, XIcon } from 'lucide-svelte';
  import { SITE_CONFIG } from '$lib/config/content';

  const socialLinks = [
    { 
      href: SITE_CONFIG.author.social.twitter, 
      label: 'X',
      Component: XIcon
    },
    { 
      href: SITE_CONFIG.author.social.github, 
      label: 'GitHub',
      Component: GithubIcon
    },
    { 
      href: SITE_CONFIG.author.social.linkedin, 
      label: 'LinkedIn',
      Component: LinkedinIcon
    },
    { 
      href: SITE_CONFIG.author.social.codepen, 
      label: 'CodePen',
      icon: 'C'
    }
  ];
</script>

<div class="flex gap-3">
  {#each socialLinks as link}
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      class="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
      aria-label={link.label}
    >
      {#if link.Component}
        <svelte:component this={link.Component} size={20} />
      {:else if link.icon}
        <span class="text-lg font-bold">{link.icon}</span>
      {/if}
    </a>
  {/each}
</div>