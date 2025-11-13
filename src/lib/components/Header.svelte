<script lang="ts">
  import { Menu, X } from 'lucide-svelte';
  import ThemeToggle from './ThemeToggle.svelte';
  
  let mobileMenuOpen = $state(false);
  
  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }
  
  function closeMobileMenu() {
    mobileMenuOpen = false;
  }
  
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
    { href: '/newsletter', label: 'Newsletter' }
  ];
</script>

<header class="border-b border-gray-200 dark:border-gray-800">
  <div class="mx-auto max-w-5xl px-4 py-4">
    <div class="flex items-center justify-between">
      <a href="/" class="flex items-center">
        <!-- <img
          src={avatar}
          alt="Profile"
          class="h-12 w-12 rounded-full object-cover"
        /> -->
      </a>

      <nav class="hidden md:flex md:items-center md:gap-8">
        {#each navLinks as link}
          <a
            href={link.href}
            class="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            {link.label}
          </a>
        {/each}
      </nav>

      <div class="flex items-center gap-3">
        <ThemeToggle />
        
        <button
          onclick={toggleMobileMenu}
          aria-label="Toggle menu"
          class="flex h-10 w-10 items-center justify-center text-gray-700 dark:text-gray-300 md:hidden"
        >
          {#if mobileMenuOpen}
            <X size={24} />
          {:else}
            <Menu size={24} />
          {/if}
        </button>
      </div>
    </div>

    {#if mobileMenuOpen}
      <nav class="mt-4 flex flex-col gap-4 md:hidden">
        {#each navLinks as link}
          <a
            href={link.href}
            onclick={closeMobileMenu}
            class="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            {link.label}
          </a>
        {/each}
      </nav>
    {/if}
  </div>
</header>