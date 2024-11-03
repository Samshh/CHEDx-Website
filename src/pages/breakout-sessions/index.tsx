import { useState } from "react";
import Button from "@/components/ui/button";
import CardImage from "/Cybersecurity_BG.png";
import HeroBG from "/HeroBG.svg";

interface CardDetails {
  title: string;
  date: string;
  time: string;
  moderator: string;
  speakers: number;
}

export default function BreakoutSessions() {
  const [expandedCardIndex, setExpandedCardIndex] = useState<number | null>(
    null
  );

  const handleCardClick = (index: number) => {
    setExpandedCardIndex(expandedCardIndex === index ? null : index);
  };

  const cardDetails: CardDetails[] = [
    // Cards for December 4, 2024
    {
      title: "Breakout Room 1",
      date: "DECEMBER 4, 2024",
      time: "00:00 PM - 00:00 PM",
      moderator: "kuan",
      speakers: 3,
    },
    {
      title: "Breakout Room 2",
      date: "DECEMBER 4, 2024",
      time: "00:00 PM - 00:00 PM",
      moderator: "kuan",
      speakers: 4,
    },
    {
      title: "Breakout Room 3",
      date: "DECEMBER 4, 2024",
      time: "00:00 PM - 00:00 PM",
      moderator: "kuan",
      speakers: 5,
    },
    {
      title: "Breakout Room 4",
      date: "DECEMBER 4, 2024",
      time: "00:00 PM - 00:00 PM",
      moderator: "Grace Hopper",
      speakers: 2,
    },
    {
      title: "Breakout Room 5",
      date: "DECEMBER 4, 2024",
      time: "00:00 PM - 00:00 PM",
      moderator: "kuan",
      speakers: 3,
    },
    {
      title: "Breakout Room 6",
      date: "DECEMBER 4, 2024",
      time: "00:00 PM - 00:00 PM",
      moderator: "kuan",
      speakers: 1,
    },

    // Cards for December 5, 2024
    {
      title: "Breakout Room 7",
      date: "DECEMBER 5, 2024",
      time: "00:00 PM - 00:00 PM",
      moderator: "kuan",
      speakers: 3,
    },
    {
      title: "Breakout Room 8",
      date: "DECEMBER 5, 2024",
      time: "00:00 PM - 00:00 PM",
      moderator: "kuan",
      speakers: 4,
    },
    {
      title: "Breakout Room 9",
      date: "DECEMBER 5, 2024",
      time: "00:00 PM - 00:00 PM",
      moderator: "kuan",
      speakers: 5,
    },
    {
      title: "Breakout Room 10",
      date: "DECEMBER 5, 2024",
      time: "00:00 PM - 00:00 PM",
      moderator: "kuan",
      speakers: 2,
    },
    {
      title: "Breakout Room 11",
      date: "DECEMBER 5, 2024",
      time: "00:00 PM - 00:00 PM",
      moderator: "kuan",
      speakers: 3,
    },
    {
      title: "Breakout Room 12",
      date: "DECEMBER 5, 2024",
      time: "00:00 PM - 00:00 PM",
      moderator: "kuan",
      speakers: 1,
    },
  ];

  const renderCard = (card: CardDetails, index: number) => (
    <div
      key={index}
      onClick={() => handleCardClick(index)}
      className={`relative cursor-pointer transition-transform duration-300 ease-in-out ${
        expandedCardIndex === index ? "" : "hover:scale-105 hover:shadow-xl"
      }`}
    >
      <img
        src={CardImage}
        alt={`Card Image ${index + 1}`}
        className="w-full h-full object-cover rounded-lg"
      />
      <p className="absolute bottom-2 left-2 text-white bg-black px-2 py-1 rounded">
        {card.title}
      </p>

      {/* Expanded floating view */}
      {expandedCardIndex === index && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative bg-white p-0 rounded-lg shadow-2xl transform transition-transform duration-300 max-w-2xl w-full">
            {/* Floating Card Content */}
            <div className="relative">
              <img
                src={CardImage}
                alt="Expanded Card Image"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute top-2 left-2 text-sm text-white bg-black bg-opacity-50 px-3 py-1 rounded-full">
                {card.time}
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold mb-1">{card.title}</h3>
                <p className="text-sm">{card.moderator}</p>
                <p className="text-sm">{card.speakers} Speakers</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      <section>
        <div className="relative bg-hero-bg bg-cover w-screen min-h-[80vh] flex items-center justify-center">
          <img
            src={HeroBG}
            alt="herobg"
            className="absolute w-screen h-full object-cover"
          />
          <div className="absolute inset-0 bg-center-transparent" />
          <div className="h-full w-full max-w-[568px] max-h-[568px] rounded-full absolute bg-green opacity-10 blur-3xl" />
          <h1 className="text-primary text-center relative z-10 text-green">
            BREAKOUT SESSIONS
          </h1>
        </div>

        <div className="flex flex-col gap-5 mb-7">
          <div className="w-full flex justify-center">
            <div className="border border-green p-2 rounded-lg">
              <p>DAY 1</p>
            </div>
          </div>
          <h2 className="text-center my-3">DECEMBER 4, 2024</h2>
        </div>

        <div className="w-full">
          <div className="grid grid-cols-2 gap-5">
            {cardDetails.slice(0, 6).map(renderCard)}
          </div>
        </div>

        <div className="flex flex-col gap-5 mb-7 mt-10">
          <div className="w-full flex justify-center">
            <div className="border border-green p-2 rounded-lg">
              <p>DAY 2</p>
            </div>
          </div>
          <h2 className="text-center my-3">DECEMBER 5, 2024</h2>
        </div>

        <div className="w-full mb-10">
          <div className="grid grid-cols-2 gap-5">
            {cardDetails.slice(6).map(renderCard)}
          </div>
        </div>

        {/* Register section */}
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
    </>
  );
}
