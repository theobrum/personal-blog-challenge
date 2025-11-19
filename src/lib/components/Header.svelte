<script lang="ts">
  import { page } from '$app/state';
  import { Menu, X } from 'lucide-svelte';
  import ThemeToggle from './ThemeToggle.svelte';
  import Paulina from '$lib/assets/images/retrato-mujer.jpg';
  
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

  function isActive(href: string) {
    return page.url.pathname === href;
  }
</script>

<header class="px-1 py-1 md:px-1">
  <div class="flex items-center justify-between">
    <!-- Avatar a la izquierda -->
    <a href="/" class="flex items-center gap-3">
      <img
        src={Paulina}
        alt="Paulina"
        class="h-10 w-10 rounded-lg object-cover"
      />
    </a>

    <!-- Nav y theme toggle a la derecha -->
    <div class="flex items-center gap-3">
      <nav class="hidden md:flex md:items-center md:gap-8">
        {#each navLinks as link}
          <a
            href={link.href}
            class="relative text-sm font-medium text-[hsl(var(--foreground))] transition-colors hover:text-[hsl(var(--primary))]"
          >
            {link.label}
            {#if isActive(link.href)}
              <span class="absolute top-[18px] left-0 right-0 h-0.5 bg-[#27a6f5] opacity-90 md:h-1"></span>
            {/if}
          </a>
        {/each}
      </nav>

      <!-- Hamburguesa ANTES de ThemeToggle en mobile -->
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

      <ThemeToggle />
    </div>
  </div>

  {#if mobileMenuOpen}
    <nav class="mt-4 flex flex-col gap-4 border-t border-[hsl(var(--border))] pt-4 md:hidden">
      {#each navLinks as link}
        <a
          href={link.href}
          onclick={closeMobileMenu}
          class="relative text-sm font-medium text-[hsl(var(--foreground))] transition-colors hover:text-[hsl(var(--primary))]"
        >
          {link.label}
          {#if isActive(link.href)}
            <span class="absolute bottom-0 left-0 right-0 h-1 bg-[#27a6f5] opacity-90"></span>
          {/if}
        </a>
      {/each}
    </nav>
  {/if}
</header>