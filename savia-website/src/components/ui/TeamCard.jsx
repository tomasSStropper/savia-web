import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }
};

const TeamCard = ({ member }) => {
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-white rounded-2xl p-8 border border-secondary/10 text-center group hover:shadow-lg transition-all duration-500"
    >
      {/* Photo */}
      <div className="relative w-36 h-36 mx-auto mb-6 rounded-full overflow-hidden border-4 border-accent/30 group-hover:border-secondary/50 transition-all duration-500 group-hover:scale-105">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Name & Role */}
      <h3 className="font-display text-xl font-bold text-earth mb-1">{member.name}</h3>
      <p className="text-secondary font-semibold text-sm mb-1 font-body">{member.role}</p>
      <p className="text-earth/50 text-xs mb-2 font-body">{member.specialty}</p>
      <p className="text-earth/40 text-xs mb-4 font-mono">{member.experience}</p>

      {/* Bio */}
      <p className="text-earth/60 text-sm mb-5 leading-relaxed font-body">
        {member.bio}
      </p>

      {/* Certifications */}
      <div className="flex flex-wrap justify-center gap-2 mb-5">
        {member.certifications.map((cert, i) => (
          <span
            key={i}
            className="text-xs px-3 py-1 rounded-full bg-light text-primary font-medium font-body"
          >
            {cert}
          </span>
        ))}
      </div>

      {/* Education */}
      <div className="flex flex-wrap justify-center gap-1 text-xs text-earth/50 mb-4 font-body">
        {member.education.map((edu, i) => (
          <span key={i} className="block">{edu}</span>
        ))}
      </div>

      {/* LinkedIn */}
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-secondary transition-colors font-body"
      >
        <Linkedin size={18} />
        Ver perfil
      </a>
    </motion.div>
  );
};

export default TeamCard;
