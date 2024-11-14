import { useRef, useMemo, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { speakersData } from "./speakers";

gsap.registerPlugin(ScrollTrigger);

export default function SpeakersCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const images = useMemo(() => speakersData.map((speaker) => speaker.img), []);
  const imagesWithDuplicates = useMemo(() => [...images, ...images], [images]);

  useEffect(() => {
    if (!carouselRef.current) return;

    const carousel = carouselRef.current;
    const totalImages = images.length;
    const imageWidth = 240;
    const gap = 20;
    const totalWidth = (imageWidth + gap) * totalImages;

    carousel.style.width = `${totalWidth * 2}px`;

    gsap.to(carousel, {
      x: `-${totalWidth}px`,
      duration: 30,
      ease: "none",
      repeat: -1,
    });

    return () => {
      gsap.killTweensOf(carousel);
    };
  }, [images]);

  return (
    <div className="overflow-hidden relative h-auto w-full max-w-[960px] mx-auto rounded-xl">
      <div className="flex" ref={carouselRef}>
        {imagesWithDuplicates.map((image, index) => {
          const speaker = speakersData[index % speakersData.length];
          return (
            <div
              key={index}
              className="flex-shrink-0 w-[240px] mr-[20px]  border-[2px] border-yellow rounded-3xl overflow-hidden"
            >
              <img
                src={image}
                alt={speaker.name}
                className="object-cover w-full h-[200px]"
                loading="lazy"
              />
              <div className="p-4">
                <p className="font-semibold">{speaker.name}</p>
                {speaker.tittle && <p>{speaker.tittle}</p>}
                <p className="text-yellow">{speaker.affil}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
