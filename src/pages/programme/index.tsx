import { ReactNode } from "react";
import quoteOpen from "/quote_open.svg";
import quoteClose from "/quote_close.svg";
import Button from "@/components/ui/button";
import HeroBG from "/CHEDx_Hero.png";
import CurvedUnderline from "/curve_underline.svg";

interface ContainerProps {
  children: ReactNode;
}

interface Event {
  time: string;
  segment: string;
  title: string;
  subtitle: string;
  segmentSpec?: string;
}

interface Timeline {
  [day: string]: Event[];
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="w-full py-20 flex flex-col">{children}</div>;
};

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
      segment: "Invocation and Introduction of Speakers",
      title: "",
      subtitle: "",
    },
    {
      time: "9:00 AM - 9:30 AM",
      segment: "Welcome Remarks",
      title: "Dr. Bonifacio G. Gabales, Jr.",
      subtitle: "SUC President, University of Southeastern Philippines",
    },
  ],
  "DAY 2": [
    {
      time: "TIME - TIME",
      segment: "SEGMENT",
      segmentSpec: "Segment specifics (optional)",
      title: "Person (add as many as needed, also optional)",
      subtitle: "Person affiliations (optional)",
    },
    {
      time: "TIME - TIME",
      segment: "SEGMENT",
      segmentSpec: "Segment specifics (optional)",
      title: "Person (add as many as needed, also optional)",
      subtitle: "Person affiliations (optional)",
    },
    {
      time: "TIME - TIME",
      segment: "SEGMENT",
      segmentSpec: "Segment specifics (optional)",
      title: "Person (add as many as needed, also optional)",
      subtitle: "Person affiliations (optional)",
    },
  ],
};

const MappedTimeline = () => {
  const days = Object.keys(timeline);

  const res = days.flatMap((day, dayIndex) => (
    <div className="flex w-full" key={day}>
      <div className="text-end flex justify-end w-[25%] pr-10">
        <div className="flex flex-col">
          <h2 className="text-blue leading-[25px] ">{day}</h2>
          <span>December 4, 2024</span>
        </div>
      </div>
      <div className="flex flex-col w-full">
        {timeline[day].map((event, eventIndex) => (
          <div className={`w-full gap-3 flex flex-col relative`} key={eventIndex}>
            {eventIndex === 0 && (
              <div className="absolute -left-2 -ml-1.5 h-7 w-7 border-blue border bg-white z-10 rounded-full items-center justify-center flex">
                <div className="h-4 w-4 rounded-full bg-blue z-20"></div>
              </div>
            )}
            {/* {eventIndex < timeline[day].length - 1 && (
              <div className="absolute -ml-1.5 bottom-0 h-4 w-4 rounded-full bg-blue -left-[1px]"></div>
            )} */}
            <div className="flex flex-col min-h-52 border-l-[1.5px] border-blue border-dashed pl-10 z-0  relative ">
              <div className="h-4 w-4 rounded-full bg-blue z-20 absolute -left-0.5 mt-1.5 -ml-1.5"></div>
              <div className="hover:cursor-pointer min-h-52 hover:ml-10 transition-all duration-300 justify-center flex flex-col w-full">
                <div className="border border-blue bg-none rounded-lg px-2 py-0.5 text-center max-w-max absolute top-0">
                  <span className="grow-0">{event.time}</span>
                </div>
                <div>
                  <h2>{event.segment}</h2>
                  <sub>{event.segmentSpec}</sub>
                  <sub>{event.subtitle}</sub>
                </div>
              </div>
              {dayIndex === days.length - 1 && eventIndex === timeline[day].length - 1 && (
                <div className="absolute bottom-0 text-blue hover:cursor-pointer hover:scale-110 transition-all duration-300">
                  <span className="">DOWNLOAD FULL AGENDA</span>
                </div>
              )}
            </div>
            {dayIndex === days.length - 1 && eventIndex === timeline[day].length - 1 && (
              <div className="absolute -ml-1.5 bottom-0 h-4 w-4 rounded-full bg-blue -left-[1px]"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  ));

  return <>{res}</>;
};

export default function Programme() {
  return (
    <>
      <section>
        <div className="relative bg-hero-bg bg-cover w-screen min-h-[80vh] flex items-center justify-center">
          <img src={HeroBG} alt="herobg" className="absolute w-screen h-full object-cover" />
          <div className="absolute inset-0 bg-center-transparent"></div>
          <div className="h-full w-full max-w-[568px] max-h-[568px] rounded-full absolute bg-blue opacity-10 blur-3xl" />
          <h1 className="text-blue text-center relative z-10">THE PROGRAMME</h1>
        </div>
        <Container>
          <div className="w-full">
            <img
              src={quoteOpen}
              alt="Quote Open"
              className="w-full h-auto max-w-[5rem] lg:max-w-[8.75rem] md:max-w-[7rem]"
            />
          </div>
          <div className="flex flex-col items-center text-center text-secondary p-5">
            <Button className="border border-blue rounded-lg hover:scale-110 transition-all duration-300">
              PROGRAMME THEME
            </Button>
            <h1 className="text-blue">Building Synergy</h1>
            <h2 className="max-w-lg">Aligning IT Education with Industry Demands</h2>
          </div>
          <div className="w-full justify-end flex">
            <img
              src={quoteClose}
              alt="Quote Open"
              className="w-full h-auto max-w-[5rem] lg:max-w-[8.75rem] md:max-w-[7rem]"
            />
          </div>
        </Container>
        <Container>
          <div className="text-center flex flex-col items-center h-full">
            <h1 className="text-blue">CHEDx 2024</h1>
            <div className="relative">
              <h2 className="text-secondary relative z-10">Programme Schedule</h2>
              <img src={CurvedUnderline} alt="" className="absolute lg:top-10 left-0 z-0 sm:bottom-0 bottom-0" />
            </div>
            <p className="text-secondary max-w-2xl">
              Join us at CHEDx 2024 for two days of innovation in education! Discover cutting-edge IT skills, explore AI
              ethics, and gain targeted industry insights through keynotes and interactive sessions.
            </p>
          </div>
        </Container>
        <Container>
          <MappedTimeline />
        </Container>
      </section>
      <div className="bg-blue bg-opacity-20 w-full">
        <section className="py-[5rem] flex-row justify-between">
          <div className="flex flex-col items-start justify-center gap-[2.5rem]">
            <h2>
              <span className="text-blue">Secure your spot...</span>
              <br /> Join us today!
            </h2>
            <Button className="bg-blue text-white hover:scale-110 hover:cursor-pointer transition-all duration-300">
              register now
            </Button>
          </div>
          <svg
            width="178"
            height="199"
            viewBox="0 0 178 199"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ stroke: "#38B6FF" }}
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
    </>
  );
}
