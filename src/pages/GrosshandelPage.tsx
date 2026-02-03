import { useEffect, useRef, useState } from 'react';
import { Check, FileText, Truck, Award, Users, Calendar } from 'lucide-react';

const GrosshandelPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
    }, { threshold: 0.2 });
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  const benefits = [
    { icon: Truck, title: 'Tagesfrische Lieferung', description: 'Direkt vom Boot auf den Tisch – unsere Lieferkette garantiert maximale Frische.' },
    { icon: Award, title: 'Direktimport aus der Adria', description: 'Eigene Partnerschaften mit kroatischen Fischern seit über 30 Jahren.' },
    { icon: Users, title: 'Persönliche Beratung', description: 'Unser Expertenteam steht Ihnen für alle Fragen zur Verfügung.' },
    { icon: Calendar, title: 'Flexible Bestellmengen', description: 'Von kleinen Portionen bis zur Großbestellung.' },
  ];

  const processSteps = [
    { number: '01', title: 'Anfrage stellen', description: 'Kontaktieren Sie uns per Telefon, E-Mail oder über unser Kontaktformular.' },
    { number: '02', title: 'Persönliche Beratung', description: 'Wir besprechen Ihre Bedürfnisse und erstellen Ihnen ein individuelles Angebot.' },
    { number: '03', title: 'Lieferung & Qualitätskontrolle', description: 'Termingenaue Lieferung mit garantierter Qualität direkt zu Ihnen.' },
  ];

  return (
    <div className="relative">
      <div ref={heroRef} className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/thunfischfang_bg.jpg)' }} />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className={`text-center max-w-3xl transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <span className="inline-block font-lato text-xs font-semibold tracking-widest uppercase text-white/80 mb-4">Großhandel</span>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Für die Gastronomie</h1>
            <p className="font-lato text-lg md:text-xl text-white/90">Verlässliche Qualität und Lieferung für Wiens beste Restaurants</p>
          </div>
        </div>
      </div>

      <section className="section-container section-padding bg-white">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-graphite mb-6">Unser Versprechen</h2>
          <p className="font-lato text-graphite/70 leading-relaxed">Als verlässlicher Partner der Wiener Gastronomie bieten wir Ihnen nicht nur erstklassige Produkte, sondern einen umfassenden Service.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-8 glass-card rounded-2xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 bg-adria/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-adria group-hover:text-white transition-all duration-300">
                <benefit.icon className="w-7 h-7 text-adria group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-graphite mb-3">{benefit.title}</h3>
              <p className="font-lato text-sm text-graphite/70 leading-relaxed font-light">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container section-padding bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-graphite mb-6">Produktkatalog</h2>
            <p className="font-lato text-graphite/70 leading-relaxed mb-6">Unser umfangreicher Katalog umfasst alle Fisch- und Meeresfrüchte-Sorten, die wir für Sie beschaffen können.</p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3"><Check className="w-5 h-5 text-adria flex-shrink-0" /><span className="font-lato text-graphite">Über 100 verschiedene Produkte</span></div>
              <div className="flex items-center gap-3"><Check className="w-5 h-5 text-adria flex-shrink-0" /><span className="font-lato text-graphite">Wochenaktionen und Saison-Specials</span></div>
              <div className="flex items-center gap-3"><Check className="w-5 h-5 text-adria flex-shrink-0" /><span className="font-lato text-graphite">Preise auf Anfrage</span></div>
            </div>
            <a href="/images/PDF_ONLINE_katalog 2025_c.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 btn-primary"><FileText size={18} />Katalog herunterladen</a>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-6"><FileText className="w-16 h-16 text-adria/30" /></div>
            <h3 className="font-playfair text-xl font-semibold text-graphite mb-2">Gastro Fisch Brač Katalog 2025</h3>
            <p className="font-lato text-sm text-graphite/60 mb-4">PDF • 5.2 MB • 48 Seiten</p>
            <p className="font-lato text-sm text-graphite/70">Unser aktueller Katalog mit allen Produkten.</p>
          </div>
        </div>
      </section>

      <section className="section-container section-padding bg-white">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-graphite mb-6">So funktioniert es</h2>
          <p className="font-lato text-graphite/70">In drei einfachen Schritten zu Ihrer Lieferung</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="relative text-center">
              <div className="w-16 h-16 bg-adria rounded-full flex items-center justify-center mx-auto mb-6"><span className="font-playfair text-xl font-bold text-white">{step.number}</span></div>
              <h3 className="font-playfair text-xl font-semibold text-graphite mb-3">{step.title}</h3>
              <p className="font-lato text-graphite/70 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GrosshandelPage;
