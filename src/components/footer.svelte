<script>
  const currentYear = new Date().getFullYear();
     import logo from '$lib/assets/KlLatexFavi.png';
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Contact Us', href: '#contact' }
  ];

  const services = [
    { name: 'DRC-Based Settlements', href: '#services' },
    { name: 'Instant Advance Payments', href: '#services' },
    { name: 'Quality Preservation', href: '#services' },
    { name: 'Transparent Pricing', href: '#services' }
  ];

  const contactInfo = {
    address: 'Thachampurath Buildings, Kodumpidy',
    city: 'Kadanad Panchayat, Kerala',
    phone: '+91 9745694494',
    email: 'kodumpidylatex@gmail.com'
  };

  function scrollToSection(sectionId) {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
</script>

<footer class="relative bg-linear-to-b from-gray-900 to-gray-800 text-white">
  <!-- Main Footer Content -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
      
      <!-- Company Info Column -->
      <div class="lg:col-span-1">
        <div class="mb-6">
          <img 
            src={logo}
            alt="Kodumpidy Latex Logo" 
            width="48"
            height="48"
            class="h-12 w-auto mb-4 brightness-0 invert"
          />
          <h3 class="text-2xl font-bold mb-2">Kodumpidy Latex</h3>
        </div>
        <p class="text-white/80 leading-relaxed mb-6 text-sm">
          Trusted partner of Kerala's rubber farming community since 1988. 
          The only Rubber Board-licensed private institution in Kadanad Panchayat.
        </p>
        
        <!-- Certification Badge -->
        <div class="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-600/20 
                   backdrop-blur-sm rounded-xl border-2 border-emerald-500/30 shadow-lg">
          <svg class="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          <span class="text-sm font-semibold text-white/90">Rubber Board Certified</span>
        </div>
      </div>

      <!-- Quick Links Column -->
      <div>
        <h4 class="text-lg font-bold mb-6 text-white flex items-center gap-2">
          <span class="w-1.5 h-6 bg-emerald-400 rounded-full shadow-lg"></span>
          Quick Links
        </h4>
        <ul class="space-y-3">
          {#each quickLinks as link}
            <li>
              <a
                href={link.href}
                on:click|preventDefault={() => scrollToSection(link.href)}
                class="text-white/80 hover:text-emerald-400 transition-colors duration-200
                       flex items-center gap-2 group"
              >
                <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                {link.name}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Services Column -->
      <div>
        <h4 class="text-lg font-bold mb-6 text-white flex items-center gap-2">
          <span class="w-1.5 h-6 bg-emerald-400 rounded-full shadow-lg"></span>
          Our Services
        </h4>
        <ul class="space-y-3">
          {#each services as service}
            <li>
              <a
                href={service.href}
                on:click|preventDefault={() => scrollToSection(service.href)}
                class="text-white/80 hover:text-emerald-400 transition-colors duration-200
                       flex items-center gap-2 group text-sm"
              >
                <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                {service.name}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Contact Info Column -->
      <div>
        <h4 class="text-lg font-bold mb-6 text-white flex items-center gap-2">
          <span class="w-1.5 h-6 bg-emerald-400 rounded-full shadow-lg"></span>
          Contact Us
        </h4>
        <ul class="space-y-4">
          <!-- Address -->
          <li class="flex items-start gap-3">
            <svg class="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div class="text-white/80 text-sm leading-relaxed">
              <p>{contactInfo.address}</p>
              <p>{contactInfo.city}</p>
            </div>
          </li>

          <!-- Phone -->
          <li class="flex items-start gap-3">
            <svg class="w-5 h-5 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <a href="tel:{contactInfo.phone}" 
               class="text-white/80 hover:text-emerald-400 transition-colors text-sm">
              {contactInfo.phone}
            </a>
          </li>

          <!-- Email -->
          <li class="flex items-start gap-3">
            <svg class="w-5 h-5 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href="mailto:{contactInfo.email}" 
               class="text-white/80 hover:text-emerald-400 transition-colors text-sm break-all">
              {contactInfo.email}
            </a>
          </li>
        </ul>

    
      </div>
    </div>

    <!-- Divider -->
    <div class="mt-12 mb-8 border-t border-white/10"></div>

    <!-- Bottom Bar -->
    <div class="flex flex-col md:flex-row items-center justify-between gap-4">
      <!-- Copyright -->
      <div class="text-center md:text-left">
        <p class="text-white/70 text-sm">
          © {currentYear} <span class="font-semibold text-white">Kodumpidy Latex</span>. All rights reserved.
        </p>
        <p class="text-white/50 text-xs mt-1">
          Serving the rubber farming community since 1988
        </p>
      </div>

      <!-- Social Links & Credits -->
      <div class="flex items-center gap-6">
        <!-- Social Media Icons (Optional) -->
        <!-- Removed individual social icons - now using floating action buttons -->

        <!-- Privacy Links -->
        <div class="flex items-center gap-4 text-xs text-white/60">
          <span class="hover:text-white/90 transition-colors">Privacy Policy</span>
          <span>•</span>
          <span class="hover:text-white/90 transition-colors">Terms of Service</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Decorative bottom accent -->
  <div class="h-1 bg-linear-to-r from-[#77C381] via-[#2E7D32] to-[#77C381]"></div>
</footer>