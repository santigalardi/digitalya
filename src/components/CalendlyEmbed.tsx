// CalendlyEmbed.tsx
import { useEffect } from 'react';

const CalendlyEmbed = () => {
  useEffect(() => {
    // Inserta el script de Calendly (una sola vez)
    if (!document.getElementById('calendly-widget-script')) {
      const script = document.createElement('script');
      script.id = 'calendly-widget-script';
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="calendly" className="bg-gradient-to-b from-white to-[#d3edfd]">
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/jignaciosolari/impulsa-tu-marca-con-digitalya"
        style={{ minWidth: '320px', height: '700px' }}
      ></div>
    </section>
  );
};

export default CalendlyEmbed;
