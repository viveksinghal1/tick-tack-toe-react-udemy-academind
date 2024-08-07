import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
  };

  const handlePlayerNameChange = (e) => {
    setPlayerName(e.target.value);
  };

  let playerNameField = <span className="player-name">{playerName}</span>;
  let btnCaption = "Edit";

  if (isEditing) {
    playerNameField = (
      <input
        type="text"
        onChange={handlePlayerNameChange}
        value={playerName}
        required
      />
    );
    btnCaption = "Save";
  }

  return (
    <li>
      <span className="player">
        {playerNameField}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
}
