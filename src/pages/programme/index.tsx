import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import quoteOpen from "/quote_open.svg";
import quoteClose from "/quote_close.svg";
import Button from "@/components/ui/button";
import HeroBG from "/Programme_Hero.png";
import CurvedUnderline from "/underlines/programme_underline.svg";
import RightArrow from "/right-arrow.svg";

interface ContainerProps {
  children: ReactNode;
}

interface Event {
  time: string;
  segment: string;
  title: string;
  subtitle: string;
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
      segment: "Registration",
      title: "Welcome and Safety Instructions",
      subtitle: "",
    },
    {
      time: "8:45 AM - 9:00 AM",
      segment: "Pambansang Awit & Prayer",
      title: "USepP Chorale",
      subtitle: "CHED Hymn, VO Introduction of Speakers",
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
      time: "12:00 PM - 1:30 PM",
      segment: "Lunch Break & X-plor Partnerships and Exhibits",
      title: "",
      subtitle: "",
    },
    {
      time: "1:30 PM - 5:0 PM",
      segment: "BREAKOUT ROOMS",
      title: "",
      subtitle: "",
    },
    {
      time: "5:00 PM - 5:15 PM",
      segment: "Synthesis of Day 1 - CHED Regional Office",
      title: "",
      subtitle: "",
    },
  ],

  "DAY 2": [
    {
      time: "8:00 AM - 8:45 AM",
      segment: "Registration",
      title: "",
      subtitle: "",
    },
    {
      time: "8:45 AM - 9:15 AM",
      segment: "PQF and PSF: Supporting the Frameworks c/o IBPAP",
      title: "PQF National Coordinating Council, PSF Resource Persons",
      subtitle: "",
    },
    {
      time: "9:15 AM - 10:0 AM",
      segment: "PSF Foundational Overview c/o IBPAP",
      title: "DTI PTTC",
      subtitle: "",
    },
    {
      time: "10:00 AM - 10:15 AM",
      segment: "Turnover Ceremony of PSF from DICT to Industry Associations c/o IBPAP",
      title: "USec Jocelle Batapa-Sique",
      subtitle: "DICT",
    },
    {
      time: "10:45 AM - 11:45 AM",
      segment: "BREAKOUT ROOMS",
      title: "",
      subtitle: "",
    },
    {
      time: "11:45 AM - 1:30 PM",
      segment: "Group Photo",
      title: "Lunch",
      subtitle: "",
    },
    {
      time: "1:30 PM - 3:00 PM",
      segment: "BREAKOUT ROOMS",
      title: "",
      subtitle: "",
    },
    {
      time: "3:00 PM - 3:15 PM",
      segment: "PM Snacks",
      title: "X-plore Partnerships and Exhibits",
      subtitle: "",
    },
    {
      time: "3:15 PM - 5:00 PM",
      segment: "Building Synergy: Aligning IT Education with Industry Demands (panel discussion with audience Q & A)",
      title: "representing the SUCs & the Industry",
      subtitle: "",
    },
    {
      time: "5:00 PM - 5:15 PM",
      segment: "Covenant Signing",
      title: "",
      subtitle: "",
    },
    {
      time: "5:15 PM - 5:30 PM",
      segment: "Synthesis of Day 2 - CHED Regional Office",
      title: "",
      subtitle: "",
    },
  ],
};

const MappedTimeline = () => {
  const navigate = useNavigate();
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
            <div className="flex flex-col min-h-52 border-l-[1.5px] border-blue border-dashed pl-10 z-0  relative ">
              <div className="h-4 w-4 rounded-full bg-blue z-20 absolute -left-0.5 mt-1.5 -ml-1.5"></div>
              <div className="min-h-52 hover:pl-10 transition-all duration-300 justify-center flex flex-col w-full">
                <div className="border border-blue bg-none rounded-lg px-2 py-0.5 text-center max-w-max absolute top-0">
                  <span className="grow-0">{event.time}</span>
                </div>
                <div className="max-w-[568px]">
                  <h3 className="text-blue">{event.segment}</h3>
                  <h3>{event.title}</h3>
                  <p>{event.subtitle}</p>
                </div>
              </div>
              {dayIndex === days.length - 1 && eventIndex === timeline[day].length - 1 && (
                <div className="absolute bottom-0 text-blue hover:cursor-pointer hover:scale-110 transition-all duration-300 flex gap-5 items-center">
                  <span onClick={() => navigate("/programme")} className="">
                    VIEW FULL AGENDA
                  </span>
                  <svg
                    fill="#38B6FF"
                    height="25px"
                    width="25px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 330 330"
                  >
                    <path
                      id="XMLID_27_"
                      d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
	s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
	c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
                    />
                  </svg>
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
        <div className="relative bg-hero-bg bg-cover w-screen min-h-[80vh] flex items-center justify-center flex-col">
          <img src={HeroBG} alt="herobg" className="absolute w-screen h-full object-cover" />
          <div className="absolute inset-0 bg-center-transparent"></div>
          <div className="h-full w-full max-w-[568px] max-h-[568px] rounded-full absolute bg-blue opacity-10 blur-3xl" />
          <h2>DECEMBER 4 - 5, 2024</h2>
          <h2>SMX DAVAO 3rd Level, SM Lanang Premier</h2>
          <h1 className="text-blue text-center relative z-10">THE PROGRAMME</h1>
          <p className="max-w-3xl text-center">
            Embark on a dynamic two-day journey at CHEDx 2023, where innovation meets education. From compelling
            keynotes to interactive X-change sessions, explore the forefront of IT skills development, delve into the
            ethical dimensions of AI, and gain sector-specific insights. Join us for a transformative experience shaping
            the future of technology in education. Let the exploration begin!{" "}
          </p>
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
            <Button className="border border-blue rounded-lg hover:scale-110 transition-all duration-300 cursor-default">
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
