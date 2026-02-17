import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation, fadeInUp, staggerContainer } from '../../hooks/useScrollAnimation';

const CTASection = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="py-24 px-4 md:px-8 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #2D6A4F 0%, #1A2C1E 100%)',
      }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-3xl mx-auto text-center relative z-10"
      >
        <motion.h2
          variants={fadeInUp}
          className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
        >
          ¿Listo para transformar tu organización?
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-xl text-white/70 mb-10 font-body"
        >
          Conversemos sobre tu próximo proyecto sostenible
        </motion.p>
        <motion.div variants={fadeInUp}>
          <Link
            to="/contacto"
            className="px-10 py-5 bg-white text-primary font-bold rounded-full hover:bg-accent hover:text-dark transition-all duration-300 inline-flex items-center gap-3 text-lg shadow-xl hover:shadow-2xl font-body"
          >
            Agendá una reunión inicial
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTASection;
