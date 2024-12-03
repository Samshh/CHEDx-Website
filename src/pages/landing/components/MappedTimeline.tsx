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
      time: "8:46 AM - 8:50 AM",
      segment: "Pambansang Awit",
      title: "USeP Harmonia Polinica Chorale",
      subtitle: "",
    },
    {
      time: "8:51 AM - 8:55 AM",
      segment: "Prayer",
      title: "USeP Harmonia Polinica Chorale",
      subtitle: "",
    },
    {
      time: "8:56 AM - 9:00 AM",
      segment: "CHED Hymn",
      title: "USeP Harmonia Polinica Chorale",
      subtitle: "",
    },
    {
      time: "9:01 AM - 9:15 AM",
      segment: "Welcome Remarks",
      title: "Dr. Bonifacio G. Gabales, Jr.",
      subtitle: "SUC IV President, University of Southeastern Philippines",
    },
    {
      time: "9:16 AM - 9:30 AM",
      segment: "CHEDˣ2.0 : The Road Ahead for Higher Ed",
      title: "Atty. Cinderella Filipina S. Benitez-Jaro",
      subtitle: "Executive Director IV, Commission on Higher Education",
    },
    {
      time: "9:31 AM - 9:45 AM",
      segment: "Presentation of the CHEDx2023 Coffee Table Book to CHED",
      title: "Dr. Ma. Teresita P. Medado",
      subtitle: "President, Asia Pacific College",
    },
    {
      time: "9:46 AM - 10:15 AM",
      segment:
        "Keynote Speaker: Building Synergy, Aligning with Industry, Leveraging IT Expertise",
      title: "Dr. J. Prospero E. de Vera III",
      subtitle: "Secretary, Commission on Higher Education",
    },
    {
      time: "10:16 AM - 10:45 AM",
      segment:
        "Government-Industry-Academe: Sealing the Synergy for IT Education Skills and Competencies",
      title:
        "Sealing Synergy for IT Education \na. Presentation of the PSF to CHED \nb. Launch of the ojt.ph platform",
      subtitle:
        "Jonathan Defensor De Luzuriaga\n Board of Trustee, IT & Business Process Association of the Philippines",
    },
    {
      time: "10:46 AM - 11:00 AM",
      segment: "Photo Opportunity",
      title: "",
      subtitle: "",
    },
    {
      time: "11:01 AM - 11:30 PM",
      segment: "Opening of the Exhibits and Ribbon Cutting",
      title: "Exhibits Tour",
      subtitle: "",
    },
    {
      time: "11:31 AM - 12:00",
      segment: "Press Conference",
      title: "",
      subtitle: "",
    },
    {
      time: "12:01 PM - 1:00 PM",
      segment: "Lunch Break",
      title: "",
      subtitle: "",
    },
    {
      time: "1:00 PM - 1:30 PM",
      segment: "Embracing Digital Transformation in Higher Education",
      title: "Dr. Shirely C. Agrupis",
      subtitle: "Commissioner, Commission on Higher Education",
    },
    {
      time: "1:31 PM - 2:00 PM",
      segment:
        "Bringing the Industry to the Academe: Conceive Design Implement Operate (CDIO) Framework",
      title: "Mr. Kim Fai SOH",
      subtitle:
        "Deputy Director, School of Mechanical and  Aeronautical Engineering, Singapore Polytechnic",
    },
    {
      time: "2:01 PM - 2:45 PM",
      segment:
        "Panel Discussion: Education and the World of Work: Boosting Education through Smart Technologies (Project BEST)",
      title: `Moderator: Calen Martin D. Legaspi, <p>CHED Technical Committee on Computer Science and Board Trustee, Philippine Software Industry Association (PSIA)</p>Panel Members:`,
      subtitle:
        "CHED OPSD, SKIPP Proponents - Leuther Mojica, \nBusiness Head, Orange & Bronze (IBPAP), PSF - Haidee Enriquez (CEO Microsourcing), \nOneil Victoriano, AdDU-CHED-SKiPP Project Lead, \nDr. Gregg Victor Gabison , PH Country Manager, Ray Business Technologies, CHED TCIS Member",
    },
    {
      time: "2:46 PM - 3:30 PM",
      segment: "BREAKOUT 1: AI for Academic Purpose",
      title: "Virgilio Villarico",
      subtitle:
        "Associate Director, Innovation and Gen AI Lead, Accenture Operations in the Philippines",
    },
    {
      time: "",
      segment: "BREAKOUT 2: Women in STEM",
      title: "Michelle Alarcon",
      subtitle: "President, Analytics Association of the Philippines",
    },
    {
      time: "3:31 PM - 3:40 PM",
      segment: "Tech Bite",
      title: "",
      subtitle: "",
    },
    {
      time: "3:41 PM - 4:10 PM",
      segment:
        "BREAKOUT 3: The Future of Work: How Digital Transformation Is Changing Workforce Requirements and Skills",
      title: "Dr. Dodjie S. Maestrecampo",
      subtitle: "President, Mapua University",
    },
    {
      time: "",


      segment:
        "BREAKOUT 4: Investigating Generative AI Mechanisms for the Academe in Improving Educational Engagement and Outcomes",
      title: "Dr. Michelle Banawan",
      subtitle: "Academic Program Director, Asian Institute of Management",
    },
    {
      time: "4:11 PM - 4:45 PM",
      segment:
        "BREAKOUT 5: Integrating Soft Skills with Domain Expertise for IT Professionals",
      title: "Ralf Ian Gallegos",
      subtitle: "Manager, Recruiting, iQor",
    },
    {
      time: "",
      segment:
        "BREAKOUT 6: Futures Learning Commons and Creative Spaces, Futures Information",
      title: "Asso. Prof. Stephen B. Alayon",
      subtitle:
        "Program Head, Bachelor of Science and Information Science, West Visayas State University",
    },
    {
      time: "4:46 PM - 5:15 PM",
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
      time: "5:16 PM - 5:30 PM",
      segment: "Transitioning CHEDx 2.0 to CHEDx 2025: Levelling up Onwards",
      title: "Dr. Cherry Lyn Sta. Romana",
      subtitle: "Dean, College of Computer Studies, Cebu Institute of Technology-University",
    },
    {
      time: "5:31 PM - 5:45 PM",
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

                <div className="max-w-[568px] flex flex-col gap-3">
                  <h3 className="text-yellow">{event.segment}</h3>
                  <div className="flex flex-col">
                    <h3 dangerouslySetInnerHTML={{ __html: event.title }} />
                    <p>{formatText(event.subtitle)}</p>
                  </div>
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
