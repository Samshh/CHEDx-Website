import { useState } from "react";
import Button from "@/components/ui/button";
import BreakoutRoom1 from "/BreakoutImages/Breakoutroom1.png";
import BreakoutRoom2 from "/BreakoutImages/Breakoutroom2.png";
import BreakoutRoom3 from "/BreakoutImages/Breakoutroom3.png";
import BreakoutRoom4 from "/BreakoutImages/Breakoutroom4.jpg";
import BreakoutRoom5 from "/BreakoutImages/Breakoutroom5.png";
import BreakoutRoom6 from "/BreakoutImages/Breakoutroom6.png";
import BreakoutRoom7 from "/BreakoutImages/Breakoutroom7.png";
import BreakoutRoom8 from "/BreakoutImages/Breakoutroom8.png";
import BreakoutRoom9 from "/BreakoutImages/Breakoutroom9.jpg";
import BreakoutRoom10 from "/BreakoutImages/Breakoutroom10.png";
import BreakoutRoom11 from "/BreakoutImages/Breakoutroom11.png";
import BreakoutRoom12 from "/BreakoutImages/Breakoutroom12.png";
import BreakoutRoom13 from "/BreakoutImages/Breakoutroom13.png";
import BreakoutRoom14 from "/BreakoutImages/Breakoutroom14.png";
import CardImage from "/Cybersecurity_BG.png";
import HeroBG from "/BreakoutBG.png";

interface CardDetails {
  title: string;
  subtitle: string;
  time: string;
  room: string;
  speaker: string;
  company: string;
}

