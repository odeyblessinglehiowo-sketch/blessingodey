"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  RotateCcw,
  LogOut,
  Trophy,
} from "lucide-react";

type CardType = {
  id: number;
  image: string;
  title: string;
  matched: boolean;
};

const cardData = [
  {
    title: "OdeyForge",
    image: "/images/memory/odeyforge.jpg",
  },
  {
    title: "G4EP",
    image: "/images/memory/g4ep.jpg",
  },
  {
    title: "Judith",
    image: "/images/memory/judith.jpg",
  },
  {
    title: "Everything High",
    image: "/images/memory/everything-high.jpg",
  },
  {
    title: "Fantasia",
    image: "/images/memory/supabase.png",
  },
  {
    title: "Tic Tac Toe",
    image: "/images/memory/tictactoe.jpg",
  },
  {
    title: "Typing Master",
    image: "/images/memory/typing.jpg",
  },
  {
    title: "Next.js",
    image: "/images/memory/nextjs.jpg",
  },
  {
    title: "React",
    image: "/images/memory/react.jpg",
  },
  {
    title: "Tailwind",
    image: "/images/memory/tailwind.jpg",
  },
];

export default function MemoryMatch() {
  const [cards, setCards] = useState<CardType[]>([]);
  const [choiceOne, setChoiceOne] =
    useState<CardType | null>(null);

  const [choiceTwo, setChoiceTwo] =
    useState<CardType | null>(null);

  const [disabled, setDisabled] =
    useState(false);

  const [moves, setMoves] = useState(0);

  const [matches, setMatches] =
    useState(0);

  const [won, setWon] = useState(false);

  const [seconds, setSeconds] =
    useState(0);

  const [started, setStarted] =
    useState(false);

  const shuffleCards = () => {
    const shuffled = [...cardData, ...cardData]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({
        ...card,
        id: Math.random(),
        matched: false,
      }));

    setChoiceOne(null);
    setChoiceTwo(null);

    setCards(shuffled);
    setMoves(0);
    setMatches(0);
    setWon(false);
    setSeconds(0);
    setStarted(false);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect(() => {
    if (!started || won) return;

    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [started, won]);

  const handleChoice = (
    card: CardType
  ) => {
    if (!started) {
      setStarted(true);
    }

    choiceOne
      ? setChoiceTwo(card)
      : setChoiceOne(card);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);

      if (
        choiceOne.title ===
        choiceTwo.title
      ) {
        setCards((prev) =>
          prev.map((card) =>
            card.title === choiceOne.title
              ? {
                  ...card,
                  matched: true,
                }
              : card
          )
        );

        setMatches(
          (prev) => prev + 1
        );

        resetTurn();
      } else {
        setTimeout(() => {
          resetTurn();
        }, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  useEffect(() => {
    if (matches === 10) {
      setWon(true);
    }
  }, [matches]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);

    setMoves((prev) => prev + 1);

    setDisabled(false);
  };

  const formatTime = () => {
    const mins = Math.floor(
      seconds / 60
    );

    const secs = seconds % 60;

    return `${mins
      .toString()
      .padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };
  const [showExitModal, setShowExitModal] =
  useState(false);

  return (
    <div className="mt-6">

      {/* Stats */}

      <div
        className="
          max-w-2xl
          mx-auto
          grid
          grid-cols-3
          gap-4
          mb-8
        "
      >
        <div
          className="
            rounded-2xl
            bg-[var(--card)]
            p-4
            text-center
          "
        >
          <p className="text-sm text-[var(--muted)]">
            Moves
          </p>

          <p className="text-2xl font-black text-amber-400">
            {moves}
          </p>
        </div>

        <div
          className="
            rounded-2xl
            bg-[var(--card)]
            p-4
            text-center
          "
        >
          <p className="text-sm text-[var(--muted)]">
            Matches
          </p>

          <p className="text-2xl font-black text-green-400">
            {matches}/10
          </p>
        </div>

        <div
          className="
            rounded-2xl
            bg-[var(--card)]
            p-4
            text-center
          "
        >
          <p className="text-sm text-[var(--muted)]">
            Time
          </p>

          <p className="text-2xl font-black text-amber-400">
            {formatTime()}
          </p>
        </div>
      </div>

      {/* Board */}

      <div
        className="
          max-w-3xl
          mx-auto

          rounded-1xl

          p-2

          bg-cover
          bg-center

          shadow-2xl
        "
        style={{
          backgroundImage:
            "url('/images/memory/board.jpg')",
        }}
      >
        <div
          className="
            grid
            grid-cols-5
            lg:grid-cols-7
            gap-3
          "
        >
          {cards.map((card) => {

            const flipped =
              card === choiceOne ||
              card === choiceTwo ||
              card.matched;

            return (
              <div
                key={card.id}
                className="
                  aspect-[3/4]
                  cursor-pointer
                "
                onClick={() => {
                  if (
                    !disabled &&
                    !flipped
                  ) {
                    handleChoice(card);
                  }
                }}
              >
                {flipped ? (
                  <div
                    className="
                      h-full
                      rounded-1xl
                      overflow-hidden
                      bg-white
                      shadow-xl
                    "
                  >
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={300}
                      height={400}
                      className="
                        w-full
                        h-full
                        object-cover
                      "
                    />
                  </div>
                ) : (
                  <div
                    className="
                      h-full

                      rounded-1xl

                      bg-[#0f0f0f]

                      border-2
                      border-amber-400

                      flex
                      items-center
                      justify-center

                      shadow-xl

                      hover:-translate-y-1

                      transition-all
                    "
                  >
                    <Image
  src="/images/logo.png"
  alt="BO"
  width={80}
  height={80}
  className="
    w-10
    h-10
    object-contain
  "
/>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Win Box */}

      {won && (
        <div
          className="
            max-w-lg
            mx-auto
            mt-5

            rounded-2xl

            bg-[var(--card)]

            p-6

            text-center
          "
        >
          <Trophy
            size={42}
            className="
              mx-auto
              text-amber-400
            "
          />

          <h3
            className="
              mt-4
              text-2xl
              font-black
            "
          >
            Memory Master 🧠
          </h3>

          <p className="mt-2">
            You completed the board
            in {moves} moves.
          </p>

          <p className="mt-2">
            Time: {formatTime()}
          </p>
        </div>
      )}

      {/* Buttons */}

      <div
        className="
          flex
          justify-center
          gap-4
          mt-3
          flex-wrap
        "
      >
        <button
          onClick={shuffleCards}
          className="
            inline-flex
            items-center
            gap-2

            px-6
            py-2

            rounded-xl

            bg-amber-400
            text-black
            font-bold
          "
        >
          <RotateCcw size={18} />
          Play Again
        </button>

        <button
  onClick={() =>
    setShowExitModal(true)
  }
  className="
    inline-flex
    items-center
    gap-2

    px-6
    py-3

    rounded-xl

    border
    border-zinc-600

    font-bold
  "
>
  <LogOut size={18} />
  Exit Game
</button>
{showExitModal && (
  <div
    className="
      fixed
      inset-0
      z-[100]

      flex
      items-center
      justify-center

      bg-black/70
      backdrop-blur-sm

      px-6
    "
  >
    <div
      className="
        w-80
        max-w-md

        rounded-2xl

        bg-[var(--card)]

        border
        border-amber-400/20

        p-6

        text-center
      "
    >
      <h3
        className="
          text-2xl
          font-black
        "
      >
        Leaving Already? 👀
      </h3>

      <p
        className="
          mt-4
          text-[var(--muted)]
          leading-relaxed
        "
      >
        We had a good round.

        <br />
        <br />

        I hope to play with you
        again soon.

        <br />
        <br />

        And remember...

        <br />

        <strong>
          I'm also one badass
          developer 😎
        </strong>
      </p>

      <div
        className="
          mt-6
          flex
          gap-3
        "
      >
        <button
          onClick={() =>
            setShowExitModal(false)
          }
          className="
            flex-1
            py-3

            rounded-xl

            border
            border-zinc-600
          "
        >
          Stay
        </button>

        <Link
          href="/take-a-break"
          className="
            flex-1
            py-3

            rounded-xl

            text-center

            bg-amber-400
            text-black
            font-bold
          "
        >
          Exit
        </Link>
      </div>
    </div>
  </div>
)}
      </div>
    </div>
  );
}