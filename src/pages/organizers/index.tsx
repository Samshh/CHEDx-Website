import IBAP from "/landingLogos/IBAP.svg";
import USEP from "/landingLogos/USEP.svg";
import BagongPilipinas from "/landingLogos/BagongPilipinas.svg";
import PSITS from "/landingLogos/PSITS.svg";
import CHEDLogo from "/landingLogos/CHEDLogo.svg";
import CDITE from "/landingLogos/CDITE.svg";

export default function Organizers() {
  const partners = [BagongPilipinas, CHEDLogo, USEP, IBAP, PSITS, CDITE];
  return (
    <section className="min-h-screen py-[15rem] relative">
      <div className="h-full w-full max-w-[568px] max-h-[568px] rounded-full absolute bg-yellow opacity-15 blur-3xl" />
      <div className="w-full flex justify-center items-center gap-[3.36rem] flex-wrap z-10">
        {partners.map((partner, index) => (
          <img
            className="h-[156px] w-auto"
            key={index}
            src={partner}
            alt={`partner-${index}`}
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
}
