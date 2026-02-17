import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }
};

const BlogCard = ({ post }) => {
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('es-CR', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <motion.article
      variants={fadeInUp}
      className="bg-white rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-500 border border-secondary/10"
      style={{ borderRadius: '12px' }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 px-3 py-1 bg-primary/90 text-white text-xs font-semibold rounded-full font-body">
          {post.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta */}
        <div className="flex items-center gap-3 text-xs text-earth/40 mb-3 font-body">
          <span>{formatDate(post.date)}</span>
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display text-lg font-bold text-earth mb-2 group-hover:text-primary transition-colors leading-tight">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-earth/60 text-sm leading-relaxed mb-4 font-body line-clamp-2">
          {post.excerpt}
        </p>

        {/* Link */}
        <Link
          to={`/blog/${post.slug}`}
          className="text-sm font-semibold text-primary flex items-center gap-2 hover:gap-3 transition-all font-body"
        >
          Leer más
          <ArrowRight size={16} />
        </Link>
      </div>
    </motion.article>
  );
};

export default BlogCard;
