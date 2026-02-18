import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation, staggerContainer } from '../../hooks/useScrollAnimation';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../data/projects';

const ProjectsPreview = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section className="section-padding bg-warm" ref={ref}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="container-max"
      >
        <SectionTitle
          badge="Historias de Impacto"
          title="Historias de éxito que generan impacto"
          subtitle="Cada proyecto transforma comunidades y fortalece el vínculo entre las personas y su territorio."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/proyectos"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all font-body text-lg"
          >
            Ver todos los proyectos
            <ArrowRight size={20} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsPreview;
