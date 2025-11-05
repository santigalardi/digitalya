import Hero from './components/Hero';
import Features from './components/Features';
// import Testimonials from './components/Testimonials';
// import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import LogoTicker from './components/LogoTicker';
import { Toaster } from 'sonner';
import NavBar from './components/NavBar';
import Nosotros from './components/Nosotros';

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      {/* <LogoTicker /> */}
      <Features />
      <Nosotros />
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      <Contact />
      <Toaster />
      <Footer />
    </>
  );
};

export default App;
