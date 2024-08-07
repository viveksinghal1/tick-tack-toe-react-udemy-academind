import "./styles.css";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";

function deriveActivePlayer(turns) {
  let curPlayer = "X";
  if (turns.length > 0 && turns[0].player === "X") {
    curPlayer = "O";
  }
  return curPlayer;
}

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const curPlayer = deriveActivePlayer(gameTurns);

  const gameBoard = [...initialGameBoard.map((arr) => [...arr])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  let winner = null;

  for (const comb of WINNING_COMBINATIONS) {
    const firstSymbol = gameBoard[comb[0].row][comb[0].column];
    if (firstSymbol) {
      const secondSymbol = gameBoard[comb[1].row][comb[1].column];
      const thirdSymbol = gameBoard[comb[2].row][comb[2].column];
      if (firstSymbol === secondSymbol && secondSymbol === thirdSymbol) {
        winner = curPlayer;
      }
    }
  }

  const isDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const curPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: curPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={curPlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={curPlayer === "O"}
          />
        </ol>
        {(winner || isDraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}
