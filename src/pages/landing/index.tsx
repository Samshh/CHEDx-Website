import Tag from "@/components/ui/tag";
import CHEDxLogo from "/CHEDxLogo.svg";
import HeroBG from "/CHEDx_Hero.png";
import Button from "@/components/ui/button";
import IBAP from "/landingLogos/IBAP.svg";
import USEP from "/landingLogos/USEP.svg";
import BagongPilipinas from "/landingLogos/BagongPilipinas.svg";
import PSITS from "/landingLogos/PSITS.svg";
import CHEDLogo from "/landingLogos/CHEDLogo.svg";
import CDITE from "/landingLogos/CDITE.svg";
import LandingCard from "./components/landingCard";

export default function Landing() {
  const partners = [IBAP, USEP, BagongPilipinas, PSITS, CHEDLogo, CDITE];
  return (
    <div className="flex flex-col">
      <div className="relative">
        <img
          src={HeroBG}
          alt="herobg"
          className="absolute w-screen h-full object-cover"
        />
        <div className="absolute inset-0 bg-center-transparent" />
        <section className="relative h-screen">
          <div className="h-full w-full max-w-[568px] max-h-[568px] rounded-full absolute bg-yellow opacity-15 blur-3xl" />
          <div className="flex flex-col items-center justify-center gap-[3rem] mb-[4rem] z-10">
            <div className="flex flex-col items-center justify-center">
              <Tag className="border-yellow">V 2024</Tag>
              <img src={CHEDxLogo} alt="CHEDx" />
            </div>
            <div className="flex flex-col justify-center items-center gap-[2rem]">
              <p className="uppercase text-center">
                december 4 - 5, 2024
                <br />
                @davao city
              </p>
              <Button className="bg-yellow text-white">Register now</Button>
            </div>
          </div>
        </section>
      </div>
      <div className="py-[5rem]">
        <section className="relative gap-[5rem]">
          <div className="h-full w-full max-w-[568px] max-h-[568px] rounded-full absolute bg-yellow opacity-15 blur-3xl" />
          <div className="max-w-[751px] w-full flex justify-center sm:justify-between items-center gap-[3rem] flex-wrap">
            {partners.map((partner, index) => (
              <img key={index} src={partner} alt={`partner-${index}`} />
            ))}
          </div>
          <div className="text-center flex flex-col gap-[2rem]">
            <h2>
              <span className="text-yellow">What is CHEDx,</span>
              <br /> and why should you join?
            </h2>
            <h3 className="max-w-[768px]">
              In today’s fast-evolving tech landscape, CHEDx keeps you informed
              on ethical implications, promotes responsible use, and fosters
              collaboration to make technology impactful, bridging gaps and
              strengthening human connections.
            </h3>
          </div>
          <div className="grid max-w-[471px] grid-rows-2 grid-cols-2 lg:grid-rows-1 lg:grid-cols-4 gap-[2rem] w-full lg:max-w-[985px]">
            <LandingCard
              title="speakers"
              icon="pepicons-pencil:microphone-handheld"
              number={52}
            />
            <LandingCard
              title="speakers"
              icon="pepicons-pencil:microphone-handheld"
              number={52}
            />
            <LandingCard
              title="speakers"
              icon="pepicons-pencil:microphone-handheld"
              number={52}
            />
            <LandingCard
              title="speakers"
              icon="pepicons-pencil:microphone-handheld"
              number={52}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
