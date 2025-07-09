import { useEffect, useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { getAlcoholicCocktails } from '../services/adapterCocktailDB';
import CocktailCard from '../components/CocktailCard';
import type { BaseCocktail } from '../data/fakeCocktails';

const Cocktails = () => {
  const [cocktails, setCocktails] = useState<BaseCocktail[]>([]);

  useEffect(() => {
    const fetchCocktails = async () => {
      const data = await getAlcoholicCocktails();
      setCocktails(data || []);
    };

    fetchCocktails();
  }, []);

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