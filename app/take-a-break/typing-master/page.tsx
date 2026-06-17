"use client";

import Navbar from "@/components/navbar/Navbar";
import TypingMaster from "@/components/games/TypingMaster";

export default function TypingMasterPage() {
  return (
    <>
      <Navbar />

      <main
        className="
          min-h-screen
          bg-[var(--background)]
          text-[var(--foreground)]
          px-6
          pt-22
          pb-20
        "
      >
        <div className="max-w-5xl mx-auto">

          <div className="text-center">

            <p
              className="
                text-amber-400
                uppercase
                tracking-[0.3em]
                text-sm
                font-bold
              "
            >
              TYPING MASTER
            </p>

            <h1
              className="
                mt-2
                text-3xl
                md:text-5xl
                font-extrabold
              "
            >
              How Fast Can You Type?
            </h1>

            <p
              className="
                mt-3
                text-sm
                md:text-xl
                text-[var(--muted)]
              "
            >
              Test your speed, accuracy, and keyboard skills.
            </p>

          </div>

          <TypingMaster />

        </div>
      </main>
    </>
  );
}