<script>
  import { fade, fly } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  
  let isVisible = false;
  let formData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };
  let isSubmitting = false;
  let submitStatus = null;

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

  async function handleSubmit(e) {
    e.preventDefault();
    isSubmitting = true;
    
    // Simulate form submission
    setTimeout(() => {
      submitStatus = 'success';
      isSubmitting = false;
      
      // Reset form
      formData = {
        name: '',
        email: '',
        phone: '',
        message: ''
      };
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        submitStatus = null;
      }, 5000);
    }, 1500);
  }

  // Company contact information
  const contactInfo = {
    address: 'Thachampurath Buildings, Kodumpidy, Kollappally–Melukkavu Road, Kadanad Panchayat, Kerala',
    phone: '+91 9745694494',
    email: 'kodumpidylatex@gmail.com',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.0!2d76.5!3d10.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDMwJzAwLjAiTiA3NsKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin'
  };
</script>

<section 
  id="contact"
  class="relative py-20 md:py-32 bg-linear-to from-gray-50 to-white overflow-hidden"
  use:handleIntersection
>
  <!-- Decorative background elements -->
  <div class="absolute inset-0 opacity-5 pointer-events-none" aria-hidden="true">
    <div class="absolute top-20 right-20 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
    <div class="absolute bottom-10 left-10 w-96 h-96 bg-emerald-600 rounded-full blur-3xl"></div>
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
            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
          </svg>
          Get in Touch
        </div>
        
        <h2 
          class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6
                 tracking-tight"
        >
          We're Here to Help
        </h2>
        
        <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Visit us, call us, or send us a message. We're always ready to serve you.
        </p>
      </div>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        
        <!-- Left Column: Google Map -->
        <div 
          in:fly="{{ x: -40, duration: 800, delay: 200, easing: cubicOut }}"
          class="h-full"
        >
          <div class="sticky top-24">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <div class="w-full h-[500px] lg:h-[600px]">
                <iframe
                  src={contactInfo.mapUrl}
                  width="100%"
                  height="100%"
                  style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  title="Kodumpidy Latex Location"
                  class="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Contact Information -->
        <div 
          in:fly="{{ x: 40, duration: 800, delay: 200, easing: cubicOut }}"
          class="space-y-6"
        >
          <!-- Section Title -->
          <div>
            <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Contact Information
            </h3>
            <p class="text-gray-600">
              Reach out to us through any of the following channels
            </p>
          </div>

          <!-- Contact Cards -->
          <div class="space-y-4">
            <!-- Address Card -->
            <div class="group bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl 
                       border-2 border-gray-200 hover:border-emerald-400
                       transition-all duration-300 transform hover:-translate-y-1">
              <div class="flex items-start gap-4">
                <div class="shrink-0 p-3 bg-linear-to from-emerald-100 to-emerald-50 
                           rounded-xl text-emerald-700">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div class="flex-1">
                  <h4 class="font-bold text-gray-900 mb-2 text-lg">Our Location</h4>
                  <p class="text-gray-600 leading-relaxed">
                    {contactInfo.address}
                  </p>
                </div>
              </div>
            </div>

            <!-- Phone Card -->
            <div class="group bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl 
                       border-2 border-gray-200 hover:border-emerald-400
                       transition-all duration-300 transform hover:-translate-y-1">
              <div class="flex items-start gap-4">
                <div class="shrink-0 p-3 bg-linear-to from-emerald-100 to-emerald-50 
                           rounded-xl text-emerald-700">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div class="flex-1">
                  <h4 class="font-bold text-gray-900 mb-2 text-lg">Phone</h4>
                  <a href="tel:{contactInfo.phone}" 
                     class="text-emerald-600 hover:text-emerald-700 font-semibold text-lg transition-colors">
                    {contactInfo.phone}
                  </a>
                  <p class="text-gray-500 text-sm mt-1">Mon-Sat: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <!-- Email Card -->
            <div class="group bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl 
                       border-2 border-gray-200 hover:border-emerald-400
                       transition-all duration-300 transform hover:-translate-y-1">
              <div class="flex items-start gap-4">
                <div class="shrink-0 p-3 bg-linear-to from-emerald-100 to-emerald-50 
                           rounded-xl text-emerald-700">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div class="flex-1">
                  <h4 class="font-bold text-gray-900 mb-2 text-lg">Email</h4>
                  <a href="mailto:{contactInfo.email}" 
                     class="text-emerald-600 hover:text-emerald-700 font-semibold transition-colors break-all">
                    {contactInfo.email}
                  </a>
                  <p class="text-gray-500 text-sm mt-1">We'll respond within 24 hours</p>
                </div>
              </div>
            </div>

            <!-- Business Hours Card -->
            <!-- <div class="bg-linear-to from-emerald-500 to-emerald-600 rounded-2xl p-6 shadow-xl text-white">
              <div class="flex items-start gap-4">
                <div class="shrink-0 p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="flex-1">
                  <h4 class="font-bold text-white mb-3 text-lg">Business Hours</h4>
                  <div class="space-y-2 text-sm">
                    <div class="flex justify-between">
                      <span class="text-white/90">Monday - Saturday</span>
                      <span class="font-semibold">8:00 AM - 6:00 PM</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-white/90">Sunday</span>
                      <span class="font-semibold">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div> -->
          </div>

          <!-- Quick Action Buttons -->
          <!-- <div class="grid grid-cols-2 gap-4 pt-4">
            <a
              href="tel:{contactInfo.phone}"
              class="flex items-center justify-center gap-2 px-6 py-4 
                     bg-emerald-600 text-white rounded-xl font-semibold
                     hover:bg-emerald-700 transition-all duration-300
                     shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
            <a
              href="mailto:{contactInfo.email}"
              class="flex items-center justify-center gap-2 px-6 py-4 
                     bg-white text-emerald-600 border-2 border-emerald-600 rounded-xl font-semibold
                     hover:bg-emerald-50 transition-all duration-300
                     shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Us
            </a>
          </div> -->
        </div>
      </div>
    {/if}
  </div>
</section>

<!-- <style>
  /* Smooth focus transitions */
  input:focus, textarea:focus {
    outline: none;
  }
</style> -->