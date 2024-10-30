import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../@/components/Navbar";
import Footer from "../@/components/Footer";
import { ReactLenis } from "@studio-freight/react-lenis";
import { useEffect } from "react";
import SidebarL from "../@/components/SidebarL";
import SidebarR from "../@/components/SidebarR";

export default function MainLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <main>
      <ReactLenis root key={pathname}>
        <Navbar />
        <SidebarL />
        <SidebarR />
        <Outlet />
        <Footer />
      </ReactLenis>
    </main>
  );
}
