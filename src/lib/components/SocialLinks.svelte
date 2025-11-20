<script lang="ts">
  import { XIcon, GithubIcon, LinkedinIcon, Code } from 'lucide-svelte';
  import { SITE_CONFIG } from '$lib/config/content';

  const links = [
    { href: SITE_CONFIG.author.social.X, icon: XIcon, label: 'X' },
    { href: SITE_CONFIG.author.social.github, icon: GithubIcon, label: 'GitHub' },
    { href: SITE_CONFIG.author.social.linkedin, icon: LinkedinIcon, label: 'LinkedIn' },
    { href: SITE_CONFIG.author.social.codepen, icon: Code, label: 'CodePen' }
  ];
</script>

<div class="flex items-center gap-3">
  {#each links as link}
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={link.label}
      class="rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-2 text-[hsl(var(--foreground))] transition-colors hover:bg-[hsl(var(--muted))] hover:text-[hsl(var(--primary))]"
    >
      <link.icon size={20} />
    </a>
  {/each}
</div>