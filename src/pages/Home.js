import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Stats from '../components/Stats'; // ✅ ADD THIS
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />

      <Stats /> {/* ✅ ADD HERE */}

      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;