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
      subtitle: "CHED Hymn",
    },
    {
      time: "9:00 AM - 9:15 AM",
      segment: "Welcome Remarks",
      title: "Dr. Bonifacio G. Gabales, Jr.",
      subtitle: "SUC IV President, University of Southeastern Philippines",
    },
    {
      time: "9:15 AM - 9:30 AM",
      segment: "CHEDˣ2.0 : The Road Ahead for Higher Ed",
      title: "Atty. Cinderella Filipina S. Benitez-Jaro",
      subtitle: "CHED Executive Director IV",
    },
    {
      time: "9:30 AM - 10:00 AM",
      segment: "Keynote Speaker: Building Synergy, Aligning with Industry, Leveraging IT Expertise",
      title: "Secretary J. Prospero E. de Vera III",
      subtitle: "Commission on Higher Education",
    },
    {
      time: "10:00 AM - 10:30 AM",
      segment: "Private Sector Advisory Council (PSAC) Jobs for IT Human Resource Development",
      title: "Mr. Fred Ayala",
      subtitle: "",
    },
    {
      time: "10:30 AM - 10:45 AM",
      segment: "PSF Overview by IBPAP",
      title: "Frankie Antolin",
      subtitle: "IT & Business Porcess Association, \nED for Talent Attraction and Development",
    },
    {
      time: "10:45 AM - 11:00 AM",
      segment: "Government-Industry-Academe PSF Commitment Ceremony ",
      title: "CHED, \nDICT, \nIBPAP",
      subtitle: "",
    },
    {
      time: "11:00 AM - 11:10 AM",
      segment: "Photo Opportunity",
      title: "",
      subtitle: "",
    },
    {
      time: "11:10 AM - 11:30 PM",
      segment: "Opening of the Exhibits and Ribbon Cutting",
      title: "Exhibits Tour",
      subtitle: "",
    },
    {
      time: "11:30 AM - 12: 00",
      segment: "Press Conference",
      title: "",
      subtitle: "",
    },
    {
      time: "12:00 PM - 1:00 PM",
      segment: "Lunch Break",
      title: "",
      subtitle: "",
    },
    {
      time: "1:00 PM - 1:30 PM",
      segment: "Bringing the Industry to the Academe: Conceive Design Implement Operate (CDIO) Framework",
      title: "Prof Sin Moh Cheah",
      subtitle: "Singapore Polytechnic",
    },
    {
      time: "1:30 PM - 2:15 PM",
      segment:
        "Panel Discussion: Education and the World of Work: Boosting Education through Smart Technologies (Project BEST)",
      title:
        "Moderator: Calen Martin D. Legaspi, CHED Technical Committee on Computer Science and Board Trustee, Philippine Software Industry Association (PSIA)",
      subtitle:
        "Panel Members: CHED OPSD, SKIPP Proponents - Leuther Mojica, \nBusiness Head, Orange & Bronze (IBPAP), PSF - Haidee Enriquez (CEO Microsourcing),  \nOneil Victoriano, AdDU-CHED-SKiPP Project Lead, \n Dr. Gregg Victor Gabison , CHED Technical Panel",
    },
    {
      time: "2:15 PM - 3:00 PM",
      segment: "BREAKOUT 1: AI for Academic Purpose",
      title: "Virgilio Villarico",
      subtitle: "Accenture Operations in the Philippines, Associate Director: Innovation and Gen AI Lead",
    },
    {
      time: "",
      segment:
        "BREAKOUT 2: Investigating Generative AI Mechanisms for the Academe in Improving Educational Engagement and Outcomes",
      title: "Michelle Banawan, PhD",
      subtitle: "Academic Program Director, Asian Institute of Management",
    },
    {
      time: "3:00 PM - 3:15 PM",
      segment: "Tech Bite",
      title: "",
      subtitle: "",
    },
    {
      time: "3:15 PM - 4:00 PM",
      segment:
        "BREAKOUT 3: The Future of Work: How Digital Transformation Is Changing Workforce Requirements and Skills",
      title: "Dr. Dodgie Maestrecampo",
      subtitle: "Mapua University, President",
    },
    {
      time: "",
      segment: "BREAKOUT 4: Women in STEM",
      title: "Michelle Alarcon",
      subtitle: "President, Analytics Association of the Philippines",
    },
    {
      time: "4:00 PM - 4:45 PM",
      segment: "BREAKOUT 5: Integrating Soft Skills with Domain Expertise for IT Professionals",
      title: "IBPAP",
      subtitle: "Industry (iQor)",
    },
    {
      time: "",
      segment: "BREAKOUT 6: Futures Learning Commons and Creative Spaces, Futures Information",
      title: "Asso. Prof. Stephen B. Alayon",
      subtitle: "Program Head, Bachelor of Science and Information Science, West Visayas State University",
    },
    {
      time: "4:45 PM - 5:30 PM",
      segment:
        "BREAKOUT 7: Creating Seamless Pathways for Higher Education: Certifications and Microcredentials",
      title: "Ms. Yean Feng Yue",
      subtitle: "IBM Corporate Social Responsibility Leader - APAC",
    },
    {
      time: "",
      segment:
        "BREAKOUT 8: Cybersecurity Synergy: Collaborative Strategies for Academia and Industry in the Evolving Digital Landscape",
      title: "Allan S. Cabanlong, Asean Eng",
      subtitle: "Regional Director, GFCE Southeast Asia Hub",
    },
    {
      time: "5:30 PM - 5:45 PM",
      segment: "Highlights of Day 1",
      title: "",
      subtitle: "",
    },
  ],
};

