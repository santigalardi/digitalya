import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Reveal from './Reveal';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs: FaqItem[];
}

const FaqSection = ({ faqs }: FaqSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] via-[#E8F7FF] to-[#d3edfd] py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-[#021938] text-center mb-12">Preguntas Frecuentes</h2>

        <Reveal>
          <div className="space-y-6">
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
