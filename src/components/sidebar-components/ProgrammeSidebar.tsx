import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { barToBlack, textToBlack } from "../animations/useSideBar";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function ProgrammeSidebar() {
  const themeRef = useRef<HTMLDivElement>(null);
  const day1Ref = useRef<HTMLDivElement>(null);
  const day2Ref = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  const themeTextRef = useRef<HTMLDivElement>(null);
  const day1TextRef = useRef<HTMLDivElement>(null);
  const day2TextRef = useRef<HTMLDivElement>(null);
  const nextTextRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const theme: HTMLElement | null = document.getElementById("theme");
    const day1: HTMLElement | null = document.getElementById("#DAY 1");
    const day2: HTMLElement | null = document.getElementById("#DAY 2");
    const next: HTMLElement | null = document.getElementById("next");

    // const createScrollAnimation = (ref: React.RefObject<HTMLDivElement>, start: string, end: string) => {
    //   if (ref.current) {
    //     gsap.fromTo(
    //       ref.current,
    //       { height: "0%", backgroundColor: "black" },
    //       {
    //         height: "100%",
    //         ease: "none",
    //         scrollTrigger: {
    //           trigger: document.documentElement,
    //           start: start,
    //           end: end,
    //           scrub: true,
    //         },
    //       }
    //     );
    //   }
    // };

    textToBlack(theme, themeTextRef);
    textToBlack(day1, day1TextRef);
    textToBlack(day2, day2TextRef);
    textToBlack(next, nextTextRef);

    barToBlack(theme, themeRef);
    barToBlack(day1, day1Ref);
    barToBlack(day2, day2Ref);
    barToBlack(next, nextRef);

    // createScrollAnimation(themeRef, "top", "top+=28%");
    // createScrollAnimation(day1Ref, "top+=28%", "top+=55%");
    // createScrollAnimation(day2Ref, "top+=55%", "top+=70%");
    // createScrollAnimation(nextRef, "top+=70%", "bottom top+=100%");
  });

  return (
    <>
      <div className="flex justify-center items-center gap-[1rem] text-black ">
        <p>PROGRAMME</p>
        <div className="h-[48px] w-[6px] bg-black relative">
          <div className="absolute top-0 left-0 w-full bg-black" />
        </div>
      </div>
      <div
        className="flex justify-center items-center gap-[1rem] text-[#777]"
        ref={themeTextRef}
      >
        <p>THEME</p>
        <div className=" h-[48px] w-[6px] bg-[#B9B9B9]" ref={themeRef} />
        {/* <div className="h-[48px] w-[6px] bg-[#777] relative hover:cursor-pointer">
          <div ref={themeRef} className="absolute top-0 left-0 w-full bg-black" />
        </div> */}
      </div>
      <div
        className="flex justify-center items-center gap-[1rem] text-[#777]"
        ref={day1TextRef}
      >
        <p>DAY 1</p>
        <div className=" h-[48px] w-[6px] bg-[#B9B9B9]" ref={day1Ref} />
        {/* <div className="h-[48px] w-[6px] bg-[#777] relative">
          <div className="absolute top-0 left-0 w-full h-full bg-[#777]" />
          <div ref={day1Ref} className="absolute top-0 left-0 w-full bg-black" />
        </div> */}
      </div>
      <div
        className="flex justify-center items-center gap-[1rem] text-[#777]"
        ref={day2TextRef}
      >
        <p>DAY 2</p>
        <div className=" h-[48px] w-[6px] bg-[#B9B9B9]" ref={day2Ref} />
        {/* <div className="h-[48px] w-[6px] bg-[#777] relative">
          <div className="absolute top-0 left-0 w-full h-full bg-[#777]" />
          <div ref={day2Ref} className="absolute top-0 left-0 w-full bg-black" />
        </div> */}
      </div>
      <div
        className="flex justify-center items-center gap-[1rem] text-[#777]"
        ref={nextTextRef}
      >
        <p>NEXT</p>
        <div className=" h-[48px] w-[6px] bg-[#B9B9B9]" ref={nextRef} />
        {/* <div className="h-[48px] w-[6px] bg-[#777] relative">
          <div className="absolute top-0 left-0 w-full h-full bg-[#777]" />
          <div ref={nextRef} className="absolute top-0 left-0 w-full bg-black" />
        </div> */}
      </div>
    </>
  );
}
