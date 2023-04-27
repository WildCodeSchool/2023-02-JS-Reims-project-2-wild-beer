import React, { useState } from "react";

function Rounds() {
  const rounds = ["SRM", "IBU", "ABV", "EBC"];
  const [value, setValue] = useState();

  const ChangeRound = (arr) => {
    const selection = Math.round(Math.random() * (arr.length - 1));
    setValue(arr[selection]);
  };

  return (
    <>
      <h1 className="showRound">Round {value}</h1>
      <button
        className="buttonRound"
        type="button"
        onClick={() => {
          ChangeRound(rounds);
        }}
      >
        Jouer
      </button>
    </>
  );
}

export default Rounds;
