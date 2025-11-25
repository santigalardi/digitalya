import { FiTrendingDown, FiClock, FiXCircle, FiGlobe, FiAlertTriangle, FiSliders } from 'react-icons/fi';

interface FunnelPainPointsProps {
  type: 'marketing' | 'web';
}

const FunnelPainPoints = ({ type }: FunnelPainPointsProps) => {
  const isMarketing = type === 'marketing';

  const data = isMarketing
    ? {
        title: '¿Te está costando hacer crecer tu negocio?',
        subtitle: 'Estas son algunas señales de que tu marketing actual no está funcionando como debería:',
        items: [
          {
            icon: FiTrendingDown,
            title: 'Pocas consultas o ventas',
            description: 'Publicás contenido pero no ves resultados reales ni clientes nuevos.',
          },
          {
            icon: FiClock,
            title: 'Perdés tiempo probando al azar',
            description: 'Subís anuncios sin estrategia clara y terminan siendo un gasto, no una inversión.',
          },
          {
            icon: FiXCircle,
            title: 'No sabés qué funciona',
            description: 'No tenés métricas claras ni una estrategia que puedas escalar con seguridad.',
          },
        ],
      }
    : {
        title: '¿Tu sitio web no está generando resultados?',
        subtitle: 'Si te pasa alguna de estas cosas, tu web necesita una mejora urgente:',
        items: [
          {
            icon: FiGlobe,
            title: 'Tu página no convierte',
            description: 'Tenés visitas, pero casi nadie te escribe ni compra.',
          },
          {
            icon: FiSliders,
            title: 'Se ve desactualizada o lenta',
            description: 'El diseño no refleja tu nivel profesional o la página tarda mucho en cargar.',
          },
          {
            icon: FiAlertTriangle,
            title: 'No aparecés en Google',
            description: 'Sin SEO ni optimización técnica, tus clientes ni siquiera te encuentran.',
          },
        ],
      };

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* TÍTULO */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#021938] mb-10">{data.title}</h2>

        {/* SUBTÍTULO */}
        <p className="text-center text-[#021938]/70 max-w-2xl mx-auto mb-16 text-lg">{data.subtitle}</p>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.items.map((item, i) => (
            <div
              key={i}
              className="bg-white/30 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl p-8 group"
            >
              <div className="flex justify-center mb-6">
                <item.icon className="text-5xl text-[#3FA7DE]" />
              </div>

              <h3 className="text-xl font-bold text-[#021938] mb-3 text-center">{item.title}</h3>

              <p className="text-[#021938]/70 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunnelPainPoints;
