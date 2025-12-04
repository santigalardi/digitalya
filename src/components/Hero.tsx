import { IoCalendarOutline, IoChatbubblesOutline } from 'react-icons/io5';
import cloudbg from '../assets/digitalya/cloudbg.webp';
import heroimg from '../assets/digitalya/cloudpcimg.webp';

const Hero = () => {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Previene el salto brusco del navegador
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative pt-30 pb-20 md:pt-10 md:pb-16 bg-gradient-to-l from-[#3FA7DE] to-[#E8F7FF] overflow-x-clip"
      aria-label="Introducción"
    >
      {/* Fondo Decorativo */}
      <div
        className="absolute inset-0 w-full h-full opacity-35 mix-blend-overlay pointer-events-none select-none"
        aria-hidden="true" // 🟢 A11Y: Ocultamos el fondo decorativo a los lectores de pantalla
        style={{
          backgroundImage: `url(${cloudbg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center md:flex-row">
          {/* Columna de Contenido (Texto y CTA) */}
          <div className="w-full md:w-[552px] flex flex-col items-center md:items-start space-y-0 z-10 relative">
            <h1 className="text-4xl text-center md:text-start md:text-5xl font-bold tracking text-[#021938] mt-4 leading-snug drop-shadow-sm mb-8">
              Desarrollo Web y Marketing para Marcas que quieren
              <span className="text-[#3FA7DE] drop-shadow-[0_0_1px_rgba(255,255,255,0.8)]"> crecer.</span>
            </h1>

            <p className="text-[#021938]/80 text-base md:text-lg leading-relaxed max-w-xl text-center md:text-left mb-12">
              No estás solo en el mundo digital. Diseñamos{' '}
              <strong className="font-bold">sitios web que conectan</strong>,{' '}
              <strong className="font-bold">campañas publicitarias que venden</strong> y te damos{' '}
              <strong className="font-bold">soporte real 24/7</strong> para que tu marca crezca sin límites.
            </p>

            {/* Botones CTA */}
            <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto mt-4">
              <a
                href="#contact"
                onClick={handleScrollToContact}
                className="bg-[#021938] text-white px-5 py-3 rounded-xl font-medium inline-flex items-center justify-center
                transition-all shadow-[0_0_0_0_#3FA7DE] hover:shadow-[3px_3px_2px_0px_#00DDFF]
                transform hover:-translate-x-0.5 hover:-translate-y-0.5
                w-full md:w-auto cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#021938]"
                aria-label="Ir al formulario de contacto"
              >
                Contanos qué necesitás
                <IoChatbubblesOutline className="ml-3 text-xl" aria-hidden="true" />
              </a>

              <a
                href="https://calendly.com/jignaciosolari/impulsa-tu-marca-con-digitalya"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl font-medium text-[#021938] border border-[#021938]/30
                bg-white/60 backdrop-blur-sm inline-flex items-center justify-center gap-2
                hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all
                hover:shadow-[3px_3px_2px_0px_#00DDFF] hover:border-[#021938]
                w-full md:w-auto cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#021938]"
              >
                <IoCalendarOutline className="text-xl" aria-hidden="true" />
                Agendar reunión
              </a>
            </div>
          </div>

          {/* Columna de Imagen (Oculta en Mobile) */}
          <div className="hidden md:block md:mt-0 md:h-[648px] md:flex-1 relative">
            <img
              src={heroimg}
              alt="Ilustración de servicios digitales en la nube y tecnología" // 🟢 A11Y: Alt descriptivo pero conciso
              width={800} // 🟢 PERFORMANCE: Define dimensiones base para evitar CLS
              height={800}
              loading="eager" // 🟢 PERFORMANCE: Carga inmediata (LCP)
              fetchPriority="high" // 🟢 PERFORMANCE: Prioridad alta para el navegador
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0 opacity-90 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
