import PropTypes from "prop-types";

import { useEffect, useState } from "react";

function Round({
  value,
  changeRound,
  enemyCard,
  checkRound,
  rounds,
  roundNumber,
}) {
  // test automatisation
  const [endGame, setEndGame] = useState(false);
  useEffect(() => {
    if (enemyCard[0] !== undefined) {
      checkRound(rounds);
      changeRound(rounds);
    }
  }, [enemyCard]);

  useEffect(() => {
    if (roundNumber > 5) {
      setEndGame(true);
    }
  }, [roundNumber]);

  return (
    <div className="showRound">
      {endGame && <h1>Fin de la partie</h1>}
      {!endGame && <h1> Round {roundNumber}: </h1>}
      <h1>{value}</h1>
    </div>
  );
}

Round.propTypes = {
  value: PropTypes.string,
  changeRound: PropTypes.func.isRequired,
  enemyCard: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      abv: PropTypes.number,
      ibu: PropTypes.number,
      ebc: PropTypes.number,
      srm: PropTypes.number,
    }).isRequired
  ).isRequired,
  checkRound: PropTypes.func.isRequired,
  rounds: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  roundNumber: PropTypes.number.isRequired,
};

Round.defaultProps = {
  value: "",
};

export default Round;
