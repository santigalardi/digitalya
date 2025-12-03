import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Users, Brush, Headphones } from 'lucide-react';
import webbg from '../assets/digitalya/webbg.webp';
import webbg5 from '../assets/digitalya/webbg5.webp';
import webbg7 from '../assets/digitalya/webbg7.webp';

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 20%', 'end 80%'],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const point1Scale = useTransform(scrollYProgress, [0.15, 0.25], [1, 1.4]);
  const point2Scale = useTransform(scrollYProgress, [0.45, 0.55], [1, 1.4]);
  const point3Scale = useTransform(scrollYProgress, [0.75, 0.95], [1, 1.4]);

  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-[#E8F7FF] via-[#FFFFFF] to-[#d3edfd] py-22 md:py-28 text-[#021938] overflow-hidden"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto md:space-y-40 relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-10">Cómo trabajamos en DigitalYa</h2>
          <p className="text-xl md:text-2xl text-black">Así es como hacemos las cosas</p>
        </div>

        {/* Línea de tiempo (solo visible en desktop) */}
        <motion.div
          style={{ scaleY }}
          className="hidden md:block absolute left-1/2 top-[380px] w-[4px] h-[calc(100%-540px)]
     bg-gradient-to-b from-[#41A9F0]/80 via-[#0077ff]/60 to-[#0044aa]/80 
     origin-top rounded-full shadow-[0_0_10px_#41A9F0aa]"
        />

        {/* Marcadores (solo visibles en desktop) */}
        <div className="hidden md:flex absolute left-1/2 top-[360px] -translate-x-1/2 flex-col items-center md:gap-[440px]">
          <motion.div
            style={{ scale: point1Scale }}
            transition={{ duration: 0.3 }}
            className="w-10 h-10 rounded-full bg-white shadow-lg border-4 border-[#41A9F0] flex items-center justify-center"
          >
            <Users className="text-[#0077ff]" size={20} />
          </motion.div>
          <motion.div
            style={{ scale: point2Scale }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="w-10 h-10 rounded-full bg-white shadow-lg border-4 border-[#41A9F0] flex items-center justify-center"
          >
            <Brush className="text-[#0077ff]" size={20} />
          </motion.div>
          <motion.div
            style={{ scale: point3Scale }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="w-10 h-10 rounded-full bg-white shadow-lg border-4 border-[#41A9F0] flex items-center justify-center"
          >
            <Headphones className="text-[#0077ff]" size={20} />
          </motion.div>
        </div>

        {/* Paso 1 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-6 md:gap-16"
        >
          {/* Texto */}
          <div className="md:w-1/2 space-y-5 p-4">
            <h3 className="text-2xl md:text-3xl font-semibold text-[#021938]">Diagnóstico inicial</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Queremos saber dónde estás parado. Si ya tenés una web, contanos qué tecnología usás y dónde está alojada.
              Si no, empezamos de cero. Entender tu base técnica actual es clave para diseñarte la propuesta ideal.
            </p>
          </div>

          {/* Imagen */}
          <div className="w-full md:w-1/2 flex justify-center p-6">
            <img src={webbg5} alt="Comprensión profunda" className="w-4/5 md:w-4/5 max-w-md object-cover" />
          </div>
        </motion.div>

        {/* Paso 2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col md:flex-row-reverse items-center gap-16"
        >
          {/* Texto */}
          <div className="md:w-1/2 space-y-5 p-4">
            <h3 className="text-2xl md:text-3xl font-semibold text-[#021938]">Tus Objetivos y Resultados</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Nos contás qué buscás lograr: ¿Vender más? ¿Mejorar tu imagen? ¿Conseguir clientes? Alineamos nuestra
              tecnología a tus necesidades reales de negocio.
            </p>
          </div>

          {/* Imagen */}
          <div className="w-full md:w-1/2 flex justify-center p-6">
            <img src={webbg} alt="Diseño y personalización" className="w-4/5 md:w-4/5 max-w-md object-cover" />
          </div>
        </motion.div>

        {/* Paso 3 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center gap-16"
        >
          {/* Texto */}
          <div className="md:w-1/2 space-y-5 p-4">
            <h3 className="text-2xl md:text-3xl font-semibold text-[#021938]">Propuesta en 24 Horas</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Con la información lista, diseñamos tu solución a medida. Te enviamos una propuesta integral con ideas
              creativas, tiempos y plan de ejecución inmediato.
            </p>
          </div>

          {/* Imagen */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img src={webbg7} alt="Soporte continuo" className="w-4/5 md:w-4/5 max-w-md object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
