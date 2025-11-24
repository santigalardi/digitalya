import { FiUsers, FiBarChart2, FiTarget } from 'react-icons/fi';

const FunnelBenefits = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#E8F7FF] to-white">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#021938] mb-10">
          ¿Qué conseguís trabajando con DigitalYa?
        </h2>

        {/* Descripción */}
        <p className="text-center text-[#021938]/70 max-w-2xl mx-auto mb-16 text-lg">
          Te ayudamos a crecer con estrategias reales, medibles y personalizadas según el momento actual de tu negocio.
        </p>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Beneficio 1 */}
          <div className="bg-white/30 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl p-8 group">
            <div className="flex justify-center mb-6">
              <FiTarget className="text-5xl text-[#3FA7DE]" />
            </div>
            <h3 className="text-xl font-bold text-[#021938] mb-3 text-center">Estrategia clara y ejecutable</h3>
            <p className="text-[#021938]/70 text-center">
              Definimos un plan de acción que se adapta a tus objetivos y a tu mercado.
            </p>
          </div>

          {/* Beneficio 2 */}
          <div className="bg-white/30 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl p-8 group">
            <div className="flex justify-center mb-6">
              <FiUsers className="text-5xl text-[#3FA7DE]" />
            </div>
            <h3 className="text-xl font-bold text-[#021938] mb-3 text-center">Más clientes todos los meses</h3>
            <p className="text-[#021938]/70 text-center">
              Conseguí prospectos reales gracias a campañas optimizadas y contenido profesional.
            </p>
          </div>

          {/* Beneficio 3 */}
          <div className="bg-white/30 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl p-8 group">
            <div className="flex justify-center mb-6">
              <FiBarChart2 className="text-5xl text-[#3FA7DE]" />
            </div>
            <h3 className="text-xl font-bold text-[#021938] mb-3 text-center">Resultados medibles</h3>
            <p className="text-[#021938]/70 text-center">
              Te mostramos métricas claras para que veas exactamente qué funciona y qué no.
            </p>
          </div>
        </div>

        {/* CTA secundaria */}
        <div className="text-center mt-16">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#021938] text-white px-6 py-3 rounded-xl font-medium tracking-tight
              shadow-[0_0_0_0_#3FA7DE] hover:shadow-[3px_3px_2px_0px_#00DDFF]
              transform hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            Quiero hacer crecer mi negocio
          </button>
        </div>
      </div>
    </section>
  );
};

export default FunnelBenefits;
