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
    address: 'Thachampurath Buildings,Kodumpoidy, Kollappally–Melukkavu Road, Kadanad Panchayat, Kerala',
    phone: '+91 9745694494',
    email: 'kodumpidylatex@gmail.com',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.0!2d76.5!3d10.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDMwJzAwLjAiTiA3NsKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin'
  };
</script>

<section 
  id="contact"
  class="relative py-16 md:py-24 bg-linear-to-b from-white via-green-50/20 to-white overflow-hidden"
  use:handleIntersection
>
  <!-- Decorative background elements -->
  <div class="absolute inset-0 opacity-5 pointer-events-none">
    <div class="absolute top-20 right-20 w-96 h-96 bg-[#77C381] rounded-full blur-3xl"></div>
    <div class="absolute bottom-20 left-20 w-80 h-80 bg-[#2E7D32] rounded-full blur-3xl"></div>
  </div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {#if isVisible}
      <!-- Section Header -->
      <div 
        in:fade="{{ duration: 800, delay: 100 }}"
        class="text-center mb-12 md:mb-16"
      >
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                   bg-[#77C381]/10 border border-[#77C381]/30 
                   text-[#2E7D32] text-sm font-semibold mb-4">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
          </svg>
          Get in Touch
        </div>
        
        <h2 
          class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4
                 tracking-tight"
        >
          We're Here to Help
        </h2>
        
        <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Visit us, call us, or send us a message. We're always ready to serve you.
        </p>
      </div>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        
        <!-- Left Column: Map & Contact Info -->
        <div 
          in:fly="{{ x: -40, duration: 800, delay: 200, easing: cubicOut }}"
          class="space-y-8"
        >
          <!-- Google Map -->
          <div class="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <div class="aspect-video w-full">
              <iframe
                src={contactInfo.mapUrl}
                width="100%"
                height="100%"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Kodumbidi Latex Location"
                class="w-full h-full"
              ></iframe>
            </div>
          </div>

          <!-- Contact Information Cards -->
          <div class="space-y-4">
            <!-- Address -->
            <div class="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl 
                       border-2 border-gray-100 hover:border-[#77C381]/50
                       transition-all duration-300">
              <div class="flex items-start gap-4">
                <div class="shrink-0 p-3 bg-linear-to-br from-[#77C381]/20 to-[#2E7D32]/20 
                           rounded-lg text-[#2E7D32]">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-1">Our Location</h3>
                  <p class="text-gray-600 text-sm leading-relaxed">
                    {contactInfo.address}
                  </p>
                </div>
              </div>
            </div>

            <!-- Phone -->
            <div class="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl 
                       border-2 border-gray-100 hover:border-[#77C381]/50
                       transition-all duration-300">
              <div class="flex items-start gap-4">
                <div class="shrink-0 p-3 bg-linear-to-br from-[#77C381]/20 to-[#2E7D32]/20 
                           rounded-lg text-[#2E7D32]">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-1">Phone</h3>
                  <a href="tel:{contactInfo.phone}" 
                     class="text-[#2E7D32] hover:text-[#77C381] font-medium transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
            </div>

            <!-- Email -->
            <div class="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl 
                       border-2 border-gray-100 hover:border-[#77C381]/50
                       transition-all duration-300">
              <div class="flex items-start gap-4">
                <div class="shrink-0 p-3 bg-linear-to-br from-[#77C381]/20 to-[#2E7D32]/20 
                           rounded-lg text-[#2E7D32]">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-1">Email</h3>
                  <a href="mailto:{contactInfo.email}" 
                     class="text-[#2E7D32] hover:text-[#77C381] font-medium transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Contact Form -->
        <div 
          in:fly="{{ x: 40, duration: 800, delay: 200, easing: cubicOut }}"
          class="bg-white rounded-2xl p-8 md:p-10 shadow-2xl border-2 border-gray-100"
        >
          <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Send Us a Message
          </h3>
          <p class="text-gray-600 mb-8">
            Fill out the form below and we'll get back to you as soon as possible.
          </p>

          <form on:submit={handleSubmit} class="space-y-6">
            <!-- Name Field -->
            <div>
              <label for="name" class="block text-sm font-semibold text-gray-700 mb-2">
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                bind:value={formData.name}
                required
                class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg
                       focus:border-[#77C381] focus:ring-4 focus:ring-[#77C381]/10
                       transition-all duration-200 outline-none"
                placeholder="John Doe"
              />
            </div>

            <!-- Email Field -->
            <div>
              <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                bind:value={formData.email}
                required
                class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg
                       focus:border-[#77C381] focus:ring-4 focus:ring-[#77C381]/10
                       transition-all duration-200 outline-none"
                placeholder="john@example.com"
              />
            </div>

            <!-- Phone Field -->
            <div>
              <label for="phone" class="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                bind:value={formData.phone}
                class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg
                       focus:border-[#77C381] focus:ring-4 focus:ring-[#77C381]/10
                       transition-all duration-200 outline-none"
                placeholder="+91 1234567890"
              />
            </div>

            <!-- Message Field -->
            <div>
              <label for="message" class="block text-sm font-semibold text-gray-700 mb-2">
                Your Message *
              </label>
              <textarea
                id="message"
                bind:value={formData.message}
                required
                rows="5"
                class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg
                       focus:border-[#77C381] focus:ring-4 focus:ring-[#77C381]/10
                       transition-all duration-200 outline-none resize-none"
                placeholder="Tell us how we can help you..."
              ></textarea>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              disabled={isSubmitting}
              class="w-full px-8 py-4 bg-linear-to-r from-[#2E7D32] to-[#77C381]
                     text-white font-semibold rounded-lg
                     shadow-lg hover:shadow-xl
                     transform hover:scale-[1.02] active:scale-[0.98]
                     transition-all duration-300
                     disabled:opacity-50 disabled:cursor-not-allowed
                     flex items-center justify-center gap-2"
            >
              {#if isSubmitting}
                <svg class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              {:else}
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Send Message
              {/if}
            </button>

            <!-- Success Message -->
            {#if submitStatus === 'success'}
              <div 
                in:fade
                class="p-4 bg-green-50 border-2 border-green-200 rounded-lg
                       flex items-center gap-3 text-green-800"
              >
                <svg class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <p class="font-medium">
                  Thank you! Your message has been sent successfully. We'll get back to you soon.
                </p>
              </div>
            {/if}
          </form>
        </div>
      </div>

      <!-- Bottom CTA Banner
      <div 
        in:fade="{{ duration: 800, delay: 600 }}"
        class="mt-16 text-center"
      >
        <div class="inline-flex items-center gap-4 p-6 md:p-8 
                   bg-linear-to-r from-[#2E7D32] to-[#77C381]
                   rounded-2xl shadow-2xl text-white">
          <svg class="w-12 h-12 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div class="text-left">
            <h3 class="text-xl md:text-2xl font-bold mb-1">
              Visit Us During Business Hours
            </h3>
            <p class="text-white/90">
              Monday - Saturday: 8:00 AM - 6:00 PM | Sunday: Closed
            </p>
          </div>
        </div>
      </div> -->
    {/if}
  </div>
</section>

<style>
  /* Smooth focus transitions */
  input:focus, textarea:focus {
    outline: none;
  }
</style>