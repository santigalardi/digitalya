import { useLocation } from 'react-router-dom';
import FeatureCard from './FeatureCard';
import Reveal from './Reveal';
import {
  FaLaptopCode,
  FaPaintBrush,
  FaServer,
  FaBullhorn,
  FaSearchDollar,
  FaEnvelopeOpenText,
  FaChartLine,
  FaMobileAlt,
  FaRocket,
  FaLock,
  FaUsers,
  FaVideo,
} from 'react-icons/fa';

const Features = () => {
  const location = useLocation();
  const isWebPage = location.pathname === '/desarrollo-web';
  const isMarketingPage = location.pathname === '/marketing';

  const webFeatures = [
    {
      icon: FaPaintBrush,
      title: 'Diseño Web',
      description: 'Creamos diseños modernos, atractivos y funcionales que reflejan la identidad de tu marca.',
      link: '/desarrollo-web',
      tag: 'Desarrollo Web',
    },
    {
      icon: FaLaptopCode,
      title: 'Desarrollo Web',
      description:
        'Construimos sitios web personalizados o e-commerce según la necesidad de tu negocio. Rápidos, seguros y adaptados a todos los dispositivos.',
      link: '/desarrollo-web',
      tag: 'Desarrollo Web',
    },
    {
      icon: FaServer,
      title: 'SEO y Mantenimiento',
      description: 'Mantenemos tu sitio actualizado y optimizado para aparecer en los primeros resultados.',
      link: '/desarrollo-web',
      tag: 'Desarrollo Web',
    },
    {
      icon: FaMobileAlt,
      title: 'Diseño Responsivo',
      description:
        'Tu web se adapta perfectamente a celulares, tablets y computadoras, garantizando una experiencia óptima.',
      link: '/desarrollo-web',
      tag: 'Desarrollo Web',
    },
    {
      icon: FaRocket,
      title: 'Optimización de Velocidad',
      description: 'Reducimos tiempos de carga y mejoramos el rendimiento técnico para maximizar tus conversiones.',
      link: '/desarrollo-web',
      tag: 'Desarrollo Web',
    },
    {
      icon: FaLock,
      title: 'Seguridad Web',
      description: 'Implementamos certificados SSL, protección ante ataques y copias de seguridad automáticas.',
      link: '/desarrollo-web',
      tag: 'Desarrollo Web',
    },
  ];

  const marketingFeatures = [
    {
      icon: FaBullhorn,
      title: 'Publicidad Online',
      description: 'Gestionamos campañas efectivas en redes sociales y Google Ads para aumentar tus ventas.',
      link: '/marketing',
      tag: 'Marketing Digital',
    },
    {
      icon: FaSearchDollar,
      title: 'Estrategias de Marketing',
      description: 'Diseñamos planes personalizados para potenciar tu presencia digital.',
      link: '/marketing',
      tag: 'Marketing Digital',
    },
    {
      icon: FaEnvelopeOpenText,
      title: 'Email Marketing',
      description: 'Creamos campañas automatizadas que fidelizan clientes y aumentan conversiones.',
      link: '/marketing',
      tag: 'Marketing Digital',
    },
    {
      icon: FaChartLine,
      title: 'Analítica y Conversiones',
      description: 'Monitoreamos tus campañas con métricas precisas para mejorar resultados y retorno de inversión.',
      link: '/marketing',
      tag: 'Marketing Digital',
    },
    {
      icon: FaUsers,
      title: 'Gestión de Redes Sociales',
      description: 'Creamos contenido relevante y estrategias para construir comunidad y aumentar tu alcance.',
      link: '/marketing',
      tag: 'Marketing Digital',
    },
    {
      icon: FaVideo,
      title: 'Contenido Audiovisual',
      description: 'Producimos videos y anuncios visuales atractivos que potencian la identidad de tu marca.',
      link: '/marketing',
      tag: 'Marketing Digital',
    },
  ];

  // 🔹 Mostrar 3 + 3 en Home, o todas en sus secciones
  const featuresToShow = isWebPage
    ? webFeatures
    : isMarketingPage
    ? marketingFeatures
    : [...webFeatures.slice(0, 3), ...marketingFeatures.slice(0, 3)];

  return (
    <section id="services" className="bg-gradient-to-b from-[#E8F7FF] via-[#FFFFFF] to-[#d3edfd] py-22 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-4xl md:text-5xl text-[#021938] text-center font-bold tracking-tight">
          Soluciones Digitales para tu Negocio
        </h2>
        <p className="text-xl md:text-2xl text-center mt-6 text-black">
          Todo lo que necesitás para construir y hacer crecer tu presencia online.
        </p>
        <Reveal>
          <div className="pt-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuresToShow.map((feature) => (
                <FeatureCard
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  link={!isWebPage && !isMarketingPage ? feature.link : undefined}
                  tag={!isWebPage && !isMarketingPage ? feature.tag : undefined}
                  hideButton={isWebPage || isMarketingPage}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Features;
