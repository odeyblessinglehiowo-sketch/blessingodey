import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="
        py-24
        lg:py-22
        px-6
        bg-[var(--background)]
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          grid
          lg:grid-cols-2
          gap-16
          lg:gap-20
          items-center
        "
      >
        {/* IMAGE COLUMN */}

        <div
          className="
            relative
            max-w-[420px]
            mx-auto
            order-2
            lg:order-1
          "
        >
          {/* Glow */}

          <div
            className="
              absolute
              -z-10
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              h-[350px]
              w-[350px]
              rounded-full
              bg-amber-400/10
              blur-[100px]
            "
          />

          {/* Main Card */}

          <div
            className="
              relative
              z-10
              bg-[var(--card)]
              rounded-[32px]
              border
              border-zinc-800/20
              p-6
              shadow-[0_25px_80px_rgba(0,0,0,0.20)]
            "
          >
            {/* Inner Frame */}

            <div
              className="
                rounded-[20px]
                border-2
                border-amber-400
                p-3
              "
            >
              <Image
                src="/images/blessingol.png"
                alt="Blessing Odey Lehiowo"
                width={420}
                height={520}
                className="
                  rounded-[18px]
                  object-cover
                  shadow-2xl
                "
              />
            </div>

            {/* Name */}

            <div className="mt-5 text-center">

              <h3
                className="
                  text-2xl
                  font-bold
                  text-[var(--foreground)]
                "
              >
                Blessing Odey Lehiowo
              </h3>

              <p
                className="
                  mt-3
                  text-amber-400
                  uppercase
                  tracking-[0.25em]
                  text-sm
                  font-semibold
                "
              >
                Web Developer
              </p>

            </div>

          </div>
        </div>

        {/* TEXT COLUMN */}

        <div
          className="
            order-1
            lg:order-2
          "
        >
          <p
            className="
              text-amber-400
              uppercase
              tracking-[0.3em]
              text-sm
              font-bold
              mb-6
            "
          >
            About Me
          </p>

          <h2
            className="
              text-2xl
              lg:text-5xl
              font-extrabold
              leading-tight
              mb-8
              text-[var(--foreground)]
            "
          >
            Turning Ideas Into
            <br />

            <span className="text-amber-400">
              Useful Web Experiences
            </span>
          </h2>

          <div
            className="
              space-y-6
              text-lg
              lg:text-xl
              leading-relaxed
              text-[var(--foreground)]
            "
          >
            <p>
              I'm Blessing Odey Lehiowo, a Web Developer focused on
              building modern, responsive, and user-friendly websites
              that help businesses establish a strong digital presence.
            </p>

            <p >
              I work primarily with React, Next.js, TypeScript,
              Tailwind CSS, Node.js, PostgreSQL, Supabase,
              and modern web technologies to build fast,
              scalable, and maintainable web applications.
            </p>

            <p >
              Whether it's a business website, portfolio,
              web application, or custom platform, my goal
              is always the same: create solutions that
              provide real value to users and businesses.
            </p>
          </div>

         
          {/* Skills */}

          <div
            className="
              flex
              flex-wrap
              gap-2
              mt-8
            "
          >
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Node.js",
              "Supabase",
            ].map((skill) => (
              <span
                key={skill}
                className="
                  px-4
                  py-2
                  rounded-full
                  border
                  border-zinc-700/20
                  bg-[var(--card)]
                  text-[var(--foreground)]
                  text-sm
                "
              >
                {skill}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}