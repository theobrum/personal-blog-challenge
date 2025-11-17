<script lang="ts">
  import { Mail, Github, Linkedin, ExternalLink, Code2, Mountain, BookOpen, Pencil } from 'lucide-svelte';
  import Container from '$lib/components/Container.svelte';
  import { SITE_CONFIG } from '$lib/config/content';
</script>

<svelte:head>
  <title>About - {SITE_CONFIG.author.name}</title>
  <meta name="description" content="Learn more about {SITE_CONFIG.author.name} and her journey as a front-end developer." />
</svelte:head>

<Container>
  <header class="mb-12">
    <h1 class="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
      About Me
    </h1>
    <p class="text-xl text-gray-600 dark:text-gray-400">
      Front-end developer, outdoor enthusiast, and lifelong learner
    </p>
  </header>

  <section class="mb-12">
    <h2 class="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
      My Story
    </h2>
    <div class="space-y-4 text-gray-700 dark:text-gray-300">
      {#each SITE_CONFIG.author.bio as paragraph}
        <p>{paragraph}</p>
      {/each}
    </div>
  </section>

  <section class="mb-12">
    <h2 class="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
      What I'm Passionate About
    </h2>
    <div class="grid gap-6 md:grid-cols-2">
      <div class="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
        <div class="mb-3 flex items-center gap-2">
          <Code2 size={24} class="text-blue-600 dark:text-blue-400" />
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            Development
          </h3>
        </div>
        <p class="text-gray-700 dark:text-gray-300">
          Building responsive, accessible web applications with modern technologies like React, SvelteKit, and TypeScript.
        </p>
      </div>

      <div class="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
        <div class="mb-3 flex items-center gap-2">
          <Mountain size={24} class="text-green-600 dark:text-green-400" />
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            Outdoor Activities
          </h3>
        </div>
        <p class="text-gray-700 dark:text-gray-300">
          Hiking through mountains, rock climbing challenging routes, and finding balance between screen time and nature time.
        </p>
      </div>

      <div class="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
        <div class="mb-3 flex items-center gap-2">
          <BookOpen size={24} class="text-purple-600 dark:text-purple-400" />
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            Continuous Learning
          </h3>
        </div>
        <p class="text-gray-700 dark:text-gray-300">
          Always exploring new coding techniques, design patterns, and best practices to improve my craft.
        </p>
      </div>

      <div class="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
        <div class="mb-3 flex items-center gap-2">
          <Pencil size={24} class="text-amber-600 dark:text-amber-400" />
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            Writing & Sharing
          </h3>
        </div>
        <p class="text-gray-700 dark:text-gray-300">
          Documenting my journey, sharing lessons learned, and hopefully inspiring other developers along the way.
        </p>
      </div>
    </div>
  </section>

  <section class="mb-12">
    <h2 class="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
      Let's Connect
    </h2>
    <p class="mb-6 text-gray-700 dark:text-gray-300">
      I'm always interested in connecting with fellow developers, discussing new ideas, or just chatting about code and climbing.
    </p>
    
    <div class="flex flex-wrap gap-4">
      <a
        href={`mailto:${SITE_CONFIG.author.email}`}
        class="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-gray-700 transition-colors hover:border-gray-400 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:bg-gray-800"
      >
        <Mail size={20} />
        Email Me
      </a>
      
      {#if SITE_CONFIG.author.social.github}
        <a
          href={SITE_CONFIG.author.social.github}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-gray-700 transition-colors hover:border-gray-400 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:bg-gray-800"
        >
          <Github size={20} />
          GitHub
          <ExternalLink size={16} />
        </a>
      {/if}
      
      {#if SITE_CONFIG.author.social.linkedin}
        <a
          href={SITE_CONFIG.author.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-gray-700 transition-colors hover:border-gray-400 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:bg-gray-800"
        >
          <Linkedin size={20} />
          LinkedIn
          <ExternalLink size={16} />
        </a>
      {/if}
    </div>
  </section>

  <section class="rounded-lg bg-blue-50 p-8 dark:bg-gray-800">
    <h2 class="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
      Want to Stay Updated?
    </h2>
    <p class="mb-6 text-gray-700 dark:text-gray-300">
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