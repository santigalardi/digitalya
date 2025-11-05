import Hero from './components/Hero';
import Features from './components/Features';
// import Testimonials from './components/Testimonials';
// import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import LogoTicker from './components/LogoTicker';
import { Toaster } from 'sonner';

const App = () => {
  return (
    <>
      <Hero />
      {/* <LogoTicker /> */}
      <Features />
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      <Contact />
      <Toaster />
      <Footer />
    </>
  );
};

export default App;
