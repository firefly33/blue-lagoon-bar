# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Lint code
npm run lint

# Preview production build
npm run preview
```

## Architecture Overview

**Blue Lagoon Bar** is a React + TypeScript cocktail application built with Vite, featuring a classic beach bar theme.

### State Management
- **Zustand**: Global state management for basket functionality (`src/store/basketStore.ts`)
- **TanStack Query**: Server state management with custom QueryClient configuration (retry: 1, no refetch on window focus)

### API Integration
- **TheCocktailDB API**: External cocktail database integration via `src/services/adapterCocktailDB.ts`
- Key functions:
  - `getCocktailById()` - Single cocktail details
  - `getCocktailByIngredientName()` - Filter by ingredient
  - `getAlcoholicCocktails()` - All alcoholic cocktails
- Returns standardized `BaseCocktail` type with `{id, name, thumbnail}` structure

### Routing Structure
```
/ (App.tsx)                    - Homepage
/cocktails (Cocktails.tsx)     - Alcoholic cocktails list
/cocktail/:id (CocktailPage.tsx) - Individual cocktail details
```

### Component Architecture
- **Layout Pattern**: `Layout.tsx` wrapper with `Header.tsx` and `BasketSidebar.tsx`
- **Page Components**: Located in `src/pages/`
- **Feature Components**: Located in `src/features/`
- **Reusable Components**: Located in `src/components/`
- **Critical Rule**: Always create separate files for React components (never inline components)

### Styling System
- **Tailwind CSS 4**: Custom theme variables defined in `src/index.css`
- **Beach Theme Colors**: 
  - Sand palette (`sand-50` to `sand-900`)
  - Coral palette (`coral-500`, `coral-600`)
  - Turquoise palette (`turquoise-500`, `turquoise-600`)
  - Custom fonts: Pacifico (titles), Poppins (body)
- **Design Philosophy**: Classic, professional appearance (no glassmorphism effects)

### Data Flow Patterns
- **Basket**: Zustand store handles add/remove/update operations
- **Cocktail Fetching**: Mix of TanStack Query (for server state) and useEffect (as specifically requested for certain features)
- **Type Safety**: Strong TypeScript usage with `BaseCocktail` and `Cocktail` interfaces

### Key Integrations
- **React Router 7**: File-based routing
- **Lucide React**: Icon system
- **FontSource**: Custom font loading (Pacifico, Poppins)