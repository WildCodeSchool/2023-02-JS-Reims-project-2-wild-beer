import Hand from "./Hand";
import Iahand from "./Iahand";

function Gamefield() {
  return (
    <div className="game-field">
      <Iahand />
      <div>VS</div>
      <Hand />
    </div>
  );
}

export default Gamefield;
