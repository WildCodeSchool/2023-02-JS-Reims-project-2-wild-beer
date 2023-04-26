import Score from "../Score";
import Hand from "./Hand";

function Gamefield() {
  return (
    <div className="game-field">
      <div>Hello from field</div>
      <Score />
      <Hand />
    </div>
  );
}

export default Gamefield;
