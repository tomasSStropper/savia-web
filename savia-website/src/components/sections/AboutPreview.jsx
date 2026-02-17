import { motion } from 'framer-motion';
import { Heart, Microscope, Lightbulb, Handshake, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../../hooks/useScrollAnimation';

const AboutPreview = () => {
  const { ref, inView } = useScrollAnimation();

  const values = [
    { icon: Heart, title: 'Integridad', desc: 'Transparencia y compromiso ético en cada proyecto' },
    { icon: Microscope, title: 'Rigor técnico', desc: 'Metodologías basadas en evidencia científica' },
    { icon: Lightbulb, title: 'Innovación', desc: 'Soluciones creativas, viables y adaptadas al contexto' },
    { icon: Handshake, title: 'Colaboración', desc: 'Alianzas duraderas con impacto real en comunidades' },
  ];

  return (
    <section className="section-padding bg-cream leaf-pattern" ref={ref}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="container-max"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div variants={fadeInLeft}>
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 bg-secondary/10 text-primary border border-secondary/20 font-body">
              Quiénes Somos
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-earth mb-6 leading-tight">
              Empoderando comunidades para proteger su entorno natural
            </h2>
            <p className="text-earth/70 leading-relaxed mb-6 font-body text-lg">
              SAVIA es una firma costarricense de consultoría ambiental fundada por profesionales apasionadas
              por la naturaleza y el trabajo comunitario. Con más de 25 años de experiencia en campo,
              acompañamos a personas, empresas, instituciones y comunidades en la implementación de
              estrategias sostenibles que generan valor ambiental, social y económico.
            </p>
            <p className="text-earth/60 leading-relaxed mb-10 font-body">
              Nuestra diversidad de servicios abarca todo el ciclo para la implementación de proyectos —
              desde el diagnóstico, formulación, ejecución, evaluación y seguimiento. Creemos que la
              sostenibilidad nace del vínculo entre las personas y su territorio.
            </p>

            {/* Values grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {values.map((val, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex gap-3 items-start p-4 rounded-xl bg-white/60 border border-secondary/10 hover:bg-white transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <val.icon size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-earth text-sm font-body">{val.title}</h4>
                    <p className="text-xs text-earth/50 font-body">{val.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link
              to="/contacto"
              className="text-primary font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all font-body"
            >
              Conocé al equipo
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          {/* Right: Image collage */}
          <motion.div variants={fadeInRight} className="relative">
            <div className="relative rounded-xl overflow-hidden" style={{ borderRadius: '12px' }}>
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80"
                alt="Equipo SAVIA trabajando con comunidades"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-secondary/20 rounded-xl -z-10" style={{ borderRadius: '12px' }} />

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg border border-secondary/10">
              <p className="font-mono text-2xl font-bold text-primary">+25</p>
              <p className="text-xs text-earth/60 font-body">años en campo</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutPreview;
