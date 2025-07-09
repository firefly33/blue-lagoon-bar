import { Plus } from 'lucide-react';
import { useBasketStore } from '../store/basketStore';
import type { BaseCocktail } from '../data/fakeCocktails';

interface CocktailCardProps {
  cocktail: BaseCocktail;
}

const CocktailCard = ({ cocktail }: CocktailCardProps) => {
  const { addItem } = useBasketStore();

  const handleAddToBasket = () => {
    addItem(cocktail);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-sand-200">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={cocktail.thumbnail} 
          alt={cocktail.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-sand-800 text-lg mb-3 line-clamp-2 min-h-[3.5rem]">
          {cocktail.name}
        </h3>
        
        {/* Add to basket button */}
        <button
          onClick={handleAddToBasket}
          className="w-full bg-coral-500 hover:bg-coral-600 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Ajouter au panier</span>
        </button>
      </div>
    </div>
  );
};

export default CocktailCard;