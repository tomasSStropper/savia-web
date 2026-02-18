import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative text-white/80" style={{ background: 'linear-gradient(180deg, #2D6A4F 0%, #1A2C1E 100%)' }}>
      {/* Wave SVG */}
      <div className="absolute -top-px left-0 right-0 overflow-hidden">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H0Z"
            fill="#2D6A4F"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Logo */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img src="/images/logo-savia-white.svg" alt="SAVIA Sustainability Advisors" className="h-12 mb-4" />
            </Link>
            <p className="text-sm text-white/50 mb-2 leading-relaxed font-body italic">
              "Empoderando soluciones basadas en naturaleza."
            </p>
            <p className="text-sm text-white/40 mb-6 leading-relaxed font-body">
              Firma costarricense de consultoría ambiental. Asesoramos a personas, empresas, instituciones y comunidades en sostenibilidad.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Youtube, href: '#', label: 'YouTube' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary/30 transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navegacion */}
          <div>
            <h4 className="text-white font-semibold mb-4 font-body">Navegación</h4>
            <ul className="space-y-3 text-sm font-body">
              {[
                { label: 'Inicio', to: '/' },
                { label: 'Servicios', to: '/servicios' },
                { label: 'Proyectos', to: '/proyectos' },
                { label: 'Blog', to: '/blog' },
                { label: 'Contacto', to: '/contacto' },
              ].map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="hover:text-secondary cursor-pointer transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Servicios */}
          <div>
            <h4 className="text-white font-semibold mb-4 font-body">Servicios</h4>
            <ul className="space-y-3 text-sm font-body">
              {[
                'Gestión de Residuos',
                'Diagnósticos de Sostenibilidad',
                'Educación Ambiental',
                'Interpretación Ambiental',
              ].map((s) => (
                <li key={s}>
                  <Link to="/servicios" className="hover:text-secondary cursor-pointer transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contacto */}
          <div>
            <h4 className="text-white font-semibold mb-4 font-body">Contacto</h4>
            <ul className="space-y-3 text-sm font-body">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-secondary flex-shrink-0" />
                info@saviasustainability.com
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-secondary flex-shrink-0" />
                +506 XXXX-XXXX
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-secondary flex-shrink-0" />
                Costa Rica, Centroamérica
              </li>
            </ul>
          </div>
        </div>

        {/* ODS mention */}
        <div className="text-center mb-8">
          <p className="text-xs text-white/30 font-body">
            Comprometidos con los Objetivos de Desarrollo Sostenible (ODS) y la Agenda 2030
          </p>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <span className="font-body">&copy; 2025 SAVIA Sustainability Advisors. Todos los derechos reservados.</span>
          <div className="flex gap-6 font-body">
            <span className="hover:text-white/50 cursor-pointer">Política de privacidad</span>
            <span className="hover:text-white/50 cursor-pointer">Términos de uso</span>
          </div>
        </div>

        {/* Credit */}
        <div className="text-center mt-6">
          <p className="text-[10px] text-white/20 font-body">
            Desarrollado por TyT Software & Solutions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
