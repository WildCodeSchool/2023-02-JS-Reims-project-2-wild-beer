import { useParams } from "react-router-dom";
import Score from "../Score";
import Hand from "./Hand";

function Gamefield() {
  const { username } = useParams();
  return (
    <div className="game-field">
      <div>Hello {username} !</div>
      <Score />
      <Hand />
    </div>
  );
}

export default Gamefield;
