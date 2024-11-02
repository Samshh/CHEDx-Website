import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const textToBlack = (
  triggerElement: HTMLElement | null,
  targetTextRef: React.RefObject<HTMLDivElement>,
) => {
  if (!triggerElement || !targetTextRef.current)
    return;

  gsap.to(
    targetTextRef.current,
    {
      color: "#030303",
      scrollTrigger: {
        trigger: triggerElement,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
        scrub: true,
      },
    }
  );
};

const barToBlack = (
  triggerElement: HTMLElement | null,
  targetBarRef: React.RefObject<HTMLDivElement>,
) => {
  if (!triggerElement || !targetBarRef.current)
    return;

  gsap.to(
    targetBarRef.current,
    {
      backgroundColor: "#030303",
      scrollTrigger: {
        trigger: triggerElement,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
        scrub: true,
      },
    }
  );
};

export { textToBlack, barToBlack };