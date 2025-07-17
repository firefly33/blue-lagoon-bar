import type {BaseCocktail, Cocktail} from "../data/fakeCocktails.ts";

// In-memory cocktail database
const offlineCocktails: Cocktail[] = [
  {
    id: "1",
    name: "Blue Lagoon",
    category: "Cocktail",
    instructions: "Versez la vodka et le curaçao bleu dans un verre highball rempli de glace. Complétez avec de la limonade et garnissez d'une cerise.",
    picture: "https://www.thecocktaildb.com/images/media/drink/5vuusr1565109432.jpg",
    hasAlchool: true,
    ingredients: [
      { name: "Vodka", measure: "4 cl" },
      { name: "Curaçao bleu", measure: "2 cl" },
      { name: "Limonade", measure: "10 cl" },
      { name: "Cerise", measure: "1 pièce" }
    ]
  },
  {
    id: "2",
    name: "Moscow Mule",
    category: "Cocktail",
    instructions: "Mélangez la vodka et le jus de citron vert dans un mug en cuivre. Ajoutez la ginger beer et garnissez d'un quartier de citron vert.",
    picture: "https://www.thecocktaildb.com/images/media/drink/3pylqc1504370988.jpg",
    hasAlchool: true,
    ingredients: [
      { name: "Vodka", measure: "4 cl" },
      { name: "Jus de citron vert", measure: "2 cl" },
      { name: "Ginger beer", measure: "12 cl" },
      { name: "Citron vert", measure: "1 quartier" }
    ]
  },
  {
    id: "3",
    name: "Cosmopolitan",
    category: "Cocktail",
    instructions: "Shakez tous les ingrédients avec de la glace et servez dans un verre à martini. Garnissez d'un zeste de citron vert.",
    picture: "https://www.thecocktaildb.com/images/media/drink/kpsajh1504368362.jpg",
    hasAlchool: true,
    ingredients: [
      { name: "Vodka", measure: "4 cl" },
      { name: "Triple sec", measure: "2 cl" },
      { name: "Jus de cranberry", measure: "3 cl" },
      { name: "Jus de citron vert", measure: "1 cl" }
    ]
  },
  {
    id: "4",
    name: "Sex on the Beach",
    category: "Cocktail",
    instructions: "Versez la vodka et le schnaps à la pêche dans un verre highball avec de la glace. Ajoutez les jus et remuez délicatement.",
    picture: "https://www.thecocktaildb.com/images/media/drink/fi67x01551782552.jpg",
    hasAlchool: true,
    ingredients: [
      { name: "Vodka", measure: "3 cl" },
      { name: "Schnaps à la pêche", measure: "3 cl" },
      { name: "Jus d'ananas", measure: "6 cl" },
      { name: "Jus de cranberry", measure: "6 cl" }
    ]
  },
  {
    id: "5",
    name: "Piña Colada",
    category: "Cocktail",
    instructions: "Mixez le rhum, la crème de coco et le jus d'ananas avec de la glace pilée. Servez dans un verre hurricane et garnissez d'ananas frais.",
    picture: "https://www.thecocktaildb.com/images/media/drink/cpf4j51504371346.jpg",
    hasAlchool: true,
    ingredients: [
      { name: "Rhum blanc", measure: "6 cl" },
      { name: "Crème de coco", measure: "4 cl" },
      { name: "Jus d'ananas", measure: "12 cl" },
      { name: "Ananas", measure: "1 tranche" }
    ]
  },
  {
    id: "6",
    name: "Mojito",
    category: "Cocktail",
    instructions: "Pilez la menthe avec le sucre et le citron vert dans un verre. Ajoutez le rhum et complétez avec de l'eau gazeuse.",
    picture: "https://www.thecocktaildb.com/images/media/drink/3z6xdi1589574603.jpg",
    hasAlchool: true,
    ingredients: [
      { name: "Rhum blanc", measure: "6 cl" },
      { name: "Menthe fraîche", measure: "10 feuilles" },
      { name: "Sucre de canne", measure: "2 c. à soupe" },
      { name: "Citron vert", measure: "1/2 citron" },
      { name: "Eau gazeuse", measure: "10 cl" }
    ]
  },
  {
    id: "7",
    name: "Daiquiri",
    category: "Cocktail",
    instructions: "Shakez le rhum, le jus de citron vert et le sirop de sucre avec de la glace. Servez dans un verre à cocktail.",
    picture: "https://www.thecocktaildb.com/images/media/drink/mrz9091589574515.jpg",
    hasAlchool: true,
    ingredients: [
      { name: "Rhum blanc", measure: "6 cl" },
      { name: "Jus de citron vert", measure: "3 cl" },
      { name: "Sirop de sucre", measure: "2 cl" }
    ]
  },
  {
    id: "8",
    name: "Mai Tai",
    category: "Cocktail",
    instructions: "Shakez tous les ingrédients avec de la glace et servez dans un verre old-fashioned. Garnissez d'ananas et de cerise.",
    picture: "https://www.thecocktaildb.com/images/media/drink/twyrrp1439907470.jpg",
    hasAlchool: true,
    ingredients: [
      { name: "Rhum ambré", measure: "3 cl" },
      { name: "Rhum blanc", measure: "3 cl" },
      { name: "Curaçao orange", measure: "1 cl" },
      { name: "Sirop d'orgeat", measure: "1 cl" },
      { name: "Jus de citron vert", measure: "2 cl" }
    ]
  },
  {
    id: "9",
    name: "Gin Tonic",
    category: "Cocktail",
    instructions: "Versez le gin dans un verre highball rempli de glace. Complétez avec du tonic et garnissez d'une tranche de citron.",
    picture: "https://www.thecocktaildb.com/images/media/drink/qcgz0t1643821443.jpg",
    hasAlchool: true,
    ingredients: [
      { name: "Gin", measure: "5 cl" },
      { name: "Tonic", measure: "15 cl" },
      { name: "Citron", measure: "1 tranche" }
    ]
  },
  {
    id: "10",
    name: "Martini",
    category: "Cocktail",
    instructions: "Remuez le gin et le vermouth avec de la glace dans un verre à mélange. Servez dans un verre à martini et garnissez d'une olive.",
    picture: "https://www.thecocktaildb.com/images/media/drink/6ck9yi1589574317.jpg",
    hasAlchool: true,
    ingredients: [
      { name: "Gin", measure: "6 cl" },
      { name: "Vermouth sec", measure: "1 cl" },
      { name: "Olive", measure: "1 pièce" }
    ]
  },
  {
    id: "11",
    name: "Negroni",
    category: "Cocktail",
    instructions: "Versez tous les ingrédients dans un verre old-fashioned avec de la glace. Remuez et garnissez d'une tranche d'orange.",
    picture: "https://www.thecocktaildb.com/images/media/drink/qgdu971561574065.jpg",
    hasAlchool: true,
    ingredients: [
      { name: "Gin", measure: "3 cl" },
      { name: "Campari", measure: "3 cl" },
      { name: "Vermouth rouge", measure: "3 cl" },
      { name: "Orange", measure: "1 tranche" }
    ]
  },
  {
    id: "12",
    name: "Tom Collins",
    category: "Cocktail",
    instructions: "Shakez le gin, le jus de citron et le sirop avec de la glace. Versez dans un verre Collins et complétez avec de l'eau gazeuse.",
    picture: "https://www.thecocktaildb.com/images/media/drink/vtrvtu1472669496.jpg",
    hasAlchool: true,
    ingredients: [
      { name: "Gin", measure: "5 cl" },
      { name: "Jus de citron", measure: "3 cl" },
      { name: "Sirop de sucre", measure: "2 cl" },
      { name: "Eau gazeuse", measure: "10 cl" }
    ]
  },
  {
    id: "13",
    name: "Margarita",
    category: "Cocktail",
    instructions: "Frottez le bord du verre avec du citron vert et trempez dans le sel. Shakez tous les ingrédients et servez.",
    picture: "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
    hasAlchool: true,
    ingredients: [
      { name: "Tequila", measure: "5 cl" },
      { name: "Triple sec", measure: "2 cl" },
      { name: "Jus de citron vert", measure: "3 cl" },
      { name: "Sel", measure: "Pour le bord" }
    ]
  },
  {
    id: "14",
    name: "Tequila Sunrise",
    category: "Cocktail",
    instructions: "Versez la tequila et le jus d'orange dans un verre highball avec de la glace. Ajoutez délicatement la grenadine qui coulera au fond.",
    picture: "https://www.thecocktaildb.com/images/media/drink/quqyqp1480879103.jpg",
    hasAlchool: true,
    ingredients: [
      { name: "Tequila", measure: "5 cl" },
      { name: "Jus d'orange", measure: "15 cl" },
      { name: "Grenadine", measure: "1 cl" }
    ]
  },
  {
    id: "15",
    name: "Whiskey Sour",
    category: "Cocktail",
    instructions: "Shakez le whiskey, le jus de citron et le sirop avec de la glace. Servez dans un verre à whiskey et garnissez d'une cerise.",
    picture: "https://www.thecocktaildb.com/images/media/drink/hbkfsh1589574990.jpg",
    hasAlchool: true,
    ingredients: [
      { name: "Whiskey", measure: "6 cl" },
      { name: "Jus de citron", measure: "3 cl" },
      { name: "Sirop de sucre", measure: "2 cl" },
      { name: "Cerise", measure: "1 pièce" }
    ]
  },
  {
    id: "16",
    name: "Virgin Mojito",
    category: "Non-Alcoholic",
    instructions: "Pilez la menthe avec le sucre et le citron vert dans un verre. Complétez avec de l'eau gazeuse et de la glace.",
    picture: "https://www.thecocktaildb.com/images/media/drink/3z6xdi1589574603.jpg",
    hasAlchool: false,
    ingredients: [
      { name: "Menthe fraîche", measure: "10 feuilles" },
      { name: "Sucre de canne", measure: "2 c. à soupe" },
      { name: "Citron vert", measure: "1/2 citron" },
      { name: "Eau gazeuse", measure: "20 cl" }
    ]
  },
  {
    id: "17",
    name: "Shirley Temple",
    category: "Non-Alcoholic",
    instructions: "Mélangez le ginger ale et la grenadine dans un verre avec de la glace. Garnissez d'une cerise.",
    picture: "https://www.thecocktaildb.com/images/media/drink/qlddu01493574093.jpg",
    hasAlchool: false,
    ingredients: [
      { name: "Ginger ale", measure: "20 cl" },
      { name: "Grenadine", measure: "2 cl" },
      { name: "Cerise", measure: "1 pièce" }
    ]
  },
  {
    id: "18",
    name: "Virgin Piña Colada",
    category: "Non-Alcoholic",
    instructions: "Mixez la crème de coco et le jus d'ananas avec de la glace pilée. Servez dans un verre hurricane et garnissez d'ananas frais.",
    picture: "https://www.thecocktaildb.com/images/media/drink/cpf4j51504371346.jpg",
    hasAlchool: false,
    ingredients: [
      { name: "Crème de coco", measure: "4 cl" },
      { name: "Jus d'ananas", measure: "12 cl" },
      { name: "Ananas", measure: "1 tranche" }
    ]
  }
];

