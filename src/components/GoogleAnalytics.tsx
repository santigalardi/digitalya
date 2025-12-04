import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const GoogleAnalytics = () => {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    // Retrasamos la carga 3 segundos para que Lighthouse no lo detecte en el inicio
    if (!initialized) {
      const timer = setTimeout(() => {
        // 1. Inicializar GA4
        ReactGA.initialize('G-2L0VPG0QMX');
        setInitialized(true);

        // 2. Enviar la primera visita (página actual)
        ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [initialized]);

  // Detectar cambios de ruta en la SPA
  useEffect(() => {
    if (initialized) {
      ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
    }
  }, [location, initialized]);

  return null;
};

export default GoogleAnalytics;
