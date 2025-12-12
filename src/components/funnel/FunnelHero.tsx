import digitalyaLogo from '../../assets/digitalya/logo-nobg.webp';
import { IoCalendarOutline } from 'react-icons/io5';
import { FaWhatsapp } from 'react-icons/fa';
import cloudbg from '../../assets/digitalya/cloudbg.webp';
import { useEffect, useState } from 'react';
import { getWhatsAppLink } from '../../utils/whatsapp';

interface FunnelHeroProps {
  type: 'marketing' | 'web';
}

const Counter = ({ target, className = '' }: { target: number; className?: string }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const step = Math.max(10, Math.floor(duration / target));

    const timer = setInterval(() => {
      start++;
      setValue(start);
      if (start >= target) clearInterval(timer);
    }, step);

    return () => clearInterval(timer);
  }, [target]);

  return <span className={className}>{value}</span>;
};

const FunnelHero = ({ type }: FunnelHeroProps) => {
  const isMarketing = type === 'marketing';
  const whatsappMessage = isMarketing ? 'marketing' : 'web';
  const whatsappLink = getWhatsAppLink(whatsappMessage);

  const data = {
    title: isMarketing ? 'Más clientes para tu negocio con' : 'Tu Sitio Web Profesional',
    highlight: isMarketing ? 'Marketing Digital Efectivo.' : 'Listo en 7 Días',
    description: isMarketing
      ? 'Creamos y optimizamos campañas en redes sociales para atraer clientes reales y aumentar tus ventas.'
      : 'Creamos sitios web que generan confianza inmediata, cargan rápido y te posicionan como líder en tu rubro.',

    ctaPrimary: isMarketing ? 'Cotizar Estrategia' : 'Cotizar Web',
    ctaSecondary: 'Agendar Reunión',
  };

  const baseButtonStyles =
    'px-8 py-4 w-full md:w-auto min-w-[240px] rounded-xl font-bold text-[#021938] border border-[#021938]/30 bg-white/60 backdrop-blur-sm inline-flex items-center justify-center gap-3 transition-all cursor-pointer hover:-translate-x-0.5 hover:-translate-y-0.5';

  return (
    <section
      id="funnel-hero"
      className="relative pt-32 pb-12 md:pt-40 bg-gradient-to-b from-[#ffffff] via-[#c0e4fd] to-[#d7eeff] overflow-x-clip flex flex-col justify-center"
    >
      {/* Fondo nubes */}
      <div
        className="absolute inset-0 w-full h-full opacity-90 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url(${cloudbg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Logo */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20">
        <img
          src={digitalyaLogo}
          alt="DigitalYa Logo"
          className="h-10 md:h-14 drop-shadow-[0_0_4px_rgba(255,255,255,0.9)]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#021938] leading-[1.1] drop-shadow-sm mb-8 max-w-4xl">
          {data.title} <br className="hidden md:block" />
          <span className="text-[#3FA7DE] drop-shadow-[0_0_1px_rgba(255,255,255,0.9)] block mt-2 md:inline">
            {data.highlight}
          </span>
        </h1>

        <p className="text-[#021938]/80 text-lg md:text-xl leading-relaxed max-w-2xl mb-12 font-medium">
          {data.description}
        </p>

        {/* --- ZONA DE BOTONES --- */}
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-5 mb-16">
          <button
            onClick={() => document.getElementById('calendly')?.scrollIntoView({ behavior: 'smooth' })}
            className={`${baseButtonStyles} hover:shadow-[3px_3px_2px_0px_#00DDFF] hover:border-[#021938]`}
            data-track="btn-schedule"
          >
            <IoCalendarOutline className="text-xl" />
            {data.ctaSecondary}
          </button>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            data-track="btn-lead"
            className={`${baseButtonStyles} hover:shadow-[3px_3px_2px_0px_#25D366] hover:border-[#25D366]`}
          >
            <FaWhatsapp className="text-2xl text-[#25D366]" />
            {data.ctaPrimary}
          </a>
        </div>

        {/* BLOQUE DE CREDIBILIDAD */}
        <div className="flex pb-6 flex-col items-center justify-center animate-fade-in-up px-4 text-center">
          <h3 className="text-2xl md:text-4xl text-[#021938] font-medium leading-tight max-w-4xl">
            Elegidos por
            <span className="font-black text-5xl md:text-6xl text-[#3FA7DE] align-middle mx-3 tracking-tighter inline-flex items-center filter drop-shadow-sm">
              +<Counter target={17} />
            </span>
            empresas
          </h3>

          <p className="text-xs md:text-sm font-bold text-[#021938]/40 uppercase tracking-[0.25em] mt-4">
            para escalar su negocio digital
          </p>
        </div>
      </div>
    </section>
  );
};

export default FunnelHero;
