import PropTypes from "prop-types";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Card";
import Round from "./Round";
import cacahuette from "../../Images/cacahuete-wildbeer.png";

function Field({
  cardOnField,
  cardSelect,
  changeCardSelect,
  putCardOnField,
  enemyCard,
  isPlayed,
}) {
  const rounds = ["SRM", "IBU", "ABV", "EBC"];
  const [roundNumber, setRoundNumber] = useState(1);
  const [value, setValue] = useState("SRM");
  const [onePlayerScore, setOnePlayerScore] = useState(0);
  const [twoPlayerScore, setTwoPlayerScore] = useState(0);
  const [resultRound, setResultRound] = useState(
    "Jouez une carte pour commencer"
  );
  let { username } = useParams();
  if (username === undefined) {
    username = "Player";
  }
  if (username.length > 15) {
    username = username.slice(0, 15);
  }

  // fonction qui permet de comparer les valeurs correspondantes au round des deux cartes posé sur le field

  // compare value bir //
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

  // fonction qui change le round

  const changeRound = (arrRounds) => {
    if (roundNumber === 4) {
      setRoundNumber(roundNumber + 1);
      const lastRound = Math.round(Math.random() * (arrRounds.length - 1));
      setValue(arrRounds[lastRound]);
    } else {
      setValue(arrRounds[roundNumber]);
      setRoundNumber(roundNumber + 1);
    }
  };

  // fonction qui regarde en fonction du round les caractéristiques des cartes en appelant la fonction compareValue

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
        console.info("srm", cardOnField[0].srm);
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
          <div>
            {onePlayerScore > 0 && (
              <img src={cacahuette} alt="cacahuette" className="cacahuette" />
            )}
            {onePlayerScore > 1 && (
              <img src={cacahuette} alt="cacahuette" className="cacahuette" />
            )}
            {onePlayerScore > 2 && (
              <img src={cacahuette} alt="cacahuette" className="cacahuette" />
            )}
            {onePlayerScore > 3 && (
              <img src={cacahuette} alt="cacahuette" className="cacahuette" />
            )}
            {onePlayerScore > 4 && (
              <img src={cacahuette} alt="cacahuette" className="cacahuette" />
            )}
          </div>
        </div>
        <div className="affichageScore">{resultRound}</div>
        <div className="scoreBoard-name">
          Renaud
          <div>
            {" "}
            {twoPlayerScore > 0 && (
              <img src={cacahuette} alt="cacahuette" className="cacahuette" />
            )}
            {twoPlayerScore > 1 && (
              <img src={cacahuette} alt="cacahuette" className="cacahuette" />
            )}
            {twoPlayerScore > 2 && (
              <img src={cacahuette} alt="cacahuette" className="cacahuette" />
            )}
            {twoPlayerScore > 3 && (
              <img src={cacahuette} alt="cacahuette" className="cacahuette" />
            )}
            {twoPlayerScore > 4 && (
              <img src={cacahuette} alt="cacahuette" className="cacahuette" />
            )}
          </div>
        </div>
      </div>
    </>
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
