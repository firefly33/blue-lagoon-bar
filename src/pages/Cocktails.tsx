import { useEffect, useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { getAlcoholicCocktails } from '../services/adapterCocktailDB';
import CocktailCard from '../components/CocktailCard';
import type { BaseCocktail } from '../data/fakeCocktails';

const Cocktails = () => {
  const [cocktails, setCocktails] = useState<BaseCocktail[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCocktails = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getAlcoholicCocktails();
        setCocktails(data || []);
      } catch (err) {
        setError('Erreur lors du chargement des cocktails');
        console.error('Error fetching cocktails:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCocktails();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-turquoise-600 mx-auto mb-4"></div>
            <p className="text-sand-600">Chargement des cocktails...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <p className="text-red-600 text-lg mb-2">❌ {error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="bg-turquoise-600 text-white px-4 py-2 rounded-lg hover:bg-turquoise-700 transition-colors"
            >
              Réessayer
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-sand-800 mb-2">
          Cocktails Alcoolisés
        </h1>
        <p className="text-sand-600">
          Découvrez notre sélection de {cocktails.length} cocktails alcoolisés
        </p>
      </div>

      {/* Cocktails Grid */}
      {cocktails.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {cocktails.map((cocktail) => (
            <CocktailCard key={cocktail.id} cocktail={cocktail} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <ShoppingCart className="w-16 h-16 text-sand-300 mx-auto mb-4" />
          <p className="text-sand-600 text-lg">Aucun cocktail trouvé</p>
        </div>
      )}
    </div>
  );
};

export default Cocktails;