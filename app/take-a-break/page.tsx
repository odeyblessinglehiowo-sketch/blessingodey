"use client";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

import GameCard from "@/components/games/GameCard";

export default function TakeABreakPage() {
  return (
    <>
      <Navbar />

      <main
        className="
          min-h-screen
          bg-[var(--background)]
          px-6
          pt-22
          pb-20
        "
      >
        <div className="max-w-7xl mx-auto">

          {/* Hero */}

          <div className="max-w-4xl">

            <p
              className="
                text-amber-400
                uppercase
                tracking-[0.3em]
                text-sm
                font-bold
              "
            >
              Take A Break
            </p>

            <h1
              className="
                mt-4
                text-2xl
                md:text-6xl
                font-extrabold
                leading-tight
                text-[var(--foreground)]
              "
            >
              Need A Quick Break?
            </h1>

            <p
              className="
                mt-5
                max-w-2xl
                text-lg
                leading-relaxed
                text-[var(--muted)]
              "
            >
              Take a few minutes to relax and challenge
              yourself with one of these mini games.
            </p>
        

          </div>
{/* Games Section Header */}

<div className="mt-2 mb-1">
  <p
    className="
      text-amber-400
      uppercase
      tracking-[0.25em]
      text-xs
      lg:text-sm
      font-bold
    "
  >
    Choose Your Challenge
  </p>
</div>
          {/* Games */}

          <div
            className="
              mt-10
              grid
              md:grid-cols-2
              lg:grid-cols-3
              gap-6
            "
          >
<GameCard
  href="/take-a-break/tic-tac-toe"
  image="/images/games/tictactoe1.webp"
  title="Tic Tac Toe"
  description="Play against me and see if you can win."
/>

            <GameCard
  href="/take-a-break/typing-master"
  image="/images/games/typing-master1.webp"
  title="Typing Master"
  description="Test your typing speed, accuracy, and keyboard skills."
/>

<GameCard
  href="/take-a-break/memory-match"
  image="/images/games/memory1.webp"
  title="Memory Match"
  description="Challenge your memory by matching all card pairs."
/>



          </div>

        </div>
        
       
      </main>

      <Footer />
    </>
  );
}