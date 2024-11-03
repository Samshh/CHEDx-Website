import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ReactLenis } from "@studio-freight/react-lenis";
import { useEffect } from "react";
import Sidebar from "@/components/Sidebar";

export default function MainLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <main className="relative">
      <ReactLenis root key={pathname}>
        <Navbar />
        <Sidebar />
        <Outlet />
        <Footer />
      </ReactLenis>
    </main>
  );
}
