import CHEDxLogo from "/CHEDxLogo.svg";
import HeroBG from "/Programme_Hero.png"; // CHANGE ME
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
import CurvedUnderline from "/underlines/landing_underline.svg";
import CurvedUnderline2 from "/underlines/landing2_underline.svg";
import LanddingCarousel from "./components/LandingCarousel";
import MappedTimeline from "./components/MappedTimeline";
import useAnimateText from "@/components/animations/useAnimateText";
import SpeakersCarousel from "./components/SpeakersCarousel";

gsap.registerPlugin(ScrollTrigger);

export default function Landing() {
  const partners = [CHEDLogo, IBAP, USEP, CDITE, PSITS, BagongPilipinas];
  const cardsTrigger = useRef(null);
  const card1 = useRef(null);
  const card2 = useRef(null);
  const card3 = useRef(null);
  const card4 = useRef(null);
  const [card1number, setCard1Number] = useState(0);
  const [card2number, setCard2Number] = useState("");
  const [card3number, setCard3Number] = useState(0);
  const [card4number, setCard4Number] = useState(0);

  const text1 = useRef(null);
  const text2 = useRef(null);
  const text3 = useRef(null);
  const textTrigger1 = useRef(null);
  const textTrigger2 = useRef(null);
  const textTrigger3 = useRef(null);

  useAnimateText({ text: text1, trigger: textTrigger1 });
  useAnimateText({ text: text2, trigger: textTrigger2 });
  useAnimateText({ text: text3, trigger: textTrigger3 });

  useGSAP(() => {
    setCard2Number("TBA");
    const tl = gsap.timeline({
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: cardsTrigger.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
        // onEnter: () => {
        //   setCard1Number(0);
        //   setCard2Number(0);
        //   setCard3Number(0);
        //   setCard4Number(0);
        // },
      },
    });

    tl.from(card1.current, {
      opacity: 0,
      y: 50,
      duration: 0.25,
      onComplete: () => {
        const car1Interval = setInterval(() => {
          setCard1Number((prev: number) => {
            const next = prev + 1;
            if (next > 25) {
              clearInterval(car1Interval);
              return 25;
            }
            return next;
          });
        }, 50);
      },
    })
      .from(card2.current, {
        opacity: 0,
        y: 50,
        duration: 0.25,
        // onComplete: () => {
        //   const car2Interval = setInterval(() => {
        //     setCard2Number((prev: number) => {
        //       const next = prev + 2;
        //       if (next > 0) {
        //         clearInterval(car2Interval);
        //         return 0;
        //       }
        //       return next;
        //     });
        //   }, 50);
        // },
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
        },
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
        },
      });
  });

  return (
    <div className="flex flex-col">
      {/* section1 */}
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
              <img src={CHEDxLogo} alt="CHEDx" />
            </div>
            <div className="flex flex-col justify-center items-center gap-[2rem]">
              <div>
                <h3 className="text-center font-normal max-w-[568px] uppercase">
                  December 4 - 5, 2024
                </h3>
                <p className="text-center font-normal max-w-[568px]">
                  SMX Convention Center Davao <br /> 3rd Level, SM Lanang
                  Premier, J.P. Laurel Ave, Lanang, Davao City.
                </p>
              </div>
              <a
                href="https://lu.ma/sslgryut"
                target="_blank"
                rel="noopener noreferrer"
                title="registration"
              >
                <Button className="bg-yellow text-white">Register now</Button>
              </a>
            </div>
          </div>
        </section>
      </div>
      {/* section2 */}
      <div className="py-[5rem]" id="whyJoin">
        <section className="relative gap-[5rem]" ref={textTrigger1}>
          <div className="h-full w-full max-w-[568px] max-h-[568px] rounded-full absolute bg-yellow opacity-15 blur-3xl" />
          <div className="max-w-[751px] w-full flex justify-center items-center gap-[3.36rem] flex-wrap">
            {partners.map((partner, index) => (
              <img
                className="h-[65px] w-auto"
                key={index}
                src={partner}
                alt={`partner-${index}`}
              />
            ))}
          </div>
          <div
            className="text-center flex flex-col gap-[2rem]"
            ref={cardsTrigger}
          >
            <h2>
              <span className="text-yellow">
                What is CHED<sup>x</sup>2.0,
              </span>
              <br /> and why should{" "}
              <span className="inline-block relative">
                <span>you join?</span>
                <img
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
                  src={CurvedUnderline}
                  alt="underline"
                />
              </span>
            </h2>
            <h3 className="max-w-[1080px]" ref={text1}>
              CHEDˣ2.0 is a nationwide IT Education Summit that promotes
              impactful and inclusive discussions, partnerships, and networking.
              This year's theme, “Building Synergy: Aligning IT Education with
              Industry,” emphasizes collaboration among academia, industry, and
              government to keep pace with technological advancements and
              workforce needs. Join us to connect, learn, and help shape the
              future of IT education!
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
      {/* section3 */}
      <div className="py-[5rem]">
        <section className="relative">
          <div className="h-full w-full rounded-full absolute bg-yellow opacity-30 blur-3xl" />
          <div className="z-10 h-full w-full overflow-hidden">
            <iframe
              className="w-full h-[50vh] lg:h-[60vh] rounded-2xl border-[2px] border-yellow"
              src="https://www.youtube.com/embed/1XGIHPQ-Ry4?si=UzXJ7B2aQX1jM8M8"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </section>
      </div>
      {/* section4 */}
      <div className="py-[5rem]">
        <section className="gap-[4rem]">
          <div className="flex flex-col text-center">
            <h2>
              <span className="text-yellow">CHEDx 2023 was a success,</span>
              <br />
              <span className="inline-block relative">
                so we're doing it again!
                <img
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
                  src={CurvedUnderline2}
                  alt="underline"
                />
              </span>
            </h2>
          </div>
        </section>
        <div className="relative h-full w-full pt-[5rem]">
          <div className="h-full w-full max-w-[568px] max-h-[568px] rounded-full absolute bg-yellow opacity-15 blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <LanddingCarousel />
        </div>
      </div>
      {/* section5 */}
      <div className="py-[5rem]" id="theSpeaker">
        <section className="gap-[4rem]" ref={textTrigger2}>
          <div className="flex flex-col gap-[2rem] text-center">
            <h2>
              <span className="text-yellow">Meet the</span>{" "}
              <span className="inline-block relative">
                Speakers
                <img
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
                  src={CurvedUnderline}
                  alt="underline"
                />
              </span>
            </h2>
            <h3 className="max-w-[768px]" ref={text2}>
              The summit brings together top experts to foster collaboration,
              open dialogue, and forward thinking, equipping delegates and
              industries with the insights and networks to confidently navigate
              the evolving workplace.
            </h3>
          </div>
          <SpeakersCarousel />
        </section>
      </div>
      {/* section6 */}
      <div className="py-[5rem]" id="progSched">
        <section className="gap-[4rem]" ref={textTrigger3}>
          <div className="flex flex-col gap-[2rem] text-center">
            <h2>
              <span className="text-yellow">
                CHED<sup>x</sup>2.0
              </span>
              <br />
              <span className="inline-block relative">
                Programme Schedule
                <img
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
                  src={CurvedUnderline2}
                  alt="underline"
                />
              </span>
            </h2>
            <h3 className="max-w-[652px]" ref={text3}>
              From insightful keynotes to engaging breakouts, each session is
              designed to inspire, educate, and propel you into the forefront of
              the ever-evolving landscape of technology and education.
            </h3>
          </div>
          <div className="w-full py-[3rem]">
            <MappedTimeline />
          </div>
        </section>
      </div>
      {/* section7 */}
      <div className="bg-yellow bg-opacity-20 w-full" id="nextPage">
        <section className="py-[5rem] flex-row justify-between">
          <div className="flex flex-col items-start justify-center gap-[2.5rem]">
            <h2>
              <span className="text-yellow">Secure your spot...</span>
              <br /> Join us today!
            </h2>
            <a
              href="https://lu.ma/sslgryut"
              target="_blank"
              rel="noopener noreferrer"
              title="registration"
            >
              <Button className="bg-yellow text-white">register now</Button>
            </a>
          </div>
          <svg
            width="178"
            height="199"
            viewBox="0 0 178 199"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ stroke: "#FFA802" }}
          >
            <path
              d="M88.7778 110.222C118.386 110.222 142.389 86.2197 142.389 56.6111C142.389 27.0025 118.386 3 88.7778 3C59.1692 3 35.1667 27.0025 35.1667 56.6111C35.1667 86.2197 59.1692 110.222 88.7778 110.222ZM88.7778 110.222C111.527 110.222 133.345 119.259 149.432 135.346C165.518 151.432 174.556 173.25 174.556 196M88.7778 110.222C66.0281 110.222 44.2102 119.259 28.1237 135.346C12.0373 151.432 3 173.25 3 196"
              stroke-width="6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </section>
      </div>
    </div>
  );
}
