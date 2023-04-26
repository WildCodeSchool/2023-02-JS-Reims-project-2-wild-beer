import PropTypes from "prop-types";
import Card from "../Card";

function Field({ cardOnField, cardSelect, changeCardSelect, putCardOnField }) {
  return (
    <section className="warField">
      <div>emplacement 1</div>
      {cardOnField.map((card) => (
        <li key={card.id}>
          <Card
            card={card}
            cardSelect={cardSelect}
            changeCardSelect={changeCardSelect}
            putCardOnField={putCardOnField}
          />
        </li>
      ))}
      <h1>VS</h1>
      <div>emplacement 2</div>
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
};

export default Field;
