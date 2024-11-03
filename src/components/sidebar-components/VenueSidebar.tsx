import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { barToBlack, textToBlack } from "../animations/useSideBar";

export default function VenueSidebar() {
  const mapTextRef = useRef<HTMLDivElement>(null);
  const mapBarRef = useRef<HTMLDivElement>(null);
  const nextTextRef = useRef<HTMLDivElement>(null);
  const nextBarRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const venueMap: HTMLElement | null = document.getElementById("venueMap");
    const venueNext: HTMLElement | null = document.getElementById("venueNext");

    textToBlack(venueMap, mapTextRef);
    textToBlack(venueNext, nextTextRef);
    barToBlack(venueMap, mapBarRef);
    barToBlack(venueNext, nextBarRef);
  });
  return (
    <>
      <div className="flex justify-center items-center gap-[1rem] text-black">
        <p>VENUE</p>
        <div className="h-[48px] w-[6px] bg-black" />
      </div>
      <div
        className="flex justify-center items-center gap-[1rem] text-[#B9B9B9]"
        ref={mapTextRef}
      >
        <p>MAP</p>
        <div className="h-[48px] w-[6px] bg-[#B9B9B9]" ref={mapBarRef} />
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
