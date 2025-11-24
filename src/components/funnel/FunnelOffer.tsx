import { FiCheck } from 'react-icons/fi';

const FunnelOffer = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#021938] to-[#06325f] text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Tu negocio listo para crecer en 30 días</h2>

        {/* Subtítulo */}
        <p className="text-center text-white/80 max-w-2xl mx-auto text-lg mb-14">
          Implementamos una estrategia completa para aumentar tu visibilidad y conseguir nuevos clientes desde el primer
          mes.
        </p>

        {/* Card de oferta */}
        <div className="max-w-3xl mx-auto bg-white text-[#021938] rounded-2xl shadow-xl p-10 md:p-14 border border-white/30">
          {/* Nombre de la oferta */}
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-6">Plan de Marketing Digital Integral</h3>

          {/* Bullets */}
          <ul className="grid gap-4 text-lg">
            <li className="flex items-start gap-3">
              <FiCheck className="text-[#3FA7DE] text-2xl mt-1" />
              Gestión de redes sociales con contenido profesional
            </li>
            <li className="flex items-start gap-3">
              <FiCheck className="text-[#3FA7DE] text-2xl mt-1" />
              Campañas de Meta Ads optimizadas para captar clientes reales
            </li>
            <li className="flex items-start gap-3">
              <FiCheck className="text-[#3FA7DE] text-2xl mt-1" />
              Análisis semanal + reportes claros y medibles
            </li>
            <li className="flex items-start gap-3">
              <FiCheck className="text-[#3FA7DE] text-2xl mt-1" />
              Estrategia personalizada según tu rubro y objetivo
            </li>
            <li className="flex items-start gap-3">
              <FiCheck className="text-[#3FA7DE] text-2xl mt-1" />
              Acompañamiento y soporte directo 24/7
            </li>
          </ul>

          {/* CTA */}
          <div className="text-center mt-10">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#021938] text-white px-8 py-4 rounded-lg font-medium text-lg
              shadow-[0_0_0_0_#3FA7DE] hover:shadow-[4px_4px_2px_0px_#00DDFF]
              transform hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              Quiero recibir la propuesta completa
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunnelOffer;
