import React, { useState, useEffect } from "react";
import Field from "./Field";

import Score from "../Score";
import Hand from "./Hand";

function Gamefield() {
  const [cardList, setCardList] = useState([]);
  const [cardListOrigin, setCardListOrigin] = useState([]);
  const [cardOnField, setCardOnField] = useState([]);
  const [cardSelect, setCardSelect] = useState(-1);
  const [cardBot, setCardBot] = useState([]);
  const [enemyCard, setEnemyCard] = useState([]);

  const changeCardSelect = (idCard) => {
    setCardSelect(idCard);
  };

  // pour recuperer 5 carte depuis API//
  const randomBeerPage = Math.floor(Math.random() * 64);
  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers?page=${randomBeerPage}&per_page=5`)
      .then((response) => response.json())
      .then((data) => {
        for (let i = 0; i < 5; i += 1) {
          Object.defineProperty(data[i], "id", { value: i });
        }
        setCardList(data.slice(0, 5));
        setCardListOrigin(data.slice(0, 5));
      });
  }, []);

  // function pour mettre la carte dans le field //
  const putCardOnField = (cardId) => {
    const cleanTable = ({ newCardList, newCardOnField }, card) => {
      if (card.id !== cardId) {
        newCardList.push(card);
      } else {
        newCardOnField.push(card);
      }
      return {
        newCardList,
        newCardOnField,
      };
    };

    // function pour mettre carte random de robot //
    fetch(`https://api.punkapi.com/v2/beers/random`)
      .then((response) => response.json())
      .then((beerData) => setCardBot(beerData));
    console.info(cardBot);

    const { newCardList, newCardOnField } = cardListOrigin.reduce(cleanTable, {
      newCardList: [],
      newCardOnField: [],
    });

    fetch(`https://api.punkapi.com/v2/beers/random`)
      .then((response) => response.json())
      .then((data) => {
        setEnemyCard(data);
      });

    setCardOnField(newCardOnField);
    setCardList(newCardList);
  };

  return (
    <div className="game-field">
      <Field
        cardOnField={cardOnField}
        putCardOnField={putCardOnField}
        cardSelect={cardSelect}
        changeCardSelect={changeCardSelect}
        cardBot={cardBot}
        enemyCard={enemyCard}
        isPlayed={false}
      />
      <Score />
      <Hand
        cardList={cardList}
        putCardOnField={putCardOnField}
        cardSelect={cardSelect}
        changeCardSelect={changeCardSelect}
        isPlayed
      />
    </div>
  );
}

export default Gamefield;
