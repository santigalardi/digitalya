import digitalyaLogo from '../../assets/digitalya/logo-nobg.png';
import { IoRocketOutline, IoCalendarOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';
import heroMarketingImage from '../../assets/digitalya/webbg2.png';

const FunnelHero = () => {
  return (
    <section
      id="funnel-hero"
      className="relative pt-32 pb-12 md:pt-24 md:pb-20 bg-gradient-to-r from-[#E8F7FF] to-[#3FA7DE] overflow-x-clip"
    >
      {/* ⭐ Logo centrado tipo navbar estático ⭐ */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2">
        <img
          src={digitalyaLogo}
          alt="DigitalYa Logo"
          className="h-12 md:h-16 drop-shadow-[0_0_4px_rgba(255,255,255,0.9)] pointer-events-none select-none"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row items-center">
        {/* Texto */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start">
          <h1 className="text-4xl md:text-5xl font-bold text-[#021938] leading-snug text-center md:text-left drop-shadow-sm mb-6">
            Más clientes para tu negocio con{' '}
            <span className="text-[#3FA7DE] drop-shadow-[0_0_1px_rgba(255,255,255,0.9)]">
              Marketing Digital efectivo.
            </span>
          </h1>

          <p className="text-[#021938]/80 text-base md:text-lg leading-relaxed text-center md:text-left max-w-xl mb-10">
            Creamos y optimizamos campañas en redes sociales para atraer clientes reales y aumentar tus ventas, sin que
            tengas que perder tiempo o dinero probando al azar.
          </p>

          {/* Botones CTA */}
          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto mt-4">
            {/* CTA Principal */}
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#021938] text-white px-5 py-3 rounded-xl font-medium inline-flex items-center justify-center
              transition-all shadow-[0_0_0_0_#3FA7DE] hover:shadow-[3px_3px_2px_0px_#00DDFF]
              transform hover:-translate-x-0.5 hover:-translate-y-0.5 w-full md:w-auto cursor-pointer"
            >
              Quiero conseguir más clientes
              <IoRocketOutline className="ml-3 text-xl" />
            </button>

            {/* CTA Secundario: Calendly */}
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

        {/* Imagen */}
        <motion.div className="mx-10 pl-10 md:flex-1 flex justify-center">
          <img
            src={heroMarketingImage}
            alt="Marketing Digital"
            className="w-[500px] md:w-[600px] lg:w-[700px] rounded-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FunnelHero;
