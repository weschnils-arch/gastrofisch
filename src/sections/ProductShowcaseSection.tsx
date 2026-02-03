import { useEffect, useRef, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface Product { id: string; name: string; illustration: string; description: string; features: string[]; season?: string; }

const products: Product[] = [
  { id: 'seeteufel', name: 'Seeteufel', illustration: '/images/illustrations/seeteufel.png', description: 'Der Seeteufel ist ein geschätzter Speisefisch mit festem, weißem Fleisch.', features: ['Wildfang aus der Adria', 'Festes, weißes Fleisch', 'Milder Geschmack'], season: 'Ganzjährig' },
  { id: 'scampi', name: 'Scampi', illustration: '/images/illustrations/scampi.png', description: 'Unsere Scampi stammen aus kroatischem Wildfang.', features: ['Kroatischer Wildfang', 'Festes Fleisch', 'Delikater Geschmack'], season: 'März - November' },
  { id: 'oktopus', name: 'Oktopus', illustration: '/images/illustrations/oktopus.png', description: 'Frischer Oktopus aus der Adria.', features: ['Frisch aus der Adria', 'Zartes Fleisch', 'Mediterraner Geschmack'], season: 'Ganzjährig' },
  { id: 'thunfisch', name: 'Blauflossenthunfisch', illustration: '/images/illustrations/thunfisch.png', description: 'Der Adriatische Blauflossenthunfisch wird international geschätzt.', features: ['Adriatische Zucht', 'Spitzenqualität', 'Reich an Omega-3'], season: 'Ganzjährig' },
  { id: 'garnele', name: 'Garnele', illustration: '/images/illustrations/garnele.png', description: 'Kroatische Garnelen aus Wildfang – das Original seit 1990.', features: ['Kroatischer Wildfang', 'Das Original seit 1990', 'Süß und zart'], season: 'März - November' },
  { id: 'goldbrasse', name: 'Goldbrasse', illustration: '/images/illustrations/goldbrasse.png', description: 'Die Goldbrasse ist ein Klassiker der mediterranen Küche.', features: ['Mediterraner Klassiker', 'Feines Fleisch', 'Ideal für den Grill'], season: 'Ganzjährig' },
  { id: 'seehecht', name: 'Seehecht', illustration: '/images/illustrations/seehecht.png', description: 'Der Seehecht bietet festes, weißes Fleisch.', features: ['Festes Fleisch', 'Nussiger Geschmack', 'Vielseitig einsetzbar'], season: 'Ganzjährig' },
  { id: 'sepia', name: 'Sepia', illustration: '/images/illustrations/sepia.png', description: 'Frische Sepia aus der Adria.', features: ['Frisch aus der Adria', 'Mediterrane Delikatesse'], season: 'Ganzjährig' },
];

const ProductShowcaseSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(products.length).fill(false));
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        products.forEach((_, index) => {
          setTimeout(() => {
            setVisibleCards(prev => { const newState = [...prev]; newState[index] = true; return newState; });
          }, index * 100);
        });
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-container section-padding bg-white">
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
        <h2 className={`font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold text-adria mb-6 transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Eine Auswahl unserer Qualität</h2>
        <p className={`font-lato text-base md:text-lg text-graphite leading-relaxed transition-all duration-600 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Von Wildfang bis zur Zucht – jedes Produkt erzählt seine eigene Geschichte.</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
        {products.map((product, index) => (
          <div key={product.id} onClick={() => setSelectedProduct(product)} className={`group relative bg-gray-50 rounded-xl p-4 md:p-6 cursor-pointer transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="aspect-square flex items-center justify-center mb-4">
              <img src={product.illustration} alt={product.name} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" />
            </div>
            <h3 className="font-playfair text-base md:text-lg font-semibold text-graphite text-center group-hover:text-adria transition-colors duration-300">{product.name}</h3>
          </div>
        ))}
      </div>
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden">
          {selectedProduct && (
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-gray-50 p-8 flex items-center justify-center">
                <img src={selectedProduct.illustration} alt={selectedProduct.name} className="w-full max-w-[200px] h-auto object-contain" />
              </div>
              <div className="p-6 md:p-8">
                <DialogHeader><DialogTitle className="font-playfair text-2xl md:text-3xl font-semibold text-adria mb-4">{selectedProduct.name}</DialogTitle></DialogHeader>
                <p className="font-lato text-graphite/80 leading-relaxed mb-6">{selectedProduct.description}</p>
                <div className="space-y-3 mb-6">
                  <h4 className="font-lato text-sm font-semibold text-graphite uppercase tracking-wider">Eigenschaften</h4>
                  <ul className="space-y-2">
                    {selectedProduct.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 font-lato text-sm text-graphite/70"><span className="w-1.5 h-1.5 rounded-full bg-adria flex-shrink-0" />{feature}</li>
                    ))}
                  </ul>
                </div>
                {selectedProduct.season && (<div className="pt-4 border-t border-gray-100"><p className="font-lato text-sm text-graphite/60"><span className="font-medium">Saison:</span> {selectedProduct.season}</p></div>)}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProductShowcaseSection;
