"use client";

import Image from "next/image";

import { usePathname } from "next/navigation";


import {
  ArrowUp,
  Mail,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa6";

import {
  SiUpwork,
} from "react-icons/si";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
const pathname = usePathname();

const isGamePage = pathname === "/take-a-break";

const homeLink = isGamePage ? "/#home" : "#home";
const aboutLink = isGamePage ? "/#about" : "#about";
const projectsLink = isGamePage ? "/#projects" : "#projects";
const servicesLink = isGamePage ? "/#services" : "#services";
const contactLink = isGamePage ? "/#contact" : "#contact";

  return (
    <footer className="bg-black text-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 lg:py-16">

        {/* Main Footer */}

        <div
          className="
            grid
            gap-10
            lg:gap-12
            md:grid-cols-2
            lg:grid-cols-4
          "
        >

          {/* Brand */}

          <div className="lg:pr-8">

            <a
  href={isGamePage ? "/" : "#home"}
  onClick={() => {
    if (!isGamePage) {
      scrollToTop();
    }
  }}

              className="
                cursor-pointer
                transition-opacity
                hover:opacity-80
              "
            >
              <Image
                src="/images/wordmark-placeholder.png"
                alt="Blessing Odey"
                width={220}
                height={50}
                className="object-contain"
              />
            </a>

            <p
              className="
                mt-4
                text-zinc-400
                leading-7
              "
            >
              Helping businesses, startups,
              and organizations build modern
              websites that deliver real results.
            </p>

          </div>

          {/* Quick Links */}

<div>

  <h3
    className="
      text-lg
      font-bold
      mb-4
    "
  >
    Quick Links
  </h3>

  <div className="space-y-3">

    <a
      href={homeLink}
      className="
        block
        text-zinc-400
        hover:text-amber-400
        hover:translate-x-1
        transition-all
        duration-300
      "
    >
      Home
    </a>

    <a
      href={aboutLink}
      className="
        block
        text-zinc-400
        hover:text-amber-400
        hover:translate-x-1
        transition-all
        duration-300
      "
    >
      About
    </a>

    <a
      href={projectsLink}
      className="
        block
        text-zinc-400
        hover:text-amber-400
        hover:translate-x-1
        transition-all
        duration-300
      "
    >
      Projects
    </a>

    <a
      href={servicesLink}
      className="
        block
        text-zinc-400
        hover:text-amber-400
        hover:translate-x-1
        transition-all
        duration-300
      "
    >
      What I Do
    </a>

    <a
      href={contactLink}
      className="
        block
        text-zinc-400
        hover:text-amber-400
        hover:translate-x-1
        transition-all
        duration-300
      "
    >
      Contact
    </a>

    <a
      href="/take-a-break"
      className="
        block
        text-zinc-400
        hover:text-amber-400
        hover:translate-x-1
        transition-all
        duration-300
      "
    >
      Take A Break
    </a>

  </div>

</div>

          {/* Services - Hidden on Mobile */}

          <div className=" lg:block">

            <h3
              className="
                text-lg
                font-bold
                mb-4
              "
            >
              Services
            </h3>

            <div className="space-y-3">

              <p className="text-zinc-400">
                Web Development
              </p>

              <p className="text-zinc-400">
                Responsive Design
              </p>

              <p className="text-zinc-400">
                UI / UX Design
              </p>

              <p className="text-zinc-400">
                Performance Optimization
              </p>

            </div>

          </div>

          {/* Connect */}

          <div>

            <h3
              className="
                text-lg
                font-bold
                mb-4
              "
            >
              Connect
            </h3>

            <div className="space-y-3">

              <a
                href="https://www.linkedin.com/in/blessing-odey-lehi?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  gap-3
                  text-zinc-400
                  hover:text-amber-400
                  hover:translate-x-1
                  transition-all
                  duration-300
                "
              >
                <FaLinkedin size={18} />
                LinkedIn
              </a>

              <a
                 href="https://github.com/odeyblessinglehiowo-sketch"
            target="_blank"
            rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  gap-3
                  text-zinc-400
                  hover:text-amber-400
                  hover:translate-x-1
                  transition-all
                  duration-300
                "
              >
                <FaGithub size={18} />
                GitHub
              </a>

              <a
                href="https://www.upwork.com/freelancers/~01561fa0a12ba9f8ae?mp_source=share"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  gap-3
                  text-zinc-400
                  hover:text-amber-400
                  hover:translate-x-1
                  transition-all
                  duration-300
                "
              >
                <SiUpwork size={18} />
                Upwork
              </a>

              <a
                href="https://wa.me/2348145471258"
            target="_blank"
            rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  gap-3
                  text-zinc-400
                  hover:text-amber-400
                  hover:translate-x-1
                  transition-all
                  duration-300
                "
              >
                <FaWhatsapp size={18} />
                WhatsApp
              </a>

              <a
                href="mailto:odeyblessinglehiowo@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  gap-3
                  text-zinc-400
                  hover:text-amber-400
                  hover:translate-x-1
                  transition-all
                  duration-300
                "
              >
                <Mail size={18} />
                Email
              </a>

            </div>

          </div>

        </div>

        {/* Gold Divider */}

        <div
          className="
            mt-10
            h-px
            bg-gradient-to-r
            from-transparent
            via-amber-400
            to-transparent
          "
        />

        {/* Bottom Bar */}

        <div
          className="
            flex
            flex-col
            lg:flex-row
            items-center
            justify-between
            gap-2
            pt-5
          "
        >

          <p
            className="
              text-zinc-500
              text-sm
              whitespace-nowrap
            "
          >
            © 2026 Blessing Odey Lehiowo. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="
              flex
              items-center
              gap-2
              text-zinc-500
              hover:text-amber-400
              transition-all
              duration-300
            "
          >
            <ArrowUp size={18} />
            Back To Top
          </button>

        </div>

      </div>

    </footer>
  );
}