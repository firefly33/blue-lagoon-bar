import {useEffect, useState} from 'react';
import {Clock, Plus, Sparkles, Users} from 'lucide-react';
import {getRandomCocktail} from './services/cocktailAdapter';
import {useBasketStore} from './store/basketStore';
import type {Cocktail} from './data/fakeCocktails';

function App() {
  const [cocktail, setCocktail] = useState<Cocktail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const {addItem} = useBasketStore();

  useEffect(() => {
    const fetchRandomCocktail = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getRandomCocktail();
        setCocktail(data || null);
      } catch (err) {
        setError('Erreur lors du chargement du cocktail du jour');
        console.error('Error fetching random cocktail:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRandomCocktail();
  }, []);

  const handleAddToBasket = () => {
    if (cocktail) {
      addItem({
        id: cocktail.id!,
        name: cocktail.name,
        thumbnail: cocktail.picture
      });
    }
  };

  if (loading) {
    return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-turquoise-600 mx-auto mb-4"></div>
            <p className="text-sand-600">Chargement du cocktail du jour...</p>
          </div>
        </div>
    );
  }

  if (error || !cocktail) {
    return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <p className="text-red-600 text-lg mb-4">❌ {error}</p>
            <button
                onClick={() => window.location.reload()}
                className="bg-turquoise-600 text-white px-4 py-2 rounded-lg hover:bg-turquoise-700 transition-colors"
            >
              Réessayer
            </button>
          </div>
        </div>
    );
  }

  return (
      <div className="min-h-screen flex items-center justify-center py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Title */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Sparkles className="w-8 h-8 text-sunset-500"/>
              <h1 className="text-4xl font-bold text-sand-800">Cocktail du Jour</h1>
              <Sparkles className="w-8 h-8 text-sunset-500"/>
            </div>
            <p className="text-sand-600 text-lg">
              Découvrez notre sélection spéciale du jour
            </p>
          </div>

          {/* Main content */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-sand-200">
            <div className="md:flex">
              {/* Image */}
              <div className="md:w-1/2">
                <img
                    src={cocktail.picture}
                    alt={cocktail.name}
                    className="w-full h-64 md:h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="md:w-1/2 p-8">
                {/* Header */}
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-sand-800 mb-2">
                    {cocktail.name}
                  </h2>
                  <div className="flex items-center space-x-4 text-sm text-sand-600">
                  <span className="bg-sand-100 px-3 py-1 rounded-full">
                    {cocktail.category}
                  </span>
                    <span className={`px-3 py-1 rounded-full ${
                        cocktail.hasAlchool ? 'bg-coral-100 text-coral-700' : 'bg-palm-100 text-palm-700'
                    }`}>
                    {cocktail.hasAlchool ? 'Alcoolisé' : 'Sans alcool'}
                  </span>
                  </div>
                </div>

                {/* Ingredients */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-sand-800 mb-3">
                    Ingrédients
                  </h3>
                  <div className="space-y-2">
                    {cocktail.ingredients?.map((ingredient, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b border-sand-100 last:border-b-0">
                          <span className="text-sand-700">{ingredient.name}</span>
                          <span className="text-sand-500 text-sm font-medium">
                        {ingredient.measure || 'Au goût'}
                      </span>
                        </div>
                    ))}
                  </div>
                </div>

                {/* Instructions */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-sand-800 mb-3">
                    Préparation
                  </h3>
                  <p className="text-sand-700 leading-relaxed">
                    {cocktail.instructions}
                  </p>
                </div>

                {/* Info & Action */}
                <div className="flex items-center justify-between pt-4 border-t border-sand-200">
                  <div className="flex items-center space-x-4 text-sand-600">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4"/>
                      <span className="text-sm">1 personne</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4"/>
                      <span className="text-sm">5 min</span>
                    </div>
                  </div>

                  <button
                      onClick={handleAddToBasket}
                      className="bg-coral-500 hover:bg-coral-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2 shadow-md"
                  >
                    <Plus className="w-4 h-4"/>
                    <span>Ajouter au panier</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App
