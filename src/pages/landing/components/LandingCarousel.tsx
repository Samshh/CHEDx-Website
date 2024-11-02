import landingIMG1 from "/landingIMG1.png";
import landingIMG2 from "/landingIMG2.png";
import landingIMG3 from "/landingIMG3.png";

export default function ImageCarousel() {
  const images = [landingIMG1, landingIMG2, landingIMG3];

  return (
    <div className="flex carousel justify-center items-center gap-8">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`carousel-image-${index}`}
          className={`w-auto h-full max-h-[568px] object-cover absolute ${index}`}
        />
      ))}
    </div>
  );
}
