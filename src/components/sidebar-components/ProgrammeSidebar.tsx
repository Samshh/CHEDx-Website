import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function ProgrammeSidebar() {
  const programmeRef = useRef<HTMLDivElement | null>(null);
  const themeRef = useRef<HTMLDivElement | null>(null);
  const day1Ref = useRef<HTMLDivElement | null>(null);
  const day2Ref = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const createScrollAnimation = (ref: React.RefObject<HTMLDivElement>, start: string, end: string) => {
      if (ref.current) {
        gsap.fromTo(
          ref.current,
          { height: "0%", backgroundColor: "black" },
          {
            height: "100%",
            ease: "none",
            scrollTrigger: {
              trigger: document.documentElement,
              start: start,
              end: end,
              scrub: true,
            },
          }
        );
      }
    };

    createScrollAnimation(programmeRef, "top top", "top+=10%");
    createScrollAnimation(themeRef, "top+=10%", "top+=28%");
    createScrollAnimation(day1Ref, "top+=28%", "top+=55%");
    createScrollAnimation(day2Ref, "top+=55%", "top+=70%");
    createScrollAnimation(nextRef, "top+=70%", "bottom top+=100%");
  }, []);

  const scrollToPercentage = (percentage: number) => {
    const targetScrollPosition = (document.body.scrollHeight - window.innerHeight) * (percentage / 100);
    gsap.to(window, {
      duration: 1,
      scrollTo: targetScrollPosition,
      ease: "power2.inOut",
    });
  };

  return (
    <>
      <div
        className="flex justify-center items-center gap-[1rem] text-black hover:cursor-pointer"
        onClick={() => scrollToPercentage(0)}
      >
        <p>PROGRAMME</p>
        <div className="h-[48px] w-[6px] bg-[#777] relative hover:cursor-pointer">
          <div className="absolute top-0 left-0 w-full h-full bg-[#777]" />
          <div ref={programmeRef} className="absolute top-0 left-0 w-full bg-black" />
        </div>
      </div>
      <div
        className="flex justify-center items-center gap-[1rem] text-[#777] hover:cursor-pointer"
        onClick={() => scrollToPercentage(12)}
      >
        <p>THEME</p>
        <div className="h-[48px] w-[6px] bg-[#777] relative hover:cursor-pointer">
          <div className="absolute top-0 left-0 w-full h-full bg-[#777]" />
          <div ref={themeRef} className="absolute top-0 left-0 w-full bg-black" />
        </div>
      </div>
      <div
        className="flex justify-center items-center gap-[1rem] text-[#777] hover:cursor-pointer"
        onClick={() => scrollToPercentage(33)}
      >
        <p>DAY 1</p>
        <div className="h-[48px] w-[6px] bg-[#777] relative">
          <div className="absolute top-0 left-0 w-full h-full bg-[#777]" />
          <div ref={day1Ref} className="absolute top-0 left-0 w-full bg-black" />
        </div>
      </div>
      <div
        className="flex justify-center items-center gap-[1rem] text-[#777] hover:cursor-pointer"
        onClick={() => scrollToPercentage(65)}
      >
        <p>DAY 2</p>
        <div className="h-[48px] w-[6px] bg-[#777] relative">
          <div className="absolute top-0 left-0 w-full h-full bg-[#777]" />
          <div ref={day2Ref} className="absolute top-0 left-0 w-full bg-black" />
        </div>
      </div>
      <div
        className="flex justify-center items-center gap-[1rem] text-[#777] hover:cursor-pointer"
        onClick={() => scrollToPercentage(100)}
      >
        <p>NEXT</p>
        <div className="h-[48px] w-[6px] bg-[#777] relative">
          <div className="absolute top-0 left-0 w-full h-full bg-[#777]" />
          <div ref={nextRef} className="absolute top-0 left-0 w-full bg-black" />
        </div>
      </div>
    </>
  );
}
