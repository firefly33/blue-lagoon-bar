import type {BaseCocktail, Cocktail} from "../data/fakeCocktails.ts";

const THE_COCKTAIL_DB_URL = "https://www.thecocktaildb.com";


// Types
export interface Drink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strCategory?: string;
  strInstructions: string;
  strAlcoholic?: string;
  strIngredient1?: string;
  strIngredient2?: string;
  strIngredient3?: string;
  strIngredient4?: string;
  strIngredient5?: string;
  strIngredient6?: string;
  strMeasure1?: string;
  strMeasure2?: string;
  strMeasure3?: string;
  strMeasure4?: string;
  strMeasure5?: string;
  strMeasure6?: string;
}


export async function getCocktailById(id: string) {
  try {
    const response = await fetch(`${THE_COCKTAIL_DB_URL}/api/json/v1/1/lookup.php?i=${id}`);
    const {drinks} = await response.json() as { drinks: Drink[]; }
    return drinks.map(d => {
      // Extract all ingredients and measures
      const ingredients = [];
      for (let i = 1; i <= 6; i++) {
        const ingredient = d[`strIngredient${i}` as keyof Drink] as string;
        const measure = d[`strMeasure${i}` as keyof Drink] as string;
        if (ingredient && ingredient.trim()) {
          ingredients.push({
            name: ingredient.trim(),
            measure: measure?.trim() || undefined
          });
        }
      }

      return {
        id: d.idDrink,
        name: d.strDrink,
        category: d.strCategory,
        instructions: d.strInstructions,
        picture: d.strDrinkThumb,
        hasAlchool: d.strAlcoholic === "Alcoholic",
        ingredients
      };
    })[0] as Cocktail;
  } catch (e) {
    console.error(e);
  }
}


export async function getCocktailByIngredientName(ingredientName: string) {
  try {
    const response = await fetch(`${THE_COCKTAIL_DB_URL}/api/json/v1/1/filter.php?i=${ingredientName}`, {
      method: 'GET',
    });

    const {drinks} = await response.json() as { drinks: { idDrink: string; strDrink: string; strDrinkThumb: string; }[]; }

    return drinks.map(d => ({
      name: d.strDrink,
      thumbnail: d.strDrinkThumb,
      id: d.idDrink
    })) as BaseCocktail[];
  } catch (e) {
    console.error(e);
  }
}

export async function getAlcoholicCocktails() {
  try {
    const response = await fetch(`${THE_COCKTAIL_DB_URL}/api/json/v1/1/filter.php?a=Alcoholic`, {
      method: 'GET',
    });

    const {drinks} = await response.json() as { drinks: { idDrink: string; strDrink: string; strDrinkThumb: string; }[]; }

    return drinks.map(d => ({
      name: d.strDrink,
      thumbnail: d.strDrinkThumb,
      id: d.idDrink
    })) as BaseCocktail[];
  } catch (e) {
    console.error(e);
    return [];
  }
}
