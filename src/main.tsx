import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter, Route, Routes} from "react-router";
import Layout from "./layout/Layout.tsx";
import "@fontsource/pacifico";
import "@fontsource/poppins";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import CocktailPage from "./features/CocktailPage.tsx";
import Cocktails from "./pages/Cocktails.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1
    },
    mutations: {
      retry: 1
    }
  },
});

createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<App/>}/>
            <Route path="/cocktails" element={<Cocktails/>}/>
            <Route path="/cocktails/:id" element={<CocktailPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
)
