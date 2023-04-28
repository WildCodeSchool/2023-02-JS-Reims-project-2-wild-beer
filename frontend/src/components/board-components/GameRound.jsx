import React, { useState } from "react";

function GameRound() {
  const rounds = ["SRM", "IBU", "ABV", "EBC"];
  const [value, setValue] = useState("");

  const ChangeRound = (arr) => {
    const selection = Math.round(Math.random() * (arr.length - 1));
    setValue(arr[selection]);
  };

  return (
    <>
      <h1>{value}</h1>
      <button
        type="button"
        onClick={() => {
          ChangeRound(rounds);
        }}
      >
        Click
      </button>
    </>
  );
}
export default GameRound;
