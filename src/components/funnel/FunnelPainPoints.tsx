import { FiTrendingDown, FiClock, FiXCircle } from 'react-icons/fi';

const FunnelPainPoints = () => {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#021938] mb-10">
          ¿Te está costando hacer crecer tu negocio?
        </h2>

        {/* Subtítulo */}
        <p className="text-center text-[#021938]/70 max-w-2xl mx-auto mb-16 text-lg">
          Estas son algunas señales de que tu marketing actual no está funcionando como debería:
        </p>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Ítem 1 */}
          <div className="bg-white/30 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl p-8 group">
            <div className="flex justify-center mb-6">
              <FiTrendingDown className="text-5xl text-[#3FA7DE]" />
            </div>
            <h3 className="text-xl font-bold text-[#021938] mb-3 text-center">Pocas consultas o ventas</h3>
            <p className="text-[#021938]/70 text-center">
              Publicás contenido pero no ves resultados reales ni clientes nuevos.
            </p>
          </div>

          {/* Ítem 2 */}
          <div className="bg-white/30 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl p-8 group">
            <div className="flex justify-center mb-6">
              <FiClock className="text-5xl text-[#3FA7DE]" />
            </div>
            <h3 className="text-xl font-bold text-[#021938] mb-3 text-center">Perdés tiempo probando al azar</h3>
            <p className="text-[#021938]/70 text-center">
              Subís anuncios sin estrategia clara y terminan siendo un gasto, no una inversión.
            </p>
          </div>

          {/* Ítem 3 */}
          <div className="bg-white/30 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl p-8 group">
            <div className="flex justify-center mb-6">
              <FiXCircle className="text-5xl text-[#3FA7DE]" />
            </div>
            <h3 className="text-xl font-bold text-[#021938] mb-3 text-center">No sabés qué funciona</h3>
            <p className="text-[#021938]/70 text-center">
              No tenés métricas claras ni una estrategia que puedas escalar con seguridad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunnelPainPoints;
