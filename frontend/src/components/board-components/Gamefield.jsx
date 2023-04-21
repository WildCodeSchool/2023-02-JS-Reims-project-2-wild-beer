import Hand from "./Hand";
import Iahand from "./Iahand";
import Select from "./Select";
import Score from "./Score";

function Gamefield() {
  return (
    <div className="game-field">
      <Iahand /> <Score isPlayer={false} />
      <div className="Selecteur">
        <Select isPlayer={false} /> <h1>VS</h1> <Select isPlayer />
      </div>
      <Hand /> <Score isPlayer />
    </div>
  );
}

export default Gamefield;
