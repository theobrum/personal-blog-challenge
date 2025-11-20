<script lang="ts">
  import { Mail, GithubIcon, LinkedinIcon, ExternalLink, Code2, Mountain, BookOpen, Pencil } from 'lucide-svelte';
  import Container from '$lib/components/Container.svelte';
  import { SITE_CONFIG } from '$lib/config/content';
  import Divider from '$lib/components/Divider.svelte';

  const passions = [
    {
      icon: Code2,
      iconClass: 'text-blue-600 dark:text-blue-400',
      title: 'Development',
      description: 'Building responsive, accessible web applications with modern technologies like React, SvelteKit, and TypeScript.'
    },
    {
      icon: Mountain,
      iconClass: 'text-green-600 dark:text-green-400',
      title: 'Outdoor Activities',
      description: 'Hiking through mountains, rock climbing challenging routes, and finding balance between screen time and nature time.'
    },
    {
      icon: BookOpen,
      iconClass: 'text-purple-600 dark:text-purple-400',
      title: 'Continuous Learning',
      description: 'Always exploring new coding techniques, design patterns, and best practices to improve my craft.'
    },
    {
      icon: Pencil,
      iconClass: 'text-amber-600 dark:text-amber-400',
      title: 'Writing & Sharing',
      description: 'Documenting my journey, sharing lessons learned, and hopefully inspiring other developers along the way.'
    }
  ];

  const socialLinks = [
    {
      href: SITE_CONFIG.author.social.github,
      icon: GithubIcon,
      label: 'GitHub',
      show: !!SITE_CONFIG.author.social.github
    },
    {
      href: SITE_CONFIG.author.social.linkedin,
      icon: LinkedinIcon,
      label: 'LinkedIn',
      show: !!SITE_CONFIG.author.social.linkedin
    }
  ];
</script>

<svelte:head>
  <title>About - {SITE_CONFIG.author.name}</title>
  <meta name="description" content="Learn more about {SITE_CONFIG.author.name} and her journey as a front-end developer." />
</svelte:head>

<Container>
  <header class="mb-12">
    <h1 class="mb-4 text-4xl font-bold text-[hsl(var(--foreground))] md:text-5xl">
      About Me
    </h1>
    <p class="text-xl text-[hsl(var(--muted-foreground))]">
      Front-end developer, outdoor enthusiast, and lifelong learner
    </p>
  </header>

  <section class="mb-12">
    <h2 class="mb-6 text-2xl font-bold text-[hsl(var(--foreground))]">
      My Story
    </h2>
    <div class="space-y-4 text-[hsl(var(--muted-foreground))] leading-relaxed">
      {#each SITE_CONFIG.author.bio as paragraph}
        <p>{paragraph}</p>
      {/each}
    </div>
  </section>

  <section class="mb-12">
    <h2 class="mb-6 text-2xl font-bold text-[hsl(var(--foreground))]">
      What I'm Passionate About
    </h2>
    <div class="grid gap-6 md:grid-cols-2">
      {#each passions as passion}
        <div class="rounded-lg border border-[hsl(var(--border))] p-6">
          <div class="mb-3 flex items-center gap-2">
            <passion.icon size={24} class={passion.iconClass} />
            <h3 class="text-xl font-semibold text-[hsl(var(--foreground))]">
              {passion.title}
            </h3>
          </div>
          <p class="text-[hsl(var(--muted-foreground))]">
            {passion.description}
          </p>
        </div>
      {/each}
    </div>
  </section>

  <section class="mb-12">
    <h2 class="mb-6 text-2xl font-bold text-[hsl(var(--foreground))]">
      Let's Connect
    </h2>
    <p class="mb-6 text-[hsl(var(--muted-foreground))]">
      I'm always interested in connecting with fellow developers, discussing new ideas, or just chatting about code and climbing.
    </p>
    
    <div class="flex flex-wrap gap-4">
      <a
        href={`mailto:${SITE_CONFIG.author.email}`}
        class="inline-flex items-center gap-2 rounded-lg border border-[hsl(var(--border))] px-4 py-2 text-[hsl(var(--foreground))] transition-colors hover:bg-[hsl(var(--muted))]"
      >
        <Mail size={20} />
        Email Me
      </a>
      
      {#each socialLinks as link}
        {#if link.show}
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 rounded-lg border border-[hsl(var(--border))] px-4 py-2 text-[hsl(var(--foreground))] transition-colors hover:bg-[hsl(var(--muted))]"
          >
            <link.icon size={20} />
            {link.label}
            <ExternalLink size={16} />
          </a>
        {/if}
      {/each}
    </div>
  </section>

  <section class="rounded-lg bg-[hsl(var(--muted))] p-8">
    <h2 class="mb-4 text-2xl font-bold text-[hsl(var(--foreground))]">
      Want to Stay Updated?
    </h2>
    <p class="mb-6 text-[hsl(var(--muted-foreground))]">
      Subscribe to my newsletter to get new articles delivered straight to your inbox.
    </p>
    <a
      href="/newsletter"
      class="inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
    >
      Subscribe to Newsletter
    </a>
  </section>
</Container>

<Divider />