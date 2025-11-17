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

<header class="border-b border-[hsl(var(--border))] px-6 py-4 md:px-8">
  <div class="flex items-center justify-between">
    <a href="/" class="text-xl font-bold text-[hsl(var(--foreground))] transition-colors hover:text-[hsl(var(--primary))]">
      Paulina
    </a>

    <nav class="hidden md:flex md:items-center md:gap-8">
      {#each navLinks as link}
        <a
          href={link.href}
          class="text-sm font-medium text-[hsl(var(--foreground))] transition-colors hover:text-[hsl(var(--primary))]"
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
        class="flex h-10 w-10 items-center justify-center text-[hsl(var(--foreground))] transition-colors hover:text-[hsl(var(--primary))] md:hidden"
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
    <nav class="mt-4 flex flex-col gap-4 border-t border-[hsl(var(--border))] pt-4 md:hidden">
      {#each navLinks as link}
        <a
          href={link.href}
          onclick={closeMobileMenu}
          class="text-sm font-medium text-[hsl(var(--foreground))] transition-colors hover:text-[hsl(var(--primary))]"
        >
          {link.label}
        </a>
      {/each}
    </nav>
  {/if}
</header>