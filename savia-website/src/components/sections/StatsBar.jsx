import { motion } from 'framer-motion';
import { Leaf, Globe, Users, Target } from 'lucide-react';
import AnimatedCounter from '../ui/AnimatedCounter';
import { useScrollAnimation, staggerContainer, fadeInUp } from '../../hooks/useScrollAnimation';

const StatsBar = () => {
  const { ref, inView } = useScrollAnimation(0.3);

  const stats = [
    { icon: Leaf, value: 25, suffix: '+', label: 'años de experiencia en campo', prefix: '' },
    { icon: Globe, value: null, label: 'Costa Rica & Centroamérica', sublabel: 'Cobertura regional', prefix: '', suffix: '' },
    { icon: Users, value: null, label: 'Empresas, Gobierno, Comunidades', sublabel: 'Sectores', prefix: '', suffix: '' },
    { icon: Target, value: null, label: 'Alineados con ODS', sublabel: 'Agenda 2030', prefix: '', suffix: '' },
  ];

  return (
    <section id="impacto" className="bg-primary py-16 dot-pattern" ref={ref}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto px-4 md:px-8"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                <stat.icon size={28} className="text-accent" />
              </div>
              {stat.value ? (
                <div className="font-mono text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.prefix}<AnimatedCounter end={stat.value} suffix={stat.suffix} />{' '}
                </div>
              ) : (
                <div className="font-mono text-lg font-bold text-accent mb-2">
                  {stat.sublabel}
                </div>
              )}
              <p className="text-white/60 text-sm font-body">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default StatsBar;
