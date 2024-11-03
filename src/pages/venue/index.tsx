import Button from "@/components/ui/button";
import HeroBG from "/CHEDx_Hero.png";
import VenueSVG from "/Venue.svg";
import CurvedUnderline from "/underlines/venue_underline.svg";
import { useRef } from "react";
import useAnimateText from "@/components/animations/useAnimateText";

export default function Venue() {
  const textTrigger = useRef(null);
  const text = useRef(null);

  useAnimateText({ text: text, trigger: textTrigger });
  return (
    <div>
      <section>
        <div className="relative bg-hero-bg bg-cover w-screen min-h-[80vh] flex items-center justify-center">
          <img
            src={HeroBG}
            alt="herobg"
            className="absolute w-screen h-full object-cover"
          />
          <div className="absolute inset-0 bg-center-transparent" />
          <div className="h-full w-full max-w-[568px] max-h-[568px] rounded-full absolute bg-red opacity-10 blur-3xl" />
          <h1 className="text-primary text-center relative z-10 text-red">
            THE VENUE
          </h1>
        </div>
        <section
          className="relative flex flex-col items-center gap-[5rem] py-[10rem]"
          id="venueMap"
          ref={textTrigger}
        >
          <div className="text-center flex flex-col gap-[2rem]">
            <div>
              <h2>
                <span className="text-red">We are taking CHEDx</span>
                <br /> to{" "}
                <span className="relative inline-block">
                  Davao City!{" "}
                  <img
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
                    src={CurvedUnderline}
                    alt="undeline"
                  />
                </span>
              </h2>
            </div>
            <h3 ref={text}>
              The summit will be held at SMX DAVAO 3rd Level, SM Lanang Premier,
              J.P. Laurel Avenue, Lanang, Davao City <br /> See the embedded map
              below!
            </h3>
          </div>
          <div className="w-full lg:w-[60vw] h-[50vh] rounded-2xl overflow-hidden select-all z-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2702.9113505604123!2d125.62811235323208!3d7.09904807499031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f96c49ed5ede71%3A0x106fd6cf7f8bf06b!2sSMX%20Convention%20Center%20Davao!5e0!3m2!1sen!2sph!4v1730362045365!5m2!1sen!2sph"
              className="w-full h-full"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
          <div className="h-full w-full max-h-[568px] rounded-full absolute bottom-[3rem] bg-red opacity-10 blur-3xl" />
        </section>
      </section>
      <div className="bg-red bg-opacity-20 w-full" id="venueNext">
        <section className="py-[5rem] flex-row justify-between">
          <div className="flex flex-col items-start justify-center gap-[2.5rem]">
            <h2>
              <span className="text-red">Secure your spot...</span>
              <br /> Join us today!
            </h2>
            <Button className="bg-red text-white">register now</Button>
          </div>
          <img src={VenueSVG} alt="venue" />
        </section>
      </div>
    </div>
  );
}
