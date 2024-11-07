import { useState } from "react";
import Button from "@/components/ui/button";
import CardImage from "/Cybersecurity_BG.png";
import HeroBG from "/CHEDx_Hero.jpg";

interface CardDetails {
  title: string;
  subtitle: string;
  time: string;
}

export default function BreakoutSessions() {
  const [expandedCardIndex, setExpandedCardIndex] = useState<number | null>(
    null
  );

  const handleCardClick = (index: number) => {
    setExpandedCardIndex(expandedCardIndex === index ? null : index);
  };

  const cardDetails_day1: CardDetails[] = [
    {
      title: "AI for Academic Purpose",
      subtitle: "Industry (Accenture) - c/o IBPAP",
      time: "1:30 PM - 2:15 PM",
    },
    {
      title:
        "Investigating Generative AI Mechanisms for the Academe in Improving Educational Engagement and Outcomes",
      subtitle: "Academic Program Director, Asian Institute of Management",
      time: "1:30 PM - 2:15 PM",
    },
    {
      title: "Topic on Future's Thinking / Digital Transformation",
      subtitle: "Panel Speakers (CHED, DepED, Industry)",
      time: "2:15 PM - 3:00 PM",
    },
    {
      title: "Women in STEM",
      subtitle: "President, Analytics Association of the Philippines",
      time: "2:15 PM - 3:00 PM",
    },
    {
      title: "Soft Skills for IT Professionals c/o IBPAP",
      subtitle: "Industry (iQor)",
      time: "3:30 PM - 4:15 PM",
    },
    {
      title:
        "Futures Library, Futures Information: Uncover Sustainable Opportunity for Collaboration and Innovation",
      subtitle:
        "Program Head, Bachelor of Science and Information Science, West Visayas State University",
      time: "3:30 PM - 4:15 PM",
    },
    {
      title: "Role of Certifications and Microcredentials in Education",
      subtitle: "Training Platform",
      time: "4:15 PM - 5:00 PM",
    },
    {
      title:
        "Cybersecurity Synergy: Collaborative Strategies for Academia and Industry in the Evolving Digital Landscape",
      subtitle: "Regional Director, GFCE Southeast Asia Hub",
      time: "4:15 PM - 5:00 PM",
    },
  ];

  const cardDetails_day2: CardDetails[] = [
    {
      title:
        "Contact Center & Business Process PSF Emerging Tech Career Pathways",
      subtitle: "Sector Representative",
      time: "10:45 PM - 11:45 PM",
    },
    {
      title: "Shared Services PSF Emerging Tech Career Pathway",
      subtitle: "Sector Representative",
      time: "1:30 PM - 2:15 PM",
    },
    {
      title: "Animation PSF Emerging Tech Career Pathways",
      subtitle: "Sector Representative",
      time: "1:30 PM - 2:15 PM",
    },
    {
      title: "Game Development PSF Emerging Tech Career Pathways",
      subtitle: "Sector Representative",
      time: "1:30 PM - 2:15 PM",
    },
    {
      title: "Healthcare PSF Emerging Tech Career Pathways c/o IBPAP",
      subtitle: "Sector Representative",
      time: "2:15 PM - 3:00 PM",
    },
    {
      title: "IT & Software PSF Emerging Tech Career Pathways",
      subtitle: "Sector Representative",
      time: "2:15 PM - 3:00 PM",
    },
  ];

  const renderCard = (card: CardDetails, index: number) => (
    <div
      key={index}
      onClick={() => handleCardClick(index)}
      className={`relative cursor-pointer transition-transform duration-300 ease-in-out rounded-2xl border-[2px] border-green ${
        expandedCardIndex === index
          ? ""
          : "hover:scale-105 hover:shadow-xl relative"
      }`}
    >
      <img
        src={CardImage}
        alt={`Card Image ${index + 1}`}
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="border border-white bg-none rounded-lg px-2 py-0.5 mt-3 ml-3 text-white text-center max-w-max absolute top-0">
        <span className="grow-0">{card.time}</span>
      </div>
      <span className="absolute bottom-2 left-2 text-white px-2 py-1 rounded">
        {card.title}
      </span>

      {expandedCardIndex === index && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-55 z-50">
          <div className="relative bg-white p-0 rounded-full shadow-2xl transform transition-transform duration-300 max-w-2xl w-full">
            <div className="relative">
              <img
                src={CardImage}
                alt="Expanded Card Image"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute top-2 left-2 text-sm text-white bg-opacity-50 px-3 py-1 rounded-lg border-white border my-3 mx-3">
                {card.time}
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold mb-1">{card.title}</h3>
                <p className="text-sm">{card.subtitle}</p>
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
          className="absolute w-full h-screen object-cover"
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
            <div id="breakoutDay1" className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5">
              {cardDetails_day1.map(renderCard)}
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
            <div id="breakoutDay2" className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5">
              {cardDetails_day2.map(renderCard)}
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
            <Button className="bg-green text-white hover:scale-110 hover:cursor-pointer transition-all duration-300">
              register now
            </Button>
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
