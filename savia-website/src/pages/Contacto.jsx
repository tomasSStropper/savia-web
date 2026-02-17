import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, CheckCircle, Instagram, Facebook, Linkedin } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

const Contacto = () => {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setSending(true);
    // Simulate sending — replace with EmailJS or Formspree
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSending(false);
      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 6000);
    } catch {
      setSending(false);
    }
  };

  const inputClass = "w-full px-4 py-3 rounded-xl border border-secondary/20 bg-white text-earth text-sm font-body focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all";

  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-20 px-4 md:px-8 bg-primary overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 bg-white/10 text-accent border border-white/20 font-body"
          >
            Contacto
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Conversemos sobre tu próximo proyecto sostenible
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/70 font-body max-w-2xl mx-auto"
          >
            Estamos aquí para acompañarte. Contanos sobre tu organización y juntos encontraremos la mejor estrategia.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full">
            <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H0Z" fill="#F8F5F0"/>
          </svg>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-20 px-4 md:px-8 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16"
        >
          {/* Left: Info */}
          <motion.div variants={fadeInUp}>
            <h2 className="font-display text-2xl font-bold text-earth mb-8">
              Información de contacto
            </h2>
            <div className="space-y-6 mb-10">
              {[
                { icon: Mail, label: 'Email', text: 'info@saviasustainability.com' },
                { icon: Phone, label: 'Teléfono', text: '+506 XXXX-XXXX' },
                { icon: MapPin, label: 'Ubicación', text: 'Costa Rica, Centroamérica' },
              ].map(({ icon: Icon, label, text }, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={22} className="text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs text-earth/40 font-body">{label}</p>
                    <span className="text-earth font-body font-medium">{text}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="mb-10">
              <p className="text-sm font-semibold text-earth mb-3 font-body">Seguinos en redes</p>
              <div className="flex gap-3">
                {[
                  { icon: Instagram, href: '#', label: 'Instagram' },
                  { icon: Facebook, href: '#', label: 'Facebook' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-secondary/20 transition-colors text-primary"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-xl overflow-hidden h-48 bg-gradient-to-br from-primary/5 to-secondary/10 flex items-center justify-center" style={{ borderRadius: '12px' }}>
              <div className="text-center">
                <MapPin size={32} className="text-secondary mx-auto mb-2" />
                <p className="text-sm text-earth/40 font-body">Costa Rica, Centroamérica</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div variants={fadeInUp}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-light rounded-xl p-12 text-center h-full flex flex-col items-center justify-center" style={{ borderRadius: '12px' }}
              >
                <CheckCircle size={48} className="text-secondary mb-4" />
                <h3 className="font-display text-2xl font-bold text-earth mb-2">
                  Mensaje enviado con éxito
                </h3>
                <p className="text-earth/60 font-body">Nos pondremos en contacto pronto. ¡Gracias!</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 bg-white rounded-xl p-8 border border-secondary/10 shadow-sm" style={{ borderRadius: '12px' }}>
                <h3 className="font-display text-xl font-bold text-earth mb-2">Envianos un mensaje</h3>

                {/* Name */}
                <div>
                  <label className="text-sm font-medium text-earth/70 font-body mb-1 block">Nombre completo *</label>
                  <input
                    {...register('name', { required: 'Este campo es requerido' })}
                    placeholder="Tu nombre"
                    className={inputClass}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1 font-body">{errors.name.message}</p>}
                </div>

                {/* Company */}
                <div>
                  <label className="text-sm font-medium text-earth/70 font-body mb-1 block">Empresa / Institución / Comunidad *</label>
                  <input
                    {...register('company', { required: 'Este campo es requerido' })}
                    placeholder="Tu organización"
                    className={inputClass}
                  />
                  {errors.company && <p className="text-red-500 text-xs mt-1 font-body">{errors.company.message}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="text-sm font-medium text-earth/70 font-body mb-1 block">Teléfono</label>
                  <input
                    {...register('phone')}
                    placeholder="+506 XXXX-XXXX"
                    type="tel"
                    className={inputClass}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-sm font-medium text-earth/70 font-body mb-1 block">Correo electrónico *</label>
                  <input
                    {...register('email', {
                      required: 'Este campo es requerido',
                      pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Email inválido' }
                    })}
                    placeholder="tu@email.com"
                    type="email"
                    className={inputClass}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1 font-body">{errors.email.message}</p>}
                </div>

                {/* Subject */}
                <div>
                  <label className="text-sm font-medium text-earth/70 font-body mb-1 block">Asunto *</label>
                  <select
                    {...register('subject', { required: 'Seleccioná un asunto' })}
                    className={inputClass}
                    defaultValue=""
                  >
                    <option value="" disabled>Seleccioná un asunto</option>
                    <option value="diagnostico">Diagnóstico de sostenibilidad</option>
                    <option value="residuos">Gestión de residuos</option>
                    <option value="educacion">Educación ambiental</option>
                    <option value="interpretacion">Interpretación ambiental</option>
                    <option value="otro">Otro</option>
                  </select>
                  {errors.subject && <p className="text-red-500 text-xs mt-1 font-body">{errors.subject.message}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="text-sm font-medium text-earth/70 font-body mb-1 block">Mensaje / descripción del proyecto</label>
                  <textarea
                    {...register('message', { required: 'Contanos sobre tu proyecto', minLength: { value: 10, message: 'Mínimo 10 caracteres' } })}
                    placeholder="Contanos sobre tu proyecto o necesidad..."
                    rows={4}
                    className={inputClass}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1 font-body">{errors.message.message}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-secondary transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 font-body"
                >
                  {sending ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Enviar mensaje
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Contacto;
