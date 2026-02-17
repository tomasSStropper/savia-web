import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Recycle, BarChart3, GraduationCap, TreePine, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

const servicesData = [
  {
    id: 1,
    icon: Recycle,
    title: "Gestión de Residuos y Economía Circular",
    color: "#2D6A4F",
    description: "Diseñamos e implementamos planes de manejo de residuos sólidos para empresas, instituciones, comunidades y eventos masivos, con enfoque en reducción, reutilización y reciclaje.",
    items: [
      "Planes de manejo de residuos sólidos (empresarial, institucional, eventos masivos)",
      "Estrategias de reducción, reutilización y reciclaje",
      "Diseño de procesos basados en circularidad",
      "Reducción de huella hídrica y de carbono",
      "Gestión de residuos en eventos y festivales comunitarios"
    ]
  },
  {
    id: 2,
    icon: BarChart3,
    title: "Diagnósticos y Estrategias de Sostenibilidad",
    color: "#52B788",
    description: "Realizamos auditorías integrales y evaluaciones de huella ambiental para organizaciones que buscan medir, planificar y reportar su impacto de manera estratégica.",
    items: [
      "Auditorías de sostenibilidad empresarial e institucional",
      "Evaluaciones de huella de carbono y huella hídrica",
      "Planes de acción y reportes ejecutivos",
      "Alineación con los ODS y Agenda 2030",
      "Estrategias de cumplimiento normativo ambiental"
    ]
  },
  {
    id: 3,
    icon: GraduationCap,
    title: "Educación y Capacitación para el Desarrollo Sostenible",
    color: "#95D5B2",
    description: "Formamos y sensibilizamos a comunidades, empresas e instituciones a través de talleres participativos, festivales eco-culturales y actividades lúdicas que inspiran el cambio duradero.",
    items: [
      "Charlas y talleres (consumo responsable, reciclaje, residuos orgánicos, alternativas al plástico)",
      "Diseño de actividades de sensibilización (festivales, cineforos, limpiezas comunitarias)",
      "Tratamiento de aguas y manejo de recursos hídricos",
      "Formación en cumplimiento normativo ambiental",
      "Programas de educación ambiental para escuelas y comunidades"
    ]
  },
  {
    id: 4,
    icon: TreePine,
    title: "Interpretación Ambiental y Biodiversidad",
    color: "#3A2F1E",
    description: "Conectamos a las personas con la naturaleza a través de la interpretación de senderos, inventarios de biodiversidad participativos y materiales didácticos innovadores como las Eco-Maletas.",
    items: [
      "Interpretación de senderos y señalización (fincas, ecoturismo)",
      "Inventarios de biodiversidad (presencial o ciencia ciudadana participativa)",
      "Materiales didácticos y de comunicación estratégica",
      "Eco-Maletas — kits educativos portátiles",
      "Capacitación de guías naturalistas comunitarios"
    ]
  }
];

const Servicios = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            Nuestros Servicios
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Soluciones sostenibles a la medida de su organización
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/70 font-body max-w-2xl mx-auto"
          >
            La diversidad de nuestros servicios abarca todo el ciclo para la implementación
            de proyectos — desde el diagnóstico, formulación, ejecución, evaluación y seguimiento.
          </motion.p>
        </div>
        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full">
            <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H0Z" fill="#F8F5F0"/>
          </svg>
        </div>
      </section>

      {/* Services detail */}
      <section className="py-20 px-4 md:px-8 bg-cream">
        <div className="max-w-5xl mx-auto space-y-20">
          {servicesData.map((service, idx) => (
            <motion.div
              key={service.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Icon + header side */}
              <motion.div variants={fadeInUp} className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${service.color}15` }}
                >
                  <service.icon size={32} style={{ color: service.color }} />
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-earth mb-4">
                  {service.title}
                </h2>
                <p className="text-earth/60 font-body text-lg leading-relaxed mb-6">
                  {service.description}
                </p>
              </motion.div>

              {/* Items list */}
              <motion.div variants={fadeInUp} className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="bg-white rounded-xl p-8 border border-secondary/10 shadow-sm" style={{ borderRadius: '12px' }}>
                  <ul className="space-y-4">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-earth/70 font-body">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-8 bg-primary text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            ¿Necesitás una solución a la medida?
          </h2>
          <p className="text-white/60 font-body mb-8">
            Cada organización es única. Conversemos sobre tus necesidades y diseñemos juntos la estrategia ideal.
          </p>
          <Link
            to="/contacto"
            className="px-10 py-4 bg-white text-primary font-bold rounded-full hover:bg-accent hover:text-dark transition-all duration-300 inline-flex items-center gap-2 font-body"
          >
            Agendá una reunión
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Servicios;
