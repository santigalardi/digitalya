import { FiCheck, FiMonitor, FiTrendingUp } from 'react-icons/fi';

type FunnelOfferProps = {
  type: 'Web' | 'Marketing';
};

const FunnelOffer = ({ type }: FunnelOfferProps) => {
  const content = {
    Web: {
      title: 'Tu sitio web listo para generar resultados en 7 días',
      subtitle:
        'Diseñamos y desarrollamos un sitio profesional, rápido y optimizado para convertir visitas en clientes.',
      planTitle: 'Sitio Web Profesional + Optimización',
      bullets: [
        'Diseño personalizado adaptado a tu marca',
        'Desarrollo rápido, seguro y optimizado para SEO',
        'Integración de formularios, WhatsApp y CTA estratégicos',
        'Hosting, dominio y soporte técnico real',
        'Correos electrónicos corporativos',
        'Integración de Google Analytics y Pixel de Meta',
        'Versión mobile super optimizada',
      ],
      cta: 'Quiero mi sitio web',
      ctaIcon: <FiMonitor className="text-xl mr-2" />,
    },

    Marketing: {
      title: 'Tu negocio listo para crecer en 30 días',
      subtitle:
        'Implementamos una estrategia completa para aumentar tu visibilidad y conseguir nuevos clientes desde el primer mes.',
      planTitle: 'Plan de Marketing Digital Integral',
      bullets: [
        'Gestión de redes sociales con contenido profesional',
        'Campañas de Meta Ads optimizadas para clientes reales',
        'Análisis semanal + reportes claros y medibles',
        'Estrategia personalizada según tu rubro y objetivo',
        'Acompañamiento y soporte directo 24/7',
      ],
      cta: 'Quiero recibir la propuesta completa',
      ctaIcon: <FiTrendingUp className="text-xl mr-2" />,
    },
  };

  const { title, subtitle, planTitle, bullets, cta, ctaIcon } = content[type];

  return (
    <section className="py-20 bg-gradient-to-r from-[#021938] to-[#06325f] text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">{title}</h2>

        <p className="text-center text-white/80 max-w-2xl mx-auto text-lg mb-14">{subtitle}</p>

        <div className="max-w-3xl mx-auto bg-white text-[#021938] rounded-2xl shadow-xl p-10 md:p-14 border border-white/30">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-6">{planTitle}</h3>

          <ul className="grid gap-4 text-lg">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <FiCheck className="text-[#3FA7DE] text-2xl mt-1" />
                {b}
              </li>
            ))}
          </ul>

          <div className="text-center mt-10">
            <button
              onClick={() => document.getElementById('calendly')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#021938] text-white px-8 py-4 rounded-lg font-medium text-lg
                flex items-center justify-center gap-2 mx-auto
                shadow-[0_0_0_0_#3FA7DE] hover:shadow-[4px_4px_2px_0px_#00DDFF]
                transform hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all cursor-pointer"
              data-track="btn-schedule"
            >
              {ctaIcon}
              {cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunnelOffer;
