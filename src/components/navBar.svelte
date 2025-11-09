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
  class="fixed top-0 w-full z-50 transition-all duration-300"
  class:bg-[#77C381]={isScrolled}
  class:shadow-md={isScrolled}
style="background-color: #F5F5E9;"

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
            class="h-10 md:h-10 w-auto"
            style="filter: brightness(1.1);"
          />
        </a>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex md:items-center md:space-x-4">
        <a
          href="#about"
          on:click={() => scrollToSection('#about')}
          class="text-[#2E7D32] hover:text-[#77C381] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
        >
          About
        </a>
        <a
          href="#services"
          on:click={() => scrollToSection('#services')}
          class="text-[#2E7D32] hover:text-[#77C381] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
        >
          Services
        </a>
        <a
          href="#contact"
          on:click={() => scrollToSection('#contact')}
          class="text-[#2E7D32] hover:text-[#77C381] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
        >
          Contact
        </a>
        <!-- <a
          href="#learn-more"
          on:click={() => scrollToSection('#learn-more')}
          class="text-[#2E7D32] hover:text-[#77C381] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
        >
          Learn More
        </a> -->
      </div>

      <!-- Mobile Menu Button -->
      <div class="md:hidden">
        <button
          on:click={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          class="p-2 rounded-md text-[#2E7D32] hover:text-[#77C381] focus:outline-none focus:ring-2 focus:ring-white"
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
      </div>
    </div>
  </div>

  <!-- Mobile Menu Panel -->
  <div
    aria-hidden={!isOpen}
    class="md:hidden fixed inset-0 overflow-hidden"
    style="pointer-events: {isOpen ? 'auto' : 'none'};"
  >
    <!-- Backdrop -->
    <div
      role="presentation"
      class="absolute inset-0 bg-black bg-opacity-25 transition-opacity duration-300"
      style="opacity: {isOpen ? 1 : 0};"
      on:click={closeMenu}
      on:keydown={e => e.key === 'Escape' && closeMenu()}
    ></div>

    <!-- Panel -->
    <div
      class="absolute top-0 right-0 w-64 h-full bg-white transform transition-transform duration-300 ease-in-out"
      style="transform: translateX({isOpen ? '0' : '100%'});"
    >
      <div class="p-5">
        <div class="flex items-center justify-between mb-8">
          <h2 class="text-lg font-semibold text-gray-900">Menu</h2>
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
          {#each ['About', 'Services', 'Contact'] as section, i}
            <a
              href="#{section.toLowerCase()}"
              on:click={() => scrollToSection(`#${section.toLowerCase()}`)}
              class="block px-4 py-2 text-gray-700 hover:bg-[#77C381] hover:text-white rounded-md transition-all duration-200 transform"
              style="opacity: {isOpen ? 1 : 0}; transform: translateX({isOpen ? '0' : '20px'}); transition-delay: {i * 75}ms"
            >
              {section}
            </a>
          {/each}
        </nav>
      </div>
    </div>
  </div>
</nav>
