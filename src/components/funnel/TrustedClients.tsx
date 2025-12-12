import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import clientsVideo from '../../assets/digitalya/clients-showcase.mp4';
import { getWhatsAppLink } from '../../utils/whatsapp';

const TrustedClients = () => {
  const whatsappLink = getWhatsAppLink();

  return (
    <section className="pt-8 pb-16 bg-[#ECFBFF] overflow-hidden relative">
      {/* Degradado superior */}
      <div className="absolute top-0 left-0 w-full h-32  pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
          {/* === IZQUIERDA: TEXTO + BOTÓN (SOLO DESKTOP) === */}
          <motion.div
            className="md:w-5/12 text-center md:text-left flex flex-col items-center md:items-start"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-4xl md:text-5xl font-black text-[#021938] leading-[1.2] tracking-tighter mb-6">
              Tu mejor vendedor <br />
              <span className="text-[#3FA7DE]">Disponible 24/7</span>
            </h3>

            <p className="text-[#021938]/70 text-lg font-medium mb-8 leading-relaxed">
              Sitios Web pensados para vender y atraer leads calificados. Rápidos, seguros y optimizados.
            </p>

            {/* BOTÓN WHATSAPP - SOLO VISIBLE EN DESKTOP */}
            <div className="hidden md:block">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                data-track="btn-lead"
                className="px-8 py-4 w-full md:w-auto min-w-[240px] rounded-xl font-bold text-[#021938] border border-[#021938]/30 bg-white/60 backdrop-blur-sm inline-flex items-center justify-center gap-3 transition-all cursor-pointer hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_2px_0px_#25D366] hover:border-[#25D366]"
              >
                <FaWhatsapp className="text-2xl text-[#25D366]" />
                Quiero mi Sitio Web
              </a>
            </div>
          </motion.div>

          {/* === DERECHA: VIDEO === */}
          <motion.div
            className="md:w-7/12 w-full"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          >
            <div className="relative border-4 border-[#021938] shadow-[10px_10px_0px_0px_#c0e4fd] bg-[#021938]">
              <video src={clientsVideo} className="w-full h-auto object-cover block" autoPlay loop muted playsInline />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none mix-blend-overlay"></div>
            </div>
          </motion.div>

          {/* === BOTÓN WHATSAPP - SOLO VISIBLE EN MOBILE (DEBAJO DEL VIDEO) === */}
          <motion.div
            className="w-full md:hidden mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              data-track="btn-lead"
              className="px-8 py-4 w-full md:w-auto min-w-[240px] rounded-xl font-bold text-[#021938] border border-[#021938]/30 bg-white/60 backdrop-blur-sm inline-flex items-center justify-center gap-3 transition-all cursor-pointer hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_2px_0px_#25D366] hover:border-[#25D366]"
            >
              <FaWhatsapp className="text-2xl text-[#25D366]" />
              Quiero mi Sitio Web
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;
