import PropTypes from "prop-types";
import { useState } from "react";
import { useParams } from "react-router-dom";
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
  const rounds = ["SRM", "IBU", "ABV", "EBC"];
  const [value, setValue] = useState("EBC");
  const [onePlayerScore, setOnePlayerScore] = useState(0);
  const [twoPlayerScore, setTwoPlayerScore] = useState(0);
  const [resultRound, setResultRound] = useState(
    "Jouez une carte pour commencer"
  );
  let { username } = useParams();
  if (username === undefined) {
    username = "Player";
  }

  const compareValue = (value1, value2) => {
    if (value1 > value2) {
      setOnePlayerScore(onePlayerScore + 1);
      setResultRound(`${username} remporte la manche`);
    } else if (value1 < value2) {
      setTwoPlayerScore(twoPlayerScore + 1);
      setResultRound(`Renaud remporte la manche`);
    } else {
      setResultRound(`Egalité`);
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
    <>
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
            rounds={rounds}
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
      <div className="scoreBoard">
        <div className="scoreBoard-name">
          {username}
          <div>{onePlayerScore}</div>
        </div>
        <div>{resultRound}</div>
        <div className="scoreBoard-name">
          Renaud
          <div>{twoPlayerScore}</div>
        </div>
      </div>
    </>
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
      <h1>VS</h1>
      <input type="text" onChange={handleRound} />
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
