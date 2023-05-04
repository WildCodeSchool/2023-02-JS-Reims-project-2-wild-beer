import PropTypes from "prop-types";

import { useEffect } from "react";

function Round({ value, changeRound, enemyCard, checkRound, rounds }) {
  // test automatisation

  useEffect(() => {
    if (enemyCard[0] !== undefined) {
      checkRound(rounds);
      changeRound(rounds);
    }
  }, [enemyCard]);

  return (
    <div className="showRound">
      <h1>Prochain round : </h1>
      <h1>{value}</h1>
    </div>
  );
}

Round.propTypes = {
  value: PropTypes.string.isRequired,
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
};

export default Round;
