import digitalyaLogo from '../assets/digitalya/logo-nobg.webp';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const phoneNumber = '+5492996334237';
  const message = '¡Hola! Me gustaría saber más sobre sus servicios.';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F1F7FF] border-t border-white/40 text-[#021938] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 🟢 CAMBIO REALIZADO: 'items-center' 
           Esto centra el logo y el bloque de texto en mobile (flex-col).
           En desktop (md:), se mantiene la alineación lateral.
        */}
        <div className="flex flex-col items-center md:flex-row md:justify-between gap-10">
          <a href="/" onClick={handleScrollToTop} aria-label="Volver al inicio">
            <img
              src={digitalyaLogo}
              alt="DigitalYa Logo"
              // 👇 Poner aquí las dimensiones reales de tu archivo (Click derecho en la imagen -> Propiedades)
              // Esto NO cambia el tamaño visual, solo protege contra saltos de diseño (CLS).
              width={240}
              height={70}
              className="w-[180px] md:w-[240px] h-auto drop-shadow-[0_0_4px_rgba(0,0,0,0.10)]"
              loading="lazy"
            />
          </a>

          {/* INFO */}
          {/* Mantenemos items-center aquí también para que el texto e iconos se centren entre sí en mobile */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right gap-4">
            <p className="text-[#021938]/70 text-sm md:text-base">
              &copy; {new Date().getFullYear()} DigitalYa — Todos los derechos reservados.
            </p>

            <a
              href="mailto:ventas@digitalya.com.ar"
              className="text-[#065589] hover:text-[#021938] transition-colors font-medium"
              data-track="btn-contact"
            >
              ventas@digitalya.com.ar
            </a>

            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://www.instagram.com/digitalya.ar"
                aria-label="Síguenos en Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <FaInstagram className="w-8 h-8 text-[#065589] group-hover:text-[#021938] transition-all group-hover:scale-110" />
              </a>

              <a
                href={whatsappLink}
                aria-label="Chatea con nosotros por WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                data-track="btn-lead"
              >
                <FaWhatsapp className="w-8 h-8 text-[#065589] group-hover:text-[#021938] transition-all group-hover:scale-110" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
