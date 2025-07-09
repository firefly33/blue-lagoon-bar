import { Plus, Eye } from 'lucide-react';
import { useBasketStore } from '../store/basketStore';
import { useNavigate } from 'react-router';
import type { BaseCocktail } from '../data/fakeCocktails';

interface CocktailCardProps {
  cocktail: BaseCocktail;
}

const CocktailCard = ({ cocktail }: CocktailCardProps) => {
  const { addItem } = useBasketStore();
  const navigate = useNavigate();

  const handleAddToBasket = () => {
    addItem(cocktail);
  };

  const handleViewDetails = () => {
    navigate(`/cocktails/${cocktail.id}`);
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
        
        {/* Action buttons */}
        <div className="space-y-2">
          <button
            onClick={handleViewDetails}
            className="w-full bg-turquoise-600 hover:bg-turquoise-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <Eye className="w-4 h-4" />
            <span>Voir détails</span>
          </button>
          <button
            onClick={handleAddToBasket}
            className="w-full bg-coral-500 hover:bg-coral-600 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>Ajouter au panier</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CocktailCard;