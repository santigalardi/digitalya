/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type CalendlyEmbedProps = {
  type: 'Web' | 'Marketing';
};

const LINKS = {
  Marketing: 'https://calendly.com/jignaciosolari/impulsa-tu-marca-con-digitalya',
  Web: 'https://calendly.com/jignaciosolari/impulsa-tu-marca-con-digitalya-desarrolloweb',
};

const SCRIPT_ID = 'calendly-widget-script';

const CalendlyEmbed = ({ type }: CalendlyEmbedProps) => {
  const location = useLocation();
  const CALENDLY_URL = LINKS[type];

  useEffect(() => {
    const initializeWidget = () => {
      const section = document.getElementById('calendly');
      if (!section) return;

      const old = section.querySelector('.calendly-inline-widget');
      if (old) old.remove();

      const div = document.createElement('div');
      div.className = 'calendly-inline-widget';
      div.setAttribute('data-url', CALENDLY_URL);
      div.style.minWidth = '320px';
      div.style.height = '760px';
      section.appendChild(div);

      const w = window as any;
      if (w && w.Calendly) {
        try {
          w.Calendly.initInlineWidget({
            url: CALENDLY_URL,
            parentElement: div,
          });
        } catch {
          // ignore
        }
      }
    };

    let script = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;

    if (script) {
      if (script.getAttribute('data-loaded') === 'true' || (window as any).Calendly) {
        initializeWidget();
      } else {
        script.addEventListener('load', initializeWidget, { once: true });
      }
    } else {
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

    return () => {
      const section = document.getElementById('calendly');
      const old = section?.querySelector('.calendly-inline-widget');
      if (old) old.remove();
    };
  }, [location.pathname, CALENDLY_URL]); // <- si cambia el tipo, se vuelve a montar el embed

  return <section id="calendly" className="bg-gradient-to-b from-white to-[#d3edfd]"></section>;
};

export default CalendlyEmbed;
