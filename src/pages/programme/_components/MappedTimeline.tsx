import Button from "@/components/ui/button";
import { useRef } from "react";

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
      segment:
        "Turnover Ceremony of PSF from DICT to Industry Associations c/o IBPAP",
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
      segment:
        "Building Synergy: Aligning IT Education with Industry Demands (panel discussion with audience Q & A)",
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
  const days = Object.keys(timeline);
  const timelineRef = useRef(null);

  const res = days.flatMap((day, dayIndex) => (
    <div className="flex w-full" key={day} ref={timelineRef} id={`#${day}`}>
      <div className="text-end flex justify-end w-[25%] pr-10">
        <div className="flex flex-col timeline-event">
          <h2 className="text-blue leading-[25px] ">{day}</h2>
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
              <div className="absolute -left-2 -ml-1.5 h-7 w-7 border-blue border bg-white z-10 rounded-full items-center justify-center flex">
                <div className="h-4 w-4 rounded-full bg-blue z-20"></div>
              </div>
            )}
            <div className="flex flex-col min-h-40 border-l-[1.5px] border-blue  border-dashed pl-10 z-0 relative">
              <div className="h-4 w-4 rounded-full bg-blue z-20 absolute -left-0.5 mt-1.5 -ml-1.5"></div>
              <div className="min-h-40 hover:pl-10 transition-all duration-300 justify-center flex flex-col w-full timeline-event">
                <div className="border border-blue bg-none rounded-lg px-2 py-0.5 text-center max-w-max absolute top-0">
                  <span className="grow-0">{event.time}</span>
                </div>
                <div className="max-w-[568px]">
                  <h3 className="text-blue">{event.segment}</h3>
                  <h3>{event.title}</h3>
                  <p>{event.subtitle}</p>
                </div>
              </div>
              {dayIndex === days.length - 1 &&
                eventIndex === timeline[day].length - 1 && (
                  <Button
                    onClick={() => console.log("Download Agenda")}
                    className="absolute -bottom-2 md:-bottom-3 bg-blue text-white flex flex-row"
                  >
                    DOWNLOAD AGENDA
                  </Button>
                )}
            </div>
            {dayIndex === days.length - 1 &&
              eventIndex === timeline[day].length - 1 && (
                <div className="absolute -ml-1.5 bottom-0 h-4 w-4 rounded-full bg-blue -left-[1px]"></div>
              )}
          </div>
        ))}
      </div>
    </div>
  ));

  return <>{res}</>;
};

export default MappedTimeline;