const MappedTimeline = () => {
  const days = Object.keys(timeline);
  const timelineRef = useRef(null);
  const navigate = useNavigate();

  const formatText = (text: string) => {
    return text.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  const res = days.flatMap((day, dayIndex) => (
    <div className="flex w-full" key={day} ref={timelineRef} id={`#${day}`}>
      <div className="text-end flex justify-end w-[25%] pr-10">
        <div className="flex flex-col timeline-event">
          <h2 className="text-yellow leading-[25px] ">{day}</h2>
          <h3>{day === "DAY 1" ? "December 4, 2024" : "December 5, 2024"}</h3>
        </div>
      </div>
      <div className="flex flex-col w-full">
        {timeline[day].map((event, eventIndex) => (
          <div className="w-full gap-3 flex flex-col relative" key={eventIndex}>
            {eventIndex === 0 && (
              <div className="absolute -left-2 -ml-1.5 h-7 w-7 border-yellow border bg-white z-10 rounded-full items-center justify-center flex">
                <div className="h-4 w-4 rounded-full bg-yellow z-20"></div>
              </div>
            )}
            <div className="flex flex-col min-h-fit border-l-[1.5px] border-yellow border-dashed pl-10 z-0 relative">
              <div className="h-4 w-4 rounded-full bg-yellow z-20 absolute -left-0.5 mt-1.5 -ml-1.5"></div>
              <div className="min-h-fit pb-[2rem] md:hover:pl-10 transition-all duration-300 gap-3 flex flex-col w-full timeline-event">
                {event.time && (
                  <div className="border-[2px] border-yellow bg-none rounded-lg px-2 py-0.5 text-center max-w-max top-0">
                    <span className="grow-0">{event.time}</span>
                  </div>
                )}

                <div className="max-w-[568px]">
                  <h3 className="text-yellow">{event.segment}</h3>
                  <h3>{formatText(event.title)}</h3>
                  <p>{formatText(event.subtitle)}</p>
                </div>
              </div>
              {dayIndex === days.length - 1 &&
                eventIndex === timeline[day].length - 1 && (
                  <Button
                    onClick={() => navigate("/programme")}
                    className="absolute -bottom-2 md:-bottom-3 bg-yellow text-white flex flex-row"
                  >
                    VIEW FULL PROGRAMME
                  </Button>
                )}
            </div>
            {dayIndex === days.length - 1 &&
              eventIndex === timeline[day].length - 1 && (
                <div className="absolute -ml-1.5 bottom-0 h-4 w-4 rounded-full bg-yellow -left-[1px]"></div>
              )}
          </div>
        ))}
      </div>
    </div>
  ));

  return <>{res}</>;
};

export default MappedTimeline;
