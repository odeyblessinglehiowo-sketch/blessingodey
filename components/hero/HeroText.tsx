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
        Building Modern
        <br />
        Websites That
        <br />

        <span className="text-amber-300">
          Drive Real Results
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
          I'm Blessing Odey Lehiowo, a Web Developer who helps
          businesses, organizations, and startups transform ideas
          into fast, modern, and conversion-focused websites.
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
    Let's Talk

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