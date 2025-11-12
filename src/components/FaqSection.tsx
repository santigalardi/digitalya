import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Reveal from './Reveal';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: '¿Cuánto tarda en desarrollarse un sitio web?',
    answer:
      'Depende del tipo de proyecto. En promedio, un sitio institucional puede estar listo entre 2 y 4 semanas, mientras que proyectos más complejos pueden requerir más tiempo.',
  },
  {
    question: '¿Ofrecen mantenimiento después de publicar el sitio?',
    answer:
      'Sí. Todos nuestros servicios incluyen soporte 24/7 con llamadas y mensajería. Estamos aqui para ayudarte en todo momento.',
  },
  {
    question: '¿Qué necesito para comenzar?',
    answer:
      'Solo una idea clara de tu negocio o marca. Nosotros te ayudamos a definir la estructura, el diseño y todo el contenido necesario para lanzarte al mundo digital u optimizar lo que ya tenés para lograr mayor conversión.',
  },
  {
    question: '¿Puedo solicitar solo el servicio de desarrollo o solo el de marketing?',
    answer:
      'Por supuesto. Nuestros servicios son totalmente modulares, por lo que podés contratar únicamente desarrollo web, marketing digital o ambos en conjunto.',
  },
  {
    question: '¿Trabajan con proyectos internacionales?',
    answer:
      'Sí, colaboramos con clientes de distintas partes del mundo de manera 100% remota, adaptándonos a su idioma y zona horaria.',
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] via-[#E8F7FF] to-[#d3edfd] py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <h2 className="text-4xl md:text-5xl font-bold text-[#021938] text-center mb-12">Preguntas Frecuentes</h2>

        <Reveal>
          <div className="space-y-6 ">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm border border-white/40 shadow-md rounded-2xl transition-all hover:shadow-lg"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-6 text-left cursor-pointer"
                >
                  <span className="text-lg md:text-xl font-semibold text-[#021938]">{faq.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-[#3FA7DE] transform transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`px-6 pb-6 text-black/80 text-base md:text-lg leading-relaxed transition-all duration-300 overflow-hidden ${
                    openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default FaqSection;
