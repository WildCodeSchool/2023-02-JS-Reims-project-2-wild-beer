import PropTypes from "prop-types";
import Card from "../Card";

function Field({
  cardOnField,
  cardSelect,
  changeCardSelect,
  putCardOnField,
  enemyCard,
  isPlayed,
}) {
  return (
    <section className="warField">
      <div>emplacement 1</div>
      {cardOnField.map((card) => (
        <Card
          key={card.id}
          card={card}
          cardSelect={cardSelect}
          changeCardSelect={changeCardSelect}
          putCardOnField={putCardOnField}
          isPlayed={isPlayed}
        />
      ))}
      <h1>VS</h1>
      <div>emplacement 2</div>
      {enemyCard.map((card) => (
        <Card
          key={card.id}
          card={card}
          cardSelect={cardSelect}
          changeCardSelect={changeCardSelect}
          putCardOnField={putCardOnField}
          isPlayed={isPlayed}
        />
      ))}
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
  isPlayed: PropTypes.bool.isRequired,
};

export default Field;
