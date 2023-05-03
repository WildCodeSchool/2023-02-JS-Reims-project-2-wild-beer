import PropTypes from "prop-types";
import { useState } from "react";
import Card from "../Card";
import Round from "./Round";

function Field({
  cardOnField,
  cardSelect,
  changeCardSelect,
  putCardOnField,
  enemyCard,
  isPlayed,
}) {
  const [value, setValue] = useState("EBC");

  const compareValue = (value1, value2) => {
    if (value1 > value2) {
      console.info(`${value1} win 1 point`);
    } else if (value1 < value2) {
      console.info(`${value2} win 1 point`);
    } else {
      console.info("Egalité");
    }
  };

  const changeRound = (arrRounds) => {
    const round = Math.round(Math.random() * (arrRounds.length - 1));
    setValue(arrRounds[round]);
  };

  const checkRound = () => {
    switch (value) {
      case "EBC":
        console.info(cardOnField[0].ebc);
        console.info(enemyCard[0].ebc);
        compareValue(cardOnField[0].ebc, enemyCard[0].ebc);
        break;
      case "IBU":
        console.info(cardOnField[0].ibu);
        console.info(enemyCard[0].ibu);
        compareValue(cardOnField[0].ibu, enemyCard[0].ibu);
        break;
      case "ABV":
        console.info(cardOnField[0].abv);
        console.info(enemyCard[0].abv);
        compareValue(cardOnField[0].abv, enemyCard[0].abv);
        break;
      case "SRM":
        console.info(cardOnField[0].srm);
        console.info(enemyCard[0].srm);
        compareValue(cardOnField[0].srm, enemyCard[0].srm);
        break;
      default:
        console.info("nope");
    }
  };

  return (
    <section className="warField">
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
      <div className="center-field">
        <Round
          value={value}
          changeRound={changeRound}
          cardOnField={cardOnField}
          enemyCard={enemyCard}
          checkRound={checkRound}
        />
      </div>
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
