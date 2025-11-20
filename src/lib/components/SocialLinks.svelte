<script lang="ts">
  import { X, GithubIcon, LinkedinIcon, Code } from 'lucide-svelte';
  import { SITE_CONFIG } from '$lib/config/content';
</script>

<div class="flex items-center gap-3">
  <a
    href={SITE_CONFIG.author.social.X}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="X"
    class="rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-2 text-[hsl(var(--foreground))] transition-colors hover:bg-[hsl(var(--muted))] hover:text-[hsl(var(--primary))]"
  >
    <X size={20} />
  </a>
  <a
    href={SITE_CONFIG.author.social.github}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
    class="rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-2 text-[hsl(var(--foreground))] transition-colors hover:bg-[hsl(var(--muted))] hover:text-[hsl(var(--primary))]"
  >
    <GithubIcon size={20} />
  </a>
  <a
    href={SITE_CONFIG.author.social.linkedin}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    class="rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-2 text-[hsl(var(--foreground))] transition-colors hover:bg-[hsl(var(--muted))] hover:text-[hsl(var(--primary))]"
  >
    <LinkedinIcon size={20} />
  </a>
  <a
    href={SITE_CONFIG.author.social.codepen}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="CodePen"
    class="rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-2 text-[hsl(var(--foreground))] transition-colors hover:bg-[hsl(var(--muted))] hover:text-[hsl(var(--primary))]"
  >
    <Code size={20} />
  </a>
</div>