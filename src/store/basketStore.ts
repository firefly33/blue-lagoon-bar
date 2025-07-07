import { create } from 'zustand'
import type { BaseCocktail } from '../data/fakeCocktails'

interface BasketItem extends BaseCocktail {
  quantity: number
}

interface BasketState {
  items: BasketItem[]
  isOpen: boolean
  addItem: (cocktail: BaseCocktail) => void
  removeItem: (cocktailId: string) => void
  updateQuantity: (cocktailId: string, quantity: number) => void
  clearBasket: () => void
  toggleBasket: () => void
  getTotalItems: () => number
}

export const useBasketStore = create<BasketState>()((set, get) => ({
  items: [],
  isOpen: false,
  
  addItem: (cocktail) => set((state) => {
    const existingItem = state.items.find(item => item.id === cocktail.id)
    if (existingItem) {
      return {
        items: state.items.map(item =>
          item.id === cocktail.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
    }
    return {
      items: [...state.items, { ...cocktail, quantity: 1 }]
    }
  }),
  
  removeItem: (cocktailId) => set((state) => ({
    items: state.items.filter(item => item.id !== cocktailId)
  })),
  
  updateQuantity: (cocktailId, quantity) => set((state) => ({
    items: quantity <= 0 
      ? state.items.filter(item => item.id !== cocktailId)
      : state.items.map(item =>
          item.id === cocktailId 
            ? { ...item, quantity }
            : item
        )
  })),
  
  clearBasket: () => set({ items: [] }),
  
  toggleBasket: () => set((state) => ({ isOpen: !state.isOpen })),
  
  getTotalItems: () => {
    const { items } = get()
    return items.reduce((total, item) => total + item.quantity, 0)
  }
}))