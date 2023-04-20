import Navbar from "./board-components/Navbar";
import Gamefield from "./board-components/Gamefield";

import "./board-components/Board.css";

function Board() {
  return (
    <div className="main-board">
      <Navbar />
      <Gamefield />
    </div>
  );
}

export default Board;
