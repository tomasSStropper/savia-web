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

const fadeInDown = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80"
          alt="Bosque tropical costarricense"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-primary/60 to-dark/80" />
      </div>

      {/* Decorative leaf SVG pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="absolute top-20 right-10 w-64 h-64 text-accent" viewBox="0 0 200 200" fill="none">
          <path d="M100 20 Q140 60 100 140 Q60 60 100 20Z" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.1"/>
        </svg>
        <svg className="absolute bottom-32 left-10 w-48 h-48 text-accent" viewBox="0 0 200 200" fill="none">
          <path d="M100 20 Q140 60 100 140 Q60 60 100 20Z" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.1"/>
        </svg>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center"
      >
        {/* Tagline principal */}
        <motion.h1
          variants={fadeInUp}
          className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 text-white"
        >
          Impulsando soluciones{' '}
          <span className="text-accent">basadas en naturaleza.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeInUp}
          className="font-display text-xl md:text-2xl text-accent/90 mb-4 italic"
        >
          Construimos un futuro sostenible, juntos.
        </motion.p>

        {/* Description */}
        <motion.p
          variants={fadeInUp}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed text-white/80 font-body"
        >
          Asesoramos a personas, empresas, instituciones y comunidades en la implementación
          de estrategias sostenibles que generan valor ambiental, social y económico.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/servicios"
            className="px-8 py-4 bg-secondary text-white font-semibold rounded-full hover:bg-primary transition-all duration-300 inline-flex items-center gap-2 justify-center shadow-lg hover:shadow-xl font-body"
          >
            Conocé nuestros servicios
            <ArrowRight size={18} />
          </Link>
          <Link
            to="/contacto"
            className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 inline-flex items-center gap-2 justify-center font-body"
          >
            Agendá una reunión inicial
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#impacto">
          <ArrowDown size={24} className="text-white/40 cursor-pointer hover:text-accent transition-colors" />
        </a>
      </motion.div>

      {/* Wave divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H0Z" fill="#2D6A4F"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
