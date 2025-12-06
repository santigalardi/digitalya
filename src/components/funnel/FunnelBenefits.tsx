import { FiUsers, FiBarChart2, FiTarget, FiMonitor, FiTrendingUp } from 'react-icons/fi';

type FunnelBenefitsProps = {
  type: 'Web' | 'Marketing';
};

const FunnelBenefits = ({ type }: FunnelBenefitsProps) => {
  const content = {
    Web: {
      title: '¿Qué conseguís con un sitio web profesional?',
      description: 'Creamos sitios que generan confianza, venden y muestran la identidad real de tu marca.',
      benefits: [
        {
          icon: <FiTarget className="text-5xl text-[#3FA7DE]" />,
          title: 'Diseño pensado para convertir',
          text: 'Cada sección está creada para guiar al usuario y maximizar el contacto.',
        },
        {
          icon: <FiUsers className="text-5xl text-[#3FA7DE]" />,
          title: 'Más consultas y contactos',
          text: 'Optimizamos formularios, botones y velocidad para que recibas más leads.',
        },
        {
          icon: <FiBarChart2 className="text-5xl text-[#3FA7DE]" />,
          title: 'Sitio rápido y escalable',
          text: 'Desarrollado con buenas prácticas y tecnología moderna.',
        },
      ],
      buttonText: 'Quiero mi sitio web',
      buttonIcon: <FiMonitor className="text-xl mr-2" />,
    },

    Marketing: {
      title: '¿Qué conseguís trabajando con DigitalYa?',
      description:
        'Te ayudamos a crecer con estrategias reales, medibles y personalizadas según el momento actual de tu negocio.',
      benefits: [
        {
          icon: <FiTarget className="text-5xl text-[#3FA7DE]" />,
          title: 'Estrategia clara y ejecutable',
          text: 'Definimos un plan de acción según tus objetivos y tu mercado.',
        },
        {
          icon: <FiUsers className="text-5xl text-[#3FA7DE]" />,
          title: 'Más clientes todos los meses',
          text: 'Campañas optimizadas y contenido profesional.',
        },
        {
          icon: <FiBarChart2 className="text-5xl text-[#3FA7DE]" />,
          title: 'Resultados medibles',
          text: 'Métricas claras para entender qué funciona y qué no.',
        },
      ],
      buttonText: 'Quiero hacer crecer mi negocio',
      buttonIcon: <FiTrendingUp className="text-xl mr-2" />,
    },
  };

  const { title, description, benefits, buttonText, buttonIcon } = content[type];

  return (
    <section className="py-20 bg-gradient-to-b from-[#E8F7FF] to-white">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#021938] mb-10">{title}</h2>

        <p className="text-center text-[#021938]/70 max-w-2xl mx-auto mb-16 text-lg">{description}</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="bg-white/30 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl p-8 group"
            >
              <div className="flex justify-center mb-6">{b.icon}</div>
              <h3 className="text-xl font-bold text-[#021938] mb-3 text-center">{b.title}</h3>
              <p className="text-[#021938]/70 text-center">{b.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => document.getElementById('calendly')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#021938] text-white px-8 py-4 rounded-lg font-medium text-lg
                flex items-center justify-center gap-2 mx-auto
                shadow-[0_0_0_0_#3FA7DE] hover:shadow-[4px_4px_2px_0px_#00DDFF]
                transform hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all cursor-pointer"
            data-track="btn-schedule"
          >
            {buttonIcon}
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FunnelBenefits;
