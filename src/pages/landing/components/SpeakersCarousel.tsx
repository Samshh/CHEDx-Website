import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { speakersData } from "./speakers";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function SpeakersCarousel() {
  const speakersRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    const triggerElement = document.getElementById("theSpeaker");

    if (triggerElement) {
      gsap.fromTo(
        speakersRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          duration: 0.5,
          y: 0,
          stagger: 0.15,
          scrollTrigger: {
            trigger: triggerElement,
            start: "top center",
            end: "bottom center",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  });

  return (
    <div id="theSpeaker" className="flex justify-center">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[960px]">
        {speakersData.map((speaker, index) => (
          <div
            key={index}
            ref={(el) => (speakersRef.current[index] = el!)}
            className="rounded-xl overflow-hidden shadow-md max-w-[222px] border-[2px] border-yellow"
          >
            <img
              src={speaker.img}
              alt={speaker.name}
              className="object-cover w-full h-48"
            />
            <div className="p-4">
              <p className="font-semibold">{speaker.name}</p>
              <p>{speaker.affil}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
