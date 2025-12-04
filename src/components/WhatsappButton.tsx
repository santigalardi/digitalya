import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '+5492996334237'; // tu número con código de país y sin signos
  const message = '¡Hola! Me gustaría saber más sobre sus servicios.';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      aria-label="Chatea con nosotros por WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
      // className="fixed bottom-5 right-5 bg-[#25D366] hover:bg-[#1EBE57] text-white p-2 rounded-full shadow-lg transition-all duration-300 z-50 flex items-center justify-center"
      // className="fixed bottom-5 right-5 border-2 border-[#42ACF6] bg-white hover:bg-[#bee0f8] text-[#42ACF6] p-2 rounded-full shadow-lg transition-all duration-300 z-50 flex items-center justify-center"
      className="fixed bottom-5 right-5 border-2 border-white bg-[#42ACF6] hover:bg-[#58b2f3] text-white p-2 rounded-full shadow-lg transition-all duration-300 z-50 flex items-center justify-center"
    >
      <FaWhatsapp size={34} />
    </a>
  );
};

export default WhatsAppButton;
