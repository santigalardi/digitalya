/* eslint-disable @typescript-eslint/no-explicit-any */
// CalendlyEmbed.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const CALENDLY_URL = 'https://calendly.com/jignaciosolari/impulsa-tu-marca-con-digitalya';
const SCRIPT_ID = 'calendly-widget-script';

const CalendlyEmbed = () => {
  const location = useLocation();

  useEffect(() => {
    // Función que (re)crea el div y pide a Calendly que lo inicialice
    const initializeWidget = () => {
      const section = document.getElementById('calendly');
      if (!section) return;

      // Elimina widget viejo si existe
      const old = section.querySelector('.calendly-inline-widget');
      if (old) old.remove();

      // Crea el nuevo contenedor que Calendly espera
      const div = document.createElement('div');
      div.className = 'calendly-inline-widget';
      div.setAttribute('data-url', CALENDLY_URL);
      div.style.minWidth = '320px';
      div.style.height = '760px';
      section.appendChild(div);

      // Si el script ya proporcionó window.Calendly, inicializamos
      const w = window as any;
      if (w && w.Calendly) {
        try {
          w.Calendly.initInlineWidget({
            url: CALENDLY_URL,
            parentElement: div,
          });
        } catch {
          // Silenciado intencionalmente
        }
      }
    };

    // Asegurarse de que el script esté presente y esperar a su carga si es necesario
    let script = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;

    if (script) {
      // Si ya cargó, inicializamos de inmediato
      if (script.getAttribute('data-loaded') === 'true' || (window as any).Calendly) {
        initializeWidget();
      } else {
        // si no terminó de cargar, inicializar al cargar
        const onLoad = () => initializeWidget();
        script.addEventListener('load', onLoad, { once: true });
      }
    } else {
      // Si no existe el script, lo creamos y inicializamos cuando termine de cargar
      script = document.createElement('script');
      script.id = SCRIPT_ID;
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => {
        script?.setAttribute('data-loaded', 'true');
        initializeWidget();
      };
      document.body.appendChild(script);
    }

    // cleanup opcional: dejamos el div limpio al desmontar (no estrictamente necesario)
    return () => {
      const section = document.getElementById('calendly');
      const old = section?.querySelector('.calendly-inline-widget');
      if (old) old.remove();
    };
  }, [location.pathname]); // <- re-ejecuta en cada cambio de ruta

  return (
    <section id="calendly" className="bg-gradient-to-b from-white to-[#d3edfd]">
      {/* No renderizamos el div aquí porque lo gestiona el efecto; dejamos la sección vacía */}
    </section>
  );
};

export default CalendlyEmbed;
