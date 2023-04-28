import { useState } from "react";
import { useParams } from "react-router-dom";

function Score() {
  const [onePlayerScore, setOnePlayerScore] = useState(0);
  const [twoPlayerScore, setTwoPlayerScore] = useState(0);
  const { username } = useParams();

  return (
    <div className="scoreBoard">
      <div className="scoreBoard-name">
        {username}
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
