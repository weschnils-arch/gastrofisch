import { useEffect, useRef, useState } from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const EinzelhandelPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
    }, { threshold: 0.2 });
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      <div ref={heroRef} className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-bottom" style={{ backgroundImage: 'url(/images/retail/zollergasse.webp)' }} />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className={`text-center max-w-3xl pt-24 md:pt-32 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <span className="inline-block font-lato text-xs font-semibold tracking-widest uppercase text-white/80 mb-4">Einzelhandel</span>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Unsere Boutique</h1>
            <p className="font-lato text-lg md:text-xl text-white/90">Erlesener Fisch und Meeresfrüchte für anspruchsvolle Genießer</p>
          </div>
        </div>
      </div>

      <section className="section-container section-padding bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-6">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-graphite">Das Boutique-Erlebnis</h2>
            <div className="space-y-4 font-lato text-graphite/80 leading-relaxed">
              <p>In unserer Boutique in der Zollergasse 19 im Herzen von Wien-Neubau bieten wir Ihnen ein einzigartiges Einkaufserlebnis. Bei uns finden Sie eine sorgfältig ausgewählte Auswahl an frischem Fisch und Meeresfrüchten aus der Adria.</p>
              <p>Unser geschultes Personal berät Sie gerne bei der Auswahl und Zubereitung.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <div className="p-4 glass-card rounded-lg border-adria/10"><h3 className="font-playfair text-lg font-semibold text-adria mb-2">Tagesfrisch</h3><p className="font-lato text-sm text-graphite/70">Unsere Produkte kommen direkt von den Fischern in Kroatien zu uns nach Wien.</p></div>
              <div className="p-4 glass-card rounded-lg border-adria/10"><h3 className="font-playfair text-lg font-semibold text-adria mb-2">Beratung</h3><p className="font-lato text-sm text-graphite/70">Unser Team steht Ihnen mit Rat und Tat zur Seite.</p></div>
              <div className="p-4 glass-card rounded-lg border-adria/10"><h3 className="font-playfair text-lg font-semibold text-adria mb-2">Qualität</h3><p className="font-lato text-sm text-graphite/70">Wir garantieren höchste Qualitätsstandards.</p></div>
              <div className="p-4 glass-card rounded-lg border-adria/10"><h3 className="font-playfair text-lg font-semibold text-adria mb-2">Tradition</h3><p className="font-lato text-sm text-graphite/70">Familiengeführt seit 1990 mit Liebe zum Handwerk.</p></div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="glass-card rounded-xl border border-adria/10 p-6 md:p-8 bg-adria/5">
              <h3 className="font-playfair text-xl font-semibold text-adria mb-4">Unser Bistro-Tipp</h3>
              <p className="font-lato text-graphite/80 leading-relaxed mb-6">Genießen Sie unsere tagesfrischen Fänge direkt vor Ort. Unser Bistro ist das perfekte „Lunch Add-On“ zu Ihrem Einkauf – einfach, ehrlich und von höchster Qualität.</p>
              <a
                href="https://booking.zenchef.com/en-us/restaurant/354457/gastro-fisch-brac"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 w-full justify-center"
              >
                Tisch reservieren
              </a>
            </div>

            <div className="glass-card rounded-xl p-6 md:p-8 shadow-2xl">
              <h3 className="font-playfair text-xl font-semibold text-graphite mb-6">Kontakt & Öffnungszeiten</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4"><MapPin className="w-5 h-5 text-adria mt-0.5 flex-shrink-0" /><div><p className="font-lato font-medium text-graphite">Gastro Fisch Brač</p><p className="font-lato text-graphite/70">Zollergasse 19</p><p className="font-lato text-graphite/70">1070 Wien</p></div></div>
                <div className="flex items-start gap-4"><Clock className="w-5 h-5 text-adria mt-0.5 flex-shrink-0" /><div><p className="font-lato font-medium text-graphite">Öffnungszeiten</p><p className="font-lato text-graphite/70">Mo–Fr: 9:00 – 18:00 Uhr</p><p className="font-lato text-graphite/70">Sa: 9:00 – 14:00 Uhr</p></div></div>
                <div className="flex items-center gap-4"><Phone className="w-5 h-5 text-adria flex-shrink-0" /><a href="tel:+4311234567" className="font-lato text-graphite hover:text-adria transition-colors">+43 1 123 4567</a></div>
                <div className="flex items-center gap-4"><Mail className="w-5 h-5 text-adria flex-shrink-0" /><a href="mailto:info@gastrofischbrac.at" className="font-lato text-graphite hover:text-adria transition-colors">info@gastrofischbrac.at</a></div>
              </div>
            </div>
            <div className="glass-card bg-gray-100/30 backdrop-blur-sm rounded-xl overflow-hidden h-[250px] flex items-center justify-center border-white/40">
              <div className="text-center"><MapPin className="w-12 h-12 text-adria/30 mx-auto mb-3" /><p className="font-lato text-graphite/50 text-sm">Google Maps Integration</p><p className="font-lato text-graphite/70 font-medium">Zollergasse 19, 1070 Wien</p></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EinzelhandelPage;
