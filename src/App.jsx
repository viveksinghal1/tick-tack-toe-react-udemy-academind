import "./styles.css";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

export default function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-players">
          <Player initialName="Player 1" symbol="X" />
          <Player initialName="Player 2" symbol="O" />
        </ol>
        <GameBoard />
      </div>
    </main>
  );
}
