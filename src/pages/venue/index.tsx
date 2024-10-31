import HeroBG from "/CHEDx_Hero.png";

export default function Venue() {
  return (
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
      <section className="flex flex-col items-center gap-[5rem] py-[10rem]">
        <div className="text-center flex flex-col gap-[2rem]">
          <div>
            <h1 className="text-red">We are taking CHEDx</h1>
            <h2>to Davao City!</h2>
          </div>
          <h3>
            The summit will be held at SMX Lanang Premier at JP Laurel Ave. at
            Davao City. <br /> See the embedded map below!
          </h3>
        </div>
        <div className="w-full lg:w-[60vw] h-[50vh] rounded-lg overflow-hidden select-all">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2702.9113505604123!2d125.62811235323208!3d7.09904807499031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f96c49ed5ede71%3A0x106fd6cf7f8bf06b!2sSMX%20Convention%20Center%20Davao!5e0!3m2!1sen!2sph!4v1730362045365!5m2!1sen!2sph"
            className="w-full h-full"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </section>
  );
}
