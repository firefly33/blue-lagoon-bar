import Header from "./Header.tsx";
import {Outlet} from "react-router";
import {Waves} from "lucide-react";
import {useEffect, useState} from "react";
import BasketSidebar from "../components/BasketSidebar";
import ApiModeIndicator from "../components/ApiModeIndicator";

const Layout = () => {

  const [scrollY, setScrollY] = useState(0);

  // Effet de scroll pour l'animation des vagues
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <div className="font-[theme(font-sans)] min-h-screen bg-beach-light">
        <Header/>
        <main className="min-h-screen">
          <Outlet/>
        </main>
        
        {/* Basket Sidebar */}
        <BasketSidebar />
        
        {/* API Mode Indicator */}
        <ApiModeIndicator />
      </div>
  )
}
export default Layout
