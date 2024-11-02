import { useRef, useMemo } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import landingIMG1 from "/landingIMG1.png";
import landingIMG2 from "/landingIMG2.png";
import landingIMG3 from "/landingIMG3.png";

export default function ImageCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Using placeholder images - replace with your actual imports
  const images = useMemo(() => [landingIMG1, landingIMG2, landingIMG3], []);

  const duplicatedImages = useMemo(
    () => [...images, ...images, ...images],
    [images]
  );

  useGSAP(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current || !carouselRef.current) return;

      const carousel = containerRef.current;
      const imageWidth = carousel.firstElementChild?.clientWidth || 0;
      const gap = 32;
      const totalWidth = imageWidth + gap;

      gsap.to(carousel, {
        x: `-=${totalWidth}`,
        ease: "none",
        duration: 10,
        repeat: -1,
        onRepeat: () => {
          const firstImage = carousel.firstElementChild;
          if (!firstImage) return;

          carousel.appendChild(firstImage);

          gsap.set(carousel, { x: 0 });
        },
      });
    }, carouselRef);

    return () => ctx.revert();
  }, [duplicatedImages]);

  return (
    <div className="overflow-hidden w-full" ref={carouselRef}>
      <div className="relative w-screen">
        <div
          className="flex carousel justify-center items-center gap-8"
          ref={containerRef}
        >
          {duplicatedImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`carousel-image-${index}`}
              className="w-auto h-full max-h-[568px] object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
