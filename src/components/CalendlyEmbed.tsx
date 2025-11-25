// CalendlyEmbed.tsx
import { useEffect, useRef } from 'react';

const CalendlyEmbed = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Inserta el script solo si no existe
    if (!document.getElementById('calendly-widget-script')) {
      const script = document.createElement('script');
      script.id = 'calendly-widget-script';
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    } else {
      // Si el script ya está cargado, recarga el widget
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = window as any; // <- ignoramos el tipo para TS
      if (w.Calendly && containerRef.current) {
        containerRef.current.innerHTML = ''; // limpia contenido previo
        w.Calendly.initInlineWidget({
          url: 'https://calendly.com/jignaciosolari/impulsa-tu-marca-con-digitalya',
          parentElement: containerRef.current,
          prefill: {},
          utm: {},
        });
      }
    }

    return () => {
      if (containerRef.current) containerRef.current.innerHTML = '';
    };
  }, []);

  return (
    <section id="calendly" className="bg-gradient-to-b from-white to-[#d3edfd]">
      <div ref={containerRef} className="calendly-inline-widget" style={{ minWidth: '320px', height: '760px' }}></div>
    </section>
  );
};

export default CalendlyEmbed;
