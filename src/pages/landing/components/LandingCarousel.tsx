import { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import landingIMG1 from "/landingIMG1.png";
import landingIMG2 from "/landingIMG2.png";
import landingIMG3 from "/landingIMG3.png";

export default function ImageCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const images = useMemo(() => [landingIMG1, landingIMG2, landingIMG3], []);
  const imagesWithDuplicates = useMemo(() => [...images, ...images], [images]);

  useEffect(() => {
    if (!carouselRef.current) return;

    const carousel = carouselRef.current;
    const totalImages = images.length;
    const imageWidth = 568;
    const gap = 20;
    const totalWidth = (imageWidth + gap) * totalImages;

    carousel.style.width = `${totalWidth * 2}px`;

    gsap.to(carousel, {
      x: `-${totalWidth}px`,
      duration: 20,
      ease: "none",
      repeat: -1,
    });

    return () => {
      gsap.killTweensOf(carousel);
    };
  }, [images]);

  return (
    <div className="overflow-hidden relative h-auto w-full max-w-[960px] mx-auto">
      <div className="flex" ref={carouselRef}>
        {imagesWithDuplicates.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[568px] mr-[20px]"
          >
            <img
              src={image}
              alt={`carousel-image-${index}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
