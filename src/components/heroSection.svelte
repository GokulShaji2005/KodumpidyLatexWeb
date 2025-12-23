<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import barrelImage from '$lib/assets/barrel.jpeg';
  
  let isVisible = false;

  onMount(() => {
    isVisible = true;
  });
</script>

<section 
  id="hero" 
  class="relative min-h-screen flex items-center overflow-hidden pt-16"
  style="
    background-image: url('{barrelImage}');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  "
>
  <!-- Dark overlay for better text readability -->
  <div class="absolute inset-0 bg-black/60"></div>

  <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
    
    {#if isVisible}
      <!-- Main Hero Content -->
      <div class="text-center mb-12" in:fade="{{ duration: 1000, delay: 200 }}">
        <h1 
          class="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
          style="
            text-shadow: 2px 4px 8px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.5);
            font-family: 'Georgia', 'Times New Roman', serif;
            letter-spacing: -0.02em;
          "
        >
          Kodumpidy Latex
        </h1>
        <p 
          class="text-xl md:text-2xl lg:text-2xl text-emerald-100 font-light mb-8 max-w-3xl mx-auto"
          style="
            text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
            font-family: 'Georgia', 'Times New Roman', serif;
          "
        >
          Serving the rubber farming community since 1988
        </p>
      </div>

      <!-- CTA Section with Trust Badges -->
      <div class="text-center" in:fade="{{ duration: 1000, delay: 400 }}">
        <!-- Trust Indicators -->
        <div class="mb-6 md:mb-8 px-2">
          <!-- Mobile: All three badges in one row -->
          <div class="md:hidden flex justify-center gap-1.5">
            <div class="inline-flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full shadow-md">
              <svg class="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span class="text-emerald-900 font-semibold text-[10px]">Licensed</span>
            </div>
            <div class="inline-flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full shadow-md">
              <svg class="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"/>
              </svg>
              <span class="text-emerald-900 font-semibold text-[10px]">38+ Years</span>
            </div>
            <div class="inline-flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full shadow-md">
              <svg class="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
              </svg>
              <span class="text-emerald-900 font-semibold text-[10px]">Trusted</span>
            </div>
          </div>
          
          <!-- Desktop: All three badges in a row -->
          <div class="hidden md:flex flex-wrap justify-center gap-2">
            <div class="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-2.5 py-1.5 rounded-full shadow-lg">
              <svg class="w-3.5 h-3.5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span class="text-emerald-900 text-sm font-semibold">Board Licensed</span>
            </div>
            <div class="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-2.5 py-1.5 rounded-full shadow-lg">
              <svg class="w-3.5 h-3.5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"/>
              </svg>
              <span class="text-emerald-900 text-sm font-semibold">38+ Years</span>
            </div>
            <div class="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-2.5 py-1.5 rounded-full shadow-lg">
              <svg class="w-3.5 h-3.5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
              </svg>
              <span class="text-emerald-900 text-sm font-semibold">Trusted by Farmers</span>
            </div>
          </div>
        </div>

        <a 
          href="#about"
          class="group inline-flex items-center gap-1.5 px-4 py-2 md:px-5 md:py-2.5 bg-emerald-600 text-white text-xs md:text-base font-bold rounded-full 
                 hover:bg-emerald-700 transition-all duration-300
                 shadow-2xl hover:shadow-emerald-600/80 transform hover:scale-105
                 focus:outline-none focus:ring-4 focus:ring-emerald-300 focus:ring-offset-2"
          aria-label="Learn more about Kodumpidy Latex services"
        >
          Learn More
          <svg class="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    {/if}
  </div>

  <!-- Decorative gradient overlay at bottom -->
  <div class="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-black/40 to-transparent pointer-events-none"></div>
</section>

<style>
  /* Respect reduced motion preferences */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
</style>


