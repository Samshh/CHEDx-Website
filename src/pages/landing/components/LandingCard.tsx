import { Icon } from "@iconify/react";

interface LandingCardProps {
  title: string;
  icon: string;
  number: number;
}

export default function LandingCard({ title, icon, number }: LandingCardProps) {
  return (
    <div className="text-[#B9B9B9] rounded-2xl border-[2px] border-[#B9B9B9] flex flex-col justify-center items-center transition-all ease-linear hover:scale-105 px-[3rem] py-[3rem] hover:text-yellow hover:border-yellow z-10 select-none">
      <Icon icon={icon} className="text-[3rem] md:text-[4rem]" />
      <h2 className="text-[2.5rem] md:text-[3rem]">{number}</h2>
      <p className="uppercase font-semibold">{title}</p>
    </div>
  );
}