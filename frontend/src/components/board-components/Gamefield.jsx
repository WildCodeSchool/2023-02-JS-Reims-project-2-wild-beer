import Score from "../Score";
import Hand from "./Hand";
import Rounds from "./Rounds";

function Gamefield() {
  return (
    <div className="game-field">
      <div>Hello from field</div>
      <Rounds />
      <Score />
      <Hand />
    </div>
  );
}

export default Gamefield;
