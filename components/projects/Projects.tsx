import { ArrowUpRight } from "lucide-react";
import ProjectGallery from "@/components/projects/ProjectGallery";

const projects = [
  {
    title: "Hon. Dr. Judith Ogbara",
    category: "Political Aspirant & Business Leader",
    description:
      "A professional personal brand website built for Hon. Dr. Judith Ogbara, entrepreneur, philanthropist, Managing Director of Rosem Energy Limited, and aspirant for the House of Representatives in Akwa Ibom State.",
    website: "https://judithogbara.com",
    images: [
      "/images/projects/judith/j1.png",
      "/images/projects/judith/j2.png",
      "/images/projects/judith/j3.png",
    ],
  },

  {
    title: "G4EP Training Portal",
    category: "Digital Learning Platform",
    description:
      "An online learning portal developed for the G4EP Digital Training initiative, providing participants with access to training resources, educational content, and structured learning experiences with certificate inclusive.",
    website: "https://portal.geeeep.com.ng",
    images: [
      "/images/projects/g4ep/g1.png",
      "/images/projects/g4ep/g2.png",
      "/images/projects/g4ep/g3.png",
    ],
  },

  {
    title: "Everything High Academy",
    category: "Modeling & Talent Development Academy",
    description:
      "A modern academy platform built for Everything High, founded by Zuleihat Yusuf Oyarazi, a distinguished Nigerian titleholder, mentor, and pageant leader dedicated to talent development and education.",
    website: "https://everything-high.vercel.app/",
    images: [
      "/images/projects/everythinghigh/e1.png",
      "/images/projects/everythinghigh/e2.png",
      "/images/projects/everythinghigh/e3.png",
      "/images/projects/everythinghigh/e5.png",
    ],
  },

  {
    title: "OdeyForge Technologies",
    category: "Technology Company Website",
    description:
      "A premium corporate website developed for OdeyForge Technologies, showcasing software development services, company branding, and digital innovation solutions.",
    website: "https://odeyforge.com",
    images: [
      "/images/projects/odeyforge/o1.png",
      "/images/projects/odeyforge/o2.png",
      "/images/projects/odeyforge/o3.png",
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        py-20
        px-6
        bg-[var(--background)]
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="max-w-3xl mb-16 lg:mb-20">

          <p
            className="
              text-amber-400
              uppercase
              tracking-[0.3em]
              text-sm
              font-bold
            "
          >
            Featured Projects
          </p>

          <h2
            className="
              mt-3
              text-2xl
              lg:text-5xl
              font-extrabold
              leading-tight
              text-[var(--foreground)]
            "
          >
            Real Projects.
            <span className="text-amber-400">
              {" "}Real Results.
            </span>
          </h2>

          <p
            className="
              mt-3
              text-xl
              text-[var(--muted)]
            "
          >
            A selection of websites and digital experiences
            I've designed and developed for businesses,
            organizations, and brands.
          </p>

        </div>

        {/* Projects */}

        <div className="space-y-20 lg:space-y-24">

          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`
                grid
                lg:grid-cols-2
                gap-8 lg:gap-14
                items-center
                ${
                  index % 2 === 1
                    ? "lg:[&>*:first-child]:order-2"
                    : ""
                }
              `}
            >
              {/* Screenshot */}

              <div>

                <ProjectGallery
                  title={project.title}
                  coverImage={project.images[0]}
                  images={project.images}
                />

                <p
                  className="
                    mt-4
                    text-sm
                    text-[var(--muted)]
                  "
                >
                  Click image to view gallery
                </p>

              </div>

              {/* Content */}

              <div>

                <div className="mb-4">

  <p
    className="
      text-4xl
      lg:text-5xl
      font-extrabold
      text-amber-400/40
      leading-none
    "
  >
    {String(index + 1).padStart(2, "0")}
  </p>

  <p
    className="
      mt-2
      text-xs
      lg:text-sm
      uppercase
      tracking-[0.15em]
      font-semibold
      text-amber-400
    "
  >
    {project.category}
  </p>

</div>

                <h3
                  className="
                    mt-4
                    text-2xl
md:text-4xl
lg:text-5xl
                    font-extrabold
                    text-[var(--foreground)]
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    mt-6
                    text-lg
                    leading-relaxed
                    text-[var(--muted)]
                  "
                >
                  {project.description}
                </p>

                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-5
                    inline-flex
                    items-center
                    gap-2
                    text-amber-400
                    font-semibold
                    text-lg
                    group
                  "
                >
                  Visit Website

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
          ))}

        </div>

      </div>
    </section>
  );
}