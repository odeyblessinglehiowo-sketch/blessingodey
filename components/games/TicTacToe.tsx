
"use client";

import { useState } from "react";
import Link from "next/link";

import {
 
  RotateCcw,
  LogOut,
  Bot,
  User,
  X,
} from "lucide-react";

type Cell = "X" | "O" | null;

const winningLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export default function TicTacToe() {
  const [board, setBoard] = useState<Cell[]>(
    Array(9).fill(null)
  );

  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);

  const [isThinking, setIsThinking] =
    useState(false);

  const [winner, setWinner] = useState<
    "X" | "O" | "draw" | null
  >(null);

  const [winningCells, setWinningCells] =
    useState<number[]>([]);

  const [showExitModal, setShowExitModal] =
    useState(false);

  const checkWinner = (
    currentBoard: Cell[]
  ): {
    winner: "X" | "O" | "draw" | null;
    cells: number[];
  } => {
    for (const line of winningLines) {
      const [a, b, c] = line;

      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return {
          winner: currentBoard[a],
          cells: line,
        };
      }
    }

    if (!currentBoard.includes(null)) {
      return {
        winner: "draw",
        cells: [],
      };
    }

    return {
      winner: null,
      cells: [],
    };
  };

  const minimax = (
    boardState: Cell[],
    depth: number,
    isMax: boolean
  ): number => {
    const result =
      checkWinner(boardState).winner;

    if (result === "O")
      return 10 - depth;

    if (result === "X")
      return depth - 10;

    if (result === "draw")
      return 0;

    if (isMax) {
      let best = -Infinity;

      for (let i = 0; i < 9; i++) {
        if (!boardState[i]) {
          boardState[i] = "O";

          best = Math.max(
            best,
            minimax(
              boardState,
              depth + 1,
              false
            )
          );

          boardState[i] = null;
        }
      }

      return best;
    }

    let best = Infinity;

    for (let i = 0; i < 9; i++) {
      if (!boardState[i]) {
        boardState[i] = "X";

        best = Math.min(
          best,
          minimax(
            boardState,
            depth + 1,
            true
          )
        );

        boardState[i] = null;
      }
    }

    return best;
  };

  const aiMove = (
    currentBoard: Cell[]
  ) => {
    let bestScore = -Infinity;
    let move = -1;

    for (let i = 0; i < 9; i++) {
      if (!currentBoard[i]) {
        currentBoard[i] = "O";

        const score = minimax(
          currentBoard,
          0,
          false
        );

        currentBoard[i] = null;

        if (score > bestScore) {
          bestScore = score;
          move = i;
        }
      }
    }

    if (move !== -1) {
      currentBoard[move] = "O";
    }

    return [...currentBoard];
  };

  const finishGame = (
    result:
      | "X"
      | "O"
      | "draw",
    cells: number[]
  ) => {
    setWinner(result);
    setWinningCells(cells);

    if (result === "X") {
      setXScore((prev) => prev + 1);
    }

    if (result === "O") {
      setOScore((prev) => prev + 1);
    }
  };

  const handleClick = (
    index: number
  ) => {
    if (
      board[index] ||
      winner ||
      isThinking
    )
      return;

    const newBoard = [...board];

    newBoard[index] = "X";

    const playerResult =
      checkWinner(newBoard);

    if (playerResult.winner) {
      setBoard(newBoard);

      finishGame(
        playerResult.winner,
        playerResult.cells
      );

      return;
    }

    setBoard(newBoard);

    setIsThinking(true);

    setTimeout(() => {
      const aiBoard =
        aiMove([...newBoard]);

      const aiResult =
        checkWinner(aiBoard);

      setBoard(aiBoard);

      if (aiResult.winner) {
        finishGame(
          aiResult.winner,
          aiResult.cells
        );
      }

      setIsThinking(false);
    }, 1000);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setWinningCells([]);
    setIsThinking(false);
  };

  const getStatus = () => {
    if (winner === "X") {
      return {
        icon: "🔥 ",
        text:
          "One badass player you are.",
      };
    }

    if (winner === "O") {
      return {
        icon: "😏 ",
        text:
          "Told you... I don't lose that easily.",
      };
    }

    if (winner === "draw") {
      return {
        icon: "🤝 ",
        text:
          "Looks like we're evenly matched.",
      };
    }

    if (isThinking) {
      return {
        icon: "😈 " ,
        text: "My Turn (O)",
      };
    }

    return {
      icon: "🏆 ",
      text: "Your Turn (X)",
    };
  };

  const status = getStatus();

  return (
    <>
      <div className="mt-5">

        {/* Scoreboard */}
<div
  className="
    flex
    justify-center
    items-center
    gap-12
    mb-2
  "
>
  <div className="text-center">
    <p
      className="
        text-xs
        uppercase
        tracking-wider
        text-[var(--muted)]
      "
    >
      YOU (X)
    </p>

    <p
      className="
        mt-1
        text-3xl
        font-black
        text-green-400
      "
    >
      {xScore}
    </p>
  </div>

  <div className="h-10 w-px bg-amber-400/20" />

  <div className="text-center">
    <p
      className="
        text-xs
        uppercase
        tracking-wider
        text-[var(--muted)]
      "
    >
      ME (O)
    </p>

    <p
      className="
        mt-1
        text-3xl
        font-black
        text-red-400
      "
    >
      {oScore}
    </p>
  </div>
</div>

        {/* Status */}

        <div
          className="
            mt-2
            flex
            justify-center
          "
        >
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-amber-400/40
              bg-amber-400/10
              px-5
              py-2
              font-semibold
            "
          >
           
            {status.icon}
            {status.text}
          </div>
        </div>

        {/* Board */}

        <div
          className="
            mx-auto
            mt-4

            w-[340px]
            h-[340px]

            md:w-[400px]
            md:h-[400px]

            rounded-[18px]
            p-4

            bg-[#C88A2A]

            grid
            grid-cols-3
            gap-3

            shadow-[0_0_40px_rgba(251,191,36,0.35)]
          "
        >
          {board.map(
            (cell, index) => (
              <button
                key={index}
                onClick={() =>
                  handleClick(index)
                }
                className={`
                  flex
                  items-center
                  justify-center

                  rounded-[12px]

                  font-black

                  text-4xl
                  md:text-6xl

                  transition-all
                  duration-300

                  ${
                    index % 2 === 0
                      ? "bg-[#000000]"
                      : "bg-[#8A5A2B]"
                  }

                  ${
                    winningCells.includes(
                      index
                    )
                      ? "ring-4 ring-amber-300 scale-105 shadow-[0_0_25px_rgba(251,191,36,0.8)]"
                      : ""
                  }
                `}
              >
                {cell === "X" && (
                  <span
                    className="
                      text-green-400
                    "
                  >
                    X
                  </span>
                )}

                {cell === "O" && (
                  <span
                    className="
                      text-red-400
                    "
                  >
                    O
                  </span>
                )}
              </button>
            )
          )}
        </div>

        {/* Winner Message */}

       

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
            onClick={resetGame}
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

              hover:scale-105

              transition-all
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

              hover:border-amber-400

              transition-all
            "
          >
            <LogOut size={18} />
            Exit Game
          </button>
        </div>
      </div>

      {/* Exit Modal */}

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
          "
        >
          <div
            className="
              w-100
              max-w-80

              rounded-2xl

              bg-[var(--card)]
              border
              border-zinc-700

              p-6
            "
          >
            <div
              className="
                flex
                justify-between
                items-center
              "
            >
              <h3
                className="
                  text-xl
                  font-bold
                "
              >
                Exit Game?
              </h3>

              <button
                onClick={() =>
                  setShowExitModal(
                    false
                  )
                }
              >
                <X size={20} />
              </button>
            </div>

            <p
              className="
                mt-2
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

              <strong>I'm also one badass
              DEVELOPER😎</strong>
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
                  setShowExitModal(
                    false
                  )
                }
                className="
                  flex-1
                  py-3
                  rounded-xl
                  border
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
    </>
  );
}

