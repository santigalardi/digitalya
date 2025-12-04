import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // Importamos esto para detectar navegación
import ReactPixel from 'react-facebook-pixel';

const FacebookPixel = () => {
  const [initialized, setInitialized] = useState(false);
  const location = useLocation(); // Hook que detecta cambio de URL

  useEffect(() => {
    // Retrasamos la carga inicial 3 segundos (para el puntaje de Lighthouse)
    if (!initialized) {
      const timer = setTimeout(() => {
        ReactPixel.init('1175866768067894'); // Tu ID
        ReactPixel.pageView(); // Trackea la primera visita
        setInitialized(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [initialized]);

  // Este segundo useEffect se dispara cada vez que cambia la ruta (location)
  useEffect(() => {
    if (initialized) {
      // Solo si ya se inicializó, mandamos el PageView de la nueva ruta
      ReactPixel.pageView();
    }
  }, [location, initialized]);

  return null;
};

export default FacebookPixel;
