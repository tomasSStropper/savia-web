import { useState } from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }
};

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={fadeInUp}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative rounded-xl overflow-hidden cursor-pointer group h-96"
      style={{ borderRadius: '12px' }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent" />

      {/* Category badge */}
      <span className="absolute top-4 left-4 px-3 py-1 bg-secondary/90 text-white text-xs font-semibold rounded-full font-body">
        {project.category}
      </span>
      <span className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full font-body">
        {project.year}
      </span>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="font-display text-lg font-bold text-white mb-2">
          {project.title}
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag, i) => (
            <span key={i} className="text-xs px-2 py-1 rounded-full bg-secondary/20 text-accent font-body">
              {tag}
            </span>
          ))}
        </div>

        {/* Hover details */}
        <motion.div
          initial={false}
          animate={isHovered ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className="overflow-hidden"
        >
          <div className="pt-3 border-t border-white/20 space-y-2">
            <div>
              <span className="text-secondary text-xs font-semibold uppercase font-mono">Reto</span>
              <p className="text-white/80 text-sm font-body">{project.challenge}</p>
            </div>
            <div>
              <span className="text-secondary text-xs font-semibold uppercase font-mono">Solución</span>
              <p className="text-white/80 text-sm font-body">{project.solution}</p>
            </div>
            <div>
              <span className="text-secondary text-xs font-semibold uppercase font-mono">Resultados</span>
              <div className="flex flex-wrap gap-1 mt-1">
                {project.results.map((r, i) => (
                  <span key={i} className="text-xs px-2 py-1 rounded-full bg-secondary/30 text-white font-body">
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
