import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } }
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-cream">
      {/* Subtle leaf pattern background */}
      <div className="absolute inset-0 leaf-pattern opacity-40" />

      {/* Decorative circles */}
      <div className="absolute top-20 -left-32 w-96 h-96 rounded-full bg-light/30 blur-3xl" />
      <div className="absolute bottom-20 right-0 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-28 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium font-body">
                <svg className="w-4 h-4" viewBox="0 0 60 65" fill="none">
                  <path d="M30 5 C45 15, 52 35, 30 60 C8 35, 15 15, 30 5Z" fill="#2D6A4F"/>
                </svg>
                Consultoría Ambiental · Costa Rica
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              variants={fadeInUp}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-earth"
            >
              Impulsando soluciones{' '}
              <span className="text-primary italic">basadas en naturaleza.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-primary/80 mb-4 font-display italic"
            >
              Construimos un futuro sostenible, juntos.
            </motion.p>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="text-lg max-w-xl mb-10 leading-relaxed text-earth/60 font-body"
            >
              Asesoramos a personas, empresas, instituciones y comunidades en la
              implementación de estrategias sostenibles que generan valor ambiental,
              social y económico.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/servicios"
                className="px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-secondary transition-all duration-300 inline-flex items-center gap-2 justify-center shadow-lg hover:shadow-xl font-body"
              >
                Conocé nuestros servicios
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/contacto"
                className="px-8 py-4 border-2 border-primary/30 text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300 inline-flex items-center gap-2 justify-center font-body"
              >
                Agendá una reunión
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Photo collage */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="relative hidden lg:block"
          >
            {/* Main large photo */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80"
                alt="Taller comunitario de educación ambiental"
                className="w-full h-[420px] object-cover rounded-2xl shadow-xl"
                style={{ borderRadius: '16px' }}
              />
              {/* Overlay subtle green gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl" style={{ borderRadius: '16px' }} />
            </div>

            {/* Secondary photo - overlapping bottom left */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 z-10">
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=300&q=80"
                alt="Actividad de campo con comunidades"
                className="w-full h-full object-cover rounded-xl shadow-lg border-4 border-cream"
                style={{ borderRadius: '12px' }}
                loading="lazy"
              />
            </div>

            {/* Third photo - overlapping top right */}
            <div className="absolute -top-4 -right-4 w-40 h-40 z-10">
              <img
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=300&q=80"
                alt="Charla de sostenibilidad con comunidad"
                className="w-full h-full object-cover rounded-xl shadow-lg border-4 border-cream"
                style={{ borderRadius: '12px' }}
                loading="lazy"
              />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute bottom-4 right-4 bg-white rounded-xl p-4 shadow-lg border border-secondary/10 z-20"
              style={{ borderRadius: '12px' }}
            >
              <p className="font-mono text-3xl font-bold text-primary">+25</p>
              <p className="text-xs text-earth/50 font-body">años en campo</p>
            </motion.div>

            {/* Decorative leaf */}
            <svg className="absolute -top-12 left-1/2 w-24 h-24 text-accent/20 -z-10" viewBox="0 0 200 200" fill="none">
              <path d="M100 20 Q140 60 100 140 Q60 60 100 20Z" fill="currentColor"/>
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#impacto">
          <ArrowDown size={24} className="text-primary/30 cursor-pointer hover:text-primary transition-colors" />
        </a>
      </motion.div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H0Z" fill="#2D6A4F"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
