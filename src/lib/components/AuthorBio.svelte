<script lang="ts">
  import { Hand, Twitter, Github, Linkedin, Code } from 'lucide-svelte';
  import { SITE_CONFIG } from '$lib/config/content';
</script>

<section class="mb-1">
  <h1 class="mb-4 flex items-center gap-2 text-4xl font-bold text-[hsl(var(--foreground))] md:text-3xl">
    <span class="relative inline-block">
      <span class="absolute top-7 left-0 right-0 h-2 min-w-64 bg-[#27a6f5] opacity-85 md:h-3"></span>
      <span class="relative">Hi, I'm {SITE_CONFIG.author.name}</span>
    </span>
    <Hand size={30} class="inline-block" />
  </h1>
  
  <div class="mb-6 space-y-4 text-lg leading-relaxed text-[hsl(var(--muted-foreground))]">
    {#each SITE_CONFIG.author.bio as paragraph}
      <p>{paragraph}</p>
    {/each}
  </div>

  <!-- Iconos sociales con borde y fondo -->
  <div class="flex items-center gap-3">
    <a
      href={SITE_CONFIG.author.social.twitter}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Twitter"
      class="rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-2 text-[hsl(var(--foreground))] transition-colors hover:bg-[hsl(var(--muted))] hover:text-[hsl(var(--primary))]"
    >
      <Twitter size={20} />
    </a>
    <a
      href={SITE_CONFIG.author.social.github}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      class="rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-2 text-[hsl(var(--foreground))] transition-colors hover:bg-[hsl(var(--muted))] hover:text-[hsl(var(--primary))]"
    >
      <Github size={20} />
    </a>
    <a
      href={SITE_CONFIG.author.social.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      class="rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-2 text-[hsl(var(--foreground))] transition-colors hover:bg-[hsl(var(--muted))] hover:text-[hsl(var(--primary))]"
    >
      <Linkedin size={20} />
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
</section>