import { useState } from "react";
import "./TicTacToe.css";

type Player = "X" | "O";
type SquareValue = Player | null;

type Scores = {
  X: number;
  O: number;
  draws: number;
};

type SquareProps = {
  value: SquareValue;
  onSquareClick: () => void;
};

function Square({ value, onSquareClick }: SquareProps) {
  const valueClass = value ? `ttt-square-${value.toLowerCase()}` : "";

  return (
    <button
      type="button"
      className={`ttt-square ${valueClass}`}
      onClick={onSquareClick}
      aria-label={value ? `${value} işaretli kare` : "Boş kare"}
    >
      {value}
    </button>
  );
}

type BoardProps = {
  xIsNext: boolean;
  squares: SquareValue[];
  onPlay: (nextSquares: SquareValue[]) => void;
};

function Board({ xIsNext, squares, onPlay }: BoardProps) {
  function handleClick(index: number) {
    if (calculateWinner(squares) || squares[index]) {
      return;
    }

    const nextSquares = squares.slice();

    nextSquares[index] = xIsNext ? "X" : "O";

    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  const boardIsFull = squares.every((square) => square !== null);

  let status = `Sıradaki oyuncu: ${xIsNext ? "X" : "O"}`;

  if (winner) {
    status = `Kazanan: ${winner}`;
  } else if (boardIsFull) {
    status = "Oyun berabere!";
  }

  return (
    <div className="ttt-board-panel">
      <p className="ttt-status" aria-live="polite">
        {status}
      </p>

      <div className="ttt-board">
        {squares.map((square, index) => (
          <Square
            key={index}
            value={square}
            onSquareClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

function TicTacToe() {
  const [history, setHistory] = useState<SquareValue[][]>([
    Array<SquareValue>(9).fill(null),
  ]);

  const [currentMove, setCurrentMove] = useState(0);

  const [scores, setScores] = useState<Scores>({
    X: 0,
    O: 0,
    draws: 0,
  });

  const [roundScored, setRoundScored] = useState(false);

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: SquareValue[]) {
    const nextHistory = [
      ...history.slice(0, currentMove + 1),
      nextSquares,
    ];

    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);

    const winner = calculateWinner(nextSquares);

    const isDraw =
      !winner && nextSquares.every((square) => square !== null);

    if (!roundScored && winner) {
      setScores((previousScores) => ({
        ...previousScores,
        [winner]: previousScores[winner] + 1,
      }));

      setRoundScored(true);
    } else if (!roundScored && isDraw) {
      setScores((previousScores) => ({
        ...previousScores,
        draws: previousScores.draws + 1,
      }));

      setRoundScored(true);
    }
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  function resetRound() {
    setHistory([Array<SquareValue>(9).fill(null)]);
    setCurrentMove(0);
    setRoundScored(false);
  }

  function resetScores() {
    setScores({
      X: 0,
      O: 0,
      draws: 0,
    });

    resetRound();
  }

  const moves = history.map((_squares, move) => {
    const description =
      move === 0 ? "Oyunun başlangıcına git" : `${move}. hamleye git`;

    return (
      <li key={move}>
        <button
          type="button"
          onClick={() => jumpTo(move)}
          disabled={move === currentMove}
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <section className="ttt-section">
      <div className="ttt-heading">
        <p className="eyebrow">React Tutorial Project</p>
        <h2>Tic-Tac-Toe</h2>
        <p>
          Square, Board, props, state, immutable array güncelleme ve hamle
          geçmişi örneği.
        </p>
      </div>

      <div className="ttt-scoreboard" aria-label="Skor tablosu">
        <div className="ttt-score">
          <span>X Galibiyet</span>
          <strong>{scores.X}</strong>
        </div>

        <div className="ttt-score">
          <span>O Galibiyet</span>
          <strong>{scores.O}</strong>
        </div>

        <div className="ttt-score">
          <span>Beraberlik</span>
          <strong>{scores.draws}</strong>
        </div>
      </div>

      <div className="ttt-game">
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
        />

        <aside className="ttt-history">
          <h3>Hamle Geçmişi</h3>
          <ol>{moves}</ol>
        </aside>
      </div>

      <div className="ttt-actions">
        <button type="button" onClick={resetRound}>
          Yeni Tur
        </button>

        <button
          type="button"
          className="ttt-secondary-button"
          onClick={resetScores}
        >
          Skorları Sıfırla
        </button>
      </div>
    </section>
  );
}

export default TicTacToe;

function calculateWinner(squares: SquareValue[]): Player | null {
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

  for (const [a, b, c] of winningLines) {
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a];
    }
  }

  return null;
}