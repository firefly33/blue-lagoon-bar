import Header from "./Header.tsx";
import {Outlet} from "react-router";
import BasketSidebar from "../components/BasketSidebar";
import ApiModeIndicator from "../components/ApiModeIndicator";

const Layout = () => {
  return (
      <div className="font-[theme(font-sans)] min-h-screen bg-beach-light">
        <Header/>
        <main className="min-h-screen">
          <Outlet/>
        </main>

        {/* Basket Sidebar */}
        <BasketSidebar/>

        {/* API Mode Indicator */}
        <ApiModeIndicator/>
      </div>
  )
}
export default Layout
