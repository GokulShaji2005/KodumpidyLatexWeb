<script>

import { onMount } from 'svelte';
import logo from '$lib/assets/KlLatexFavi.png';
  let isOpen = false;
  let isScrolled = false;
  let heroHeight = 0;
  
  // Toggle the mobile menu
  function toggleMenu() {
    isOpen = !isOpen;
  }
  
  function closeMenu() {
    isOpen = false;
  }

  // Handle scroll behavior
  function handleScroll() {
    if (window.scrollY > heroHeight) {
      isScrolled = true;
    } else {
      isScrolled = false;
    }
  }

  // Smooth scroll to section
  function scrollToSection(id) {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  }

  onMount(() => {
    // Get hero section height for transparent navbar effect
    const hero = document.querySelector('#hero');
    if (hero) {
      heroHeight = hero.offsetHeight;
    }
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<nav
  class="fixed top-0 w-full transition-all duration-500 z-50"
  class:backdrop-blur-md={true}
  class:shadow-lg={isScrolled}
  class:border-b={isScrolled}
  class:border-emerald-100={isScrolled}
  style="background-color: {isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.95)'}"
>
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <div class="flex justify-between items-center h-16">
      <!-- Logo -->
      <div class="shrink-0">
        <a
          href="#hero"
          on:click={() => scrollToSection('#hero')}
          class="flex items-center hover:opacity-90 transition-opacity"
        >
          <img 
            src={logo} 
            alt="Kodumpidy Latex" 
            width="50"
            height="50"
            class="h-12 md:h-14 w-auto"
            style="filter: brightness(1.1);"
          />
        </a>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex md:items-center md:space-x-4">
        <a
          href="#about"
          on:click={() => scrollToSection('#about')}
          class="text-gray-700 hover:text-emerald-600 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-emerald-50"
        >
          About
        </a>
        <a
          href="#services"
          on:click={() => scrollToSection('#services')}
          class="text-gray-700 hover:text-emerald-600 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-emerald-50"
        >
          Services
        </a>
        <a
          href="#contact"
          on:click={() => scrollToSection('#contact')}
          class="bg-emerald-600 text-white hover:bg-emerald-700 px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Contact
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <!-- <div class="md:hidden relative z-50">
        <button
          on:click={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          class="p-2 rounded-md text-emerald-600 hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          <div class="w-6 h-6 relative flex items-center justify-center">
            <span
              class="absolute w-5 h-0.5 bg-current transform transition-all duration-300 ease-in-out"
              class:rotate-45={isOpen}
              class:translate-y-0={isOpen}
              style="transform: translateY({isOpen ? '0' : '-8px'}) {isOpen ? 'rotate(45deg)' : ''}"
            ></span>
            <span
              class="absolute w-5 h-0.5 bg-current transition-opacity duration-300 ease-in-out"
              class:opacity-0={isOpen}
            ></span>
            <span
              class="absolute w-5 h-0.5 bg-current transform transition-all duration-300 ease-in-out"
              class:-rotate-45={isOpen}
              class:translate-y-0={isOpen}
              style="transform: translateY({isOpen ? '0' : '8px'}) {isOpen ? 'rotate(-45deg)' : ''}"
            ></span>
          </div>
        </button>
      </div> -->

      <div class="md:hidden relative z-50">
  <button
    on:click={toggleMenu}
    aria-label="Toggle navigation menu"
    aria-expanded={isOpen}
    class="p-2 rounded-md text-emerald-600 hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
  >
    <div class="w-6 h-6 relative">

      <!-- Top bar -->
      <span
        class="absolute left-0 w-5 h-0.5 bg-current transition-all duration-500 ease-in-out"
        style="
          top: {isOpen ? '10px' : '4px'};
          transform: translateX({isOpen ? '2px' : '0'}) rotate({isOpen ? '45deg' : '0deg'});
        "
      ></span>

      <!-- Middle bar -->
      <span
        class="absolute left-0 w-5 h-0.5 bg-current transition-all duration-500 ease-in-out"
        style="
          opacity: {isOpen ? 0 : 1};
          top: 12px;
          transform: translateX({isOpen ? '6px' : '0'});
        "
      ></span>

      <!-- Bottom bar -->
      <span
        class="absolute left-0 w-5 h-0.5 bg-current transition-all duration-500 ease-in-out"
        style="
          top: {isOpen ? '10px' : '20px'};
          transform: translateX({isOpen ? '2px' : '0'}) rotate({isOpen ? '-45deg' : '0deg'});
        "
      ></span>

    </div>
  </button>
</div>

    </div>
  </div>

  <!-- Mobile Menu Panel -->
  
</nav>

{#if isOpen}
<div
  class="md:hidden fixed inset-0"
  style="z-index: 9999; top: 0; left: 0; right: 0; bottom: 0;"
>
  <!-- Backdrop -->
  <div
    role="presentation"
    class="absolute inset-0 bg-black/60
      transition-opacity duration-500"
    on:click={closeMenu}
    on:keydown={e => e.key === 'Escape' && closeMenu()}
  ></div>

  <!-- Panel -->
  <div
    class="absolute top-0 right-0 w-64 h-full bg-white shadow-2xl transform transition-transform duration-300 ease-in-out"
    style="z-index: 10000;"
  >
      <div class="p-5">
        <div class="flex items-center justify-between mb-8">
          <h2 class="text-lg font-bold text-gray-800">Menu</h2>
          <button
            on:click={closeMenu}
            class="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <span class="sr-only">Close menu</span>
            <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        
        <nav class="space-y-3">
          {#each ['About', 'Services', 'Contact'] as section}
            <a
              href="#{section.toLowerCase()}"
              on:click={() => scrollToSection(`#${section.toLowerCase()}`)}
              class="block px-4 py-3 text-gray-700 hover:bg-emerald-600 hover:text-white rounded-lg transition-all duration-200 font-semibold"
            >
              {section}
            </a>
          {/each}
        </nav>
      </div>
    </div>
  </div>
{/if}