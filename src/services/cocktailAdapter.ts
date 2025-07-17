import type { BaseCocktail, Cocktail } from "../data/fakeCocktails.ts";

// Check environment variable to determine which adapter to use
const USE_ONLINE_API = import.meta.env.VITE_USE_ONLINE_API === 'true';

// Dynamically import the appropriate adapter
const adapterPromise = USE_ONLINE_API 
  ? import('./adapterCocktailDB')
  : import('./adapterCocktailOffline');

// Create unified functions that route to the correct adapter
export async function getCocktailById(id: string): Promise<Cocktail | undefined> {
  const adapter = await adapterPromise;
  return adapter.getCocktailById(id);
}

export async function getCocktailByIngredientName(ingredientName: string): Promise<BaseCocktail[] | undefined> {
  const adapter = await adapterPromise;
  return adapter.getCocktailByIngredientName(ingredientName);
}

export async function getAlcoholicCocktails(): Promise<BaseCocktail[]> {
  const adapter = await adapterPromise;
  return adapter.getAlcoholicCocktails();
}

export async function getRandomCocktail(): Promise<Cocktail | undefined> {
  const adapter = await adapterPromise;
  return adapter.getRandomCocktail();
}

// Additional utility functions (available in offline mode)
export async function getNonAlcoholicCocktails(): Promise<BaseCocktail[]> {
  const adapter = await adapterPromise;
  
  // If online adapter, fallback to empty array or implement logic
  if (USE_ONLINE_API) {
    // For online mode, you could implement a filter API call here
    // For now, return empty array
    return [];
  }
  
  // Cast to offline adapter type to access additional methods
  return (adapter as typeof import('./adapterCocktailOffline')).getNonAlcoholicCocktails();
}

export async function getAllCocktails(): Promise<BaseCocktail[]> {
  const adapter = await adapterPromise;
  
  if (USE_ONLINE_API) {
    // For online mode, you could implement a get all API call here
    // For now, return empty array
    return [];
  }
  
  return (adapter as typeof import('./adapterCocktailOffline')).getAllCocktails();
}

export async function searchCocktailsByName(name: string): Promise<BaseCocktail[]> {
  const adapter = await adapterPromise;
  
  if (USE_ONLINE_API) {
    // For online mode, you could implement a search API call here
    // For now, return empty array
    return [];
  }
  
  return (adapter as typeof import('./adapterCocktailOffline')).searchCocktailsByName(name);
}

// Export the current mode for debugging/info purposes
export const getCurrentMode = () => USE_ONLINE_API ? 'online' : 'offline';

// Export boolean for easy checking
export const isOnlineMode = USE_ONLINE_API;
export const isOfflineMode = !USE_ONLINE_API;