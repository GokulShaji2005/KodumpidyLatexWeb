<script>
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  
  let isVisible = false;
  let parallaxOffset = 0;


  function handleParallax(e) {
    if (window.innerWidth >= 768) {  // Only on desktop
      parallaxOffset = window.scrollY * 0.5;
    }
  }

  onMount(() => {
    // Trigger animations after mount
    isVisible = true;
    
    // Setup parallax
    window.addEventListener('scroll', handleParallax);
    
    return () => {
      window.removeEventListener('scroll', handleParallax);
    };
  });

  // Smooth scroll to About section
  function scrollToAbout() {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>

<!-- <section 
  id="hero" 
  class="relative min-h-screen flex items-center overflow-hidden"
  style="background-image: linear-gradient(rgba(46, 125, 50, 0.6), rgba(46, 125, 50, 0.6)), url('/images/heroLatex.png'); 
         background-size: cover; 
         background-position: center;
         background-attachment: fixed;"
> -->
         <section 
  id="hero" 
  class="relative min-h-screen flex items-center overflow-hidden"
  style="
    background-image: url('/images/heroLatexUp.png');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  "
>

  <!-- Content Container -->
  <div 
    class="w-[80%] md:w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 
           md:py-32 relative z-10"
  >
    <div class="md:max-w-[50%] text-center md:text-left">
      {#if isVisible}
        <!-- Headline -->
        <h1 
          in:fly="{{ y: 30, duration: 1000, delay: 200 }}"
          class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide text-white 
                 mb-4 [text-shadow:2px_2px_4px_rgba(0,0,0,0.3)]"
        >
          Kodumbidi Latex
        </h1>

        <!-- Tagline -->
        <p 
          in:fly="{{ y: 20, duration: 1000, delay: 400 }}"
          class="text-xl md:text-2xl text-white mb-6 font-light
                 [text-shadow:1px_1px_2px_rgba(0,0,0,0.2)]"
        >
          Serving the rubber farming community since 1988
        </p>

        <!-- Description -->
        <!-- <div 
          in:fade="{{ duration: 1000, delay: 600 }}"
          class="prose prose-lg text-white/90 mb-8 max-w-[600px] mx-auto md:mx-0
                 space-y-4 text-base md:text-lg"
        >
          <p>
            Located at Thachampurath Buildings, Thachampura – Kodumbidi, we are the only 
            Rubber Board–licensed institution in Kadanad Panchayat.
          </p>
          <p>
            For over 38 years, we've provided fair DRC-based settlements, instant 75% 
            advances, and timely full payments to our farmers.
          </p>
          <p class="font-medium">
            Trusted by local growers. Certified by the Rubber Board of India.
          </p>
        </div> -->

        <!-- CTA Button -->
        <button
          in:fly="{{ y: 20, duration: 1000, delay: 800 }}"
          on:click={scrollToAbout}
          class="bg-[#2E7D32] hover:bg-[#77C381] text-white px-8 py-3 rounded-full
                 font-medium transition-all duration-300 transform hover:scale-105
                 shadow-lg hover:shadow-xl active:scale-95"
        >
          Learn More
        </button>
      {/if}
    </div>
  </div>

  <!-- Optional decorative elements -->
  <div 
    class="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t 
           from-black/20 to-transparent pointer-events-none"
  ></div>
</section>

<style>
  /* Enable smooth scrolling for the entire page */
  :global(html) {
    scroll-behavior: smooth;
  }
  
  /* Improve text readability */
/* .prose {
  --tw-prose-invert-headings: #ffffff;
  --tw-prose-invert-body: #ffffff;
} */

</style>
