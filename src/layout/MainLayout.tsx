import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import { ReactLenis } from "@studio-freight/react-lenis";
import { useEffect, useRef } from "react";
import Sidebar from "@/components/Sidebar";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import logo from "/CHEDxLogo.svg";

export default function MainLayout() {
  const mainRef = useRef(null);
  const loadingRef = useRef(null);
  const spinnerRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const messageRef = useRef(null);
  const { pathname } = useLocation();

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(spinnerRef.current, {
      rotate: 360,
      duration: 0.5,
      repeat: -1,
      ease: "linear",
    })
      .from(imageRef.current, {
        opacity: 0,
        delay: 0.5,
        y: -50,
        duration: 0.5,
        ease: "power2.inOut",
      })
      .from(messageRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        ease: "power2.inOut",
      })
      .to(contentRef.current, {
        delay: 0.5,
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      })
      .to(loadingRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      })
      .set(loadingRef.current, { display: "none" });
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div
        ref={loadingRef}
        className="h-screen w-full fixed flex-col gap-[2rem] justify-center items-center flex z-50 select-none bg-white p-[2rem]"
      >
        <img ref={imageRef} src={logo} alt="logo" className="w-[468px]" />
        <h3 ref={messageRef} className="uppercase">
          Expand, Exceed, Exemplify
        </h3>
        <div
          ref={spinnerRef}
          className={`w-12 h-12 border-4 border-solid border-white ${
            pathname === "/"
              ? "border-t-yellow"
              : pathname === "/venue"
              ? "border-t-red"
              : pathname === "/programme"
              ? "border-t-blue"
              : pathname === "/breakout-sessions"
              ? "border-t-green"
              : "border-t-yellow"
          } rounded-full absolute bottom-16`}
        />
      </div>
      <main ref={mainRef} className="relative" key={pathname}>
        {/* <ReactLenis root> */}
        <Navbar />
        <Sidebar />
        <Outlet />
        <Footer />
        {/* </ReactLenis> */}
      </main>
    </>
  );
}
