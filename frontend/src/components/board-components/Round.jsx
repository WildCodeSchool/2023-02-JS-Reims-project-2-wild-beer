import PropTypes from "prop-types";

import { useEffect, useState } from "react";

import gifVictory from "../../Images/Victory.gif";

function Round({
  value,
  setValue,
  changeRound,
  enemyCard,
  checkRound,
  rounds,
  roundNumber,
  onePlayerScore,
  twoPlayerScore,
}) {
  // test automatisation
  const [endGame, setEndGame] = useState(false);
  const [victory, setVictory] = useState(false);
  useEffect(() => {
    if (enemyCard[0] !== undefined) {
      checkRound(rounds);
      changeRound(rounds);
    }
  }, [enemyCard]);

  useEffect(() => {
    if (roundNumber > 5) {
      setEndGame(true);
      if (onePlayerScore > twoPlayerScore) {
        setValue("Vous avez gagné");
        setVictory(true);
      } else if (onePlayerScore < twoPlayerScore) {
        setValue("Renaud a gagné");
      } else {
        setValue("Egalité parfaite");
      }
    }
  }, [roundNumber]);

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <>
      {victory && (
        <img src={gifVictory} alt="loading..." className="gif-victory-right" />
      )}
      {victory && (
        <img src={gifVictory} alt="loading..." className="gif-victory-left" />
      )}
      <div className="showRound">
        {endGame && <h1>Fin de la partie</h1>}
        {!endGame && <h1> Round {roundNumber}: </h1>}
        <h1>{value}</h1>
        {endGame && (
          <button
            onClick={refreshPage}
            type="button"
            className="button-recommencer"
          >
            Recommencer
          </button>
        )}
      </div>
    </>
  );
}

Round.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func.isRequired,
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
  onePlayerScore: PropTypes.number.isRequired,
  twoPlayerScore: PropTypes.number.isRequired,
};

Round.defaultProps = {
  value: "",
};

export default Round;
