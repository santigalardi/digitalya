import acmeLogo from '../assets/logo-acme.png';
import quantumLogo from '../assets/logo-quantum.png';
import echoLogo from '../assets/logo-echo.png';
import celestialLogo from '../assets/logo-celestial.png';
import pulseLogo from '../assets/logo-pulse.png';
import apexLogo from '../assets/logo-apex.png';
import { motion } from 'framer-motion';

const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,black,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{ translateX: '-50%' }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
          >
            <img src={acmeLogo} alt="Apex Logo" className="h-8 w-auto" />
            <img src={quantumLogo} alt="Quantum Logo" className="h-8 w-auto" />
            <img src={echoLogo} alt="Echo Logo" className="h-8 w-auto" />
            <img src={celestialLogo} alt="Celestial Logo" className="h-8 w-auto" />
            <img src={pulseLogo} alt="Pulse Logo" className="h-8 w-auto" />
            <img src={apexLogo} alt="Apex Logo" className="h-8 w-auto" />

            {/* seciond set of logos for animation */}
            <img src={acmeLogo} alt="Apex Logo" className="h-8 w-auto" />
            <img src={quantumLogo} alt="Quantum Logo" className="h-8 w-auto" />
            <img src={echoLogo} alt="Echo Logo" className="h-8 w-auto" />
            <img src={celestialLogo} alt="Celestial Logo" className="h-8 w-auto" />
            <img src={pulseLogo} alt="Pulse Logo" className="h-8 w-auto" />
            <img src={apexLogo} alt="Apex Logo" className="h-8 w-auto" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
