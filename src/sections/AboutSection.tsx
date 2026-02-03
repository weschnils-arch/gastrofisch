import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
    }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-container section-padding bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className={`relative transition-all duration-800 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <img src="/images/about/ivo.webp" alt="Ivo Bartulović - Gründer" className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-deepblue/30 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-adria/10 rounded-lg -z-10" />
          <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-adria/20 rounded-lg -z-10" />
        </div>
        <div className={`space-y-6 transition-all duration-800 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
          <span className="inline-block font-lato text-xs font-semibold tracking-widest uppercase text-adria">Über Uns</span>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold text-graphite leading-tight">Mehr als nur Fisch.<br /><span className="text-adria">Eine Familiengeschichte.</span></h2>
          <div className="space-y-4 font-lato text-graphite/80 leading-relaxed">
            <p>Um die Jahrtausendwende begann Ivo Bartulović in Split mit dem Handel eines Produkts, das die Identität unseres Unternehmens bis heute prägt: Kroatische Garnelen aus Wildfang. Später kamen immer mehr Produkte hinzu, der Kundenkreis wurde größer, die Mitarbeiterzahl stieg stetig.</p>
            <p>2004 holte er seinen Bruder Toni mit ins Boot, der eigentlich nur eine Saison aushelfen wollte. Noch heute führen sie gemeinsam das Unternehmen Centaurus d.o.o. in Kroatien, das mittlerweile mehr als 170 Mitarbeiter beschäftigt.</p>
          </div>
          <blockquote className="border-l-4 border-adria pl-6 py-2 my-8">
            <p className="font-playfair text-lg md:text-xl italic text-adria leading-relaxed mb-3">„Die Wahl Wiens als Standort ist Ausdruck unseres Anspruchs an Qualität und Frische. In einer Stadt, in der kulinarische Standards hoch sind und Herkunft eine zentrale Rolle spielt, sehen wir den idealen Ort, um unsere Kompetenz im Fischhandel weiter auszubauen."</p>
            <cite className="font-lato text-sm text-graphite/70 not-italic">— Milan Prgomet</cite>
          </blockquote>
          <Link to="/ueber-uns" className="inline-flex items-center gap-2 btn-primary mt-4">Unsere Geschichte im Detail<ArrowRight size={18} /></Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