// Simulate API delay for realistic testing
const simulateDelay = (ms: number = 100) => new Promise(resolve => setTimeout(resolve, ms));

export async function getCocktailById(id: string): Promise<Cocktail | undefined> {
  await simulateDelay();
  
  const cocktail = offlineCocktails.find(c => c.id === id);
  if (cocktail) {
    return { ...cocktail }; // Return a copy to avoid mutations
  }
  return undefined;
}

export async function getCocktailByIngredientName(ingredientName: string): Promise<BaseCocktail[] | undefined> {
  await simulateDelay();
  
  const searchTerm = ingredientName.toLowerCase();
  const matchingCocktails = offlineCocktails.filter(cocktail => 
    cocktail.ingredients?.some(ingredient => 
      ingredient.name.toLowerCase().includes(searchTerm)
    )
  );
  
  return matchingCocktails.map(cocktail => ({
    id: cocktail.id!,
    name: cocktail.name,
    thumbnail: cocktail.picture
  }));
}

export async function getAlcoholicCocktails(): Promise<BaseCocktail[]> {
  await simulateDelay();
  
  const alcoholicCocktails = offlineCocktails.filter(cocktail => cocktail.hasAlchool);
  
  return alcoholicCocktails.map(cocktail => ({
    id: cocktail.id!,
    name: cocktail.name,
    thumbnail: cocktail.picture
  }));
}

