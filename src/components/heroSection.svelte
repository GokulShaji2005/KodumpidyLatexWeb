<script>
  import { onMount } from 'svelte';
  import { fade, fly, draw } from 'svelte/transition';
  
  let isVisible = false;
  let prefersReducedMotion = false;

  onMount(() => {
    isVisible = true;
    
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    prefersReducedMotion = mediaQuery.matches;
  });

  const journeySteps = [
    {
      step: "1",
      title: "Customer Calls",
      description: "You contact us to start the process",
      icon: "📞",
      date: "",
      benefit: "Easy Start"
    },
    {
      step: "2",
      title: "Barrel Delivery",
      description: "We provide barrels with ammonia & chemicals",
      icon: "🛢️",
      date: "",
      benefit: "Free Equipment"
    },
    {
      step: "3",
      title: "Collection Day",
      description: "75% advance payment on collection",
      icon: "💰",
      date: "15th & 30th",
      benefit: "Instant Advance"
    },
    {
      step: "4",
      title: "DRC Testing",
      description: "Quality verification process",
      icon: "🔬",
      date: "",
      benefit: "Fair Assessment"
    },
    {
      step: "5",
      title: "Final Payment",
      description: "Remaining 25% settled after DRC check",
      icon: "✅",
      date: "3rd & 18th",
      benefit: "Complete Settlement"
    }
  ];
</script>

<section 
  id="hero" 
  class="relative min-h-screen flex items-center overflow-hidden pt-16"
  style="
    background: linear-gradient(135deg, rgba(5, 46, 22, 0.95) 0%, rgba(16, 82, 40, 0.92) 50%, rgba(5, 46, 22, 0.95) 100%);
  "
