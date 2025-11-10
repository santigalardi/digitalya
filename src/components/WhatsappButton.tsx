import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '+5492996334237'; // tu número con código de país y sin signos
  const message = '¡Hola! Me gustaría saber más sobre sus servicios.';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-[#25D366] hover:bg-[#1EBE57] text-white p-2 rounded-full shadow-lg transition-all duration-300 z-50 flex items-center justify-center"
    >
      <FaWhatsapp size={34} />
    </a>
  );
};

export default WhatsAppButton;
