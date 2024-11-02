import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { barToBlack, textToBlack } from "../animations/useSideBar";

export default function HomeSidebar() {
  const joinTextRef = useRef<HTMLDivElement>(null);
  const joinBarRef = useRef<HTMLDivElement>(null);
  const speakersTextRef = useRef<HTMLDivElement>(null);
  const speakersBarRef = useRef<HTMLDivElement>(null);
  const progTextRef = useRef<HTMLDivElement>(null);
  const progBarRef = useRef<HTMLDivElement>(null);
  const nextTextRef = useRef<HTMLDivElement>(null);
  const nextBarRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const whyJoin: HTMLElement | null = document.getElementById("whyJoin");
    const theSpeaker: HTMLElement | null = document.getElementById("theSpeaker");
    const progSched: HTMLElement | null = document.getElementById("progSched");
    const nextPage: HTMLElement | null = document.getElementById("nextPage");
    textToBlack(whyJoin, joinTextRef);
    textToBlack(theSpeaker, speakersTextRef);
    textToBlack(progSched, progTextRef);
    textToBlack(nextPage, nextTextRef);
    barToBlack(whyJoin, joinBarRef);
    barToBlack(theSpeaker, speakersBarRef);
    barToBlack(progSched, progBarRef);
    barToBlack(nextPage, nextBarRef);
  });

  return (
    <>
      <div className="flex justify-center items-center gap-[1rem] text-black">
        <p>THIS IS CHEDx</p>
        <div className="h-[48px] w-[6px] bg-black" />
      </div>
      <div
        className="flex justify-center items-center gap-[1rem] text-[#B9B9B9]"
        ref={joinTextRef}
      >
        <p>WHY JOIN?</p>
        <div className="h-[48px] w-[6px] bg-[#B9B9B9]" ref={joinBarRef} />
      </div>
      <div
        className="flex justify-center items-center gap-[1rem] text-[#B9B9B9]"
        ref={speakersTextRef}
      >
        <p>THE SPEAKERS</p>
        <div className="h-[48px] w-[6px] bg-[#B9B9B9]" ref={speakersBarRef} />
      </div>
      <div
        className="flex justify-center items-center gap-[1rem] text-[#B9B9B9]"
        ref={progTextRef}
      >
        <p>PROGRAMME SCHEDULE</p>
        <div className="h-[48px] w-[6px] bg-[#B9B9B9]" ref={progBarRef} />
      </div>
      <div
        className="flex justify-center items-center gap-[1rem] text-[#B9B9B9]"
        ref={nextTextRef}
      >
        <p>NEXT</p>
        <div className="h-[48px] w-[6px] bg-[#B9B9B9]" ref={nextBarRef} />
      </div>
    </>
  );
}
