import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }
};

const SectionTitle = ({ badge, title, subtitle, light = false, align = 'center' }) => {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';

  return (
    <div className={`${alignClass} mb-16`}>
      {badge && (
        <motion.span
          variants={fadeInUp}
          className={`inline-block px-4 py-2 rounded-full text-sm font-medium font-body mb-6 ${
            light
              ? 'bg-white/10 text-accent border border-white/20'
              : 'bg-secondary/10 text-primary border border-secondary/20'
          }`}
        >
          {badge}
        </motion.span>
      )}
      <motion.h2
        variants={fadeInUp}
        className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${
          align === 'center' ? 'max-w-3xl mx-auto' : ''
        } ${light ? 'text-white' : 'text-earth'}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeInUp}
          className={`mt-4 text-lg font-body ${
            align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-2xl'
          } ${light ? 'text-white/70' : 'text-earth/60'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;
