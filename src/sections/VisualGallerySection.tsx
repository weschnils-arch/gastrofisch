import { useEffect, useRef, useState } from 'react';

const galleryImages = [
    { src: '/images/gallery/boat.jpg', alt: 'Fischerboot auf der Adria', title: 'Unsere Flotte' },
    { src: '/images/gallery/production.jpg', alt: 'Produktion in Kroatien', title: 'Präzise Verarbeitung' },
    { src: '/images/gallery/display.jpg', alt: 'Fischvitrine', title: 'Tagesfrische Auswahl' },
    { src: '/images/gallery/fisherman.jpg', alt: 'Fischer bei der Arbeit', title: 'Echtes Handwerk' },
    { src: '/images/gallery/truck.jpg', alt: 'Lieferwagen', title: 'Frischegarantie' },
    { src: '/images/gallery/seagull.jpg', alt: 'Möwe vor der Adria', title: 'Heimat Adria' },
];

const VisualGallerySection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
        }, { threshold: 0.1 });
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="section-container section-padding bg-gray-50 overflow-hidden">
            <div className="text-center mb-16">
                <h2 className={`font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold text-adria mb-4 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>Impressionen</h2>
                <p className={`font-lato text-graphite/70 max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>Ein Blick hinter die Kulissen – vom Fang bis in unsere Boutique.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {galleryImages.map((img, i) => (
                    <div key={i} className={`group relative aspect-square overflow-hidden rounded-xl bg-white shadow-xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: `${i * 100}ms` }}>
                        <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-deepblue/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-4">
                            <span className="text-white font-playfair text-lg md:text-xl font-semibold border-b border-white/40 pb-2">{img.title}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default VisualGallerySection;
