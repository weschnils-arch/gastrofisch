import { useEffect, useRef, useState } from 'react';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
    }, { threshold: 0.2 });
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  const timeline = [
    { year: '1990', title: 'Die Anfänge', description: 'Ivo Bartulović beginnt in Split mit dem Handel von kroatischen Garnelen aus Wildfang.' },
    { year: '2004', title: 'Familienzuwachs', description: 'Toni Bartulović kommt ins Unternehmen. Gemeinsam bauen sie den Großhandel aus.' },
    { year: '2008', title: 'Einzelhandel trotz Krise', description: 'Mitten in der globalen Finanzkrise eröffnet der erste Einzelhandel in Split – ein mutiger Schritt, der sich auszahlt.' },
    { year: '2018', title: 'Centaurus GmbH & Wien', description: 'Gründung der Centaurus GmbH. Treffen mit Milan Prgomet beim Hajduk Split Stadion zur Planung der Wiener Expansion.' },
    { year: '2019', title: 'Gastro Fisch Brač', description: 'Eröffnung der Boutique in Wien-Neubau – unser erster Standort außerhalb Kroatiens.' },
    { year: 'Heute', title: 'Stetiges Wachstum', description: 'Mit über 170 Mitarbeitern und einer starken Logistik beliefern wir Gastronomie und Privatkunden.' },
  ];

  const founders = [
    { name: 'Ivo Bartulović', role: 'Gründer & Geschäftsführer', image: '/images/about/ivo.jpg', description: 'Der visionäre Gründer, der 1990 alles begann.' },
    { name: 'Toni Bartulović', role: 'Geschäftsführer', image: '/images/about/team.jpg', description: 'Seit 2004 an Bord und treibt die Expansion voran.' },
    { name: 'Milan Prgomet', role: 'Geschäftsführer Wien', image: '/images/about/milan.jpg', description: 'Der Architekt der Wiener Expansion.' },
  ];

  return (
    <div className="relative">
      <div ref={heroRef} className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/about_hero_new.jpg)' }} />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className={`text-center max-w-3xl pt-24 md:pt-32 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <span className="inline-block font-lato text-xs font-semibold tracking-widest uppercase text-white/80 mb-4">Über Uns</span>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Unsere Geschichte</h1>
            <p className="font-lato text-lg md:text-xl text-white/90">Von der Adria nach Wien – eine Familiengeschichte</p>
          </div>
        </div>
      </div>

      <section className="section-container section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-graphite mb-6 text-center">Mehr als nur Fisch</h2>
          <div className="space-y-6 font-lato text-graphite/80 leading-relaxed text-lg">
            <p>Um die Jahrtausendwende begann Ivo Bartulović in Split mit dem Handel eines Produkts, das die Identität unseres Unternehmens bis heute prägt: Kroatische Garnelen aus Wildfang.</p>
            <p>2004 holte er seinen Bruder Toni mit ins Boot. Noch heute führen sie gemeinsam das Unternehmen Centaurus d.o.o. in Kroatien, das mittlerweile mehr als 170 Mitarbeiter beschäftigt.</p>
            <p>2018 schlug Milan Prgomet den Brüdern Bartulović vor, das Geschäft nach Wien auszuweiten. Im Januar 2019 wurde das Boutique-Fischgeschäft unter dem Namen Gastro Fisch Brač in Wien Neubau eröffnet.</p>
          </div>
          <blockquote className="mt-12 border-l-4 border-adria pl-8 py-4 bg-gray-50 rounded-r-lg">
            <p className="font-playfair text-xl md:text-2xl italic text-adria leading-relaxed mb-4">„Die Wahl Wiens als Standort ist Ausdruck unseres Anspruchs an Qualität und Frische."</p>
            <cite className="font-lato text-graphite/70 not-italic">— Milan Prgomet, Geschäftsführer Wien</cite>
          </blockquote>
        </div>
      </section>

      <section className="section-container section-padding bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-graphite mb-4">Die Gründer</h2>
          <p className="font-lato text-graphite/70 max-w-2xl mx-auto">Drei Männer, eine Vision: Die beste Qualität der Adria direkt auf den Tisch zu bringen.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <div key={index} className="glass-card rounded-xl overflow-hidden shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="aspect-[3/4] overflow-hidden"><img src={founder.image} alt={founder.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" /></div>
              <div className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-graphite mb-1">{founder.name}</h3>
                <p className="font-lato text-sm text-adria mb-3 uppercase tracking-wider font-bold">{founder.role}</p>
                <p className="font-lato text-sm text-graphite/70">{founder.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container section-padding bg-white">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-graphite mb-4">Zusammenarbeit mit Fischern</h2>
          <p className="font-lato text-graphite/70 max-w-2xl mx-auto">Nachhaltigkeit und Handschlagqualität als Fundament unseres Erfolgs.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6 font-lato text-graphite/80 leading-relaxed text-lg">
            <p>Wir arbeiten eng mit über 20 familiengeführten Fischerbetrieben zusammen. Diese langjährigen Partnerschaften basieren auf Vertrauen, fairen Bedingungen und einem gemeinsamen Verständnis für Qualität.</p>
            <p>Durch unseren direkten Kontakt und eigene Logistik stellen wir sicher, dass nachhaltige Standards eingehalten werden und der Fang ohne Umwege nach Wien gelangt.</p>
            <ul className="space-y-3 pt-4">
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-adria rounded-full" /><span className="text-graphite font-medium underline decoration-adria/30">Über 20 Partnerboote in der Adria</span></li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-adria rounded-full" /><span className="text-graphite font-medium underline decoration-adria/30">Faire Bedingungen für die Fischer</span></li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-adria rounded-full" /><span className="text-graphite font-medium underline decoration-adria/30">Nachhaltige Fangmethoden</span></li>
            </ul>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl aspect-video bg-gray-100 flex items-center justify-center relative">
            <video
              className="w-full h-full object-cover"
              controls
              poster="/images/Thunfischfang.jpg"
            >
              <source src="/videos/fishery_work.mp4" type="video/mp4" />
              Ihr Browser unterstützt das Video-Tag nicht.
            </video>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-graphite mb-4">Eigene Produktion: AMARE</h2>
          <p className="font-lato text-graphite/70 max-w-2xl mx-auto">Vom Meer direkt in die Manufaktur.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 rounded-xl overflow-hidden shadow-2xl aspect-video bg-gray-100">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/INCm_daSKbw?start=1139&end=1200"
              title="AMARE Eigenmarke Produktion"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="order-1 lg:order-2 space-y-6 font-lato text-graphite/80 leading-relaxed text-lg">
            <p>Mit AMARE haben wir eine Eigenmarke geschaffen, die unsere Leidenschaft für das Meer in jedem Produkt widerspiegelt. In unserer eigenen Produktion in Kroatien verarbeiten wir tagesfrische Fänge nach höchsten Standards.</p>
            <p>Besonders stolz sind wir auf unsere Garnelen-Produkte, die das Herzstück der Marke AMARE bilden und für reine Herkunft und unverfälschten Geschmack stehen.</p>
          </div>
        </div>
      </section>

      <section className="section-container section-padding bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-graphite mb-4">Unsere Meilensteine</h2>
          <p className="font-lato text-graphite/70">Über 30 Jahre Geschichte</p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-adria/20 md:-translate-x-1/2" />
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`md:text-right ${index % 2 === 1 ? 'md:order-2' : ''} md:w-1/2`}><span className="inline-block px-4 py-2 bg-adria text-white font-playfair font-bold rounded-lg">{item.year}</span></div>
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-adria rounded-full border-4 border-white shadow md:-translate-x-1/2 z-10" />
                  <div className={`pl-12 md:pl-0 md:w-1/2 ${index % 2 === 1 ? 'md:text-right' : ''}`}>
                    <h3 className="font-playfair text-xl font-semibold text-graphite mb-2">{item.title}</h3>
                    <p className="font-lato text-graphite/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