>
  <!-- Optional: Subtle pattern overlay instead of photo -->
  <div class="absolute inset-0 opacity-5" 
       style="background-image: repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.03) 35px, rgba(255,255,255,.03) 70px);">
  </div>

  <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
    
    {#if isVisible}
      <!-- Header Section -->
      <div class="text-center mb-6 md:mb-10" in:fade="{{ duration: 800, delay: 100 }}">
        <h1 
          class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2 leading-tight"
          style="text-shadow: 0 4px 20px rgba(0,0,0,0.4);"
        >
          Kodumpidy Latex
        </h1>
        <p 
          class="text-xs md:text-base text-emerald-50 font-light mb-3 md:mb-4"
          style="text-shadow: 0 2px 10px rgba(0,0,0,0.3);"
        >
          Serving the rubber farming community since 1988
        </p>
        <h2 
          class="text-sm md:text-lg font-semibold text-emerald-200"
          style="text-shadow: 0 2px 10px rgba(0,0,0,0.3);"
        >
          Our Transparent Process
        </h2>
      </div>

      <!-- Journey Map -->
      <div class="mb-12">
        <!-- Desktop Journey - Horizontal -->
        <div class="hidden md:block">
          <div class="relative">
            <!-- Connection Line with arrows -->
            <div class="absolute top-16 left-0 right-0 h-0.5 mx-[12%]" aria-hidden="true">
              <div class="h-full bg-linear-to-r from-emerald-400 via-emerald-300 to-emerald-400"
                   style="animation: {prefersReducedMotion ? 'none' : 'slideIn 1s ease-out 0.3s forwards'};">
              </div>
            </div>

            <!-- Steps -->
            <div class="grid grid-cols-5 gap-6 lg:gap-8 relative">
              {#each journeySteps as item, i}
                <div 
                  class="flex flex-col items-center"
                  in:fly="{{ y: prefersReducedMotion ? 0 : 30, duration: 600, delay: 400 + (i * 100) }}"
                  role="article"
                  aria-label="Step {item.step}: {item.title}"
                >
                  <!-- Icon Circle -->
                  <div class="w-28 h-28 lg:w-32 lg:h-32 rounded-full bg-white shadow-2xl flex items-center justify-center mb-5 
                              border-4 border-emerald-400 relative z-10 transform transition-all duration-300 
                              hover:scale-110 hover:shadow-emerald-400/50"
                       role="img"
                       aria-label="{item.icon} {item.title} icon">
                    <div class="text-center">
                      <div class="text-4xl mb-1" aria-hidden="true">{item.icon}</div>
                      <div class="text-xs font-bold text-emerald-700">STEP {item.step}</div>
                    </div>
                  </div>

                  <!-- Content Card -->
                  <div class="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg text-center min-h-[140px] w-full
                              border-2 border-emerald-200 transform transition-all duration-300 hover:border-emerald-400 hover:shadow-xl">
                    <div class="inline-block bg-emerald-600 text-white px-2 py-0.5 rounded text-[10px] font-bold mb-2">
                      {item.benefit}
                    </div>
                    <h3 class="font-bold text-emerald-800 text-sm mb-2 leading-tight">
                      {item.title}
                    </h3>
                    <p class="text-xs text-gray-600 leading-relaxed mb-2">
                      {item.description}
                    </p>
                    {#if item.date}
                      <div class="inline-block bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold animate-pulse-slow"
                           role="note"
                           aria-label="Scheduled on {item.date}">
                        {item.date}
                      </div>
                    {/if}
                  </div>
                </div>
              {/each}
            </div>
          </div>
        </div>

        <!-- Mobile Journey - Vertical -->
        <div class="md:hidden space-y-4 px-1">
          {#each journeySteps as item, i}
            <div 
              class="relative"
              in:fly="{{ x: prefersReducedMotion ? 0 : -30, duration: 600, delay: 300 + (i * 100) }}"
              role="article"
              aria-label="Step {item.step}: {item.title}"
            >
              <!-- Icon Circle - Centered Above -->
              <div class="flex justify-center mb-2">
                <div class="w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center 
                            border-3 border-emerald-400 relative z-10"
                     role="img"
                     aria-label="{item.icon} {item.title} icon">
                  <div class="text-center">
                    <div class="text-2xl mb-0.5" aria-hidden="true">{item.icon}</div>
                    <div class="text-[9px] font-bold text-emerald-700">STEP {item.step}</div>
                  </div>
                </div>
              </div>

              <!-- Content Card - Full Width -->
              <div class="bg-white/95 backdrop-blur-sm rounded-xl p-3.5 shadow-lg border-2 border-emerald-200 text-center">
                <div class="inline-block bg-emerald-600 text-white px-2.5 py-1 rounded-full text-[10px] font-bold mb-2">
                  {item.benefit}
                </div>
                <h3 class="font-bold text-emerald-800 text-base mb-1.5">
                  {item.title}
                </h3>
                <p class="text-xs text-gray-600 leading-relaxed">
                  {item.description}
                </p>
                {#if item.date}
                  <div class="inline-block bg-emerald-100 text-emerald-700 px-3 py-1.5 rounded-full text-xs font-semibold animate-pulse-slow mt-2">
                    📅 {item.date}
                  </div>
                {/if}
              </div>

              <!-- Connecting Arrow (except for last item) -->
              {#if i < journeySteps.length - 1}
                <div class="flex justify-center my-2">
                  <svg class="w-5 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" transform="rotate(90 12 12)"/>
                  </svg>
                </div>
              {/if}
            </div>
          {/each}
        </div>
      </div>

      <!-- CTA Section with Trust Badges -->
      <div class="text-center" in:fade="{{ duration: 800, delay: 900 }}">
        <!-- Trust Indicators -->
        <div class="flex flex-wrap justify-center gap-3 mb-6">
          <div class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
            <svg class="w-5 h-5 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span class="text-white text-sm font-semibold">Rubber Board Licensed</span>
          </div>
          <div class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
            <svg class="w-5 h-5 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"/>
            </svg>
            <span class="text-white text-sm font-semibold">38+ Years of Service</span>
          </div>
          <div class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
            <svg class="w-5 h-5 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
            </svg>
            <span class="text-white text-sm font-semibold">Trusted by Local Farmers</span>
          </div>
        </div>

        <a 
          href="#about"
          class="group inline-flex items-center gap-2 px-8 py-3.5 bg-white text-emerald-700 font-bold rounded-full 
                 hover:bg-emerald-600 hover:text-white transition-all duration-300
                 shadow-2xl hover:shadow-emerald-400/60 transform hover:scale-105
                 focus:outline-none focus:ring-4 focus:ring-emerald-300 focus:ring-offset-2"
          aria-label="Learn more about Kodumpidy Latex services"
        >
          Learn More About Us
          <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    {/if}
  </div>

  <!-- Decorative gradient overlay -->
  <div class="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-black/20 to-transparent pointer-events-none"></div>
</section>

<style>
  /* Slide in animation for connection line */
  @keyframes slideIn {
    from {
      transform: scaleX(0);
      transform-origin: left;
    }
    to {
      transform: scaleX(1);
      transform-origin: left;
    }
  }

  /* Slow pulse animation for date badges */
  :global(.animate-pulse-slow) {
    animation: pulseSlow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  @keyframes pulseSlow {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.85;
      transform: scale(1.02);
    }
  }

  /* Respect reduced motion preferences */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
</style>


