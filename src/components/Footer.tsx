import { Link } from 'react-router-dom';
import { Facebook, Instagram, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/einzelhandel', label: 'Einzelhandel' },
    { path: '/grosshandel', label: 'Großhandel' },
    { path: '/ueber-uns', label: 'Über Uns' },
    { path: '/rezepte', label: 'Rezepte' },
    { path: '/kontakt', label: 'Kontakt' },
  ];

  return (
    <footer className="bg-deepblue text-white">
      <div className="section-container py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-24">
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img src="/images/logo_weiss.svg" alt="Gastro Fisch Brač" className="h-16 w-auto mb-2" />
            </Link>
            <p className="font-playfair text-lg italic text-white/80 leading-relaxed">„Die Quelle des Geschmacks."</p>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">Direktimport von Wildfang aus der Adria. Garantiert. Seit 1990.</p>
            <div className="flex items-center gap-4 pt-2">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass-button flex items-center justify-center hover:scale-110 transition-all duration-300" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/gastrofischbrac" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass-button flex items-center justify-center hover:scale-110 transition-all duration-300" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-playfair text-lg font-semibold text-white">Navigation</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-white/70 hover:text-white transition-colors duration-200 text-sm">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="font-playfair text-lg font-semibold text-white">Kontakt</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-white/60 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/90 text-sm">Gastro Fisch Brač</p>
                  <p className="text-white/70 text-sm">Zollergasse 19</p>
                  <p className="text-white/70 text-sm">1070 Wien</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-white/60 flex-shrink-0" />
                <a href="tel:+4311234567" className="text-white/70 hover:text-white transition-colors duration-200 text-sm">+43 1 123 4567</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-white/60 flex-shrink-0" />
                <a href="mailto:info@gastrofischbrac.at" className="text-white/70 hover:text-white transition-colors duration-200 text-sm">info@gastrofischbrac.at</a>
              </div>
              <div className="flex items-start gap-3 pt-2">
                <Clock size={18} className="text-white/60 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/90 text-sm font-medium">Öffnungszeiten</p>
                  <p className="text-white/70 text-sm">Mo–Fr: 9:00 – 18:00 Uhr</p>
                  <p className="text-white/70 text-sm">Sa: 9:00 – 14:00 Uhr</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
            <p>© {currentYear} Gastro Fisch Brač. Alle Rechte vorbehalten.</p>
            <div className="flex items-center gap-6">
              <Link to="/impressum" className="hover:text-white transition-colors duration-200">Impressum</Link>
              <Link to="/datenschutz" className="hover:text-white transition-colors duration-200">Datenschutz</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
