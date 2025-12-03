// import Features from '../components/Features';
// import Testimonials from '../components/Testimonials';
// import Pricing from '../components/Pricing';
// import Contact from '../components/Contact';
import Footer from '../components/Footer';
// import LogoTicker from '../components/LogoTicker';
import { Toaster } from 'sonner';
// import NavBar from '../components/NavBar';
import AboutNextSteps from '../components/AboutNextSteps';
// import WhatsAppButton from '../components/WhatsappButton';
import HeroNextSteps from '../components/HeroNextSteps';

const NextSteps = () => {
  return (
    <>
      {/* <NavBar /> */}
      <HeroNextSteps />
      {/* <LogoTicker /> */}
      {/* <Features /> */}
      <AboutNextSteps />
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      {/* <Contact /> */}
      <Toaster />
      <Footer />
      {/* <WhatsAppButton /> */}
    </>
  );
};

export default NextSteps;
