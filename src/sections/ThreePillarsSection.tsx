import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';


interface PillarCardProps {
  title: string;
  hoverText: string;
  ctaText: string;
  ctaLink: string;
  image: string;
  delay: number;
}

const PillarCard = ({ title, hoverText, ctaText, ctaLink, image, delay }: PillarCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setIsVisible(true), delay);
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [delay]);

  const isExternal = ctaLink.startsWith('http');

  return (
    <div ref={cardRef} className={`relative h-[450px] md:h-[600px] rounded-2xl overflow-hidden group cursor-pointer transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="absolute inset-0">
        <img src={image} alt={title} className={`w-full h-full object-cover transition-transform duration-1000 ease-out ${isHovered ? 'scale-110' : 'scale-100'}`} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-graphite/90 via-graphite/20 to-transparent transition-opacity duration-500 opacity-60 group-hover:opacity-80" />

      <div className="absolute inset-x-4 bottom-4 md:inset-x-8 md:bottom-8">
        <div className={`glass-card p-6 md:p-8 rounded-xl transform transition-all duration-500 ${isHovered ? 'translate-y-0' : 'translate-y-4'}`}>
          <h3 className="font-playfair text-2xl md:text-3xl font-bold text-white mb-3 tracking-wide">{title}</h3>
          <div className={`overflow-hidden transition-all duration-700 ${isHovered ? 'max-h-40 opacity-100 mb-6' : 'max-h-0 opacity-0 mb-0'}`}>
            <p className="font-lato text-white/90 text-sm md:text-base leading-relaxed">{hoverText}</p>
          </div>
          {isExternal ? (
            <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white font-lato font-bold text-xs uppercase tracking-[0.2em] group/btn">
              {ctaText}
              <div className="w-8 h-[1px] bg-white/50 transition-all duration-300 group-hover/btn:w-12 group-hover/btn:bg-white" />
            </a>
          ) : (
            <Link to={ctaLink} className="inline-flex items-center gap-2 text-white font-lato font-bold text-xs uppercase tracking-[0.2em] group/btn">
              {ctaText}
              <div className="w-8 h-[1px] bg-white/50 transition-all duration-300 group-hover/btn:w-12 group-hover/btn:bg-white" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

const ThreePillarsSection = () => {
  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setTitleVisible(true); observer.disconnect(); }
    }, { threshold: 0.3 });
    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  const pillars = [
    { title: 'Unsere Boutique', hoverText: 'Erlesener Fisch und Meeresfrüchte für anspruchsvolle Genießer. Erleben Sie ein exklusives Einkaufserlebnis in Wien-Neubau.', ctaText: 'Zum Geschäft', ctaLink: '/einzelhandel', image: '/images/retail/zollergasse.jpg', delay: 0 },
    { title: 'Für die Gastronomie', hoverText: 'Verlässliche Qualität und Lieferung für Wiens beste Restaurants. Direktimport aus der Adria, tagesfrisch geliefert.', ctaText: 'Zum Großhandel', ctaLink: '/grosshandel', image: '/images/thunfischfang_bg.jpg', delay: 150 },
    { title: 'Unser Bistro', hoverText: 'Frischer geht es nicht. Genießen Sie unsere Tagesfänge direkt vor Ort in unserem kleinen, feinen Bistro.', ctaText: 'Tisch reservieren', ctaLink: 'https://www.zenchef.com/', image: '/images/bistro.jpg', delay: 300 },
  ];

  return (
    <section className="section-container section-padding bg-white">
      <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
        <h2 className={`font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold text-adria mb-6 transition-all duration-600 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Wähle dein Erlebnis</h2>
        <p className={`font-lato text-base md:text-lg text-graphite leading-relaxed transition-all duration-600 delay-200 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Ob für Ihr Restaurant, Ihr Zuhause oder einen unvergesslichen Moment in unserem Bistro – wir bieten Ihnen die beste Qualität der Adria.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14 lg:gap-20">
        {pillars.map((pillar, index) => (<PillarCard key={index} {...pillar} />))}
      </div>
    </section>
  );
};

export default ThreePillarsSection;
