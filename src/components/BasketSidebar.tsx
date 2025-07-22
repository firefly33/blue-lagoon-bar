import {Minus, Plus, ShoppingCart, Trash2, X} from 'lucide-react'
import {useBasketStore} from '../store/basketStore'

const BasketSidebar = () => {
  const {items, isOpen, toggleBasket, updateQuantity, removeItem, clearBasket, getTotalItems} = useBasketStore()

  if (!isOpen) return null

  return (
      <>
        {/* Overlay */}
        <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={toggleBasket}
        />

        {/* Sidebar */}
        <div className="fixed right-0 top-0 h-full w-96 bg-white border-l border-sand-200 shadow-2xl z-50 flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-sand-200 bg-sand-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <ShoppingCart className="w-6 h-6 text-turquoise-600"/>
                <h2 className="text-xl font-bold text-sand-800">Panier</h2>
                <span className="bg-coral-500 text-white text-sm px-2 py-1 rounded-full">
                {getTotalItems()}
              </span>
              </div>
              <button
                  onClick={toggleBasket}
                  className="p-2 hover:bg-sand-200 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-sand-700"/>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center p-6">
                  <ShoppingCart className="w-16 h-16 text-sand-300 mb-4"/>
                  <p className="text-sand-700 text-lg mb-2">Votre panier est vide</p>
                  <p className="text-sand-500 text-sm">Ajoutez des cocktails pour commencer</p>
                </div>
            ) : (
                <div className="p-4 space-y-4">
                  {items.map((item) => (
                      <div
                          key={item.id}
                          className="bg-sand-50 rounded-xl p-4 border border-sand-200 hover:bg-sand-100 transition-colors"
                      >
                        <div className="flex items-start space-x-3">
                          <img
                              src={item.thumbnail}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h3 className="font-semibold text-sand-800 text-sm mb-2 line-clamp-2">
                              {item.name}
                            </h3>

                            {/* Quantity Controls */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <button
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    className="p-1 bg-sand-200 hover:bg-sand-300 rounded-full transition-colors"
                                >
                                  <Minus className="w-4 h-4 text-sand-700"/>
                                </button>
                                <span className="text-sand-800 font-medium min-w-[2rem] text-center">
                            {item.quantity}
                          </span>
                                <button
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    className="p-1 bg-sand-200 hover:bg-sand-300 rounded-full transition-colors"
                                >
                                  <Plus className="w-4 h-4 text-sand-700"/>
                                </button>
                              </div>

                              <button
                                  onClick={() => removeItem(item.id)}
                                  className="p-1 hover:bg-red-100 rounded-full transition-colors group"
                              >
                                <Trash2 className="w-4 h-4 text-red-600 group-hover:text-red-700"/>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                  ))}
                </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
              <div className="p-6 border-t border-sand-200 bg-sand-50 space-y-4">
                <div className="flex items-center justify-between text-sand-800">
                  <span className="font-medium">Total des cocktails:</span>
                  <span className="font-bold text-lg">{getTotalItems()}</span>
                </div>

                <div className="space-y-2">
                  <button className="w-full bg-turquoise-600 text-white py-3 rounded-lg font-medium hover:bg-turquoise-700 transition-colors">
                    Préparer les cocktails
                  </button>
                  <button
                      onClick={clearBasket}
                      className="w-full bg-red-100 text-red-600 py-2 rounded-lg font-medium hover:bg-red-200 transition-colors"
                  >
                    Vider le panier
                  </button>
                </div>
              </div>
          )}
        </div>
      </>
  )
}

export default BasketSidebar
