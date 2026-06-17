"use client";

import Navbar from "@/components/navbar/Navbar";
import TicTacToe from "@/components/games/TicTacToe";

export default function TicTacToePage() {
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

          {/* Header */}

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
              TIC TAC TOE
            </p>

            <h1
  className="
    mt-2
    text-3xl
    md:text-5xl
    font-extrabold
    text-[var(--foreground)]
  "
>
              Play Against Me
            </h1>

            <p
              className="
                mt-3
                text-sm
                md:text-xl
                text-[var(--muted)]
              "
            >
              I don't lose that easily. Let's see if you can beat me!😈
            </p>

          </div>

          {/* Game */}

          <TicTacToe />

        </div>
      </main>
    </>
  );
}