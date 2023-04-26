import PropTypes from "prop-types";

function Card({ card, cardSelect, changeCardSelect }) {
  // (rare case) check whether the different card values are defined or not

  let classColor = "";
  // check of the ebc to define the class that will have the appropriate colors
  if (card.ebc < 16) {
    classColor = "card white";
  } else if (card.ebc < 44) {
    classColor = "card blond";
  } else if (card.ebc < 76) {
    classColor = "card brown";
  } else {
    classColor = "card black";
  }

  return (
    <>
      <section
        className={classColor}
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
      {cardSelect === card.id && <button type="button">Joue</button>}
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
};

export default Card;
