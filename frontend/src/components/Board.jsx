import { useParams } from "react-router-dom";
import Navbar from "./board-components/Navbar";
import Gamefield from "./board-components/Gamefield";

import "./board-components/Board.css";

function Board() {
  const userName = useParams();
  return (
    <div className="main-board">
      <Navbar />
      <Gamefield />
      <div className="div-name-player">
        <h2 className="name-player">{userName.id}</h2>
      </div>
    </div>
  );
}

export default Board;
