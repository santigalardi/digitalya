import { FeatureCardProps } from '../types/featureCard';

const FeatureCard = ({ img, title, description }: FeatureCardProps) => {
  return (
    <div className="flex flex-col justify-between bg-white shadow-xl hover:shadow-2xl hover:scale-102 transition-all duration-400 rounded-lg text-center overflow-hidden">
      <div className="bg-gradient-to-b from-[#3FA7DE] to-[#E8F7FF]">
        <img src={img} alt={title} className="w-56 h-56 mx-auto filter mix-blend-luminosity" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl lg:text-3xl text-[#021938] font-bold my-6 tracking-tight">{title}</h3>
        <p className="text-lg text-black leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
