import {
  Globe,
  Smartphone,
  Palette,
  Zap,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    description:
      "Modern websites and web applications built for growth.",
    icon: Globe,
  },
  {
    title: "Responsive Design",
    description:
      "Seamless experiences across all screen sizes.",
    icon: Smartphone,
  },
  {
    title: "UI / UX Design",
    description:
      "Clean interfaces focused on usability and engagement.",
    icon: Palette,
  },
  {
    title: "Performance",
    description:
      "Fast-loading websites optimized for users and search engines.",
    icon: Zap,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="
        py-10
        px-6
        bg-[var(--background)]
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="max-w-3xl">

          <p
            className="
              text-amber-400
              uppercase
              tracking-[0.3em]
              text-sm
              font-bold
            "
          >
            What I Do
          </p>

          <h2
            className="
              mt-4
              text-2xl
              lg:text-5xl
              font-extrabold
              leading-tight
              text-[var(--foreground)]
            "
          >
            Helping Businesses Build

            <span className="block text-amber-400">
              Better Digital Experiences
            </span>
          </h2>

          <p
            className="
              mt-4
              text-lg
              text-[var(--muted)]
              leading-relaxed
            "
          >
            Modern web solutions designed to help businesses
            establish a stronger digital presence.
          </p>

        </div>

        {/* Cards */}

        <div
          className="
            mt-12
            grid
            md:grid-cols-2
            xl:grid-cols-4
            gap-5
          "
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="
                  group
                  bg-[var(--card)]
                  border
                  border-zinc-800/20
                  rounded-2xl
                  p-8
                  transition-all
                  duration-300
                  hover:border-amber-400
                  hover:-translate-y-2
                "
              >
                <div
                  className="
                    h-14
                    w-14
                    rounded-2xl
                    bg-amber-400/10
                    flex
                    items-center
                    justify-center
                    mb-5
                  "
                >
                  <Icon
                    size={34}
                    className="text-amber-400"
                  />
                </div>

                <h3
                  className="
                    text-xl
                    font-bold
                    mb-3
                    text-[var(--foreground)]
                  "
                >
                  {service.title}
                </h3>

                <p
                  className="
                    text-[var(--muted)]
                    leading-relaxed
                  "
                >
                  {service.description}
                </p>

              </div>
            );
          })}
        </div>

        {/* CTA */}

        <div className="flex justify-center mt-10">

          <a
            href="https://wa.me/2348145471258"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              inline-flex
              items-center
              gap-2
              px-8
              py-2
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
            Start A Project

            <ArrowRight
              size={20}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </a>

        </div>

      </div>
    </section>
  );
}