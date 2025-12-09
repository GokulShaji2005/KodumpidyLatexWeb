<script>
  import { fade, fly } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  
  let isVisible = false;

  function handleIntersection(node) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible = true;
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(node);

    return {
      destroy() {
        observer.disconnect();
      }
    };
  }

  const offers = [
    {
      icon: `<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>`,
      title: "Rubber Board Certified Settlements",
      description: "All payments and accounts are processed according to D.R.C. (Dry Rubber Content) standards set by the Rubber Board of India.",
      badge: "Certified",
      delay: 200
    },
    {
      icon: `<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>`,
      title: "75% Instant Advance on Collection",
      description: "Farmers receive an immediate 75% payment when latex is collected from their plantations, ensuring instant cash flow.",
      badge: "Instant",
      delay: 300
    },
    {
      icon: `<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>`,
      title: "Balance Cleared on the 5th Day",
      description: "The remaining 25% amount is paid promptly within 5 days to ensure complete trust and maintain farmer liquidity.",
      badge: "On Time",
      delay: 400
    },
    {
      icon: `<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>`,
      title: "Quality Preservation Support",
      description: "We deliver ammonia-filled barrels to plantations as per farmer requirements to ensure latex quality and longevity.",
      badge: "Premium",
      delay: 500
    },
    {
      icon: `<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>`,
      title: "No Hidden Charges",
      description: "Our operations are simple, transparent, and fair — absolutely no additional deductions, service fees, or hidden costs.",
      badge: "Transparent",
      delay: 600
    }
  ];
</script>

<section 
  id="services"
  class="relative py-20 md:py-32 bg-white overflow-hidden"
  use:handleIntersection
>
  <!-- Decorative background elements with fixed dimensions to prevent layout shift -->
  <div class="absolute inset-0 opacity-5 pointer-events-none" aria-hidden="true">
    <div class="absolute top-10 left-10 w-72 h-72 bg-emerald-500 rounded-full blur-3xl will-change-auto"></div>
    <div class="absolute bottom-10 right-10 w-96 h-96 bg-emerald-600 rounded-full blur-3xl will-change-auto"></div>
  </div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {#if isVisible}
      <!-- Section Header -->
      <div 
        in:fade="{{ duration: 800, delay: 100 }}"
        class="text-center mb-16 md:mb-20"
      >
        <div class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full 
                   bg-emerald-50 border-2 border-emerald-200 
                   text-emerald-700 text-sm font-bold mb-6 shadow-sm">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
            <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" />
          </svg>
          Our Services
        </div>
        
        <h2 
          class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6
                 tracking-tight"
        >
          What We Offer
        </h2>
        
        <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Fair, transparent, and farmer-first services designed to ensure your success
        </p>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each offers as offer, i}
          <div
            in:fly="{{ y: 40, duration: 600, delay: offer.delay, easing: cubicOut }}"
            class="group relative bg-white rounded-2xl p-8
                   border-2 border-gray-200 hover:border-emerald-400
                   shadow-xl hover:shadow-2xl
                   transition-all duration-500 transform hover:-translate-y-3
                   overflow-hidden"
          >
            <!-- Card gradient background on hover -->
            <div class="absolute inset-0 bg-linear-to-br from-emerald-50 via-white to-teal-50 
                       opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl">
            </div>

            <!-- Content -->
            <div class="relative z-10">
              <!-- Icon and Badge Container -->
              <div class="flex items-start justify-between mb-6">
                <div class="p-4 bg-linear-to-br from-emerald-100 to-emerald-50 
                           rounded-2xl text-emerald-700
                           group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                  {@html offer.icon}
                </div>
                
                <span class="px-3 py-1.5 text-xs font-bold rounded-full uppercase tracking-wide
                           bg-emerald-600 text-white shadow-lg group-hover:shadow-xl">
                  {offer.badge}
                </span>
              </div>

              <!-- Title -->
              <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-4
                       leading-tight group-hover:text-emerald-700 transition-colors duration-300">
                {offer.title}
              </h3>

              <!-- Description -->
              <p class="text-gray-600 leading-relaxed text-base">
                {offer.description}
              </p>

              <!-- Decorative bottom accent -->
              <div class="mt-6 pt-6 border-t-2 border-gray-100 group-hover:border-emerald-200">
                <div class="flex items-center text-emerald-600 font-bold text-sm
                           group-hover:translate-x-2 transition-transform duration-300">
                  <!-- <span>Learn more</span> -->
                  <!-- <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg> -->
                </div>
              </div>
            </div>

            <!-- Decorative corner element -->
            <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-100 rounded-full
                       transform group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100">
            </div>
          </div>
        {/each}
      </div>

      <!-- Bottom CTA -->
      <!-- <div 
        in:fade="{{ duration: 800, delay: 800 }}"
        class="mt-12 md:mt-16 text-center"
      >
        <div class="inline-flex flex-col sm:flex-row items-center gap-4 
                   p-6 md:p-8 bg-linear-to-r from-[#2E7D32] to-[#77C381]
                   rounded-2xl shadow-2xl text-white">
          <div class="flex-1 text-left">
            <h3 class="text-xl md:text-2xl font-bold mb-2">
              Ready to experience fair latex trading?
            </h3>
            <p class="text-white/90">
              Join hundreds of satisfied farmers in Kadanad Panchayat
            </p>
          </div>
          
          <button
            on:click={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            class="px-8 py-3 bg-white text-[#2E7D32] rounded-full
                   font-semibold transition-all duration-300 
                   transform hover:scale-105 shadow-lg hover:shadow-xl
                   active:scale-95 whitespace-nowrap"
          >
            Get Started Today
          </button>
        </div>
      </div> -->
    {/if}
  </div>
</section>