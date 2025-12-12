import { FiUsers, FiBarChart2, FiTarget, FiMonitor, FiTrendingUp } from 'react-icons/fi';
import { getWhatsAppLink } from '../../utils/whatsapp';
import { FaWhatsapp } from 'react-icons/fa';

type FunnelBenefitsProps = {
  type: 'Web' | 'Marketing';
};

const FunnelBenefits = ({ type }: FunnelBenefitsProps) => {
  const whatsappLink = getWhatsAppLink();

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

  const { title, description, benefits } = content[type];

  return (
    <section className="py-20 bg-gradient-to-b from-[#ECFBFF] to-white">
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
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            data-track="btn-lead"
            className="px-8 py-4 w-full md:w-auto min-w-[240px] rounded-xl font-bold text-[#021938] border border-[#021938]/30 bg-white/60 backdrop-blur-sm inline-flex items-center justify-center gap-3 transition-all cursor-pointer hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_2px_0px_#25D366] hover:border-[#25D366]"
          >
            <FaWhatsapp className="text-2xl text-[#25D366]" />
            Quiero mi Sitio Web
          </a>
        </div>
      </div>
    </section>
  );
};

export default FunnelBenefits;
