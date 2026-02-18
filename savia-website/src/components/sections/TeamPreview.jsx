import { motion } from 'framer-motion';
import { useScrollAnimation, staggerContainer } from '../../hooks/useScrollAnimation';
import SectionTitle from '../ui/SectionTitle';
import TeamCard from '../ui/TeamCard';
import { team } from '../../data/team';

const TeamPreview = () => {
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
          badge="Nuestro Equipo"
          title="El equipo detrás de SAVIA"
          subtitle="Profesionales apasionadas por la naturaleza y comprometidas con las comunidades."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TeamPreview;
