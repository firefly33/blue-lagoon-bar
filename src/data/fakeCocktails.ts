import type {Drink} from "../services/adapterCocktailDB.ts";

export type BaseCocktail = {
  name: string;
  thumbnail: string;
  id: string;
}

export type Cocktail = {
  id?: string;
  name: string;
  category: string;
  instructions: string;
  picture: string;
  hasAlchool: boolean;
  ingredients?: { name: string; measure?: string; }[]
}

export const fakeCocktails: Cocktail[] = [
  {
    name: "Vermouth Cassis",
    category: "Ordinary Drink",
    hasAlchool: true,
    instructions: "Stir vermouth and creme de cassis in a highball glass with ice cubes. Fill with carbonated water, stir again, and serve.",
    picture: "https://www.thecocktaildb.com/images/media/drink/tswpxx1441554674.jpg",
    ingredients: [
      {name: 'Dry Vermouth', measure: "1 1/2 oz "},
      {name: 'Creme de Cassis', measure: "3/4 oz "},
      {name: "Carbonated water"}
    ]
  },
  {
    name: "Imperial Cocktail",
    category: "Cocktail",
    hasAlchool: true,
    instructions: "Shake with ice and strain into cocktail glass.",
    picture: "https://www.thecocktaildb.com/images/media/drink/bcsj2e1487603625.jpg",
  },
  {
    name: "Mai Tai",
    category: "Ordinary Drink",
    instructions: "Shake all ingredients with ice. Strain into glass. Garnish and serve with straw.",
    picture: "https://www.thecocktaildb.com/images/media/drink/twyrrp1439907470.jpg",
    hasAlchool: true,
    ingredients: [
      {name: 'Light rum', measure: "1 1/2 oz "},
      {name: 'Orgeat syrup', measure: "3/4 oz "},
      {name: "Triple sec"},
      {name: "Sweet and sour"},
      {name: "Cherry"}
    ]
  }
]


