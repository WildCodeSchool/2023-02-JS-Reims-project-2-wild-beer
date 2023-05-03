import PropTypes from "prop-types";

function Round({ value, changeRound, cardOnField, enemyCard, checkRound }) {
  const rounds = ["SRM", "IBU", "ABV", "EBC"];

  return (
    <>
      <h1 className="showRound">{value}</h1>
      {cardOnField[0] !== undefined && enemyCard[0] !== undefined && (
        <button
          className="buttonRound"
          type="button"
          onClick={() => {
            changeRound(rounds);
          }}
        >
          Change Round
        </button>
      )}
      {cardOnField[0] !== undefined && enemyCard[0] !== undefined && (
        <button
          className="buttonRound"
          type="button"
          onClick={() => {
            checkRound(rounds);
          }}
        >
          Jouer
        </button>
      )}
    </>
  );
}

Round.propTypes = {
  value: PropTypes.string.isRequired,
  changeRound: PropTypes.func.isRequired,
  cardOnField: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      abv: PropTypes.number,
      ibu: PropTypes.number,
      ebc: PropTypes.number,
      srm: PropTypes.number,
    }).isRequired
  ).isRequired,
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
};

export default Round;
