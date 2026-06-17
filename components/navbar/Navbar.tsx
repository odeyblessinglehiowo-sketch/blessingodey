"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

import Hamburger from "@/components/ui/Hamburger";
import ThemeToggle from "@/components/ui/ThemeToggle";

import {
  MessageCircle,
  Gamepad2,
} from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();

  const isGamePage = pathname === "/take-a-break";

  const homeLink = isGamePage ? "/#home" : "#home";
  const aboutLink = isGamePage ? "/#about" : "#about";
  const projectsLink = isGamePage ? "/#projects" : "#projects";
  const servicesLink = isGamePage ? "/#services" : "#services";
  const contactLink = isGamePage ? "/#contact" : "#contact";

  const navLinkClass = `
    relative
    text-zinc-300
    font-bold
    transition-all
    duration-300
    hover:text-amber-400

    after:absolute
    after:left-0
    after:-bottom-1
    after:h-[2px]
    after:w-0
    after:bg-amber-400
    after:transition-all
    after:duration-300

    hover:after:w-full
  `;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-900 bg-black/90 backdrop-blur-2xl">

      <div className="flex items-center justify-between px-4 lg:px-10 py-4">

        {/* Logo */}

        <a
          href="/"
          className="flex items-center gap-3"
        >
          <Image
            src="/images/logo-placeholder.png"
            alt="BO Logo"
            width={50}
            height={50}
            priority
            className="
              w-10
              h-10
              lg:w-12
              lg:h-12
              object-contain
            "
          />

          <Image
            src="/images/wordmark-placeholder.png"
            alt="Blessing Odey"
            width={180}
            height={40}
            priority
            className="
              h-auto
              w-[140px]
              lg:w-[190px]
              object-contain
            "
          />
        </a>

        {/* Desktop Nav */}

        <nav className="hidden lg:flex items-center gap-10 text-sm">

          <a href={homeLink} className={navLinkClass}>
            Home
          </a>

          <a href={aboutLink} className={navLinkClass}>
            About
          </a>

          <a href={projectsLink} className={navLinkClass}>
            Projects
          </a>

          <a href={servicesLink} className={navLinkClass}>
            What I Do
          </a>

          <a
            href="/take-a-break"
            className={`
              relative
              flex
              items-center
              gap-2
              font-bold
              transition-all
              duration-300

              ${
                isGamePage
                  ? "text-amber-400"
                  : "text-zinc-300 hover:text-amber-400"
              }

              after:absolute
              after:left-0
              after:-bottom-1
              after:h-[2px]
              after:bg-amber-400
              after:transition-all
              after:duration-300

              ${
                isGamePage
                  ? "after:w-full"
                  : "after:w-0 hover:after:w-full"
              }
            `}
          >
            <Gamepad2
              size={22}
              className="text-amber-400"
            />

            <span>Take A Break</span>
          </a>

          <a href={contactLink} className={navLinkClass}>
            Contact
          </a>

        </nav>

        {/* Right Side */}

        <div className="flex items-center gap-3">

          <div className="hidden lg:flex items-center gap-3">

            <a
              href={contactLink}
              className="
                flex
                items-center
                gap-2
                px-5
                py-2.5
                rounded-xl
                border
                border-amber-400/40
                text-amber-400
                hover:bg-amber-400
                hover:text-black
                hover:scale-105
                transition-all
                duration-300
              "
            >
              <MessageCircle
                size={20}
                className="text-current"
              />

              <span>Let's Talk</span>
            </a>

            <ThemeToggle />

          </div>

          {/* Mobile Hamburger */}

          <div className="lg:hidden">
            <Hamburger
              isOpen={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>

        </div>

      </div>

      {/* Mobile Menu */}

      <div
        className={`
          lg:hidden
          overflow-hidden
          transition-all
          duration-300
          ease-in-out

          ${
            menuOpen
              ? "max-h-[500px] opacity-100 border-t border-zinc-800"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <div
          className="
            bg-black/95
            backdrop-blur-2xl
          "
        >
          <nav
            className="
              flex
              flex-col
              px-6
              py-8
              space-y-6
            "
          >
            <a
              href={homeLink}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-semibold text-white hover:text-amber-400 transition-colors"
            >
              Home
            </a>

            <a
              href={aboutLink}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-semibold text-white hover:text-amber-400 transition-colors"
            >
              About
            </a>

            <a
              href={projectsLink}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-semibold text-white hover:text-amber-400 transition-colors"
            >
              Projects
            </a>

            <a
              href={servicesLink}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-semibold text-white hover:text-amber-400 transition-colors"
            >
              What I Do
            </a>

            <a
              href="/take-a-break"
              onClick={() => setMenuOpen(false)}
              className={`
                flex
                items-center
                gap-3
                text-lg
                font-semibold
                transition-colors

                ${
                  isGamePage
                    ? "text-amber-400"
                    : "text-white hover:text-amber-400"
                }
              `}
            >
              <Gamepad2
                size={22}
                className="text-amber-400"
              />

              Take A Break
            </a>

            <a
              href={contactLink}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-semibold text-white hover:text-amber-400 transition-colors"
            >
              Contact
            </a>

            <div className="pt-4">
              <ThemeToggle />
            </div>

          </nav>
        </div>
      </div>

    </header>
  );
}