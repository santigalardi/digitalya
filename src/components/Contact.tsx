import { useState } from 'react';
import { toast } from 'sonner';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSending) return;

    const newErrors = { name: '', email: '', phone: '', message: '' };

    if (!formData.name) newErrors.name = 'Nombre requerido';
    if (!formData.email) {
      newErrors.email = 'Correo requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Correo inválido';
    }
    if (!formData.phone) newErrors.phone = 'Teléfono requerido';
    if (!formData.message) newErrors.message = 'Mensaje requerido';

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((err) => err);
    if (hasErrors) return;

    try {
      setIsSending(true);

      await emailjs.send('service_xo2snye', 'template_xwk40xs', formData, 'jCJg9M8KSPrfJlvv7');

      toast.success('Tu mensaje fue enviado con éxito.');
      setFormData({ name: '', email: '', phone: '', website: '', message: '' });
    } catch (error) {
      console.error('Error al enviar:', error);
      toast.error('Hubo un error al enviar el mensaje. Intenta nuevamente.');
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  return (
    <section id="contact" className="py-22 md:py-28 bg-gradient-to-b from-white to-[#d3edfd]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl text-[#021938] text-center font-bold tracking-tight">Contacto</h2>
        <p className="text-2xl text-center mt-10">Completá el formulario y te responderemos a la brevedad.</p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col p-8 gap-6 my-7 bg-white border border-[#F1F1F1] rounded-3xl shadow-lg max-w-[600px] mx-auto"
        >
          {/* Campos del formulario */}
          <div>
            <label htmlFor="name" className="block text-[#021938] font-medium mb-2">
              Nombre y Apellido <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Tu nombre completo"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-[#1040dc]/20 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#233778] focus:border-transparent placeholder:text-[#7B7B7B]"
              required
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-[#021938] font-medium mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="ejemplo@correo.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-[#021938]/20 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#233778] focus:border-transparent placeholder:text-[#7B7B7B]"
              required
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-[#021938] font-medium mb-2">
              Teléfono <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="Ej: +54 9 299 123 4567"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-[#021938]/20 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#233778] focus:border-transparent placeholder:text-[#7B7B7B]"
              required
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="website" className="block text-[#021938] font-medium mb-2">
              Sitio web
            </label>
            <input
              id="website"
              type="url"
              name="website"
              placeholder="https://tusitio.com (opcional)"
              value={formData.website}
              onChange={handleChange}
              className="w-full p-3 border border-[#021938]/20 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#233778] focus:border-transparent placeholder:text-[#7B7B7B]"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-[#021938] font-medium mb-2">
              Mensaje <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Escribí tu mensaje aquí..."
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-[#021938]/20 rounded-lg resize-none h-[150px] focus:outline-none focus:ring-1 focus:ring-[#233778] focus:border-transparent placeholder:text-[#7B7B7B]"
              required
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          {/* Botón */}
          <button
            type="submit"
            disabled={isSending}
            className={`mt-[10px] text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight w-full transition-colors duration-300 ${
              isSending ? 'bg-[#3FA7DE] cursor-default opacity-80' : 'bg-[#021938] hover:bg-[#3FA7DE] cursor-pointer'
            }`}
          >
            {isSending ? (
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : (
              'Enviar Mensaje'
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
