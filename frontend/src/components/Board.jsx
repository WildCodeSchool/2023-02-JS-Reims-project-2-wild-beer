import PropTypes from "prop-types";
import Navbar from "./board-components/Navbar";
import Gamefield from "./board-components/Gamefield";

import "./board-components/Board.css";

function Board({ handleChangeMenu, showMeTheRules }) {
  return (
    <div className="main-board">
      <Navbar
        handleChangeMenu={handleChangeMenu}
        showMeTheRules={showMeTheRules}
      />
      <Gamefield />
    </div>
  );
}

Board.propTypes = {
  handleChangeMenu: PropTypes.func.isRequired,
  showMeTheRules: PropTypes.func.isRequired,
};

export default Board;
