import CardImage from "../../../public/Cybersecurity_BG.png";
import HeroBG from "/HeroBG.svg";

export default function BreakoutSessions() {
  return (
    <section className="">
      <div className="relative bg-hero-bg bg-cover w-screen min-h-[80vh] flex items-center justify-center">
        <img src={HeroBG} alt="herobg" className="absolute w-screen h-full object-cover" />
        <div className="absolute inset-0 bg-center-transparent"></div>
        <div className="h-full w-full max-w-[568px] max-h-[568px] rounded-full absolute bg-green opacity-10 blur-3xl" />
        <h1 className="text-primary text-center relative z-10">THE PROGRAMME</h1>
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
  );
}
