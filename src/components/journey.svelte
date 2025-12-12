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

      <!-- Desktop Journey - Zigzag Pattern -->
      <div class="hidden md:block relative">
        <div class="space-y-8">
          <!-- Row 1: Step 1 (left) and Step 2 (right) -->
          <div class="grid grid-cols-2 gap-8 relative">
            <!-- Step 1 -->
            <div 
              class="flex flex-col items-center"
              in:fly="{{ y: prefersReducedMotion ? 0 : 30, duration: 600, delay: 200 }}"
              role="article"
              aria-label="Step 1: {journeySteps[0].title}"
            >
              <div class="w-28 h-28 rounded-full bg-white shadow-2xl flex items-center justify-center mb-4 
                          border-4 border-emerald-400 relative z-10 transform transition-all duration-300 
                          hover:scale-110 hover:shadow-emerald-400/50">
                <div class="text-center">
                  <div class="text-4xl mb-1">{journeySteps[0].icon}</div>
                  <div class="text-xs font-bold text-emerald-700">STEP 1</div>
                </div>
              </div>
              <div class="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg text-center min-h-[140px] w-full
                          border-2 border-emerald-200 transform transition-all duration-300 hover:border-emerald-400">
                <div class="inline-block bg-emerald-600 text-white px-2 py-0.5 rounded text-[10px] font-bold mb-2">
                  {journeySteps[0].benefit}
                </div>
                <h3 class="font-bold text-emerald-800 text-sm mb-2">{journeySteps[0].title}</h3>
                <p class="text-xs text-gray-600">{journeySteps[0].description}</p>
              </div>
            </div>

            <!-- Arrow 1 to 2 (Horizontal Right) -->
            <div class="absolute top-14 left-1/2 transform -translate-x-1/2 z-0">
              <svg class="w-16 h-8 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
              </svg>
            </div>

            <!-- Step 2 -->
            <div 
              class="flex flex-col items-center"
              in:fly="{{ y: prefersReducedMotion ? 0 : 30, duration: 600, delay: 300 }}"
              role="article"
              aria-label="Step 2: {journeySteps[1].title}"
            >
              <div class="w-28 h-28 rounded-full bg-white shadow-2xl flex items-center justify-center mb-4 
                          border-4 border-emerald-400 relative z-10 transform transition-all duration-300 
                          hover:scale-110 hover:shadow-emerald-400/50">
                <div class="text-center">
                  <div class="text-4xl mb-1">{journeySteps[1].icon}</div>
                  <div class="text-xs font-bold text-emerald-700">STEP 2</div>
                </div>
              </div>
              <div class="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg text-center min-h-[140px] w-full
                          border-2 border-emerald-200 transform transition-all duration-300 hover:border-emerald-400">
                <div class="inline-block bg-emerald-600 text-white px-2 py-0.5 rounded text-[10px] font-bold mb-2">
                  {journeySteps[1].benefit}
                </div>
                <h3 class="font-bold text-emerald-800 text-sm mb-2">{journeySteps[1].title}</h3>
                <p class="text-xs text-gray-600">{journeySteps[1].description}</p>
              </div>
            </div>
          </div>

          <!-- Arrow 2 to 3 (Vertical Down) -->
          <div class="flex justify-end pr-[25%] -my-4">
            <svg class="w-8 h-12 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" transform="rotate(90 12 12)"/>
            </svg>
          </div>

          <!-- Row 2: Step 3 (right) -->
          <div class="grid grid-cols-2 gap-8">
            <div></div>
            <!-- Step 3 -->
            <div 
              class="flex flex-col items-center"
              in:fly="{{ y: prefersReducedMotion ? 0 : 30, duration: 600, delay: 400 }}"
              role="article"
              aria-label="Step 3: {journeySteps[2].title}"
            >
              <div class="w-28 h-28 rounded-full bg-white shadow-2xl flex items-center justify-center mb-4 
                          border-4 border-emerald-400 relative z-10 transform transition-all duration-300 
                          hover:scale-110 hover:shadow-emerald-400/50">
                <div class="text-center">
                  <div class="text-4xl mb-1">{journeySteps[2].icon}</div>
                  <div class="text-xs font-bold text-emerald-700">STEP 3</div>
                </div>
              </div>
              <div class="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg text-center min-h-[140px] w-full
                          border-2 border-emerald-200 transform transition-all duration-300 hover:border-emerald-400">
                <div class="inline-block bg-emerald-600 text-white px-2 py-0.5 rounded text-[10px] font-bold mb-2">
                  {journeySteps[2].benefit}
                </div>
                <h3 class="font-bold text-emerald-800 text-sm mb-2">{journeySteps[2].title}</h3>
                <p class="text-xs text-gray-600 mb-2">{journeySteps[2].description}</p>
                {#if journeySteps[2].date}
                  <div class="inline-block bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {journeySteps[2].date}
                  </div>
                {/if}
              </div>
            </div>
          </div>

          <!-- Arrow 3 to 4 (Horizontal Left) -->
          <div class="flex justify-center -my-4">
            <svg class="w-16 h-8 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 4l1.41 1.41L7.83 11H20v2H7.83l5.58 5.59L12 20l-8-8z"/>
            </svg>
          </div>

          <!-- Row 3: Step 4 (left) -->
          <div class="grid grid-cols-2 gap-8">
            <!-- Step 4 -->
            <div 
              class="flex flex-col items-center"
              in:fly="{{ y: prefersReducedMotion ? 0 : 30, duration: 600, delay: 500 }}"
              role="article"
              aria-label="Step 4: {journeySteps[3].title}"
            >
              <div class="w-28 h-28 rounded-full bg-white shadow-2xl flex items-center justify-center mb-4 
                          border-4 border-emerald-400 relative z-10 transform transition-all duration-300 
                          hover:scale-110 hover:shadow-emerald-400/50">
                <div class="text-center">
                  <div class="text-4xl mb-1">{journeySteps[3].icon}</div>
                  <div class="text-xs font-bold text-emerald-700">STEP 4</div>
                </div>
              </div>
              <div class="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg text-center min-h-[140px] w-full
                          border-2 border-emerald-200 transform transition-all duration-300 hover:border-emerald-400">
                <div class="inline-block bg-emerald-600 text-white px-2 py-0.5 rounded text-[10px] font-bold mb-2">
                  {journeySteps[3].benefit}
                </div>
                <h3 class="font-bold text-emerald-800 text-sm mb-2">{journeySteps[3].title}</h3>
                <p class="text-xs text-gray-600">{journeySteps[3].description}</p>
              </div>
            </div>
            <div></div>
          </div>

          <!-- Arrow 4 to 5 (Vertical Down) -->
          <div class="flex justify-start pl-[25%] -my-4">
            <svg class="w-8 h-12 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" transform="rotate(90 12 12)"/>
            </svg>
          </div>

          <!-- Row 4: Step 5 (left) -->
          <div class="grid grid-cols-2 gap-8">
            <!-- Step 5 -->
            <div 
              class="flex flex-col items-center"
              in:fly="{{ y: prefersReducedMotion ? 0 : 30, duration: 600, delay: 600 }}"
              role="article"
              aria-label="Step 5: {journeySteps[4].title}"
            >
              <div class="w-28 h-28 rounded-full bg-white shadow-2xl flex items-center justify-center mb-4 
                          border-4 border-emerald-400 relative z-10 transform transition-all duration-300 
                          hover:scale-110 hover:shadow-emerald-400/50">
                <div class="text-center">
                  <div class="text-4xl mb-1">{journeySteps[4].icon}</div>
                  <div class="text-xs font-bold text-emerald-700">STEP 5</div>
                </div>
              </div>
              <div class="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg text-center min-h-[140px] w-full
                          border-2 border-emerald-200 transform transition-all duration-300 hover:border-emerald-400">
                <div class="inline-block bg-emerald-600 text-white px-2 py-0.5 rounded text-[10px] font-bold mb-2">
                  {journeySteps[4].benefit}
                </div>
                <h3 class="font-bold text-emerald-800 text-sm mb-2">{journeySteps[4].title}</h3>
                <p class="text-xs text-gray-600 mb-2">{journeySteps[4].description}</p>
                {#if journeySteps[4].date}
                  <div class="inline-block bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {journeySteps[4].date}
                  </div>
                {/if}
              </div>
            </div>
            <div></div>
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
