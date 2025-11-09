<!-- 
  This is a Svelte component file (`.svelte`).
  It uses Tailwind CSS classes for styling.
  
  To use this, you would typically have Svelte and Tailwind CSS
  set up in your project environment (e.g., with SvelteKit or Vite).
-->
<script>
  let isOpen = false;

  // Toggle the mobile panel
  function toggleMenu() {
    isOpen = !isOpen;
  }

  function closeMenu() {
    isOpen = false;
  }

  // Navigation links data
  const navLinks = [
    { href: '#home', text: 'Home', icon: 'home' },
    { href: '#about', text: 'About', icon: 'info' },
    { href: '#services', text: 'Services', icon: 'briefcase' },
    { href: '#contact', text: 'Contact Us', icon: 'mail' },
  ];

  // A tiny helper to return simple SVG icons (keeps the component self-contained)
  function Icon({ name }) {
    if (name === 'home') return `<svg class=\"w-5 h-5\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 12l2-2m0 0l7-7 7 7M13 5v6h6\"></path></svg>`;
    if (name === 'info') return `<svg class=\"w-5 h-5\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z\"></path></svg>`;
    if (name === 'briefcase') return `<svg class=\"w-5 h-5\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 11V7m-6 4V7a2 2 0 012-2h8a2 2 0 012 2v4M3 21h18v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7z\"></path></svg>`;
    if (name === 'mail') return `<svg class=\"w-5 h-5\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z\"></path></svg>`;
    return '';
  }
</script>

<!-- 
  The `nav` element is sticky to keep it at the top.
  `z-50` ensures it stays above other content.
  `font-inter` is used as per the standard font preference.
-->
<nav class="shadow-md sticky top-0 z-50 font-inter rounded-b-lg" style="background: #77C381;">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">
      
      <!-- Logo Section -->
      <div class="flex-shrink-0">
        <a href="#home" class="text-2xl font-bold text-white hover:opacity-90 transition-opacity">
          MyLogo
        </a>
      </div>

      <!-- Desktop Navigation Links -->
      <!-- `hidden md:flex` hides this on mobile (md breakpoint) -->
      <div class="hidden md:flex md:items-center md:space-x-6">
        {#each navLinks as link}
          <a
            href={link.href}
            class="text-white hover:opacity-90 px-3 py-2 rounded-md text-sm font-medium transition-opacity duration-200"
          >
            {link.text}
          </a>
        {/each}
      </div>

      <!-- Mobile Menu Button (Hamburger) -->
      <!-- `md:hidden` shows this *only* on mobile -->
      <div class="md:hidden flex items-center">
        <button
          on:click={toggleMenu}
          aria-label="Toggle main menu"
          aria-expanded={isOpen}
          class="inline-flex items-center justify-center p-2 rounded-md text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        >
          <span class="sr-only">Open main menu</span>
          
          <!-- 
            Animated Hamburger/X Icon
            The three bars are animated using CSS classes toggled by Svelte.
            - `isOpen` adds `rotate-45` and `translate-y-2` (8px) to the top bar.
            - `isOpen` adds `opacity-0` to the middle bar.
            - `isOpen` adds `-rotate-45` and `-translate-y-2` (-8px) to the bottom bar.
            The `space-y-1.5` (6px) between the `h-0.5` (2px) bars is key for the 
            translation to land perfectly in the middle.
          -->
          <div class="space-y-1.5" aria-hidden="true">
            <div
              class="w-6 h-0.5 bg-white rounded-full transition-transform duration-300 ease-in-out"
              class:rotate-45={isOpen}
              class:translate-y-2={isOpen}
            ></div>
            <div
              class="w-6 h-0.5 bg-white rounded-full transition-opacity duration-300 ease-in-out"
              class:opacity-0={isOpen}
            ></div>
            <div
              class="w-6 h-0.5 bg-white rounded-full transition-transform duration-300 ease-in-out"
              class:-rotate-45={isOpen}
              class:-translate-y-2={isOpen}
            ></div>
          </div>
        </button>
      </div>

    </div>
  </div>

  <!-- 
    Mobile Menu Dropdown
    - Shows/hides based on `isOpen` state.
    - Uses `max-h` (max-height) for a smooth slide-down CSS transition.
    - `overflow-hidden` is crucial for the `max-h` transition to work.
  -->
  <!-- Mobile off-canvas panel: slides in from the right -->
  <div aria-hidden={!isOpen} class="md:hidden">
    <!-- backdrop -->
    <div
      on:click={closeMenu}
      class="fixed inset-0 bg-black bg-opacity-30 transition-opacity duration-300"
      style="opacity: {isOpen ? 1 : 0}; pointer-events: {isOpen ? 'auto' : 'none'}"
    ></div>

    <!-- panel -->
    <aside
      role="dialog"
      aria-modal="true"
      class="fixed top-0 right-0 h-full w-64 bg-white shadow-xl p-5 flex flex-col transition-transform duration-300 ease-in-out"
      style="transform: translateX({isOpen ? '0' : '100%'});"
    >
      <div class="flex items-center justify-between mb-6">
        <div class="text-lg font-semibold text-gray-800">Menu</div>
        <button on:click={closeMenu} class="p-2 text-gray-600 hover:text-gray-800 focus:outline-none">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </div>

      <nav class="flex-1">
        {#each navLinks as link, i}
          <a
            href={link.href}
            on:click={() => { closeMenu(); }}
            class="flex items-center gap-3 mb-3 p-2 rounded-md text-gray-800 hover:bg-gray-50 transition-all duration-300"
            style="transform: translateX({isOpen ? '0' : '20px'}); opacity: {isOpen ? 1 : 0}; transition-delay: {isOpen ? i * 60 : 0}ms"
          >
            {@html Icon({ name: link.icon })}
            <span class="text-base font-medium">{link.text}</span>
          </a>
        {/each}
      </nav>

      <div class="mt-auto text-sm text-gray-500">Tap a link to navigate</div>
    </aside>
  </div>
</nav>
