import digitalyaLogo from '../../assets/digitalya/logo-nobg.png';
import { IoCalendarOutline } from 'react-icons/io5';
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
  };

  return (
    <section
      id="funnel-hero"
      className="relative pt-32 pb-16 md:pt-24 md:pb-20 bg-gradient-to-r from-[#E8F7FF] to-[#3FA7DE] overflow-x-clip"
    >
      {/* Fondo nubes superpuesto */}
      <div
        className="absolute inset-0 w-full h-full opacity-35 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url(${cloudbg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Logo */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2">
        <img
          src={digitalyaLogo}
          alt="DigitalYa Logo"
          className="h-12 md:h-16 drop-shadow-[0_0_4px_rgba(255,255,255,0.9)]"
        />
      </div>

      {/* Video centrado */}
      <div className="max-w-4xl mx-auto text-center mt-6 mb-6">
        <div className="relative w-full pb-[50%] h-0 overflow-hidden rounded-xl shadow-lg bg-black">
          <iframe
            src="https://iframe.mediadelivery.net/embed/554669/723e8a02-487a-4ad6-849e-612d20ba231c?autoplay=true&loop=false&muted=true&controls=false"
            loading="lazy"
            className="absolute top-0 left-0 w-full h-full"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            allowFullScreen
            style={{ border: 'none' }}
          ></iframe>
        </div>
      </div>

      {/* Texto + CTA */}
      <div className="mx-auto max-w-5xl py-12 px-6 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#021938] leading-snug drop-shadow-sm mb-12">
          {data.title} <br />
          <span className="text-[#3FA7DE] drop-shadow-[0_0_1px_rgba(255,255,255,0.9)]">{data.highlight}</span>
        </h1>
        <p className="text-[#021938]/80 text-base md:text-xl leading-relaxed max-w-2xl mb-12">{data.description}</p>

        {/* CTA */}
        <button
          onClick={() => document.getElementById('calendly')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-10 py-3 w-full md:w-1/2 rounded-xl font-medium text-[#021938] border border-[#021938]/30
          bg-white/60 backdrop-blur-sm inline-flex items-center justify-center gap-2
          hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all
          hover:shadow-[3px_3px_2px_0px_#00DDFF] hover:border-[#021938] cursor-pointer"
        >
          <IoCalendarOutline className="text-xl" />
          Agendar reunión
        </button>
      </div>
    </section>
  );
};

export default FunnelHero;
