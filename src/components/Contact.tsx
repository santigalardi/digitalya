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

    // Validación simple
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
    if (Object.values(newErrors).some((err) => err)) return;

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
    // Limpiamos el error cuando el usuario empieza a corregirlo
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  // Estilos comunes para inputs (DRY)
  const inputClasses = (hasError: boolean) => `
    w-full p-3 border rounded-lg focus:outline-none focus:ring-2 placeholder:text-[#7B7B7B] transition-all
    ${
      hasError
        ? 'border-red-500 focus:ring-red-200 bg-red-50'
        : 'border-[#1040dc]/20 focus:ring-[#233778] focus:border-transparent bg-white'
    }
  `;

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-20 bg-gradient-to-b from-white to-[#d3edfd]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="contact-heading" className="text-5xl text-[#021938] text-center font-bold tracking-tight">
          Contacto
        </h2>
        <p className="text-2xl text-center mt-10 text-[#021938]/80">
          Completá el formulario y te responderemos a la brevedad.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col p-8 gap-6 my-7 bg-white border border-[#F1F1F1] rounded-3xl shadow-lg max-w-[600px] mx-auto"
          noValidate // Desactiva validación nativa del navegador para usar la nuestra personalizada
        >
          {/* Nombre */}
          <div>
            <label htmlFor="name" className="block text-[#021938] font-medium mb-2">
              Nombre y Apellido{' '}
              <span className="text-red-500" aria-hidden="true">
                *
              </span>
            </label>
            <input
              id="name"
              type="text"
              name="name"
              autoComplete="name" // 🟢 1. Lighthouse Best Practice
              placeholder="Tu nombre completo"
              value={formData.name}
              onChange={handleChange}
              className={inputClasses(!!errors.name)}
              required
              aria-invalid={!!errors.name} // 🟢 2. A11y: Indica error al lector
              aria-describedby={errors.name ? 'name-error' : undefined} // 🟢 3. Conecta el input con el texto de error
            />
            {errors.name && (
              <p id="name-error" role="alert" className="text-red-600 text-sm mt-1 font-medium flex items-center gap-1">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-[#021938] font-medium mb-2">
              Email{' '}
              <span className="text-red-500" aria-hidden="true">
                *
              </span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              autoComplete="email" // 🟢 Autocomplete
              placeholder="ejemplo@correo.com"
              value={formData.email}
              onChange={handleChange}
              className={inputClasses(!!errors.email)}
              required
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p
                id="email-error"
                role="alert"
                className="text-red-600 text-sm mt-1 font-medium flex items-center gap-1"
              >
                {errors.email}
              </p>
            )}
          </div>

          {/* Teléfono */}
          <div>
            <label htmlFor="phone" className="block text-[#021938] font-medium mb-2">
              Teléfono{' '}
              <span className="text-red-500" aria-hidden="true">
                *
              </span>
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              autoComplete="tel" // 🟢 Autocomplete
              placeholder="Ej: +54 9 299 123 4567"
              value={formData.phone}
              onChange={handleChange}
              className={inputClasses(!!errors.phone)}
              required
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
            />
            {errors.phone && (
              <p
                id="phone-error"
                role="alert"
                className="text-red-600 text-sm mt-1 font-medium flex items-center gap-1"
              >
                {errors.phone}
              </p>
            )}
          </div>

          {/* Website */}
          <div>
            <label htmlFor="website" className="block text-[#021938] font-medium mb-2">
              Sitio web <span className="text-gray-400 font-normal text-sm">(Opcional)</span>
            </label>
            <input
              id="website"
              type="url"
              name="website"
              autoComplete="url" // 🟢 Autocomplete
              placeholder="https://tusitio.com"
              value={formData.website}
              onChange={handleChange}
              className={inputClasses(false)}
            />
          </div>

          {/* Mensaje */}
          <div>
            <label htmlFor="message" className="block text-[#021938] font-medium mb-2">
              Mensaje{' '}
              <span className="text-red-500" aria-hidden="true">
                *
              </span>
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Escribí tu mensaje aquí..."
              value={formData.message}
              onChange={handleChange}
              className={`${inputClasses(!!errors.message)} resize-none h-[150px]`}
              required
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <p
                id="message-error"
                role="alert"
                className="text-red-600 text-sm mt-1 font-medium flex items-center gap-1"
              >
                {errors.message}
              </p>
            )}
          </div>

          {/* Botón de Envío */}
          <button
            type="submit"
            disabled={isSending}
            className={`mt-[10px] text-white px-4 py-3 rounded-xl font-medium inline-flex items-center justify-center tracking-tight w-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#021938] ${
              isSending
                ? 'bg-[#3FA7DE] cursor-wait opacity-90'
                : 'bg-[#021938] hover:bg-[#3FA7DE] hover:-translate-y-0.5 hover:shadow-lg cursor-pointer'
            }`}
            data-track="btn-lead"
          >
            {isSending ? (
              <>
                {/* 🟢 4. Spinner decorativo + Texto oculto para lectores de pantalla */}
                <div
                  className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"
                  aria-hidden="true"
                ></div>
                <span>Enviando...</span>
              </>
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
