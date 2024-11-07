import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

interface Event {
  time: string;
  segment: string;
  title: string;
  subtitle: string;
}

interface Timeline {
  [day: string]: Event[];
}

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
      title: "USeP Chorale",
      subtitle: "CHED Hymn, VO Introduction of Speakers",
    },
    {
      time: "9:00 AM - 9:30 AM",
      segment: "Welcome Remarks",
      title:
        "Dr. Bonifacio G. Gabales, Jr. & Atty. Cinderella Filipina B. Jaro",
      subtitle:
        "SUC President, University of Southeastern Philippines, CHED Executive Director",
    },
    {
      time: "9:30 AM - 10:00 AM",
      segment:
        "Keynote Speaker: The Role of Higher Education in Producing Futur-Ready IT Professionals",
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
      segment:
        "Bringing the industry to the Academe: Conceive Design Implement Operate (CDIO) Framework",
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
      title:
        "Education and the World of Work: Boosting Education through Smart Technologies (Project BEST)",
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
};

const MappedTimeline = () => {
  const navigate = useNavigate();
  const days = Object.keys(timeline);
  const timelineRef = useRef(null);

  const res = days.flatMap((day, dayIndex) => (
    <div className="flex w-full" key={day} ref={timelineRef} id={`#${day}`}>
      <div className="text-end flex justify-end w-[25%] pr-10">
        <div className="flex flex-col timeline-event">
          <h2 className="text-yellow leading-[25px] ">{day}</h2>
          <h3>December 4, 2024</h3>
        </div>
      </div>
      <div className="flex flex-col w-full">
        {timeline[day].map((event, eventIndex) => (
          <div
            className=" w-full gap-3 flex flex-col relative"
            key={eventIndex}
          >
            {eventIndex === 0 && (
              <div className="absolute -left-2 -ml-1.5 h-7 w-7 border-yellow border bg-white z-10 rounded-full items-center justify-center flex">
                <div className="h-4 w-4 rounded-full bg-yellow z-20"></div>
              </div>
            )}
            <div className="flex flex-col min-h-40 border-l-[1.5px] border-yellow  border-dashed pl-10 z-0 relative">
              <div className="h-4 w-4 rounded-full bg-yellow z-20 absolute -left-0.5 mt-1.5 -ml-1.5"></div>
              <div className="min-h-40 hover:pl-10 transition-all duration-300 justify-center flex flex-col w-full timeline-event">
                <div className="border border-yellow bg-none rounded-lg px-2 py-0.5 text-center max-w-max absolute top-0">
                  <span className="grow-0">{event.time}</span>
                </div>
                <div className="max-w-[568px]">
                  <h3 className="text-yellow">{event.segment}</h3>
                  <h3>{event.title}</h3>
                  <p>{event.subtitle}</p>
                </div>
              </div>
              {dayIndex === days.length - 1 &&
                eventIndex === timeline[day].length - 1 && (
                  <Button
                    onClick={() => navigate("/programme")}
                    className="absolute -bottom-2 md:-bottom-3 bg-yellow text-white flex flex-row"
                  >
                    VIEW FULL AGENDA
                  </Button>
                )}
            </div>
            {dayIndex === days.length - 1 &&
              eventIndex === timeline[day].length - 1 && (
                <div className="absolute -ml-1.5 bottom-0 h-4 w-4 rounded-full bg-yellow -left-[1px]" />
              )}
          </div>
        ))}
      </div>
    </div>
  ));

  return <>{res}</>;
};

export default MappedTimeline;