// Données factices pour les cocktails
const mockCocktails: Record<string, Drink[]> = {
  vodka: [
    {
      idDrink: "1",
      strDrink: "Blue Lagoon",
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/5vuusr1565109432.jpg",
      strInstructions: "Versez la vodka et le curaçao bleu dans un verre highball rempli de glace. Complétez avec de la limonade et garnissez d'une cerise.",
      strIngredient1: "Vodka",
      strIngredient2: "Curaçao bleu",
      strIngredient3: "Limonade",
      strIngredient4: "Cerise",
      strMeasure1: "4 cl",
      strMeasure2: "2 cl",
      strMeasure3: "10 cl",
      strMeasure4: "1 pièce"
    },
    {
      idDrink: "2",
      strDrink: "Moscow Mule",
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/3pylqc1504370988.jpg",
      strInstructions: "Mélangez la vodka et le jus de citron vert dans un mug en cuivre. Ajoutez la ginger beer et garnissez d'un quartier de citron vert.",
      strIngredient1: "Vodka",
      strIngredient2: "Jus de citron vert",
      strIngredient3: "Ginger beer",
      strIngredient4: "Citron vert",
      strMeasure1: "4 cl",
      strMeasure2: "2 cl",
      strMeasure3: "12 cl",
      strMeasure4: "1 quartier"
    },
    {
      idDrink: "3",
      strDrink: "Cosmopolitan",
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/kpsajh1504368362.jpg",
      strInstructions: "Shakez tous les ingrédients avec de la glace et servez dans un verre à martini. Garnissez d'un zeste de citron vert.",
      strIngredient1: "Vodka",
      strIngredient2: "Triple sec",
      strIngredient3: "Jus de cranberry",
      strIngredient4: "Jus de citron vert",
      strMeasure1: "4 cl",
      strMeasure2: "2 cl",
      strMeasure3: "3 cl",
      strMeasure4: "1 cl"
    },
    {
      idDrink: "4",
      strDrink: "Sex on the Beach",
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/fi67x01551782552.jpg",
      strInstructions: "Versez la vodka et le schnaps à la pêche dans un verre highball avec de la glace. Ajoutez les jus et remuez délicatement.",
      strIngredient1: "Vodka",
      strIngredient2: "Schnaps à la pêche",
      strIngredient3: "Jus d'ananas",
      strIngredient4: "Jus de cranberry",
      strMeasure1: "3 cl",
      strMeasure2: "3 cl",
      strMeasure3: "6 cl",
      strMeasure4: "6 cl"
    }
  ],
  rum: [
    {
      idDrink: "5",
      strDrink: "Piña Colada",
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/cpf4j51504371346.jpg",
      strInstructions: "Mixez le rhum, la crème de coco et le jus d'ananas avec de la glace pilée. Servez dans un verre hurricane et garnissez d'ananas frais.",
      strIngredient1: "Rhum blanc",
      strIngredient2: "Crème de coco",
      strIngredient3: "Jus d'ananas",
      strIngredient4: "Ananas",
      strMeasure1: "6 cl",
      strMeasure2: "4 cl",
      strMeasure3: "12 cl",
      strMeasure4: "1 tranche"
    },
    {
      idDrink: "6",
      strDrink: "Mojito",
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/3z6xdi1589574603.jpg",
      strInstructions: "Pilez la menthe avec le sucre et le citron vert dans un verre. Ajoutez le rhum et complétez avec de l'eau gazeuse.",
      strIngredient1: "Rhum blanc",
      strIngredient2: "Menthe fraîche",
      strIngredient3: "Sucre de canne",
      strIngredient4: "Citron vert",
      strIngredient5: "Eau gazeuse",
      strMeasure1: "6 cl",
      strMeasure2: "10 feuilles",
      strMeasure3: "2 c. à soupe",
      strMeasure4: "1/2 citron",
      strMeasure5: "10 cl"
    },
    {
      idDrink: "7",
      strDrink: "Daiquiri",
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/mrz9091589574515.jpg",
      strInstructions: "Shakez le rhum, le jus de citron vert et le sirop de sucre avec de la glace. Servez dans un verre à cocktail.",
      strIngredient1: "Rhum blanc",
      strIngredient2: "Jus de citron vert",
      strIngredient3: "Sirop de sucre",
      strMeasure1: "6 cl",
      strMeasure2: "3 cl",
      strMeasure3: "2 cl"
    },
    {
      idDrink: "8",
      strDrink: "Mai Tai",
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/twyrrp1439907470.jpg",
      strInstructions: "Shakez tous les ingrédients avec de la glace et servez dans un verre old-fashioned. Garnissez d'ananas et de cerise.",
      strIngredient1: "Rhum ambré",
      strIngredient2: "Rhum blanc",
      strIngredient3: "Curaçao orange",
      strIngredient4: "Sirop d'orgeat",
      strIngredient5: "Jus de citron vert",
      strMeasure1: "3 cl",
      strMeasure2: "3 cl",
      strMeasure3: "1 cl",
      strMeasure4: "1 cl",
      strMeasure5: "2 cl"
    }
  ],
  gin: [
    {
      idDrink: "9",
      strDrink: "Gin Tonic",
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/qcgz0t1643821443.jpg",
      strInstructions: "Versez le gin dans un verre highball rempli de glace. Complétez avec du tonic et garnissez d'une tranche de citron.",
      strIngredient1: "Gin",
      strIngredient2: "Tonic",
      strIngredient3: "Citron",
      strMeasure1: "5 cl",
      strMeasure2: "15 cl",
      strMeasure3: "1 tranche"
    },
    {
      idDrink: "10",
      strDrink: "Martini",
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/6ck9yi1589574317.jpg",
      strInstructions: "Remuez le gin et le vermouth avec de la glace dans un verre à mélange. Servez dans un verre à martini et garnissez d'une olive.",
      strIngredient1: "Gin",
      strIngredient2: "Vermouth sec",
      strIngredient3: "Olive",
      strMeasure1: "6 cl",
      strMeasure2: "1 cl",
      strMeasure3: "1 pièce"
    },
    {
      idDrink: "11",
      strDrink: "Negroni",
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/qgdu971561574065.jpg",
      strInstructions: "Versez tous les ingrédients dans un verre old-fashioned avec de la glace. Remuez et garnissez d'une tranche d'orange.",
      strIngredient1: "Gin",
      strIngredient2: "Campari",
      strIngredient3: "Vermouth rouge",
      strIngredient4: "Orange",
      strMeasure1: "3 cl",
      strMeasure2: "3 cl",
      strMeasure3: "3 cl",
      strMeasure4: "1 tranche"
    },
    {
      idDrink: "12",
      strDrink: "Tom Collins",
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/vtrvtu1472669496.jpg",
      strInstructions: "Shakez le gin, le jus de citron et le sirop avec de la glace. Versez dans un verre Collins et complétez avec de l'eau gazeuse.",
      strIngredient1: "Gin",
      strIngredient2: "Jus de citron",
      strIngredient3: "Sirop de sucre",
      strIngredient4: "Eau gazeuse",
      strMeasure1: "5 cl",
      strMeasure2: "3 cl",
      strMeasure3: "2 cl",
      strMeasure4: "10 cl"
    }
  ],
  tequila: [
    {
      idDrink: "13",
      strDrink: "Margarita",
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
      strInstructions: "Frottez le bord du verre avec du citron vert et trempez dans le sel. Shakez tous les ingrédients et servez.",
      strIngredient1: "Tequila",
      strIngredient2: "Triple sec",
      strIngredient3: "Jus de citron vert",
      strIngredient4: "Sel",
      strMeasure1: "5 cl",
      strMeasure2: "2 cl",
      strMeasure3: "3 cl",
      strMeasure4: "Pour le bord"
    },
    {
      idDrink: "14",
      strDrink: "Tequila Sunrise",
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/quqyqp1480879103.jpg",
      strInstructions: "Versez la tequila et le jus d'orange dans un verre highball avec de la glace. Ajoutez délicatement la grenadine qui coulera au fond.",
      strIngredient1: "Tequila",
      strIngredient2: "Jus d'orange",
      strIngredient3: "Grenadine",
      strMeasure1: "5 cl",
      strMeasure2: "15 cl",
      strMeasure3: "1 cl"
    },
    {
      idDrink: "15",
      strDrink: "Paloma",
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/samm5j1513706393.jpg",
      strInstructions: "Mélangez la tequila et le jus de citron vert dans un verre avec de la glace. Complétez avec du soda au pamplemousse.",
      strIngredient1: "Tequila",
      strIngredient2: "Jus de citron vert",
      strIngredient3: "Soda pamplemousse",
      strIngredient4: "Sel",
      strMeasure1: "5 cl",
      strMeasure2: "2 cl",
      strMeasure3: "12 cl",
      strMeasure4: "1 pincée"
    },
    {
      idDrink: "16",
      strDrink: "Long Island Iced Tea",
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/nkwr4c1606770558.jpg",
      strInstructions: "Mélangez tous les alcools avec le jus de citron dans un verre highball. Complétez avec du cola et garnissez d'un citron.",
      strIngredient1: "Tequila",
      strIngredient2: "Vodka",
      strIngredient3: "Rhum blanc",
      strIngredient4: "Gin",
      strIngredient5: "Triple sec",
      strIngredient6: "Cola",
      strMeasure1: "1.5 cl",
      strMeasure2: "1.5 cl",
      strMeasure3: "1.5 cl",
      strMeasure4: "1.5 cl",
      strMeasure5: "1.5 cl",
      strMeasure6: "10 cl"
    }
  ],
  whiskey: [
    {
      idDrink: "17",
      strDrink: "Whiskey Sour",
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/hbkfsh1589574990.jpg",
      strInstructions: "Shakez le whiskey, le jus de citron et le sirop avec de la glace. Servez dans un verre à whiskey et garnissez d'une cerise.",
      strIngredient1: "Whiskey",
      strIngredient2: "Jus de citron",
      strIngredient3: "Sirop de sucre",
      strIngredient4: "Cerise",
      strMeasure1: "6 cl",
      strMeasure2: "3 cl",
      strMeasure3: "2 cl",
      strMeasure4: "1 pièce"
    },
    {
      idDrink: "18",
      strDrink: "Old Fashioned",
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg",
      strInstructions: "Pilez le sucre avec l'angostura dans un verre. Ajoutez le whiskey et un glaçon. Garnissez d'une tranche d'orange.",
      strIngredient1: "Whiskey",
      strIngredient2: "Sucre",
      strIngredient3: "Angostura",
      strIngredient4: "Orange",
      strMeasure1: "6 cl",
      strMeasure2: "1 morceau",
      strMeasure3: "2 traits",
      strMeasure4: "1 tranche"
    },
    {
      idDrink: "19",
      strDrink: "Manhattan",
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/hz7p4t1589575281.jpg",
      strInstructions: "Remuez le whiskey et le vermouth avec de la glace. Servez dans un verre à cocktail et garnissez d'une cerise.",
      strIngredient1: "Whiskey",
      strIngredient2: "Vermouth rouge",
      strIngredient3: "Angostura",
      strIngredient4: "Cerise",
      strMeasure1: "6 cl",
      strMeasure2: "3 cl",
      strMeasure3: "2 traits",
      strMeasure4: "1 pièce"
    },
    {
      idDrink: "20",
      strDrink: "Mint Julep",
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/squyyq1439907312.jpg",
      strInstructions: "Pilez la menthe avec le sucre dans un verre julep. Ajoutez le whiskey et remplissez de glace pilée. Garnissez de menthe fraîche.",
      strIngredient1: "Whiskey",
      strIngredient2: "Menthe fraîche",
      strIngredient3: "Sucre",
      strMeasure1: "7 cl",
      strMeasure2: "8 feuilles",
      strMeasure3: "1 c. à café"
    }
  ],
  bourbon: [
    {
      idDrink: "21",
      strDrink: "Bourbon Smash",
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/g5upng1513706732.jpg",
      strInstructions: "Pilez la menthe avec le sirop dans un shaker. Ajoutez le bourbon et le jus de citron. Shakez et servez avec de la glace.",
      strIngredient1: "Bourbon",
      strIngredient2: "Menthe fraîche",
      strIngredient3: "Sirop de sucre",
      strIngredient4: "Jus de citron",
      strMeasure1: "6 cl",
      strMeasure2: "6 feuilles",
      strMeasure3: "2 cl",
      strMeasure4: "2 cl"
    },
    {
      idDrink: "22",
      strDrink: "Kentucky Mule",
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/t0abcd1582579154.jpg",
      strInstructions: "Mélangez le bourbon et le jus de citron vert dans un mug en cuivre. Complétez avec de la ginger beer et garnissez de menthe.",
      strIngredient1: "Bourbon",
      strIngredient2: "Jus de citron vert",
      strIngredient3: "Ginger beer",
      strIngredient4: "Menthe",
      strMeasure1: "6 cl",
      strMeasure2: "2 cl",
      strMeasure3: "12 cl",
      strMeasure4: "1 brin"
    },
    {
      idDrink: "23",
      strDrink: "Brown Derby",
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/wxgqmr1439907083.jpg",
      strInstructions: "Shakez le bourbon, le jus de pamplemousse et le miel avec de la glace. Servez dans un verre à cocktail.",
      strIngredient1: "Bourbon",
      strIngredient2: "Jus de pamplemousse",
      strIngredient3: "Miel",
      strMeasure1: "6 cl",
      strMeasure2: "4 cl",
      strMeasure3: "1 c. à soupe"
    },
    {
      idDrink: "24",
      strDrink: "Boulevardier",
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/km84qi1513705868.jpg",
      strInstructions: "Remuez tous les ingrédients avec de la glace dans un verre à mélange. Servez dans un verre à cocktail avec une cerise.",
      strIngredient1: "Bourbon",
      strIngredient2: "Campari",
      strIngredient3: "Vermouth rouge",
      strIngredient4: "Cerise",
      strMeasure1: "4.5 cl",
      strMeasure2: "3 cl",
      strMeasure3: "3 cl",
      strMeasure4: "1 pièce"
    }
  ]
};
