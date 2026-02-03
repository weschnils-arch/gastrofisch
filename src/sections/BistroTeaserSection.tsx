import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const BistroTeaserSection = () => {
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
    <section ref={sectionRef} className="relative w-full min-h-[60vh] md:min-h-[70vh] overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/bistro_oktopus.webp)' }} />
      <div className="absolute inset-0" style={{ background: 'rgba(29, 69, 137, 0.5)' }} />
      <div className="relative z-10 h-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-2xl mx-auto transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight">Frisch auf den Tisch.</h2>
          <div className="w-16 h-0.5 bg-white/50 mx-auto mb-6" />
          <p className="font-lato text-lg md:text-xl text-white/90 leading-relaxed mb-10">Besuchen Sie unser kleines, feines Bistro und erleben Sie den wahren Geschmack der Adria.</p>
          <a href="https://www.zenchef.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 btn-white">Speisekarte ansehen & reservieren<ArrowRight size={18} /></a>
        </div>
      </div>
    </section>
  );
};

export default BistroTeaserSection;
