import digitalyaLogo from '../../assets/digitalya/logo-nobg.png';
import heroMarketingImage from '../../assets/digitalya/webbg2.webp';
import heroWebImage from '../../assets/digitalya/webbg4.webp';
import { IoRocketOutline, IoCalendarOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';
import cloudbg from '../../assets/digitalya/cloudbg.jpg';

interface FunnelHeroProps {
  type: 'marketing' | 'web';
}

const FunnelHero = ({ type }: FunnelHeroProps) => {
  const isMarketing = type === 'marketing';

  const data = {
    title: isMarketing ? 'Más clientes para tu negocio con' : 'Hacemos que tu negocio crezca con',

    highlight: isMarketing ? 'Marketing Digital Efectivo.' : 'Sitios Web que Convierten.',

    description: isMarketing
      ? 'Creamos y optimizamos campañas en redes sociales para atraer clientes reales y aumentar tus ventas.'
      : 'Diseñamos páginas web rápidas, profesionales y optimizadas para atraer clientes y generar ventas reales.',

    primaryCtaText: isMarketing ? 'Quiero conseguir más clientes' : 'Quiero mi sitio web',

    image: isMarketing ? heroMarketingImage : heroWebImage,
  };

  return (
    <section
      id="funnel-hero"
      className="relative pt-32 pb-12 md:pt-24 md:pb-20 bg-gradient-to-r from-[#E8F7FF] to-[#3FA7DE] overflow-x-clip"
    >
      <div
        className="absolute inset-0 w-full h-full opacity-35 mix-blend-overlay pointer-events-none select-none"
        style={{
          backgroundImage: `url(${cloudbg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Logo fijo arriba */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2">
        <img
          src={digitalyaLogo}
          alt="DigitalYa Logo"
          className="h-12 md:h-16 drop-shadow-[0_0_4px_rgba(255,255,255,0.9)] pointer-events-none select-none"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row items-center">
        {/* ==== Texto ==== */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start">
          <h1 className="text-4xl md:text-5xl font-bold text-[#021938] leading-snug text-center md:text-left drop-shadow-sm mb-6">
            {data.title}{' '}
            <span className="text-[#3FA7DE] drop-shadow-[0_0_1px_rgba(255,255,255,0.9)]">{data.highlight}</span>
          </h1>

          <p className="text-[#021938]/80 text-base md:text-lg leading-relaxed text-center md:text-left max-w-xl mb-10">
            {data.description}
          </p>

          {/* ==== Botones CTA ==== */}
          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto mt-4">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#021938] text-white px-5 py-3 rounded-xl font-medium inline-flex items-center justify-center
              transition-all shadow-[0_0_0_0_#3FA7DE] hover:shadow-[3px_3px_2px_0px_#00DDFF]
              transform hover:-translate-x-0.5 hover:-translate-y-0.5 w-full md:w-auto cursor-pointer"
            >
              {data.primaryCtaText}
              <IoRocketOutline className="ml-3 text-xl" />
            </button>

            <button
              onClick={() => document.getElementById('calendly')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-5 py-3 rounded-xl font-medium text-[#021938] border border-[#021938]/30
              bg-white/60 backdrop-blur-sm inline-flex items-center justify-center gap-2
              hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all
              hover:shadow-[3px_3px_2px_0px_#00DDFF] hover:border-[#021938]
              w-full md:w-auto cursor-pointer"
            >
              <IoCalendarOutline className="text-xl" />
              Agendar reunión
            </button>
          </div>
        </div>

        {/* ==== Imagen ==== */}
        <motion.div className="mx-10 pl-10 md:flex-1 flex justify-center">
          <img src={data.image} alt="Hero" className="w-[500px] md:w-[600px] lg:w-[700px] rounded-xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default FunnelHero;
