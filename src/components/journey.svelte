<script>
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  
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
      date: "5th & 20th",
      benefit: "Complete Settlement"
    }
  ];
</script>

<section class="py-16 bg-linear-to-b from-white to-emerald-50">
  <div class="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    {#if isVisible}
      <!-- Section Header -->
      <div class="text-center mb-12" in:fade="{{ duration: 800, delay: 100 }}">
        <h2 class="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">Our Transparent Process</h2>
        <p class="text-gray-600 text-lg">Follow the journey from your first call to final payment</p>
      </div>

      <!-- Desktop Journey - Professional Horizontal Timeline -->
      <div class="hidden md:block relative">
        <!-- Steps Container -->
        <div class="relative">
          <!-- Horizontal Connecting Line -->
          <div class="absolute top-12 left-0 right-0 h-1 bg-linear-to-r from-emerald-300 via-emerald-400 to-emerald-500 rounded-full" style="margin: 0 5%;"></div>
          
          <!-- Steps Grid -->
          <div class="grid grid-cols-5 gap-4 relative">
            {#each journeySteps as step, i}
              <div 
                class="flex flex-col items-center"
                in:fly="{{ y: prefersReducedMotion ? 0 : 30, duration: 600, delay: 200 + (i * 100) }}"
                role="article"
                aria-label="Step {i + 1}: {step.title}"
              >
                <!-- Step Circle -->
                <div class="w-24 h-24 rounded-full bg-white shadow-2xl flex items-center justify-center mb-4 
                            border-4 border-emerald-400 relative z-10 transform transition-all duration-300 
                            hover:scale-110 hover:shadow-emerald-400/50">
                  <div class="text-center">
                    <div class="text-3xl mb-1">{step.icon}</div>
                    <div class="text-[10px] font-bold text-emerald-700">STEP {i + 1}</div>
                  </div>
                </div>

                <!-- Step Content Card -->
                <div class="bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg text-center min-h-40 w-full
                            border-2 border-emerald-200 transform transition-all duration-300 hover:border-emerald-400 hover:shadow-xl">
                  <div class="inline-block bg-emerald-600 text-white px-2 py-0.5 rounded-full text-[9px] font-bold mb-2">
                    {step.benefit}
                  </div>
                  <h3 class="font-bold text-emerald-800 text-xs mb-1.5 leading-tight">{step.title}</h3>
                  <p class="text-[11px] text-gray-600 leading-relaxed mb-2">{step.description}</p>
                  {#if step.date}
                    <div class="inline-block bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-[10px] font-semibold mt-1">
                      📅 {step.date}
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
                <div class="inline-block bg-emerald-100 text-emerald-700 px-3 py-1.5 rounded-full text-xs font-semibold mt-2">
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
    {/if}
  </div>
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
