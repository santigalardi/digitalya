import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import digitalyaLogo from '../assets/digitalya/logo-nobg.webp';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 👉 función auxiliar para scroll o redirección (INTACTA)
  const handleScrollOrNavigate = (targetId: string) => {
    if (targetId === 'contact') {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      return;
    }

    if (location.pathname === '/') {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }

    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: 'Inicio', targetId: 'hero', type: 'scroll' },
    { name: 'Servicios', type: 'dropdown' },
    { name: 'Nosotros', targetId: 'about', type: 'scroll' },
    { name: 'Contacto', targetId: 'contact', type: 'scroll' },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div className="flex-shrink-0">
              <a onClick={() => handleScrollOrNavigate('hero')} className="hover:cursor-pointer" href="#">
                <img
                  src={digitalyaLogo}
                  alt="DigitalYa logo"
                  className={`h-10 md:h-16 transition-all duration-300 ${
                    isScrolled ? 'drop-shadow-none' : 'drop-shadow-[0_0_3px_rgba(255,255,255,1)]'
                  }`}
                />
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-12 relative text-center">
              {navItems.map((item) =>
                item.type === 'dropdown' ? (
                  <div
                    key="Servicios"
                    className="relative py-2 cursor-pointer"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button
                      onClick={() => handleScrollOrNavigate('services')}
                      className={`flex items-center text-center gap-1 font-medium text-md tracking-tight transition-colors duration-300 bg-transparent border-none cursor-pointer ${
                        isScrolled ? 'text-[#021938] hover:text-[#41A9F0]' : 'text-white hover:text-[#021938]'
                      }`}
                      aria-expanded={isServicesOpen}
                      aria-haspopup="true"
                      aria-controls="services-dropdown"
                    >
                      Servicios
                      <motion.span
                        animate={{ rotate: isServicesOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="inline-block"
                      >
                        <ChevronDown size={16} />
                      </motion.span>
                    </button>

                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          id="services-dropdown"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden"
                          role="menu"
                        >
                          {/* 🟢 CAMBIO AQUÍ: Usamos <a> para Desktop Dropdown */}
                          <a
                            href="/desarrollo-web"
                            onClick={(e) => {
                              e.preventDefault(); // Evita recarga completa
                              setIsServicesOpen(false);
                              navigate('/desarrollo-web');
                            }}
                            className="block w-full text-left px-4 py-3 text-[#021938] hover:bg-[#41A9F0] hover:text-white hover:cursor-pointer transition-colors duration-200 no-underline"
                            role="menuitem"
                          >
                            Desarrollo Web
                          </a>
                          <a
                            href="/marketing"
                            onClick={(e) => {
                              e.preventDefault(); // Evita recarga completa
                              setIsServicesOpen(false);
                              navigate('/marketing');
                            }}
                            className="block w-full text-left px-4 py-3 text-[#021938] hover:bg-[#41A9F0] hover:text-white hover:cursor-pointer transition-colors duration-200 no-underline"
                            role="menuitem"
                          >
                            Marketing Digital
                          </a>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <motion.button
                    key={item.name}
                    onClick={() => handleScrollOrNavigate(item.targetId!)}
                    className={`font-medium text-md tracking-tight transition-colors duration-300 bg-transparent border-none cursor-pointer ${
                      isScrolled ? 'text-[#021938] hover:text-[#41A9F0]' : 'text-white hover:text-[#021938]'
                    }`}
                    data-track="btn-contact"
                  >
                    {item.name}
                  </motion.button>
                )
              )}

              <button
                onClick={() => handleScrollOrNavigate('contact')}
                className="bg-[#021938] text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight w-full cursor-pointer
                  transition-all
                  shadow-[0_0_0_0_#3FA7DE]
                  hover:shadow-[3px_3px_2px_0px_#00DDFF] transform hover:-translate-x-0.5 hover:-translate-y-0.5"
                data-track="btn-contact"
              >
                Contáctanos
              </button>
            </div>

            {/* Mobile menu button */}
            <motion.button
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-[#021938] hover:bg-gray-100' : 'text-white hover:bg-white/20'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
              aria-label="Abrir menú de navegación"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu-panel"
            >
              ☰
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div
              id="mobile-menu-panel"
              className="absolute top-0 right-0 w-64 h-full bg-white shadow-xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              role="dialog"
              aria-modal="true"
            >
              <nav className="p-6 space-y-4">
                <img src={digitalyaLogo} alt="DigitalYa logo" className="h-8 mb-6" />
                <button
                  onClick={() => handleScrollOrNavigate('hero')}
                  className="block w-full text-left py-3 px-4 text-[#021938] font-medium rounded-lg hover:bg-[#41A9F0] hover:text-white"
                >
                  Inicio
                </button>

                {/* Servicios Mobile */}
                <div>
                  <p className="text-[#021938] font-medium px-4 py-2">Servicios</p>
                  <div className="pl-4">
                    {/* 🟢 CAMBIO AQUÍ: Usamos <a> para Mobile Links */}
                    <a
                      href="/desarrollo-web"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsMobileMenuOpen(false);
                        navigate('/desarrollo-web');
                      }}
                      className="block w-full text-left py-2 px-4 text-sm text-[#021938] hover:bg-[#41A9F0] hover:text-white rounded-lg no-underline"
                    >
                      Desarrollo Web
                    </a>
                    <a
                      href="/marketing"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsMobileMenuOpen(false);
                        navigate('/marketing');
                      }}
                      className="block w-full text-left py-2 px-4 text-sm text-[#021938] hover:bg-[#41A9F0] hover:text-white rounded-lg no-underline"
                    >
                      Marketing Digital
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleScrollOrNavigate('about')}
                  className="block w-full text-left py-3 px-4 text-[#021938] font-medium rounded-lg hover:bg-[#41A9F0] hover:text-white"
                >
                  Nosotros
                </button>
                <button
                  onClick={() => handleScrollOrNavigate('contact')}
                  className="bg-[#021938] text-white px-4 py-2 rounded-lg font-medium w-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
                  data-track="btn-contact"
                >
                  Contáctanos
                </button>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
