import AirplaneCursor from '@/components/cursor/AirplaneCursor';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import BusinessTravelStory from '@/components/sections/BusinessTravelStory';
import Experience from '@/components/sections/Experience';
import Destinations from '@/components/sections/Destinations';
import Skills from '@/components/sections/Skills';
import Achievements from '@/components/sections/Achievements';
import Education from '@/components/sections/Education';
import Contact from '@/components/sections/Contact';

function App() {
  return (
    <>
      <AirplaneCursor />
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <BusinessTravelStory />
        <Experience />
        <Destinations />
        <Skills />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
