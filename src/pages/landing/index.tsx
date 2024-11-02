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
import LandingCard from "./components/landingCard";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import CurvedUnderline from "/underlines/landing_underline.svg";
import CurvedUnderline2 from "/underlines/landing2_underline.svg";
import landingArrow from "/landingArrow.svg";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

interface Timeline {
  [day: string]: Event[];
}

interface Event {
  time: string;
  segment: string;
  title: string;
  subtitle: string;
  segmentSpec?: string;
}

const timeline: Timeline = {
  "DAY 1": [
    {
      time: "8:00 AM - 8:45 AM",
      segment: "Registration & Welcome",
      title: "",
      subtitle: "",
    },
    {
      time: "8:45 AM - 9:00 AM",
      segment: "Pambansang Awit & Prayer",
      title: "USepP Chorale",
      subtitle: "CHED Hymn, VO Introductionof Speakers",
    },
    {
      time: "9:00 AM - 9:30 AM",
      segment: "Welcome Remarks",
      title: "Dr. Bonifacio G. Gabales, Jr. & Atty. Cinderella Filipina B. Jaro",
      subtitle: "SUC President, University of Southeastern Philippines, CHED Executive Director",
    },
    {
      time: "9:30 AM - 10:00 AM",
      segment: "Keynote Speaker: The Role of Higher Education in Producing Futur-Ready IT Professionals",
      title: "Chairman J. Prospero E. De Vera III",
      subtitle: "Commission on Higher Education, Ribbon Cutting of Exhibit",
    },
    {
      time: "10:00 AM - 10:30 AM",
      segment: "X-plor Partnerships and Exhibits",
      title: "Participants will make their way around the exhibit booths",
      subtitle: "AM Snacks now available",
    },
    {
      time: "10:30 AM - 11:00 AM",
      segment: "Bringing the industry to the Academe: Conceive Design Implement Operate (CDIO) Framework",
      title: "Prof Sin Moh Cheah",
      subtitle: "Singapore Polytechnic",
    },
    {
      time: "11:00 AM - 11:30 AM",
      segment: "CHED FIRe Framework",
      title: "Dr. Maricar S. Casquejo",
      subtitle: "Regional Director, CHED Region XI",
    },
    {
      time: "11:30 AM - 12:00 PM",
      segment: "Panel Discussion c/o CHED/IBPAP",
      title: "Education and the World of Work: Boosting Education through Smart Technologies (Project BEST)",
      subtitle: "Calen Martin D. Legaspi, Leuther Mojica, Haidee Enriquez",
    },
    {
      time: "12:00 PM - 13:30 PM",
      segment: "Lunch Break & X-plor Partnerships and Exhibits",
      title: "",
      subtitle: "",
    },
  ]
};

const MappedTimeline = () => {
  const navigate = useNavigate();
  const days = Object.keys(timeline);

  const res = days.flatMap((day, dayIndex) => (
    <div className="flex w-full" key={day}>
      <div className="text-end flex justify-end w-[25%] pr-10">
        <div className="flex flex-col">
          <h2 className="text-yellow leading-[25px] ">{day}</h2>
          <span>December 4, 2024</span>
        </div>
      </div>
      <div className="flex flex-col w-full">
        {timeline[day].map((event, eventIndex) => (
          <div className={`w-full gap-3 flex flex-col relative`} key={eventIndex}>
            {eventIndex === 0 && (
              <div className="absolute -left-2 -ml-1.5 h-7 w-7 border-yellow border bg-white z-10 rounded-full items-center justify-center flex">
                <div className="h-4 w-4 rounded-full bg-yellow z-20"></div>
              </div>
            )}
            <div className="flex flex-col min-h-52 border-l-[1.5px] border-yellow border-dashed pl-10 z-0  relative ">
              <div className="h-4 w-4 rounded-full bg-yellow z-20 absolute -left-0.5 mt-1.5 -ml-1.5"></div>
              <div className="min-h-52 hover:pl-10 transition-all duration-300 justify-center flex flex-col w-full">
                <div className="border border-yellow bg-none rounded-lg px-2 py-0.5 text-center max-w-max absolute top-0">
                  <span className="grow-0">{event.time}</span>
                </div>
                <div className="max-w-[568px]">
                  <h3 className="text-yellow">{event.segment}</h3>
                  <h3>{event.title}</h3>
                  <p>{event.subtitle}</p>
                </div>
              </div>
              {dayIndex === days.length - 1 && eventIndex === timeline[day].length - 1 && (
                <div className="absolute bottom-0 text-yellow hover:cursor-pointer hover:scale-110 transition-all duration-300">
                  <span onClick={() => navigate("/programme")} className="">VIEW FULL AGENDA</span>
                </div>
              )}
            </div>
            {dayIndex === days.length - 1 && eventIndex === timeline[day].length - 1 && (
              <div className="absolute -ml-1.5 bottom-0 h-4 w-4 rounded-full bg-yellow -left-[1px]"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  ));

  return <>{res}</>;
};

export default function Landing() {
  const partners = [IBAP, USEP, BagongPilipinas, CHEDLogo, PSITS, CDITE];
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
        },
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
          });
        }, 50);
      },
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
        },
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
              <span className="text-yellow">What is CHEDx,</span>
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
      <div className="py-[5rem]">
        <section className="relative">
          <div className="h-full w-full rounded-full absolute bg-yellow opacity-30 blur-3xl" />
          <div className="z-10 h-full w-full overflow-hidden">
            <iframe
              className="w-full h-[50vh] lg:h-[60vh] rounded-2xl"
              src="https://www.youtube.com/embed/cVQJtz2JwRA?si=9i5FxneXHyOhZplv"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </section>
      </div>
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
          <div></div>
        </section>
      </div>
      <div className="py-[5rem]">
        <section className="gap-[4rem]">
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
            <h3 className="max-w-[768px]">
              The summit brings together top experts to foster collaboration,
              open dialogue, and forward thinking, equipping delegates and
              industries with the insights and networks to confidently navigate
              the evolving workplace.
            </h3>
          </div>
          <div></div>
        </section>
      </div>
      <div className="py-[5rem]">
        <section className="gap-[4rem]">
          <div className="flex flex-col gap-[2rem] text-center">
            <h2>
              <span className="text-yellow">CHEDx 2024</span>
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
            <h3 className="max-w-[652px]">
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
      <div className="bg-yellow bg-opacity-20 w-full">
        <section className="py-[5rem] gap-[2rem] flex-col-reverse md:flex-row justify-between">
          <div className="flex flex-col items-center md:items-start justify-center gap-[2.5rem]">
            <h2 className="text-center md:text-start">
              <span className="text-yellow">
                Exciting things are comming...
              </span>
              <br /> Be the first to know what's next
            </h2>
            <Button className="bg-yellow text-white">
              Join the mailing list
            </Button>
          </div>
          <img src={landingArrow} alt="venue" />
        </section>
      </div>
    </div>
  );
}
