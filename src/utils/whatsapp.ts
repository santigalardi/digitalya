export const DIGITALYA_PHONE = '5492996334237';

const MESSAGES = {
  web: 'Hola DigitalYa! Me interesa tener mi sitio web listo en 7 días. Quiero más información!',
  marketing: 'Hola, quiero dejar de gastar en anuncios sin resultados. Me interesa su estrategia.',
  default: 'Hola, me interesa más información sobre sus servicios.',
};

// La función acepta un "tipo" opcional. Si no le pasas nada, usa 'web' por defecto.
export const getWhatsAppLink = (type: 'web' | 'marketing' | 'default' = 'web') => {
  const message = MESSAGES[type] || MESSAGES.default;

  return `https://wa.me/${DIGITALYA_PHONE}?text=${encodeURIComponent(message)}`;
};
