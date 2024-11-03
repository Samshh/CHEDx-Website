import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface useAnimateTextProps {
  text: React.RefObject<HTMLDivElement>;
  trigger: React.RefObject<HTMLDivElement>;
}

export default function useAnimateText({ text, trigger }: useAnimateTextProps) {
  useGSAP(() => {
    const textElement = text.current;
    if (!textElement) return;

    const words = textElement.textContent?.split(" ") || [];
    textElement.innerHTML = words
      .map((word: string) => `<span style="display: inline-block;">${word} </span>`)
      .join(" ");

    gsap.fromTo(
      textElement.children,
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        ease: "power2.out",
        stagger: 0.02,
        duration: 0.25,
        scrollTrigger: {
          trigger: trigger.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
          // markers: true,
        },
      }
    );
  });
}
