import HeroText from "./HeroText";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        overflow-hidden
        min-h-screen
        pt-28
        lg:pt-20
        px-6
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          grid
          lg:grid-cols-2
          gap-10
          lg:gap-16
          items-center
        "
      >
        <HeroText />
        <HeroImage />
      </div>
    </section>
  );
}