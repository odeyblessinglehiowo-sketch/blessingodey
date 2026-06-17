"use client";

import Navbar from "@/components/navbar/Navbar";
import MemoryMatch from "@/components/games/MemoryMatch";

export default function MemoryMatchPage() {
  return (
    <>
      <Navbar />

      <main
        className="
          min-h-screen
          bg-[var(--background)]
          px-6
          pt-20
          pb-20
        "
      >
        <div className="max-w-7xl mx-auto">

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
              MEMORY MATCH
            </p>

            <h1
              className="
                mt-1
                text-2xl
                md:text-5xl
                font-extrabold
                text-[var(--foreground)]
              "
            >
              Can Your Memory Keep Up?
            </h1>

            <p
              className="
                mt-1
                text-sm
                md:text-xl
                text-[var(--muted)]
              "
            >
              Match all pairs and prove you're paying attention 😎
            </p>

          </div>

          <MemoryMatch />

        </div>
      </main>
    </>
  );
}