import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation, staggerContainer } from '../../hooks/useScrollAnimation';
import SectionTitle from '../ui/SectionTitle';
import ServiceCard from '../ui/ServiceCard';
import { services } from '../../data/services';

const ServicesPreview = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section className="section-padding bg-white" ref={ref}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="container-max"
      >
        <SectionTitle
          badge="Nuestros Servicios"
          title="Soluciones sostenibles a la medida de su organización"
          subtitle="Acompañamos cada fase del proceso — desde el diagnóstico hasta el seguimiento de resultados."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/servicios"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all font-body text-lg"
          >
            Ver todos los servicios
            <ArrowRight size={20} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesPreview;
