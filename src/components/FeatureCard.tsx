import { FeatureCardProps } from '../types/featureCard';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, link, tag, hideButton }: FeatureCardProps) => {
  return (
    <div className="flex flex-col justify-between bg-white/30 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 rounded-2xl text-center overflow-hidden p-6 group min-w-[360px] min-h-[360px]">
      {/* Icono */}
      <div className="flex justify-center items-center w-20 h-20 mx-auto mb-6">
        <Icon className="text-[#3FA7DE] text-5xl transition-transform" />
      </div>

      {/* Contenido */}
      <div className="flex flex-col items-center">
        <h3 className="text-2xl lg:text-3xl text-[#021938] font-bold mb-4">{title}</h3>
        <p className="text-lg text-black/80 leading-relaxed mb-6">{description}</p>
      </div>

      {/* Footer (botón + tag) */}
      <div className="flex justify-between items-center mt-auto">
        {!hideButton && link && (
          <Link
            to={link}
            aria-label={`Ver más sobre ${title}`}
            className="inline-flex items-center gap-2 bg-[#021938] text-white px-4 py-2 rounded-full text-sm font-medium
              transition-all hover:bg-[#3FA7DE] hover:-translate-y-0.5"
            data-track="btn-view-content"
          >
            Ver más
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}

        {tag && (
          <div
            className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${
              tag === 'Marketing Digital' ? 'bg-[#41A9F0]/10 text-[#41A9F0]' : 'bg-[#021938]/10 text-[#021938]'
            }`}
          >
            {tag}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeatureCard;
