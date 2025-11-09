import FeatureCard from './FeatureCard';
import cubeHelix from '../assets/cube-helix.svg';
import cubeHelix2 from '../assets/cube-helix2.svg';
import emojiStar from '../assets/emojistar.svg';
import Reveal from './Reveal';

const Features = () => {
  const features = [
    {
      key: crypto.randomUUID(),
      img: cubeHelix2,
      title: 'Sitios web a medida',
      description:
        'Diseñamos y desarrollamos sitios únicos, rápidos y optimizados para destacar tu marca. Adaptados a cualquier dispositivo y con enfoque en resultados.',
    },
    {
      key: crypto.randomUUID(),
      img: cubeHelix,
      title: 'Correos empresariales',
      description:
        'Configuramos y gestionamos tus correos con dominio propio, brindándote una imagen profesional y comunicación confiable con tus clientes.',
    },
    {
      key: crypto.randomUUID(),
      img: emojiStar,
      title: 'Hosting y mantenimiento',
      description:
        'Ofrecemos alojamiento seguro, actualizaciones constantes y soporte técnico personalizado para que tu sitio siempre funcione al máximo rendimiento.',
    },
  ];

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
            {features.map((feature) => (
              <FeatureCard
                key={feature.key}
                img={feature.img}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Features;
