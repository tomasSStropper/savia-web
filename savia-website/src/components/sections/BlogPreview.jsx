import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation, staggerContainer } from '../../hooks/useScrollAnimation';
import SectionTitle from '../ui/SectionTitle';
import BlogCard from '../ui/BlogCard';
import { blogPosts } from '../../data/blog';

const BlogPreview = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section className="section-padding bg-light/30" ref={ref}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="container-max"
      >
        <SectionTitle
          badge="Blog"
          title="Tendencias y buenas prácticas en sostenibilidad"
          subtitle="Compartimos conocimiento, experiencias y herramientas para impulsar la sostenibilidad."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.slice(0, 3).map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all font-body text-lg"
          >
            Ver todas las publicaciones
            <ArrowRight size={20} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default BlogPreview;
