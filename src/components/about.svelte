<script>
  import { fly } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  import barrel from '$lib/assets/barrel.jpeg'; 
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
      { threshold: 0.2 }
    );

    observer.observe(node);

    return {
      destroy() {
        observer.disconnect();
      }
    };
  }
</script>

<section
  id="about"
  class="w-full bg-linear-to-b from-gray-50 to-white py-20 md:py-32"
>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
    
<div
  class="w-full aspect-4/3 rounded-3xl overflow-hidden shadow-2xl relative"
>
  <img 
    src={barrel} 
    alt="Kodumpidy Latex rubber collection barrels and facility in Kerala"
    class="w-full h-full object-cover"
    loading="lazy"
  />
  <!-- Optional gradient overlay for depth -->
  <div class="absolute inset-0 bg-linear-to-tr from-black/10 to-transparent pointer-events-none"></div>
</div>

      <!-- Right content area -->
      <div use:handleIntersection>
        {#if isVisible}
          <div
            in:fly={{ y: 30, duration: 600, easing: cubicOut }}
            class="space-y-6"
          >
            <!-- Heading with left accent -->
            <div class="flex items-start gap-4">
              <div class="w-1.5 h-12 bg-linear-to-b from-emerald-600 to-emerald-400 rounded-full mt-1 shadow-md" aria-hidden="true"></div>
              <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                About Kodumpidy Latex
              </h2>
            </div>

            <!-- Badge -->
            <div class="inline-flex items-center px-5 py-2.5 rounded-full bg-emerald-50 border-2 border-emerald-200 shadow-sm">
              <span class="text-sm font-bold text-emerald-700">
                38+ Years of Service
              </span>
            </div>

            <!-- Content paragraphs -->
            <div class="space-y-5 text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
                Founded in 1988, Kodumpidy Latex began with a simple mission to create a 
                <span class="font-bold text-emerald-600">reliable and transparent</span> 
                latex trading system for rubber farmers in and around Kadanad Panchayat. 
                Over the past 
                <span class="font-bold text-emerald-600">38 years (1988 to 2025)</span>, 
                we have grown into a 
                <span class="font-bold text-emerald-600">trusted institution</span>, 
                operating from our base at Thachampurath Buildings,Kodumpidy 
                on the Kollapally–Melukavu Road.
              </p>

              <p>
                As the only 
                <span class="font-bold text-emerald-600">Rubber Board licensed</span> 
                latex institution in Kadanad Panchayat, we follow all standards and guidelines 
                set by the Rubber Board of India. Our focus has always been to ensure 
                <span class="font-bold text-emerald-600">fair value</span> 
                for every farmer through 
                <span class="font-bold text-emerald-600">transparent dealings</span>, 
                accurate 
                <span class="font-bold text-emerald-600">DRC based assessments</span>, 
                and consistent service.
              </p>
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>
</section>