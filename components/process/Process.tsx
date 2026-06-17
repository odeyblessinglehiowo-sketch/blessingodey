import {
  Search,
  ClipboardList,
  Code2,
  Rocket,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Understanding your business, goals, audience, and project requirements.",
    icon: Search,
  },

  {
    number: "02",
    title: "Planning",
    description:
      "Defining structure, user experience, content, and technical requirements.",
    icon: ClipboardList,
  },

  {
    number: "03",
    title: "Development",
    description:
      "Designing and developing a modern, responsive, and high-performing solution.",
    icon: Code2,
  },

  {
    number: "04",
    title: "Launch",
    description:
      "Testing, deployment, optimization, and post-launch support.",
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <section
      className="
        py-10
        lg:py-20
        px-6
        bg-[var(--background)]
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
{/* Header */}

<div
  className="
    max-w-3xl
    mb-10
    lg:mb-14
  "
>
  <p
    className="
      text-amber-400
      uppercase
      tracking-[0.3em]
      text-sm
      font-bold
    "
  >
    My Process
  </p>

  <h2
    className="
      mt-4
      text-2xl
      md:text-4xl
      lg:text-5xl
      font-extrabold
      leading-tight
      text-[var(--foreground)]
    "
  >
    From Idea To

    <span className="text-amber-400">
      {" "}Launch
    </span>
  </h2>

  <p
    className="
      mt-4
      max-w-2xl
      text-base
      lg:text-xl
      leading-relaxed
      text-[var(--muted)]
    "
  >
    A structured process that keeps projects organized,
    transparent, and focused on delivering results.
  </p>
</div>

        {/* Timeline */}

        <div
          className="
            relative
            grid
            grid-cols-2
            lg:grid-cols-4
            gap-y-12
            lg:gap-10
          "
        >
          {/* Desktop Line */}

          <div
            className="
              hidden
              lg:block
              absolute
              top-8
              left-[12%]
              right-[12%]
              h-[2px]
              bg-amber-400/20
            "
          />

          {/* Mobile Horizontal Top */}

          <div
            className="
              lg:hidden
              absolute
              top-8
              left-[20%]
              right-[20%]
              h-[2px]
              bg-amber-400/20
            "
          />

          {/* Mobile Horizontal Bottom */}

          <div
            className="
              lg:hidden
              absolute
              top-[212px]
              left-[20%]
              right-[20%]
              h-[2px]
              bg-amber-400/20
            "
          />

          {/* Mobile Vertical Connector */}

         

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="
                  relative
                  text-center
                "
              >
                {/* Circle */}

                <div
                  className="
                    relative
                    z-10
                    mx-auto
                    h-16
                    w-16
                    lg:h-20
                    lg:w-20
                    rounded-full
                    bg-[var(--card)]
                    border-2
                    border-amber-400
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Icon
                    size={24}
                    className="text-amber-400"
                  />
                </div>

                {/* Number */}

                <p
                  className="
                    mt-4
                    text-amber-400
                    font-bold
                    tracking-widest
                    text-sm
                  "
                >
                  {step.number}
                </p>

                {/* Title */}

                <h3
                  className="
                    mt-2
                    text-lg
                    lg:text-2xl
                    font-bold
                    text-[var(--foreground)]
                  "
                >
                  {step.title}
                </h3>

                {/* Desktop Description Only */}

                <p
                  className="
                    hidden
                    lg:block
                    mt-3
                    text-[var(--muted)]
                    leading-relaxed
                  "
                >
                  {step.description}
                </p>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}