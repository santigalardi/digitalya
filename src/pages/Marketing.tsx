import HeroMarketing from '../components/HeroMarketing';
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
import FaqSection from '../components/FaqSection';
import WhyChooseUs from '../components/WhyChooseUs';
import { faqsMarketing } from '../data/faqsMarketing';
import CalendlyEmbed from '../components/CalendlyEmbed';

const Marketing = () => {
  return (
    <>
      <NavBar />
      <main>
        <HeroMarketing />
        {/* <LogoTicker /> */}
        <Features />
        <WhyChooseUs />
        <FaqSection faqs={faqsMarketing} />
        <CalendlyEmbed type="Marketing" />
        {/* <Nosotros /> */}
        {/* <Testimonials /> */}
        {/* <Pricing /> */}
        <Contact />
      </main>
      <Toaster />
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Marketing;
