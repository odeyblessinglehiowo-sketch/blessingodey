import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function HeroText() {
  return (
    <div className="space-y-5 lg:space-y-10">

      <p
        className="
          text-amber-300
          uppercase
          tracking-[0.25em]
          text-xs
          md:text-sm
          lg:text-base
          font-bold
        "
      >
        WEB DESIGN • DEVELOPMENT
      </p>

      <h1
        className="
          text-4xl
          sm:text-6xl
          lg:text-7xl
          font-extrabold
          leading-[0.95]
          tracking-tight
        "
      >
        I Build Websites
        <br />

        <span className="text-amber-300">
          That Work as Hard  <br />As You Do.
        </span>
      </h1>

      <div className="max-w-2xl space-y-4">

        <p
          className="
            text-lg
            sm:text-xl
            lg:text-2xl
            text-[var(--foreground)]
            leading-relaxed
          "
        >
          For online stores, NGOs, public figures, and more, 
          I build fast, modern websites and web applications that make your 
          work easier to find, easier to trust, and easier to act on.
        </p>

        <p
          className="
            text-base
            lg:text-lg
            text-[var(--muted)]
          "
        >
          Founder of OdeyForge Technologies.
        </p>

      </div>

      <div
  className="
    flex
    flex-col
    sm:flex-row
    gap-4
  "
>
  <a
    href="#projects"
    className="
      group
      flex
      items-center
      justify-center
      gap-2
      px-8
      py-3
      rounded-2xl
      bg-amber-400
      text-black
      font-bold
      text-lg
      transition-all
      duration-300
      hover:scale-105
    "
  >
    View Projects

    <ArrowRight
      size={20}
      className="
        transition-transform
        duration-300
        group-hover:translate-x-1
      "
    />
  </a>

  <a
    href="#contact"
    className="
      group
      flex
      items-center
      justify-center
      gap-2
      px-8
      py-3
      rounded-2xl
      border
      border-[var(--foreground)]
      text-[var(--foreground)]
      font-medium
      text-lg
      transition-all
      duration-300
      hover:border-amber-400
      hover:text-amber-400
    "
  >
    Start a Project

    <ArrowUpRight
      size={20}
      className="
        transition-transform
        duration-300
        group-hover:translate-x-1
        group-hover:-translate-y-1
      "
    />
  </a>
</div>

    </div>
  );
}