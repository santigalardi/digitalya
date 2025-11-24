import FunnelHero from '../components/funnel/FunnelHero';
import FunnelPainPoints from '../components/funnel/FunnelPainPoints';
import FunnelBenefits from '../components/funnel/FunnelBenefits';
import FunnelOffer from '../components/funnel/FunnelOffer';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Toaster } from 'sonner';
import WhatsAppButton from '../components/WhatsappButton';
import CalendlyEmbed from '../components/CalendlyEmbed';

const MarketingFunnel = () => {
  return (
    <>
      <FunnelHero />
      <FunnelPainPoints />
      <FunnelBenefits />
      <FunnelOffer />
      <CalendlyEmbed />
      <Contact />
      <Toaster />
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default MarketingFunnel;
