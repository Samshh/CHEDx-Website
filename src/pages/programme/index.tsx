import HeroBg from "../../../public/CHEDx_Hero.png";
import quoteOpen from "../../../public/quote_open.svg";
import quoteClose from "../../../public/quote_close.svg";

export default function Programme() {
  return (
    <section className="min-h-screen">
      <div className="">
        <img src={HeroBg} alt="Hero Background" />
        <h1 className="text-primary">THE PROGRAMME</h1>
      </div>

      <div className="w-full">
        <div className="w-full">
          <img src={quoteOpen} alt="Quote Open" />
        </div>
        <div className="flex flex-col items-center text-center text-secondary">
          <button>PROGRAMME THEME</button>
          <h1 className="text-primary">Building Synergy</h1>
          <h2>Aligning IT Education with Industry Demands</h2>
        </div>
        <div className="w-full items-end">
          <img src={quoteClose} alt="Quote Open" />
        </div>
      </div>

      <div>
        <div className="text-center flex flex-col">
          <h1 className="text-primary">CHEDx 2024</h1>
          <h2 className="text-secondary">Programme Schedule</h2>
          <p className="text-secondary">
            Join us at CHEDx 2024 for two days of innovation in education! Discover cutting-edge IT skills, explore AI
            ethics, and gain targeted industry insights through keynotes and interactive sessions.
          </p>
        </div>
      </div>

      <div>
        <div className="flex flex-col text-end">
          <span>DAY 1</span>
          <span>December 4, 2024</span>
        </div>
      </div>
    </section>
  );
}
