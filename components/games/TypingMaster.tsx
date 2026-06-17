"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  RotateCcw,
  LogOut,
  Trophy,
  Keyboard,
} from "lucide-react";

const sentences = [
  "Blessing Odey is a great web developer.",
  "Blessing would build my website again.",
  "A great website is an investment not an expense.",
  "The best way to learn is by building projects.",
  "Clean code is easier to maintain and scale.",
  "Fast websites create better user experiences.",
  "Every business deserves a strong online presence.",
  "Success comes from consistency and hard work.",
  "Responsive design ensures a seamless experience everywhere.",
  "Great developers solve problems before they become issues.",
  "Innovation begins with a simple idea.",
  "Blessing Odey Lehiowo",
  "The future belongs to those who build it.",
  "Technology is best when it brings people together.",
  "Blessing Odey helped transform our online presence.",
  "A professional website builds trust and credibility.",
  "Good design is obvious. Great design feels invisible.",
  "The internet rewards those who create value.",
  "Your next customer is probably searching online right now.",
  "OdeyForge turns ideas into digital experiences.",
];

export default function TypingMaster() {
  const [sentence, setSentence] = useState("");
  const [input, setInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);

  const [wpm, setWpm] = useState(0);
const [accuracy, setAccuracy] = useState(100);
const [bestWpm, setBestWpm] = useState(0);

const [showExitModal, setShowExitModal] =
  useState(false);

  useEffect(() => {
    generateSentence();
  }, []);

  useEffect(() => {
    if (!started || finished) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          finishGame();
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [started, finished]);

  const generateSentence = () => {
    const random =
      sentences[
        Math.floor(
          Math.random() * sentences.length
        )
      ];

    setSentence(random);
  };

  const handleTyping = (
    value: string
  ) => {
    if (!started) {
      setStarted(true);
    }

    if (finished) return;

    setInput(value);

    let correct = 0;

    for (
      let i = 0;
      i < value.length;
      i++
    ) {
      if (value[i] === sentence[i]) {
        correct++;
      }
    }

    const acc =
      value.length === 0
        ? 100
        : Math.round(
            (correct / value.length) * 100
          );

    setAccuracy(acc);

    if (
  value.trim() === sentence.trim()
) {
  setInput(value);
  finishGame();
}
  };

  const finishGame = () => {
    setFinished(true);

    const elapsedSeconds =
      60 - timeLeft;

    const minutes =
      elapsedSeconds / 60;

    const words =
      input.trim().length / 5;

    const calculatedWpm =
      elapsedSeconds > 0
        ? Math.round(
            words / minutes
          )
        : 0;

    setWpm(calculatedWpm);

    if (
      calculatedWpm > bestWpm
    ) {
      setBestWpm(calculatedWpm);
    }
  };

  const playAgain = () => {
    generateSentence();

    setInput("");
    setTimeLeft(60);
    setStarted(false);
    setFinished(false);

    setWpm(0);
    setAccuracy(100);
  };

  const getRating = () => {
    if (wpm >= 85)
      return "🚀 Keyboard Warrior";

    if (wpm >= 65)
      return "⚡ Developer Reflexes";

    if (wpm >= 45)
      return "🔥 Impressive Typing";

    if (wpm >= 30)
      return "😎 Pretty Solid";

    return "⌨️ Keep Practicing";
  };

  return (
    <div className="mt-7">

      {/* Stats */}

      <div
        className="
          max-w-3xl
          mx-auto

          grid
          grid-cols-3
          gap-4
        "
      >
        <div
          className="
            rounded-2xl
            border
            border-amber-400/20
            bg-[var(--card)]
            p-4
            text-center
          "
        >
          <p
            className="
              text-sm
              text-[var(--muted)]
            "
          >
            Time
          </p>

          <p
            className="
              text-2xl
              font-black
              text-amber-400
            "
          >
            {timeLeft}s
          </p>
        </div>

        <div
          className="
            rounded-2xl
            border
            border-amber-400/20
            bg-[var(--card)]
            p-4
            text-center
          "
        >
          <p
            className="
              text-sm
              text-[var(--muted)]
            "
          >
            Accuracy
          </p>

          <p
            className="
              text-2xl
              font-black
              text-green-400
            "
          >
            {accuracy}%
          </p>
        </div>

        <div
          className="
            rounded-2xl
            border
            border-amber-400/20
            bg-[var(--card)]
            p-4
            text-center
          "
        >
          <p
            className="
              text-sm
              text-[var(--muted)]
            "
          >
            Best WPM
          </p>

          <p
            className="
              text-2xl
              font-black
              text-amber-400
            "
          >
            {bestWpm}
          </p>
        </div>
      </div>

      {/* Sentence */}

      <div
        className="
          max-w-4xl
          mx-auto
          mt-4

          rounded-2xl
          border
          border-amber-400/20

          bg-[var(--card)]
          p-8
        "
      >
        <div
          className="
            flex
            items-center
            gap-3
            mb-5
          "
        >
          <Keyboard
            size={22}
            className="text-amber-400"
          />

          <p
            className="
              font-semibold
            "
          >
            Type this sentence:
          </p>
        </div>

        <p
  onCopy={(e) => e.preventDefault()}
  onCut={(e) => e.preventDefault()}
  onContextMenu={(e) =>
    e.preventDefault()
  }
  className="
  text-xl
  leading-relaxed
  font-medium
  select-none
  pointer-events-none
"
>
  {sentence}
</p>
      </div>

      {/* Input */}

      <div
        className="
          max-w-4xl
          mx-auto
          mt-6
        "
      >
        <textarea
  value={input}
  onChange={(e) =>
    handleTyping(e.target.value)
  }
  onPaste={(e) =>
    e.preventDefault()
  }
  onKeyDown={(e) => {
    if (
      e.key === "Enter" &&
      input.trim() === sentence.trim()
    ) {
      finishGame();
    }
  }}
  disabled={finished}
  placeholder="Start typing here..."
  className="
    w-full
    h-28

    rounded-2xl

    border
    border-amber-400/20

    bg-[var(--card)]

    p-6

    resize-none
    outline-none

    text-lg
  "
/>
      </div>

      {/* Result */}

      {finished && (
        <div
          className="
            max-w-xl
            mx-auto
            mt-1

            rounded-2xl
            border
            border-amber-400/20

            bg-[var(--card)]
            p-6

            text-center
          "
        >
          <Trophy
            size={40}
            className="
              mx-auto
              text-amber-400
            "
          />

          <p
            className="
              mt-2
              text-3xl
              font-black
            "
          >
            {wpm} WPM
          </p>

          <p
            className="
              mt-2
              text-green-400
              font-semibold
            "
          >
            {accuracy}% Accuracy
          </p>

          <p
            className="
              mt-2
              text-lg
              font-semibold
            "
          >
            {getRating()}
          </p>
        </div>
      )}

      {/* Buttons */}

      <div
  className="
    flex
    justify-center
    gap-4
    mt-8
    flex-wrap
  "
>
  <button
    onClick={playAgain}
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
      py-2

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
      z-50

      flex
      items-center
      justify-center

      bg-black/70
      backdrop-blur-sm
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

        p-8
      "
    >
      <h3
        className="
          text-2xl
          font-bold
        "
      >
        Leaving Already? 🥺
      </h3>

      <p
        className="
          mt-4
          text-[var(--muted)]
          leading-relaxed
        "
      >
        Nice game 😎

<br/>I hope you enjoyed the challenge.

<br/>Whenever you're ready for your next website, you already know who to call.

<br/>— Blessing Odey
      </p>

      <div
        className="
          mt-4
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
            py-1

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
            py-1

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