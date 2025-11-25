import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { IoCalendarOutline, IoRocketOutline } from 'react-icons/io5';
import heroMarketingImage from '../assets/digitalya/webbg2.webp'; // ← ajustá el nombre según tu imagen real

const HeroMarketing = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start'],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      id="hero-marketing"
      ref={heroRef}
      className="pt-36 pb-12 md:pt-20 md:pb-20 bg-gradient-to-r from-[#E8F7FF] to-[#3FA7DE] overflow-x-clip"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center md:flex-row">
          {/* Texto principal */}
          <div className="md:w-[552px] flex flex-col items-center md:items-start space-y-0">
            <h2 className="text-4xl text-center md:text-start md:text-5xl font-bold text-[#021938] mt-4 leading-snug drop-shadow-sm mb-8">
              Marketing Digital que genera{' '}
              <span className="text-[#3FA7DE] drop-shadow-[0_0_1px_rgba(255,255,255,0.8)]">resultados.</span>
            </h2>

            <p className="text-[#021938]/80 text-base md:text-lg leading-relaxed max-w-xl text-center md:text-left mb-12">
              Potenciamos tu presencia online con <b>estrategias efectivas de redes sociales, anuncios y contenido</b>.
              Aumentá tu visibilidad, atraé nuevos clientes y hacé crecer tu negocio de forma medible y sostenible.
            </p>

            {/* Botones CTA — mismos estilos que el resto del sitio */}
            <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto mt-4">
              {/* CTA principal */}
              <button
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#021938] text-white px-5 py-3 rounded-xl font-medium inline-flex items-center justify-center 
    shadow-[0_0_0_0_#3FA7DE] transition-all hover:shadow-[3px_3px_2px_0px_#00DDFF]
    hover:-translate-x-0.5 hover:-translate-y-0.5 w-full md:w-auto cursor-pointer"
              >
                Quiero impulsar mi marca
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

          {/* Imagen estática con parallax */}
          <motion.div className="mx-10 pl-10 md:flex-1 flex justify-center" style={{ translateY }}>
            <img
              src={heroMarketingImage}
              alt="Marketing digital"
              className="w-[500px] md:w-[600px] lg:w-[700px] rounded-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroMarketing;
