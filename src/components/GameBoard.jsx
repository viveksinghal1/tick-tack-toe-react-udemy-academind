import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  const handleSelectSquare = (rowIndex, colIndex) => {
    console.log("alert");
    setGameBoard((prevBoard) => {
      const updatedBoard = [...prevBoard.map((innerBoard) => [...innerBoard])];
      updatedBoard[rowIndex][colIndex] = "X";
      return updatedBoard;
    });
  };

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <button
                key={colIndex}
                onClick={() => handleSelectSquare(rowIndex, colIndex)}
              >
                {col}
              </button>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
