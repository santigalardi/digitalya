// CalendlyEmbed.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: Element | null;
        prefill?: object;
        utm?: object;
      }) => void;
    };
  }
}

const CalendlyEmbed = () => {
  const location = useLocation();

  useEffect(() => {
    const container = document.querySelector('.calendly-inline-widget');
    if (!container) return;

    // limpiar contenido previo
    container.innerHTML = '';

    const initWidget = () => {
      window.Calendly?.initInlineWidget({
        url: 'https://calendly.com/jignaciosolari/impulsa-tu-marca-con-digitalya',
        parentElement: container,
        prefill: {},
        utm: {},
      });
    };

    // Si el script ya está cargado, inicializamos
    if (window.Calendly) {
      initWidget();
    } else {
      // Si no, insertamos el script y lo inicializamos al cargar
      if (!document.getElementById('calendly-widget-script')) {
        const script = document.createElement('script');
        script.id = 'calendly-widget-script';
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        script.onload = initWidget;
        document.body.appendChild(script);
      } else {
        // Script ya existe pero Calendly puede no estar listo
        const interval = setInterval(() => {
          if (window.Calendly) {
            clearInterval(interval);
            initWidget();
          }
        }, 100);
      }
    }
  }, [location.pathname]); // 🔹 se ejecuta cada vez que cambia la ruta

  return (
    <section id="calendly" className="bg-gradient-to-b from-white to-[#d3edfd]">
      <div className="calendly-inline-widget" style={{ minWidth: '320px', height: '760px' }}></div>
    </section>
  );
};

export default CalendlyEmbed;
