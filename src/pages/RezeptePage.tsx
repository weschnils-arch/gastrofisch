import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Clock, Users, ChefHat, Search, Share2, Plus, Minus, CheckCircle2 } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { recipes, type Recipe } from '@/data/recipes';

const categories = [
  { id: 'alle', label: 'Alle Rezepte' },
  { id: 'fisch', label: 'Fisch' },
  { id: 'meeresfruechte', label: 'Meeresfrüchte' },
  { id: 'vorspeisen', label: 'Vorspeisen' },
  { id: 'hauptgerichte', label: 'Hauptgerichte' },
];

const RezeptePage = () => {
  const [searchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('alle');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [portionCount, setPortionCount] = useState(4);
  const [showCopyFeedback, setShowCopyFeedback] = useState(false);

  useEffect(() => {
    const recipeId = searchParams.get('recipe');
    if (recipeId) {
      const recipe = recipes.find(r => r.id === recipeId);
      if (recipe) setSelectedRecipe(recipe);
    }
  }, [searchParams]);

  useEffect(() => {
    if (selectedRecipe) {
      setPortionCount(selectedRecipe.servings);
    }
  }, [selectedRecipe]);

  const adjustIngredient = (ingredient: string, originalServings: number, targetServings: number) => {
    const ratio = targetServings / originalServings;
    return ingredient.replace(/(\d+(?:[.,]\d+)?)/g, (match) => {
      const value = parseFloat(match.replace(',', '.'));
      const adjustedValue = value * ratio;
      return adjustedValue % 1 === 0 ? adjustedValue.toString() : adjustedValue.toFixed(1).replace('.', ',');
    });
  };

  const handleCopyLink = () => {
    const url = `${window.location.origin}${window.location.pathname}?recipe=${selectedRecipe?.id}`;
    navigator.clipboard.writeText(url).then(() => {
      setShowCopyFeedback(true);
      setTimeout(() => setShowCopyFeedback(false), 2000);
    });
  };

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesCategory = activeCategory === 'alle' || recipe.category === activeCategory;
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Einfach': return 'bg-green-100 text-green-700';
      case 'Mittel': return 'bg-orange-100 text-orange-700';
      case 'Anspruchsvoll': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden mb-12 md:mb-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/Adria_Kroatien.jpg)' }} />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="text-center max-w-3xl pt-24 md:pt-32">
            <span className="inline-block font-lato text-[10px] font-bold tracking-[0.25em] uppercase text-white/80 mb-4">Kulinarik</span>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Rezepte aus der Adria</h1>
            <p className="font-lato text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">Entdecken Sie die Geheimnisse der mediterranen Küche. Von herzhaften Klassikern bis hin zu leichten Meeresfrüchte-Gerichten.</p>
          </div>
        </div>
      </div>

      <section className="section-container pb-20">

        <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12">
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            {categories.map((cat) => (
              <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2.5 rounded-full font-lato text-xs font-bold uppercase tracking-wider transition-all duration-300 ${activeCategory === cat.id ? 'bg-adria text-white shadow-lg' : 'bg-white text-graphite/60 hover:bg-gray-100'}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-graphite/30" />
            <input type="text" placeholder="Rezept suchen..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border-none rounded-full py-3 pl-12 pr-6 font-lato text-sm focus:ring-2 focus:ring-adria/20 transition-all shadow-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe) => (
            <div key={recipe.id} onClick={() => setSelectedRecipe(recipe)} className="group glass-card rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full p-2 shadow-lg border border-white/20 transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">
                  <img src={recipe.illustration} alt="Illustration" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-graphite mb-2 group-hover:text-adria transition-colors">{recipe.title}</h3>
                <p className="font-lato text-sm text-graphite/70 mb-4 line-clamp-2">{recipe.description}</p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1.5 text-graphite/60"><Clock className="w-4 h-4" /><span className="font-lato">{recipe.prepTime}</span></div>
                  <div className="flex items-center gap-1.5 text-graphite/60"><Users className="w-4 h-4" /><span className="font-lato">{recipe.servings} Pers.</span></div>
                  <div className="flex items-center gap-1.5 text-graphite/60 tracking-wider">
                    <span className={`font-lato text-[10px] uppercase font-bold px-3 py-1 rounded-full ${getDifficultyColor(recipe.difficulty)}`}>{recipe.difficulty}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredRecipes.length === 0 && (
          <div className="text-center py-16">
            <ChefHat className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="font-playfair text-xl font-semibold text-graphite mb-2">Keine Rezepte gefunden</h3>
            <p className="font-lato text-graphite/60">Versuchen Sie es mit einer anderen Suche.</p>
          </div>
        )}
      </section>

      <Dialog open={!!selectedRecipe} onOpenChange={() => setSelectedRecipe(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-white max-h-[90vh] overflow-y-auto">
          {selectedRecipe && (
            <div className="flex flex-col">
              <div className="relative h-[300px] md:h-[400px]">
                <img src={selectedRecipe.image} alt={selectedRecipe.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-4">{selectedRecipe.title}</h2>
                  <div className="flex flex-wrap items-center gap-6">
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2 font-lato text-sm font-medium"><Clock className="w-4 h-4" />{selectedRecipe.prepTime}</div>
                      <div className={`font-lato text-[10px] uppercase font-bold px-3 py-1 rounded-full bg-white text-adria`}>{selectedRecipe.difficulty}</div>
                    </div>
                    <button
                      onClick={handleCopyLink}
                      className="flex items-center gap-2 bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all px-4 py-2 rounded-lg text-sm font-medium border border-white/20"
                    >
                      {showCopyFeedback ? <CheckCircle2 className="w-4 h-4 text-green-400" /> : <Share2 className="w-4 h-4" />}
                      {showCopyFeedback ? 'Link kopiert!' : 'Rezept teilen'}
                    </button>
                  </div>
                </div>
                <div className="absolute top-8 right-8 w-24 h-24 bg-white/90 backdrop-blur-md rounded-full p-4 shadow-2xl border border-white/20 transform -rotate-12 hidden md:block">
                  <img src={selectedRecipe.illustration} alt="Illustration" className="w-full h-full object-contain" />
                </div>
              </div>

              <div className="p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 md:gap-20">
                  <div className="lg:col-span-1">
                    <div className="flex flex-col gap-4 mb-6 border-b border-adria/10 pb-4">
                      <h3 className="font-playfair text-2xl font-semibold text-adria whitespace-nowrap">Zutaten</h3>
                      <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1 border border-gray-100 self-start">
                        <button
                          onClick={() => setPortionCount(Math.max(1, portionCount - 1))}
                          className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-white hover:shadow-sm transition-all text-graphite"
                        >
                          <Minus size={14} />
                        </button>
                        <div className="flex items-center gap-1.5 px-1 min-w-[3rem] justify-center text-graphite">
                          <span className="font-playfair text-lg font-bold text-adria">{portionCount}</span>
                          <span className="text-[10px] font-lato text-graphite/40 uppercase font-bold">Pers.</span>
                        </div>
                        <button
                          onClick={() => setPortionCount(portionCount + 1)}
                          className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-white hover:shadow-sm transition-all text-graphite"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                    <ul className="space-y-4">
                      {selectedRecipe.ingredients.map((ingredient, i) => (
                        <li key={i} className="flex items-start gap-3 font-lato text-graphite/80 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-adria mt-2 flex-shrink-0" />
                          {adjustIngredient(ingredient, selectedRecipe.servings, portionCount)}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:col-span-2">
                    <h3 className="font-playfair text-2xl font-semibold text-adria mb-6 border-b border-adria/10 pb-4">Zubereitung</h3>
                    <div className="space-y-8">
                      {selectedRecipe.instructions.map((step, i) => (
                        <div key={i} className="flex gap-6 group">
                          <span className="font-playfair text-4xl font-bold text-adria/10 group-hover:text-adria/20 transition-colors shrink-0">{(i + 1).toString().padStart(2, '0')}</span>
                          <p className="font-lato text-graphite/80 leading-relaxed pt-2">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <section className="bg-gray-50/50 py-24 md:py-32 overflow-hidden border-t border-gray-100">
        <div className="section-container">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold text-adria mb-6">Meeresfrüchte & Fische der Adria</h2>
            <p className="font-lato text-base md:text-lg text-graphite/60 max-w-2xl mx-auto">Die Vielfalt unserer Heimat, festgehalten in feinen Illustrationen.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-16 opacity-80">
            {[
              { name: 'Seeteufel', src: '/images/illustrations/seeteufel.png' },
              { name: 'Scampi', src: '/images/illustrations/scampi.png' },
              { name: 'Oktopus', src: '/images/illustrations/oktopus.png' },
              { name: 'Thunfisch', src: '/images/illustrations/thunfisch.png' },
              { name: 'Garnele', src: '/images/illustrations/garnele.png' },
              { name: 'Goldbrasse', src: '/images/illustrations/goldbrasse.png' },
              { name: 'Seehecht', src: '/images/illustrations/seehecht.png' },
              { name: 'Sepia', src: '/images/illustrations/sepia.png' },
              { name: 'Wolfsbarsch', src: '/images/illustrations/wolfsbarsch.png' },
              { name: 'Calamari', src: '/images/illustrations/calamari.png' },
              { name: 'Miesmuscheln', src: '/images/illustrations/miesmuscheln.png' },
              { name: 'Auster', src: '/images/illustrations/auster.png' }
            ].map((fish, i) => (
              <div key={i} className="flex flex-col items-center group text-center">
                <div className="w-full aspect-square mb-4 p-4 grayscale hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110 flex items-center justify-center cursor-default">
                  <img src={fish.src} alt={fish.name} className="w-full h-full object-contain" />
                </div>
                <span className="font-lato text-[10px] uppercase font-bold tracking-[0.2em] text-graphite/40 group-hover:text-adria transition-colors">{fish.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RezeptePage;
