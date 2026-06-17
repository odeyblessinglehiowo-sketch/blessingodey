import {
  ArrowRight,
  Download,
  Mail,
} from "lucide-react";

import {
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  SiUpwork,
} from "react-icons/si";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        relative
        py-20
        lg:py-24
        px-6
        bg-[var(--section)]
        overflow-hidden
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          inset-0
          bg-amber-400/5
          blur-[120px]
          pointer-events-none
        "
      />

      <div className="relative max-w-7xl mx-auto">

        {/* Heading */}

        <div className="max-w-4xl">

         <p
  className="
    text-amber-400
    uppercase
    tracking-[0.1em]
    text-[13px]
    sm:text-xs
    lg:text-sm
    font-bold
    whitespace-nowrap
  "
>
  Available For Freelance Projects
</p>

          <h2
            className="
              mt-4
              text-2xl
              md:text-5xl
              font-extrabold
              leading-tight
              text-[var(--foreground)]
            "
          >
            Ready To Build

            <span className="block text-amber-400">
              Something Great?
            </span>
          </h2>

          <p
            className="
              mt-6
              max-w-3xl
              text-lg
              lg:text-xl
              leading-relaxed
              text-[var(--muted)]
            "
          >
            Whether you need a business website,
            portfolio, web application, or a custom
            digital platform, I'd love to hear about
            your idea and help bring it to life.
          </p>

        </div>

        {/* CTA Buttons */}

        <div
          className="
            flex
            flex-col
            sm:flex-row
            gap-4
            mt-8
          "
        >

          <a
            href="https://wa.me/2348145471258"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              flex
              items-center
              justify-center
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
            Let's Discuss Your Project

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
            href="/Blessing-Odey-CV.pdf"
            download
            className="
              flex
              items-center
              justify-center
              gap-2
              px-8
              py-2
              rounded-2xl
              border
              border-zinc-700
              text-[var(--foreground)]
              font-medium
              text-lg
              hover:border-amber-400
              transition-all
              duration-300
            "
          >
            <Download size={25} />
            Download CV
          </a>

        </div>

        {/* Contact Cards */}

        <div
          className="
            mt-10
            grid
            grid-cols-2
            lg:grid-cols-5
            gap-4
            lg:gap-6
          "
        >

          {/* Email */}

          <a
            href="mailto:odeyblessinglehiowo@gmail.com"
            className="
              group
              p-5
              lg:p-6
              rounded-2xl
              bg-[var(--card)]
              border
              border-zinc-800/20
              hover:border-amber-400
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            <div
              className="
                h-12
                w-12
                rounded-xl
                bg-amber-400/10
                flex
                items-center
                justify-center
              "
            >
              <Mail
                size={22}
                className="text-amber-400"
              />
            </div>

            <h3
              className="
                mt-4
                font-bold
                text-lg
                text-[var(--foreground)]
              "
            >
              Email
            </h3>

            <p
              className="
                mt-2
                text-sm
                text-[var(--muted)]
              "
            >
              Send an email
            </p>
          </a>

          {/* WhatsApp */}

          <a
            href="https://wa.me/2348145471258"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              p-5
              lg:p-6
              rounded-2xl
              bg-[var(--card)]
              border
              border-zinc-800/20
              hover:border-amber-400
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            <div
              className="
                h-12
                w-12
                rounded-xl
                bg-amber-400/10
                flex
                items-center
                justify-center
              "
            >
              <FaWhatsapp
                size={22}
                className="text-amber-400"
              />
            </div>

            <h3
              className="
                mt-4
                font-bold
                text-lg
                text-[var(--foreground)]
              "
            >
              WhatsApp
            </h3>

            <p
              className="
                mt-2
                text-sm
                text-[var(--muted)]
              "
            >
              Let's chat
            </p>
          </a>

          {/* LinkedIn */}

          <a
            href="https://www.linkedin.com/in/blessing-odey-lehi?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              p-5
              lg:p-6
              rounded-2xl
              bg-[var(--card)]
              border
              border-zinc-800/20
              hover:border-amber-400
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            <div
              className="
                h-12
                w-12
                rounded-xl
                bg-amber-400/10
                flex
                items-center
                justify-center
              "
            >
              <FaLinkedin
                size={22}
                className="text-amber-400"
              />
            </div>

            <h3
              className="
                mt-4
                font-bold
                text-lg
                text-[var(--foreground)]
              "
            >
              LinkedIn
            </h3>

            <p
              className="
                mt-2
                text-sm
                text-[var(--muted)]
              "
            >
              Connect with me
            </p>
          </a>

          {/* GitHub */}

          <a
            href="https://github.com/odeyblessinglehiowo-sketch"
            target="_blank"
            rel="noopener noreferrer"
           
            className="
  hidden
  lg:block
              group
              p-5
              lg:p-6
              rounded-2xl
              bg-[var(--card)]
              border
              border-zinc-800/20
              hover:border-amber-400
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            <div
              className="
                h-12
                w-12
                rounded-xl
                bg-amber-400/10
                flex
                items-center
                justify-center
              "
            >
              <FaGithub
                size={22}
                className="text-amber-400"
              />
            </div>

            <h3
              className="
                mt-4
                font-bold
                text-lg
                text-[var(--foreground)]
              "
            >
              GitHub
            </h3>

            <p
              className="
                mt-2
                text-sm
                text-[var(--muted)]
              "
            >
              View my work
            </p>
          </a>

          {/* Upwork */}

          <a
            href="https://www.upwork.com/freelancers/~01561fa0a12ba9f8ae?mp_source=share"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              p-5
              lg:p-6
              rounded-2xl
              bg-[var(--card)]
              border
              border-zinc-800/20
              hover:border-amber-400
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            <div
              className="
                h-12
                w-12
                rounded-xl
                bg-amber-400/10
                flex
                items-center
                justify-center
              "
            >
              <SiUpwork
                size={22}
                className="text-amber-400"
              />
            </div>

            <h3
              className="
                mt-4
                font-bold
                text-lg
                text-[var(--foreground)]
              "
            >
              Upwork
            </h3>

            <p
              className="
                mt-2
                text-sm
                text-[var(--muted)]
              "
            >
              Hire me
            </p>
          </a>

        </div>

      </div>
    </section>
  );
}