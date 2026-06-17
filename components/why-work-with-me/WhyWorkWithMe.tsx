import {
  Zap,
  MonitorSmartphone,
  Target,
  Handshake,
} from "lucide-react";

const reasons = [
  {
    title: "Fast Performance",
    description:
      "Websites optimized for speed, smooth user experiences, and better search engine visibility.",
    icon: Zap,
  },

  {
    title: "Responsive Design",
    description:
      "A consistent experience across desktops, tablets, and mobile devices.",
    icon: MonitorSmartphone,
  },

  {
    title: "Business Focused",
    description:
      "Every design and development decision is made with your goals, customers, and growth in mind.",
    icon: Target,
  },

  {
    title: "Reliable Support",
    description:
      "Clear communication, timely updates, and dependable support throughout the project.",
    icon: Handshake,
  },
];

export default function WhyWorkWithMe() {
  return (
    <section
      className="
        py-28
        px-6
        bg-[var(--section)]
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="max-w-3xl mb-16">

          <p
            className="
              text-amber-400
              uppercase
              tracking-[0.3em]
              text-sm
              font-bold
            "
          >
            Why Work With Me
          </p>

          <h2
            className="
              mt-6
              text-5xl
              lg:text-5xl
              font-extrabold
              leading-tight
              text-[var(--foreground)]
            "
          >
            More Than Just
            <span className="text-amber-400">
              {" "}Building Websites
            </span>
          </h2>

          <p
            className="
              mt-6
              text-xl
              text-[var(--muted)]
              leading-relaxed
            "
          >
            I focus on creating digital experiences that not only
            look great, but also help businesses attract customers,
            build trust, and grow online.
          </p>

        </div>

        {/* Cards */}

        <div
          className="
            grid
            md:grid-cols-4
            gap-6
          "
        >
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="
                  group
                  rounded-3xl
                  bg-[var(--card)]
                  border
                  border-zinc-800/10
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-amber-400
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
                    mb-6
                  "
                >
                  <Icon
                    size={28}
                    className="text-amber-400"
                  />
                </div>

                <h3
                  className="
                    text-2xl
                    font-bold
                    mb-4
                    text-[var(--foreground)]
                  "
                >
                  {reason.title}
                </h3>

                <p
                  className="
                    text-[var(--muted)]
                    leading-relaxed
                  "
                >
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}