export default function BreakoutSessions() {
  const [expandedCardIndex, setExpandedCardIndex] = useState<number | null>(
    null
  );
  const [activeDay, setActiveDay] = useState<1 | 2 | null>(null);

  const handleCardClick = (index: number, day: 1 | 2) => {
    setExpandedCardIndex(
      expandedCardIndex === index && activeDay === day ? null : index
    );
    setActiveDay(expandedCardIndex === index && activeDay === day ? null : day);
  };

  const cardDetails_day1: CardDetails[] = [
    {
      title: "AI for Academic Purpose",
      subtitle: "Associate Director",
      time: "2:16 - 3:00 PM",
      room: "Room A",
      speaker: "Virgilio Villarico",
      company: "Accenture Operations in the Philippines",
    },
    {
      title:
        "Investigating Generative AI Mechanisms for the Academe in Improving Educational Engagement and Outcomes",
      subtitle: "Academic Program Director",
      time: "2:16 - 3:00 PM",
      room: "Room B",
      speaker: "Michelle Banawan, PhD",
      company: "Asian Institute of Management",
    },
    {
      title:
        "The Future of Work: How Digital Transformation Is Changing Workforce Requirements and Skills",
      subtitle: "President",
      time: "3:16 PM - 4:00 PM",
      room: "Room A",
      speaker: "Dr. Dodgie Maestrecampo",
      company: "Mapua University",
    },
    {
      title: "Women in STEM",
      subtitle: "President",
      time: "3:16 PM - 4:00 PM",
      room: "Room B",
      speaker: "Michelle Alarcon",
      company: "Analytics Association of the Philippines",
    },
    {
      title:
        "Integrating Soft Skills with Domain Expertise for IT Professionals",
      subtitle: "Industry (iQor)",
      time: "4:01 PM - 4:45 PM",
      room: "Room A",
      speaker: "Ralf Ian Gallegos",
      company: "iQor",
    },
    {
      title:
        "Futures Learning Commons and Creative Spaces, Futures Information",
      subtitle: "Program Head, Bachelor of Science and Information Science",
      time: "4:01 PM - 4:45 PM",
      room: "Room B",
      speaker: "Asso. Prof. Stephen B. Alayon",
      company: "West Visayas State University",
    },
    {
      title:
        "Creating Seamless Pathways for Higher Education: Certifications and Microcredentials",
      subtitle: "Corporate Social Responsibility Leader",
      time: "4:46 PM - 5:30 PM",
      room: "Room A",
      speaker: "Ms. Yean Feng Yue",
      company: "IBM APAC",
    },
    {
      title:
        "Cybersecurity Synergy: Collaborative Strategies for Academia and Industry",
      subtitle: "Regional Director, GFCE Southeast Asia Hub",
      time: "4:46 PM - 5:30 PM",
      room: "Room B",
      speaker: "Allan S. Cabanlong, ASEAN Eng",
      company: "GFCE Southeast Asia Hub",
    },
  ];

  const cardDetails_day2: CardDetails[] = [
    {
      title:
        "Contact Center & Business Process PSF: Emerging Tech Career Pathways",
      subtitle:
        "Operations Director",
      time: "10:46 - 11:45 AM",
      room: "Room A",
      speaker: "Jay Santisteban",
      company: "Contact Center Association of the Philippines (CCAP)",
    },
    {
      title: "Global In-House Center PSF: Emerging Tech Career Pathway",
      subtitle: "Executive Director",
      time: "10:46 - 11:45 AM",
      room: "Room B",
      speaker: "Christine Bata",
      company: "Global In-House Center Council (GICC)",
    },
    {
      title: "Digital Arts and Animation PSF: Emerging Tech Career Pathways",
      subtitle: "Executive Director",
      time: "1:01 - 1:45 PM",
      room: "Room A",
      speaker: "Daniel Enriquez",
      company: "Animation Council of the Philippines (ACPI)",
    },
    {
      title: "Game Development PSF: Emerging Tech Career Pathways",
      subtitle: "Board Trustee",
      time: "1:01 - 1:45 PM",
      room: "Room B",
      speaker: "Amierose Ramos",
      company: "Game Developers Association of the Philippines (GDAP)",
    },
    {
      title: "Health Information Management PSF: Emerging Tech Career Pathways",
      subtitle:
        "Co-founder and President",
      time: "1:46 - 2:30 PM",
      room: "Room A",
      speaker: "Dr Carlos Ongaco",
      company:
        "Healthcare Information Management Association of the Philippines (HIMAP)",
    },
    {
      title:
        "Software Development and Security: PSF Emerging Tech Career Pathways",
      subtitle: "Board Trustee",
      time: "1:46 - 2:30 PM",
      room: "Room B",
      speaker: "Allan Tan",
      company: "Philippine Software Industry Association (PSIA)",
    },
  ];

  const getImageForCard = (title: string) => {
    switch (title) {
      case "AI for Academic Purpose":
        return BreakoutRoom1;
      case "Investigating Generative AI Mechanisms for the Academe in Improving Educational Engagement and Outcomes":
        return BreakoutRoom2;
      case "The Future of Work: How Digital Transformation Is Changing Workforce Requirements and Skills":
        return BreakoutRoom3;
      case "Women in STEM":
        return BreakoutRoom4;
      case "Integrating Soft Skills with Domain Expertise for IT Professionals":
        return BreakoutRoom5;
      case "Futures Learning Commons and Creative Spaces, Futures Information":
        return BreakoutRoom6;
      case "Creating Seamless Pathways for Higher Education: Certifications and Microcredentials":
        return BreakoutRoom7;
      case "Cybersecurity Synergy: Collaborative Strategies for Academia and Industry":
        return BreakoutRoom8;
      case "Contact Center & Business Process PSF: Emerging Tech Career Pathways":
        return BreakoutRoom9;
      case "Global In-House Center PSF: Emerging Tech Career Pathway":
        return BreakoutRoom10;
      case "Digital Arts and Animation PSF: Emerging Tech Career Pathways":
        return BreakoutRoom11;
      case "Game Development PSF: Emerging Tech Career Pathways":
        return BreakoutRoom12;
      case "Health Information Management PSF: Emerging Tech Career Pathways":
        return BreakoutRoom13;
      case "Software Development and Security: PSF Emerging Tech Career Pathways":
        return BreakoutRoom14;
      default:
        return CardImage;
    }
  };

  const renderCard = (card: CardDetails, index: number, day: 1 | 2) => (
    <div
      key={`${day}-${index}`}
      onClick={() => handleCardClick(index, day)}
      className={`relative cursor-pointer transition-transform duration-300 ease-in-out rounded-2xl border-[2px] border-green overflow-hidden bg-black bg-black-to-white-up ${
        expandedCardIndex === index && activeDay === day
          ? ""
          : "hover:scale-105 hover:shadow-xl relative"
      }`}
    >
      <img
        src={getImageForCard(card.title)}
        alt={`Card Image ${index + 1}`}
        className="w-full h-full object-cover opacity-80"
      />
      <div className="bg-black-to-white-up w-full h-full top-0 left-0 absolute" />
      <div className="border border-white bg-none rounded-lg px-2 py-0.5 mt-3 ml-3 text-white text-center max-w-max absolute top-0">
        <span className="grow-0">{card.time}</span>
      </div>
      <span className="absolute bottom-2 left-2 text-white px-2 py-1 rounded">
        {card.title}
      </span>

      {expandedCardIndex === index && activeDay === day && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-55 z-50">
          <div className="relative bg-transparent rounded-lg shadow-2xl max-w-2xl w-full">
            <div className="relative rounded-lg overflow-hidden">
              <div className="w-full h-full top-0 left-0 absolute bg-black bg-black-to-white-up" />
              <img
                src={getImageForCard(card.title)}
                alt="Expanded Card Image"
                className="w-full h-full object-cover rounded-lg opacity-50"
              />
              <div className="absolute top-2 left-2 text-sm text-white bg-opacity-50 px-3 py-1 rounded-lg border-white border my-3 mx-3">
                {card.time}
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold mb-1">{card.title}</h3>
                <p className="text-sm mb-1">{card.room}</p>
                <p className="text-sm mb-1">{card.speaker}</p>
                <p className="text-sm">{card.company}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="relative">
      <div className="relative bg-hero-bg bg-cover w-full h-screen flex items-center justify-center">
        <img
          src={HeroBG}
          alt="herobg"
          className="absolute w-full h-screen object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-center-transparent" />
        <div className="h-full w-full max-w-[568px] max-h-[568px] rounded-full absolute bg-green opacity-10 blur-3xl" />
        <h1 className="text-primary text-center relative z-10 text-green">
          BREAKOUT SESSIONS
        </h1>
      </div>
      <section id="breakoutSession">
        <div className="flex flex-col gap-5 mb-7 my-20">
          <div className="w-full flex justify-center">
            <div className="border border-green p-2 rounded-lg">
              <p>DAY 1</p>
            </div>
          </div>
          <h2 className="text-center my-3">DECEMBER 4, 2024</h2>
          <div className="w-full">
            <div
              id="breakoutDay1"
              className="grid sm:grid-rows-8 md:grid-rows-4 md:grid-cols-2 sm:grid-cols-1 gap-5"
            >
              {cardDetails_day1.map((card, index) =>
                renderCard(card, index, 1)
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 mb-7 mt-10 my-20">
          <div className="w-full flex justify-center">
            <div className="border border-green p-2 rounded-lg">
              <p>DAY 2</p>
            </div>
          </div>
          <h2 className="text-center my-3">DECEMBER 5, 2024</h2>
          <div className="w-full  mb-10">
            <div
              id="breakoutDay2"
              className="grid sm:grid-rows-6 md:grid-rows-3 md:grid-cols-2 sm:grid-cols-1 gap-5"
            >
              {cardDetails_day2.map((card, index) =>
                renderCard(card, index, 2)
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="bg-green bg-opacity-20 w-full">
        <section className="py-[5rem] flex-row justify-between">
          <div className="flex flex-col items-start justify-center gap-[2.5rem]">
            <h2>
              <span className="text-green">Secure your spot...</span>
              <br /> Join us today!
            </h2>
            <a
              href="https://lu.ma/sslgryut"
              target="_blank"
              rel="noopener noreferrer"
              title="registration"
            >
              <Button className="bg-green text-white">register now</Button>
            </a>
          </div>
          <svg
            width="178"
            height="199"
            viewBox="0 0 178 199"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ stroke: "#74c850" }}
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