export async function getRandomCocktail(): Promise<Cocktail | undefined> {
  await simulateDelay();
  
  const randomIndex = Math.floor(Math.random() * offlineCocktails.length);
  const cocktail = offlineCocktails[randomIndex];
  
  if (cocktail) {
    return { ...cocktail }; // Return a copy to avoid mutations
  }
  return undefined;
}

// Additional utility functions for offline mode
export async function getNonAlcoholicCocktails(): Promise<BaseCocktail[]> {
  await simulateDelay();
  
  const nonAlcoholicCocktails = offlineCocktails.filter(cocktail => !cocktail.hasAlchool);
  
  return nonAlcoholicCocktails.map(cocktail => ({
    id: cocktail.id!,
    name: cocktail.name,
    thumbnail: cocktail.picture
  }));
}

export async function getAllCocktails(): Promise<BaseCocktail[]> {
  await simulateDelay();
  
  return offlineCocktails.map(cocktail => ({
    id: cocktail.id!,
    name: cocktail.name,
    thumbnail: cocktail.picture
  }));
}

export async function searchCocktailsByName(name: string): Promise<BaseCocktail[]> {
  await simulateDelay();
  
  const searchTerm = name.toLowerCase();
  const matchingCocktails = offlineCocktails.filter(cocktail => 
    cocktail.name.toLowerCase().includes(searchTerm)
  );
  
  return matchingCocktails.map(cocktail => ({
    id: cocktail.id!,
    name: cocktail.name,
    thumbnail: cocktail.picture
  }));
}