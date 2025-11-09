import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import digitalyaLogo from '../assets/digitalya/logo-nobg.png';
// import { IoMenu, IoClose, IoRocketOutline } from 'react-icons/io5';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', targetId: 'hero' },
    { name: 'Servicios', targetId: 'services' },
    { name: 'Nosotros', targetId: 'about' },
    { name: 'Contacto', targetId: 'contact' },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div className="flex-shrink-0" transition={{ type: 'tween', stiffness: 400, damping: 10 }}>
              <button
                onClick={() => {
                  document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hover:cursor-pointer"
              >
                <img
                  src={digitalyaLogo}
                  alt="DigitalYa logo"
                  className={`h-10 md:h-16 transition-all duration-300 ${
                    isScrolled ? 'drop-shadow-none' : 'drop-shadow-[0_0_3px_rgba(255,255,255,1)]'
                  }`}
                />
              </button>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-12">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => {
                    document.getElementById(item.targetId)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`font-medium text-md tracking-tight transition-colors duration-300 bg-transparent border-none cursor-pointer ${
                    isScrolled ? 'text-[#021938] hover:text-[#41A9F0]' : 'text-white hover:text-[#caebfd]'
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}

              <button
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#021938] mt-[10px] text-white px-4 py-2 rounded-lg font-medium inline-flex align items justify-center tracking-tight w-full cursor-pointer hover:bg-[#3FA7DE] active:scale-98 transition-colors duration-300"
              >
                ¿Comenzamos?
              </button>
            </div>

            {/* Mobile menu button */}
            <motion.button
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-[#021938] hover:bg-gray-100' : 'text-white hover:bg-white/20'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {/* {isMobileMenuOpen ? <IoClose className="text-2xl" /> : <IoMenu className="text-2xl" />} */}☰
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />

            {/* Menu Panel */}
            <motion.div
              className="absolute top-0 right-0 w-64 h-full bg-white shadow-xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <img src={digitalyaLogo} alt="DigitalYa logo" className="h-8" />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-[#021938] hover:bg-gray-100 rounded-lg"
                  >
                    {/* <IoClose className="text-2xl" /> */}✕
                  </button>
                </div>

                <div className="space-y-4">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => {
                        document.getElementById(item.targetId)?.scrollIntoView({ behavior: 'smooth' });
                        setIsMobileMenuOpen(false);
                      }}
                      className="block w-full text-left py-3 px-4 text-[#021938] font-medium rounded-lg hover:bg-[#41A9F0] hover:text-white transition-colors duration-300"
                    >
                      {item.name}
                    </button>
                  ))}

                  {/* <button className="w-full bg-[#021938] text-white px-4 py-3 rounded-lg font-semibold inline-flex items-center justify-center gap-2 tracking-tight cursor-pointer hover:bg-[#46AAE1] hover:text-[#021938] transition-all duration-300 mt-4">
                    <p>Contactar</p>
                    <IoRocketOutline className="text-lg" />
                  </button> */}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
