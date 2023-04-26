import PropTypes from "prop-types";

function Card({
  card,
  cardSelect,
  changeCardSelect,
  putCardOnField,
  isPlayed,
}) {
  return (
    <>
      <section
        className="card"
        key={card.id}
        onClick={() => {
          changeCardSelect(card.id);
        }}
        onKeyDown={() => {
          changeCardSelect(card.id);
        }}
        role="button"
        tabIndex={card.id}
      >
        <h1>{card.name}</h1>
        <ul>
          <li>EBC : {card.ebc}</li>
          <li>ABV : {card.abv}</li>
          <li>IBU : {card.ibu}</li>
          <li>SRM : {card.srm}</li>
        </ul>
      </section>
      {cardSelect === card.id && isPlayed && (
        <button
          className="button-play"
          type="button"
          onClick={() => {
            putCardOnField(card.id);
          }}
        >
          Joue
        </button>
      )}
    </>
  );
}

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    ebc: PropTypes.number.isRequired,
    abv: PropTypes.number.isRequired,
    ibu: PropTypes.number.isRequired,
    srm: PropTypes.number.isRequired,
  }).isRequired,
  cardSelect: PropTypes.number.isRequired,
  changeCardSelect: PropTypes.func.isRequired,
  putCardOnField: PropTypes.func.isRequired,
  isPlayed: PropTypes.bool.isRequired,
};

export default Card;
