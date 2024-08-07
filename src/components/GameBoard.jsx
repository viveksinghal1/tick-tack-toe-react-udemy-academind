export default function GameBoard({ onSelectSquare, board }) {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((symbol, colIndex) => (
              <button
                key={colIndex}
                onClick={() => onSelectSquare(rowIndex, colIndex)}
                disabled={symbol !== null}
              >
                {symbol}
              </button>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
