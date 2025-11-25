import FunnelHero from '../components/funnel/FunnelHero';
import FunnelPainPoints from '../components/funnel/FunnelPainPoints';
import FunnelBenefits from '../components/funnel/FunnelBenefits';
import FunnelOffer from '../components/funnel/FunnelOffer';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Toaster } from 'sonner';
import WhatsAppButton from '../components/WhatsappButton';
import CalendlyEmbed from '../components/CalendlyEmbed';
import FaqSection from '../components/FaqSection';
import { faqsMarketing } from '../data/faqsMarketing';

const WebFunnel = () => {
  return (
    <>
      <FunnelHero />
      <FunnelPainPoints />
      <FunnelBenefits />
      <FunnelOffer />
      <FaqSection faqs={faqsMarketing} />
      <CalendlyEmbed />
      <Contact />
      <Toaster />
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default WebFunnel;
