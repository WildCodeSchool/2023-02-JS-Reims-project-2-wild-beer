import PropTypes from "prop-types";
import Card from "../Card";

function Field({
  cardOnField,
  cardSelect,
  changeCardSelect,
  putCardOnField,
  isPlayed,
}) {
  return (
    <section className="warField">
      {cardOnField.map((card) => (
        <li key={card.id}>
          <Card
            card={card}
            cardSelect={cardSelect}
            changeCardSelect={changeCardSelect}
            putCardOnField={putCardOnField}
            isPlayed={isPlayed}
          />
        </li>
      ))}
      <h1>VS</h1>
    </section>
  );
}

Field.propTypes = {
  cardOnField: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      abv: PropTypes.number.isRequired,
      ibu: PropTypes.number.isRequired,
      ebc: PropTypes.number.isRequired,
      srm: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  cardSelect: PropTypes.number.isRequired,
  changeCardSelect: PropTypes.func.isRequired,
  putCardOnField: PropTypes.func.isRequired,
  isPlayed: PropTypes.bool.isRequired,
};

export default Field;
