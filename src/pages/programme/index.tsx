import { ReactNode } from "react";
import quoteOpen from "/quote_open.svg";
import quoteClose from "/quote_close.svg";
import Button from "@/components/ui/button";
import HeroBG from "/Programme_Hero.png";
import CurvedUnderline from "/underlines/programme_underline.svg";
import MappedTimeline from "./_components/MappedTimeline";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="w-full py-20 flex flex-col">{children}</div>;
};

export default function Programme() {
  return (
    <>
      <section>
        <div
          className="relative bg-hero-bg bg-cover w-screen min-h-[80vh] flex items-center justify-center flex-col"
          id="#programme"
        >
          <img
            src={HeroBG}
            alt="herobg"
            className="absolute w-screen h-full object-cover"
          />
          <div className="absolute inset-0 bg-center-transparent"></div>
          <div className="h-full w-full max-w-[568px] max-h-[568px] rounded-full absolute bg-blue opacity-10 blur-3xl" />
          <div className="z-10">
            <h1 className="text-blue text-center relative z-10">
              THE PROGRAMME
            </h1>
            <p className="max-w-3xl text-center text-lg">
              Embark on a dynamic two-day journey at CHEDx 2023, where
              innovation meets education. From compelling keynotes to
              interactive X-change sessions, explore the forefront of IT skills
              development, delve into the ethical dimensions of AI, and gain
              sector-specific insights. Join us for a transformative experience
              shaping the future of technology in education. Let the exploration
              begin!{" "}
            </p>
          </div>
        </div>
        <Container>
          <div className="w-full" id="#theme">
            <img
              src={quoteOpen}
              alt="Quote Open"
              className="w-full h-auto max-w-[5rem] lg:max-w-[8.75rem] md:max-w-[7rem]"
            />
          </div>
          <div className="flex flex-col items-center text-center text-secondary p-5">
            <Button className="border border-blue rounded-lg hover:scale-110 transition-all duration-300 cursor-default">
              PROGRAMME THEME
            </Button>
            <h1 className="text-blue">Building Synergy</h1>
            <h2 className="max-w-lg">
              Aligning IT Education with Industry Demands
            </h2>
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
              <h2 className="text-secondary relative z-10">
                Programme Schedule
              </h2>
              <img
                src={CurvedUnderline}
                alt=""
                className="absolute lg:top-10 left-0 z-0 sm:bottom-0 bottom-0"
              />
            </div>
            <p className="text-secondary max-w-2xl">
              Join us at CHEDx 2024 for two days of innovation in education!
              Discover cutting-edge IT skills, explore AI ethics, and gain
              targeted industry insights through keynotes and interactive
              sessions.
            </p>
          </div>
        </Container>
        <Container>
          <MappedTimeline />
        </Container>
      </section>
      <div className="bg-blue bg-opacity-20 w-full">
        <section className="py-[5rem] flex-row justify-between" id="#next">
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
