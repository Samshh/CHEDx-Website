import HeroBg from "../../../public/CHEDx_Hero.png";
import quoteOpen from "../../../public/quote_open.svg";
import quoteClose from "../../../public/quote_close.svg";
import Button from "../../@/ui/button";
import Tag from "../../@/ui/tag";

export default function Programme() {
  return (
    <section className="min-h-screen">
      <div className="">
        <img src={HeroBg} alt="Hero Background" />
        <h1 className="text-primary text-center">THE PROGRAMME</h1>
      </div>

      <div className="w-full">
        <div className="w-full">
          <img src={quoteOpen} alt="Quote Open" />
        </div>
        <div className="flex flex-col items-center text-center text-secondary">
          <Button>PROGRAM THEME</Button>
          <h1 className="text-primary">Building Synergy</h1>
          <h2 className="max-w-lg">Aligning IT Education with Industry Demands</h2>
        </div>
        <div className="w-full justify-end flex">
          <img src={quoteClose} alt="Quote Open" />
        </div>
      </div>

      <div>
        <div className="text-center flex flex-col">
          <h1 className="text-primary">CHEDx 2024</h1>
          <h2 className="text-secondary">Programme Schedule</h2>
          <p className="text-secondary max-w-2xl">
            Join us at CHEDx 2024 for two days of innovation in education! Discover cutting-edge IT skills, explore AI
            ethics, and gain targeted industry insights through keynotes and interactive sessions.
          </p>
        </div>
      </div>

      <div className="flex items-center w-full">
        <div className="flex flex-col text-end w-2/12 self-start">
          <span>DAY 1</span>
          <span>December 4, 2024</span>
        </div>

        <div className="w-2/12"></div>

        <div className="w-full gap-3 flex flex-col">
          <div className="flex flex-col justify-between min-h-52">
            <div className="border border-primary bg-none rounded-full px-2 py-1 text-center max-w-max">
              <span className="text-white grow-0">8:00 AM - 8:45 AM</span>
            </div>
            <div>
              <h2 className="text-white">Registration & Welcome</h2>
            </div>
          </div>

          <div className="flex flex-col justify-between min-h-52">
            <div className="border border-primary bg-none rounded-full px-2 py-1 text-center max-w-max">
              <span className="text-white grow-0">8:45 AM - 9:00 AM</span>
            </div>
            <div>
              <h2 className="text-white">Invocation and Introduction of Speakers</h2>
            </div>
          </div>

          <div className="flex flex-col justify-between min-h-52">
            <div className="border border-primary bg-none rounded-full px-2 py-1 text-center max-w-max">
              <p>9:00 AM - 9:30 AM</p>
            </div>
            <div className="text-white">
              <h2>Welcome Remarks</h2>
              <h2>Dr. Bonifacio G. Gabales, Jr.</h2>
              <p>SUC President, University of Southeastern Philippines</p>
            </div>
          </div>

          <div className="flex flex-col justify-between min-h-52">
            <div className="border border-primary bg-none rounded-full px-2 py-1 text-center max-w-max">
              <p>9:30 AM - 10:10 AM</p>
            </div>
            <div className="text-white">
              <div>
                <h2>Keynote Speaker</h2>
                <span>The Role of Higher Education in Producing Future-Ready IT Professionals</span>
              </div>
              <div>
                <h2>Dr. Bonifacio G. Gabales, Jr.</h2>
                <p>SUC President, University of Southeastern Philippines</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
