import HeroWebDev from '../components/HeroWebDev';
import Features from '../components/Features';
// import Testimonials from '../components/Testimonials';
// import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
// import LogoTicker from '../components/LogoTicker';
import { Toaster } from 'sonner';
import NavBar from '../components/NavBar';
// import Nosotros from '../components/About';
import WhatsAppButton from '../components/WhatsappButton';
import WhyChooseUs from '../components/WhyChooseUs';
import FaqSection from '../components/FaqSection';
import { faqsWeb } from '../data/faqsWeb';

const WebDevelopment = () => {
  return (
    <>
      <NavBar />
      <HeroWebDev />
      {/* <LogoTicker /> */}
      <Features />
      <WhyChooseUs />
      <FaqSection faqs={faqsWeb} />
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      <Contact />
      <Toaster />
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default WebDevelopment;
