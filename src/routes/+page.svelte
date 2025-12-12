<script>
  import NavBar from '../components/navBar.svelte';
  import HeroSection from '../components/heroSection.svelte';
  import About from '../components/about.svelte';
  import Offer from '../components/offer.svelte';
  import Location from '../components/location.svelte';
  import Footer from '../components/footer.svelte';
  import FloatingActions from '../components/floatingActions.svelte';
  import Journey from '../components/journey.svelte';
</script>



<header>
  <NavBar />
</header>

<main id="main-content">
  <HeroSection />
  <About />
  <Offer />
   <Journey />
  <Location />
  <Footer />
  <FloatingActions />
 
  <!-- <h2>Welcome to our site!</h2> -->
</main>