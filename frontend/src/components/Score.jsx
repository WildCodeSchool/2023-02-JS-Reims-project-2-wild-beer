import { useState } from "react";

function Score() {
  const [onePlayerScore, setOnePlayerScore] = useState(0);
  const [twoPlayerScore, setTwoPlayerScore] = useState(0);

  return (
    <div className="scoreBoard">
      <div className="scoreBoard-name">
        Player One
        <div>{onePlayerScore}</div>
        <button
          type="button"
          onClick={() => setOnePlayerScore(onePlayerScore - 1)}
          className="scoreBoard-controls-button"
        >
          -
        </button>
        <button
          type="button"
          onClick={() => setOnePlayerScore(onePlayerScore + 1)}
          className="scoreBoard-controls-button"
        >
          +
        </button>
      </div>
      <div className="scoreBoard-name">
        Renaud
        <div>{twoPlayerScore}</div>
        <button
          type="button"
          onClick={() => setTwoPlayerScore(twoPlayerScore - 1)}
          className="scoreBoard-controls-button"
        >
          -
        </button>
        <button
          type="button"
          onClick={() => setTwoPlayerScore(twoPlayerScore + 1)}
          className="scoreBoard-controls-button"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Score;
