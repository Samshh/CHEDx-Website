import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import landingIMG1 from "/landingIMG1.png";
import landingIMG2 from "/landingIMG2.png";
import landingIMG3 from "/landingIMG3.png";

export default function ImageCarousel() {
  const carouselRef = useRef(null);
  const images = [landingIMG1, landingIMG2, landingIMG3];

  const duplicatedImages = [...images, ...images];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const animation = gsap.to(".carousel", {
        xPercent: -50,
        ease: "none",
        duration: 20,
        repeat: -1,
      });

      animation.eventCallback("onUpdate", () => {
        const carousel = document.querySelector(".carousel");
        const progress = animation.progress();
        if (progress >= 0.5) {
          animation.progress(0);
          if (carousel) {
            const firstSet = Array.from(carousel.querySelectorAll("img")).slice(0, images.length);
            firstSet.forEach((img) => {
              carousel.appendChild(img);
            });
          }
        }
      });
    }, carouselRef);

    return () => ctx.revert();
  }, [images]);

  return (
    <div className="overflow-hidden w-full" ref={carouselRef}>
      <div className="relative w-screen">
        <div className="flex carousel justify-center items-center gap-8">
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
