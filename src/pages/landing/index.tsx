import Tag from "@/components/ui/tag";
import CHEDxLogo from "/CHEDxLogo.svg";
import HeroBG from "/CHEDx_Hero.png";
import Button from "@/components/ui/button";
import IBAP from "/landingLogos/IBAP.svg";
import USEP from "/landingLogos/USEP.svg";
import BagongPilipinas from "/landingLogos/BagongPilipinas.svg";
import PSITS from "/landingLogos/PSITS.svg";
import CHEDLogo from "/landingLogos/CHEDLogo.svg";
import CDITE from "/landingLogos/CDITE.svg";
import LandingCard from "./components/LandingCard";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Landing() {
  const partners = [IBAP, USEP, BagongPilipinas, PSITS, CHEDLogo, CDITE];
  const cardsTrigger = useRef(null);
  const card1 = useRef(null);
  const card2 = useRef(null);
  const card3 = useRef(null);
  const card4 = useRef(null);
  const [card1number, setCard1Number] = useState(0);
  const [card2number, setCard2Number] = useState(0);
  const [card3number, setCard3Number] = useState(0);
  const [card4number, setCard4Number] = useState(0);

  useGSAP(() => {
    const tl = gsap.timeline({
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: cardsTrigger.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
        onEnter: () => {
          setCard1Number(0);
          setCard2Number(0);
          setCard3Number(0);
          setCard4Number(0);
        }
      },
    });

    tl.from(card1.current, {
      opacity: 0,
      y: 50,
      duration: 0.25,
      onComplete: () => {
        const car1Interval = setInterval(() => {
            setCard1Number((prev: number) => {
            const next = prev + 2;
            if (next > 52) {
              clearInterval(car1Interval);
              return 52;
            }
            return next;
            })
        }, 50);
      }
    })
      .from(card2.current, {
        opacity: 0,
        y: 50,
        duration: 0.25,
        onComplete: () => {
          const car2Interval = setInterval(() => {
            setCard2Number((prev: number) => {
              const next = prev + 2;
              if (next > 22) {
                clearInterval(car2Interval);
                return 22;
              }
              return next;
            });
          }, 50);
        }
      })
      .from(card3.current, {
        opacity: 0,
        y: 50,
        duration: 0.25,
        onComplete: () => {
          const car3Interval = setInterval(() => {
            setCard3Number((prev: number) => {
              const next = prev + 1;
              if (next > 14) {
                clearInterval(car3Interval);
                return 14;
              }
              return next;
            });
          }, 50);
        }
      })
      .from(card4.current, {
        opacity: 0,
        y: 50,
        duration: 0.25,
        onComplete: () => {
          const car4Interval = setInterval(() => {
            setCard4Number((prev: number) => {
              const next = prev + 1;
              if (next > 1) {
                clearInterval(car4Interval);
                return 1;
              }
              return next;
            });
          }, 500);
        }
      });
  });

  return (
    <div className="flex flex-col">
      <div className="relative">
        <img
          src={HeroBG}
          alt="herobg"
          className="absolute w-screen h-full object-cover"
        />
        <div className="absolute inset-0 bg-center-transparent" />
        <section className="relative h-screen">
          <div className="h-full w-full max-w-[568px] max-h-[568px] rounded-full absolute bg-yellow opacity-15 blur-3xl" />
          <div className="flex flex-col items-center justify-center gap-[3rem] mb-[4rem] z-10">
            <div className="flex flex-col items-center justify-center">
              <Tag className="border-yellow">V 2024</Tag>
              <img src={CHEDxLogo} alt="CHEDx" />
            </div>
            <div className="flex flex-col justify-center items-center gap-[2rem]">
              <p className="uppercase text-center">
                december 4 - 5, 2024
                <br />
                @davao city
              </p>
              <Button className="bg-yellow text-white">Register now</Button>
            </div>
          </div>
        </section>
      </div>
      <div className="py-[5rem]">
        <section className="relative gap-[5rem]">
          <div className="h-full w-full max-w-[568px] max-h-[568px] rounded-full absolute bg-yellow opacity-15 blur-3xl" />
          <div className="max-w-[751px] w-full flex justify-center sm:justify-between items-center gap-[3rem] flex-wrap">
            {partners.map((partner, index) => (
              <img key={index} src={partner} alt={`partner-${index}`} />
            ))}
          </div>
          <div className="text-center flex flex-col gap-[2rem]" ref={cardsTrigger}>
            <h2>
              <span className="text-yellow">What is CHEDx,</span>
              <br /> and why should you join?
            </h2>
            <h3 className="max-w-[768px]">
              In today’s fast-evolving tech landscape, CHEDx keeps you informed
              on ethical implications, promotes responsible use, and fosters
              collaboration to make technology impactful, bridging gaps and
              strengthening human connections.
            </h3>
          </div>
          <div className="grid max-w-[471px] grid-rows-2 grid-cols-2 lg:grid-rows-1 lg:grid-cols-4 gap-[2rem] w-full lg:max-w-[985px]">
            <div ref={card1}>
              <LandingCard
                title="speakers"
                icon="pepicons-pencil:microphone-handheld"
                number={card1number}
              />
            </div>
            <div ref={card2}>
              <LandingCard
                title="booths"
                icon="clarity:store-line"
                number={card2number}
              />
            </div>
            <div ref={card3}>
              <LandingCard
                title="breakout sessions"
                icon="ph:users"
                number={card3number}
              />
            </div>
            <div ref={card4}>
              <LandingCard
                title="big event"
                icon="proicons:calendar"
                number={card4number}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
