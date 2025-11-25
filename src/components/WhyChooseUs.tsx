import { CheckCircle, Target, BarChart3, Wallet, Users } from 'lucide-react';
import heroWebImage from '../assets/digitalya/webbg8.webp';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <Users className="w-10 h-10 text-[#41A9F0]" />,
      text: 'Entendemos las verdaderas necesidades de cada cliente, incluso cuando resulta difícil expresarlas.',
    },
    {
      icon: <Target className="w-10 h-10 text-[#41A9F0]" />,
      text: 'Diseñamos estrategias digitales personalizadas que potencian tu presencia online y te diferencian de la competencia.',
    },
    {
      icon: <Wallet className="w-10 h-10 text-[#41A9F0]" />,
      text: 'Optimizamos tu inversión en publicidad digital para generar resultados reales y medibles.',
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-[#41A9F0]" />,
      text: 'Analizamos datos con herramientas como Google Analytics para ofrecer reportes claros y transparentes.',
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-[#41A9F0]" />,
      text: 'Brindamos soluciones integrales con un equipo especializado en cada área del marketing digital.',
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left column */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#021938] mb-8">
            ¿Por qué elegir <span className="text-[#41A9F0]">DigitalYa?</span>
          </h2>
          <ul className="space-y-6">
            {reasons.map((reason, index) => (
              <li key={index} className="flex items-start space-x-4">
                <div className="mt-2">{reason.icon}</div>
                <p className="text-[#021938]/90 leading-relaxed text-md md:text-lg">{reason.text}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right column */}
        <div className="flex justify-center md:justify-end md:pt-12">
          <img
            src={heroWebImage}
            alt="Equipo DigitalYa trabajando en estrategias digitales"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
