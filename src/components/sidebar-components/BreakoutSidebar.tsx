import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { barToBlack, textToBlack } from "../animations/useSideBar";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function BreakoutSidebar() {
  const breakoutRef = useRef<HTMLDivElement>(null);
  const day1Ref = useRef<HTMLDivElement>(null);
  const day2Ref = useRef<HTMLDivElement>(null);

  const breakoutTextRef = useRef<HTMLDivElement>(null);
  const day1TextRef = useRef<HTMLDivElement>(null);
  const day2TextRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const breakout: HTMLElement | null =
      document.getElementById("breakoutSession");
    const day1: HTMLElement | null = document.getElementById("breakoutDay1");
    const day2: HTMLElement | null = document.getElementById("breakoutDay2");

    textToBlack(breakout, breakoutTextRef);
    textToBlack(day1, day1TextRef);
    textToBlack(day2, day2TextRef);

    barToBlack(breakout, breakoutRef);
    barToBlack(day1, day1Ref);
    barToBlack(day2, day2Ref);
  });

  return (
    <>
      <div className="flex justify-center items-center gap-[1rem] text-black">
        <p ref={breakoutTextRef}>BREAKOUT SESSION</p>
        <div className="h-[48px] w-[6px] bg-black" ref={breakoutRef} />
      </div>
      <div
        className="flex justify-center items-center gap-[1rem] text-[#777]"
        ref={day1TextRef}
      >
        <p>DAY 1</p>
        <div className="h-[48px] w-[6px] bg-[#B9B9B9]" ref={day1Ref} />
      </div>
      <div
        className="flex justify-center items-center gap-[1rem] text-[#777]"
        ref={day2TextRef}
      >
        <p>DAY 2</p>
        <div className="h-[48px] w-[6px] bg-[#B9B9B9]" ref={day2Ref} />
      </div>
    </>
  );
}
