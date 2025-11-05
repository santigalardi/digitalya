import { useState } from 'react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validaciones
    const newErrors = { name: '', email: '', message: '' };
    if (!formData.name) newErrors.name = 'Nombre requerido';
    if (!formData.email) {
      newErrors.email = 'Correo requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Correo inválido';
    }
    if (!formData.message) newErrors.message = 'Mensaje requerido';

    setErrors(newErrors);

    // Si no hay errores, simular el envío
    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      toast.success('Tu mensaje fue enviado con éxito.');
      setFormData({ name: '', email: '', message: '' }); // Limpiar el formulario
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  return (
    <section id="contact" className="pt-12 pb-18 bg-gradient-to-b from-white to-[#d3edfd]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl text-[#021938] text-center font-bold tracking-tight">Contacto</h2>
        <p className="text-2xl text-center mt-10">Completá el formulario y te responderemos a la brevedad.</p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col p-8 gap-6 my-7 bg-white border border-[#F1F1F1] rounded-3xl shadow-lg max-w-[600px] mx-auto"
        >
          <div>
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-[#1040dc]/20 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#233778] focus:border-transparent placeholder:text-[#7B7B7B]"
              required
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-[#021938]/20 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#233778] focus:border-transparent placeholder:text-[#7B7B7B]"
              required
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Mensaje"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-[#021938]/20 rounded-lg resize-none h-[150px] focus:outline-none focus:ring-1 focus:ring-[#233778] focus:border-transparent placeholder:text-[#7B7B7B]"
              required
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="bg-[#021938] mt-[10px] text-white px-4 py-2 rounded-lg font-medium inline-flex align items justify-center tracking-tight w-full cursor-pointer hover:bg-[#3FA7DE] active:scale-98 transition-colors duration-300"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
