import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Hand from "./Hand";

function Board({ handleChangeMenu, showMeTheRules }) {
  return (
    <div className="main-board">
      <Navbar
        handleChangeMenu={handleChangeMenu}
        showMeTheRules={showMeTheRules}
      />
      <div className="game-field">
        <Hand />
        <div>Test champs bataille</div>
        <Hand />
      </div>
    </div>
  );
}

Board.propTypes = {
  handleChangeMenu: PropTypes.func.isRequired,
  showMeTheRules: PropTypes.func.isRequired,
};

export default Board;
