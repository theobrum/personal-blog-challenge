<script lang="ts">
  import { Twitter, Github, Linkedin, Code } from 'lucide-svelte';
  import { SITE_CONFIG } from '$lib/config/content';
</script>

<div class="flex items-center gap-3">
  <a
    href={SITE_CONFIG.author.social.twitter}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Twitter"
    class="rounded-lg p-2 text-[hsl(var(--foreground))] transition-colors hover:bg-[hsl(var(--muted))] hover:text-[hsl(var(--primary))]"
  >
    <Twitter size={20} />
  </a>
  <a
    href={SITE_CONFIG.author.social.github}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
    class="rounded-lg p-2 text-[hsl(var(--foreground))] transition-colors hover:bg-[hsl(var(--muted))] hover:text-[hsl(var(--primary))]"
  >
    <Github size={20} />
  </a>
  <a
    href={SITE_CONFIG.author.social.linkedin}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    class="rounded-lg p-2 text-[hsl(var(--foreground))] transition-colors hover:bg-[hsl(var(--muted))] hover:text-[hsl(var(--primary))]"
  >
    <Linkedin size={20} />
  </a>
  <a
    href={SITE_CONFIG.author.social.codepen}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="CodePen"
    class="rounded-lg p-2 text-[hsl(var(--foreground))] transition-colors hover:bg-[hsl(var(--muted))] hover:text-[hsl(var(--primary))]"
  >
    <Code size={20} />
  </a>
</div>