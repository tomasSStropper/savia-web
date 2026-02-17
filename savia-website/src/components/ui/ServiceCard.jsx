import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }
};

const ServiceCard = ({ service, showItems = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = Icons[service.icon];

  return (
    <motion.div
      variants={fadeInUp}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-white rounded-2xl p-8 border border-secondary/10 transition-all duration-500 cursor-pointer relative overflow-hidden group"
      style={{
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: isHovered
          ? '0 20px 60px rgba(45, 106, 79, 0.15)'
          : '0 4px 24px rgba(45, 106, 79, 0.06)',
      }}
    >
      {/* Left accent border */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 transition-all duration-500"
        style={{ backgroundColor: isHovered ? service.color : 'transparent' }}
      />

      {/* Icon */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300"
        style={{ backgroundColor: `${service.color}15` }}
      >
        {IconComponent && <IconComponent size={28} style={{ color: service.color }} />}
      </div>

      {/* Title */}
      <h3 className="font-display text-xl font-bold text-earth mb-3">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-earth/60 mb-4 font-body text-sm leading-relaxed">
        {service.description}
      </p>

      {/* Items list - always shown or on hover */}
      {(showItems || isHovered) && (
        <motion.ul
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          className="overflow-hidden space-y-2 mb-4"
        >
          {service.items.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-2 text-sm text-earth/60 font-body"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
              {item}
            </motion.li>
          ))}
        </motion.ul>
      )}

      {/* Link */}
      <Link
        to="/servicios"
        className="text-sm font-semibold flex items-center gap-2 transition-colors font-body hover:gap-3"
        style={{ color: service.color }}
      >
        Ver más
        <ArrowRight size={16} />
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
