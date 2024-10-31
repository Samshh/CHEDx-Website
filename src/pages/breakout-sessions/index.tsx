import Button from "@/components/ui/button";
import CardImage from "/Cybersecurity_BG.png";
import HeroBG from "/HeroBG.svg";

export default function BreakoutSessions() {
  return (
    <>
      <section>
        <div className="relative bg-hero-bg bg-cover w-screen min-h-[80vh] flex items-center justify-center">
          <img src={HeroBG} alt="herobg" className="absolute w-screen h-full object-cover" />
          <div className="absolute inset-0 bg-center-transparent" />
          <div className="h-full w-full max-w-[568px] max-h-[568px] rounded-full absolute bg-green opacity-10 blur-3xl" />
          <h1 className="text-primary text-center relative z-10 text-green">BREAKOUT SESSIONS</h1>
        </div>
        <div className="flex flex-col gap-5 mb-7">
          <div className="w-full flex justify-center">
            <div className="border border-green p-2 rounded-lg">
              <p>DAY 1</p>
            </div>
          </div>
          <h2>DECEMBER 4, 2024</h2>
        </div>

        <div className="w-full">
          <div className="grid grid-cols-2 gap-5">
            <div className="relative">
              <img src={CardImage} alt="Card Image" className="w-full h-full object-cover rounded-lg" />
              <p className="absolute bottom-2 left-2 text-white bg-black px-2 py-1 rounded">Breakout Room</p>
            </div>
            <div className="relative">
              <img src={CardImage} alt="Card Image" className="w-full h-full object-cover rounded-lg" />
              <p className="absolute bottom-2 left-2 text-white bg-black px-2 py-1 rounded">Breakout Room</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 mt-10 mb-7">
          <div className="w-full flex justify-center">
            <div className="border border-green p-2 rounded-lg">
              <p>DAY 2</p>
            </div>
          </div>
          <h2>DECEMBER 5, 2024</h2>
        </div>

        <div className="w-full">
          <div className="grid grid-cols-2 gap-5">
            <div className="relative">
              <img src={CardImage} alt="Card Image" className="w-full h-full object-cover rounded-lg" />
              <p className="absolute bottom-2 left-2 text-white bg-black px-2 py-1 rounded">Breakout Room</p>
            </div>
            <div className="relative">
              <img src={CardImage} alt="Card Image" className="w-full h-full object-cover rounded-lg" />
              <p className="absolute bottom-2 left-2 text-white bg-black px-2 py-1 rounded">Breakout Room</p>
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
            style={{ stroke: "#74C850" }}
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
