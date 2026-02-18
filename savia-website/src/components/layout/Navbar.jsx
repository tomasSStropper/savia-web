import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { label: 'Inicio', to: '/' },
    { label: 'Servicios', to: '/servicios' },
    { label: 'Proyectos', to: '/proyectos' },
    { label: 'Blog', to: '/blog' },
    { label: 'Contacto', to: '/contacto' },
  ];

  const showTransparent = isHome && !scrolled;

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: showTransparent ? 'transparent' : 'rgba(248,245,240,0.97)',
          backdropFilter: showTransparent ? 'none' : 'blur(20px)',
          boxShadow: showTransparent ? 'none' : '0 1px 40px rgba(45,106,79,0.08)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={showTransparent ? '/images/logo-savia-white.svg' : '/images/logo-savia.svg'}
              alt="SAVIA - Sustainability Advisors"
              className="h-10 w-auto transition-all duration-500"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium font-body transition-colors duration-300 hover:text-secondary ${
                  location.pathname === link.to
                    ? showTransparent ? 'text-accent' : 'text-secondary'
                    : showTransparent ? 'text-white/90' : 'text-earth/70'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/contacto">
              <button className="px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-secondary transition-all duration-300 flex items-center gap-2 font-body">
                Agendá una reunión
                <ArrowRight size={16} />
              </button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden z-50"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X size={24} className="text-earth" />
            ) : (
              <Menu size={24} className={showTransparent ? 'text-white' : 'text-earth'} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white flex flex-col justify-center items-center gap-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-2xl font-display font-bold cursor-pointer transition-colors ${
                  location.pathname === link.to ? 'text-secondary' : 'text-primary hover:text-secondary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contacto">
              <button className="px-8 py-3 bg-primary text-white font-semibold rounded-full hover:bg-secondary transition-all font-body">
                Agendá una reunión
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
