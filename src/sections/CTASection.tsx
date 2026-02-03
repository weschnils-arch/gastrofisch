import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
    }, { threshold: 0.3 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-adria py-16 md:py-20">
      <div className="section-container">
        <div className={`text-center max-w-3xl mx-auto transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight">Haben Sie Fragen?</h2>
          <div className="w-16 h-0.5 bg-white/30 mx-auto mb-6" />
          <p className="font-lato text-lg md:text-xl text-white/90 leading-relaxed mb-10">Ob für Ihr Restaurant oder für zu Hause – wir beraten Sie gerne persönlich.</p>
          <Link to="/kontakt" className="inline-flex items-center gap-2 btn-white">Jetzt Kontakt aufnehmen<ArrowRight size={18} /></Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
