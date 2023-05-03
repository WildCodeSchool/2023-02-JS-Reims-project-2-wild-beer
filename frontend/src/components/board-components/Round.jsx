import React, { useState } from "react";

function Round() {
  const shuffled = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const rounds = ["SRM", "IBU", "ABV", "EBC"];
  const shuffledRounds = shuffled([...rounds]);
  const visitedRounds = [];
  const [value, setValue] = useState(rounds[0]);

  const changeRound = (arrRounds) => {
    const round = Math.round(Math.random() * (arrRounds.length - 1));
    setValue(arrRounds[round]);
  };

  let round;
  do {
    round = shuffledRounds.shift();
    if (!visitedRounds.includes(round)) {
      visitedRounds.push(round);
      break;
    }
  } while (shuffledRounds.length > 0);

  return (
    <>
      <h1 className="showRound">Round {value}</h1>
      <button
        className="buttonRound"
        type="button"
        onClick={() => {
          changeRound(rounds);
        }}
      >
        Jouer
      </button>
    </>
  );
}

export default Round;
