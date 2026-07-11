import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import WhyUs from "./components/WhyUs";
import Cinematic from "./components/Cinematic";
import Footer from "./components/Footer";
import About from "./components/About";
import Packages from "./components/Packages";

export default function Home() {
  return (
    <main id="top">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Stats />
      <Testimonials />
      <WhyUs />
      <Cinematic />
      <About />
      <Packages />
      <Footer />
    </main>
  );
}