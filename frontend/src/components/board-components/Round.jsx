import React, { useState } from "react";

function Round() {
  const rounds = ["SRM", "IBU", "ABV", "EBC"];
  const [value, setValue] = useState();

  const changeRound = (arrRounds) => {
    const round = Math.round(Math.random() * (arrRounds.length - 1));
    setValue(arrRounds[round]);
  };

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
