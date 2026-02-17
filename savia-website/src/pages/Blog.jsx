import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import BlogCard from '../components/ui/BlogCard';
import { blogPosts } from '../data/blog';

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['Todos', ...new Set(blogPosts.map(p => p.category))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
            Blog
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Tendencias y buenas prácticas en sostenibilidad
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/70 font-body max-w-2xl mx-auto"
          >
            Compartimos conocimiento, experiencias y herramientas para impulsar un futuro sostenible.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full">
            <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H0Z" fill="#F8F5F0"/>
          </svg>
        </div>
      </section>

      {/* Search + Filters + Grid */}
      <section className="py-20 px-4 md:px-8 bg-cream">
        <div className="max-w-7xl mx-auto">
          {/* Search bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-earth/30" />
              <input
                type="text"
                placeholder="Buscar artículos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-secondary/20 bg-white text-earth text-sm font-body focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
              />
            </div>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 font-body ${
                  selectedCategory === cat
                    ? 'bg-primary text-white'
                    : 'bg-white text-earth/60 hover:bg-secondary/10 border border-secondary/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Blog grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            key={selectedCategory + searchTerm}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </motion.div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-earth/40 font-body text-lg">No se encontraron artículos.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;
