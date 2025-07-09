import { ShoppingCart } from "lucide-react";
import { useBasketStore } from "../store/basketStore";

const Header = () => {
  const { toggleBasket, getTotalItems } = useBasketStore();

  return (
      <header className="bg-sand-50 border-b-2 border-sand-200 shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            {/* Logo/Brand */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-turquoise-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl font-bold">🍹</span>
              </div>
              <div>
                <h1 className="font-[theme(font-title)] text-3xl text-turquoise-700 font-bold">
                  Blue Lagoon Bar
                </h1>
                <p className="text-sand-600 text-sm">
                  Cocktails de plage authentiques
                </p>
              </div>
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-sand-700 hover:text-turquoise-600 font-medium transition-colors">
                Accueil
              </a>
              <a href="/cocktails" className="text-sand-700 hover:text-turquoise-600 font-medium transition-colors">
                Cocktails
              </a>
              <a href="/about" className="text-sand-700 hover:text-turquoise-600 font-medium transition-colors">
                À propos
              </a>
            </nav>
            
            {/* Basket button */}
            <button
              onClick={toggleBasket}
              className="relative bg-coral-500 hover:bg-coral-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2 shadow-md"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="font-medium">Panier</span>
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-sunset-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>
  )
}
export default Header
