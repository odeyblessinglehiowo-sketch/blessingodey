import { ArrowUpRight } from "lucide-react";
import ProjectGallery from "@/components/projects/ProjectGallery";

const projects = [
{
  title: "Fantasia",
  category: "E-Commerce & Business Management Platform",
  description:
    "A complete e-commerce platform developed for Fantasia, featuring a polished customer storefront alongside a powerful admin dashboard for managing products, orders, customers, returns, discounts, and gallery content. The platform integrates secure authentication, Google sign-in, Paystack payments, and responsive experiences across devices, giving the business a complete digital system for running its online store.",
  website: "https://fantasiahvw.com",
  images: [
    "/images/projects/fantasia/f1.webp",
    "/images/projects/fantasia/f2.webp",
    "/images/projects/fantasia/f3.webp",
    "/images/projects/fantasia/f4.webp",
    "/images/projects/fantasia/f5.webp",
  ],
},
{
  title: "GEEEEP",
  category: "Institutional",
  description:
    "A modern institutional website developed for GEEEEP, an initiative under the Office of the Senior Special Assistant to the President on Student Engagements. The platform provides a responsive digital presence for showcasing programmes, impact, news, gallery content, and organisational information. It features a dynamic news system with rich media support, a protected contact form with automated email confirmations, SEO optimisation, and a production setup powered by Next.js, Vercel, Cloudflare, and Resend.",
  website: "https://geeeep.com",
  images: [
    "/images/projects/geeeep/g1.webp",
    "/images/projects/geeeep/g2.webp",
    "/images/projects/geeeep/g3.webp",
    "/images/projects/geeeep/g4.webp",
    "/images/projects/geeeep/g5.webp",
  ],
},
  {
    title: "Hon. Dr. Judith Ogbara",
    category: "Political Aspirant & Business Leader",
    description:
      "A professional personal brand website built for Hon. Dr. Judith Mayen Ogbara, entrepreneur, philanthropist, Managing Director of Rosem Energy Limited, and former aspirant for the House of Representatives Eket, in Akwa Ibom State.",
    website: "https://judithogbara.com",
    images: [
      "/images/projects/judith/jd01.webp",
      "/images/projects/judith/jd2.webp",
      "/images/projects/judith/jd3.webp",
      "/images/projects/judith/jd4.webp",
      "/images/projects/judith/jd5.webp",
      "/images/projects/judith/jd6.webp",
      "/images/projects/judith/jd7.webp",

    ],
  },

  {
  title: "AAE Foundation",
  category: "NGO & Community Impact Website",
  description:
    "A modern, high-performance website developed for AAE Foundation to showcase its work in education, women and youth empowerment, healthcare, scholarships, and community development. The platform features responsive pages for programmes, impact, stories, get involved, and contact, alongside a dynamic news system powered by Prisma and Neon PostgreSQL, helping the organisation share its latest initiatives while maintaining a polished and accessible digital presence.",
  website: "https://aaefoundation.org.ng",
  images: [
    "/images/projects/aae/aae1.webp",
    "/images/projects/aae/aae2.webp",
    "/images/projects/aae/aae3.webp",
    "/images/projects/aae/aae4.webp",
    "/images/projects/aae/aae5.webp",
  ],
},

  {
    title: "Everything High Academy",
    category: "Modeling & Talent Development Academy",
    description:
      "A modern academy platform built for Everything High, founded by Zuleihat Yusuf Oyarazi, a distinguished Nigerian titleholder, mentor, and pageant leader dedicated to talent development and education.",
    website: "https://www.everythinghighacademy.com/",
    images: [
      "/images/projects/everythinghigh/ev1.webp",
      "/images/projects/everythinghigh/ev2.webp",
      "/images/projects/everythinghigh/ev3.webp",
      "/images/projects/everythinghigh/ev4.webp",
      "/images/projects/everythinghigh/ev5.webp",
    ],
  },

];

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        py-10
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
              text-md
              lg:text-xl
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
                gap-5 lg:gap-14
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
                    text-xl
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
                    text-md
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