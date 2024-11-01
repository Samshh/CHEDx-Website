import Tag from "@/components/ui/tag";
import CHEDxLogo from "/CHEDxLogo.svg";
import HeroBG from "/CHEDx_Hero.png";
import Button from "@/components/ui/button";

export default function Landing() {
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
          <div className="h-full w-full max-w-[568px] max-h-[568px] rounded-full absolute bg-yellow opacity-10 blur-3xl" />
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
      <div>
        <section>
          hello
        </section>
      </div>
    </div>
  );
}
