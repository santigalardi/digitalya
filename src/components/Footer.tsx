import digitalyaLogo from '../assets/digitalya/logo-nobg.png';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const phoneNumber = '+5492996334237'; // tu número con código de país y sin signos
  const message = '¡Hola! Me gustaría saber más sobre sus servicios.';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <footer className="bg-[#F1F7FF] border-t border-white/40 text-[#021938] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          {/* LOGO */}
          <img
            src={digitalyaLogo}
            alt="DigitalYa logo"
            className="w-[180px] md:w-[240px] drop-shadow-[0_0_4px_rgba(0,0,0,0.10)]"
          />

          {/* INFO */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right gap-4">
            <p className="text-[#021938]/70 text-sm md:text-base">
              &copy; 2025 DigitalYa — Todos los derechos reservados.
            </p>

            <a
              href="mailto:ventas@digitalya.com.ar"
              className="text-[#3FA7DE] hover:text-[#021938] transition-colors font-medium"
            >
              ventas@digitalya.com.ar
            </a>

            <div className="flex items-center gap-4 mt-2">
              <a href="https://www.instagram.com/digitalya.ar" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="w-8 h-8 text-[#3FA7DE] hover:text-[#021938] transition-all hover:scale-110" />
              </a>

              <a
                href={whatsappLink} // <-- número real
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="w-8 h-8 text-[#3FA7DE] hover:text-[#021938] transition-all hover:scale-110" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
