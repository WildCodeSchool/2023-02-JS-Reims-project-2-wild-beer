import React, { useState, useEffect } from "react";
import Field from "./Field";

import Score from "../Score";
import Hand from "./Hand";

function Gamefield() {
  const [cardList, setCardList] = useState([]);
  const [cardListOrigin, setCardListOrigin] = useState([]);
  const [cardOnField, setCardOnField] = useState([]);

  const [cardListEnemy, setCardListEnemy] = useState([]);
  const [cardListEnemyOrigin, setCardListEnemyOrigin] = useState([]);

  const [cardOnFieldEnemy, setCardOnFieldEnemy] = useState([]);
  const [cardSelect, setCardSelect] = useState(-1);

  const changeCardSelect = (idCard) => {
    setCardSelect(idCard);
  };

  const randomBeerPage = Math.floor(Math.random() * 33);
  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers?page=${randomBeerPage}&per_page=10`)
      .then((response) => response.json())
      .then((data) => {
        for (let i = 0; i < data.length; i += 1) {
          Object.defineProperty(data[i], "id", { value: i });
        }

        setCardList(data.slice(0, 5));
        setCardListEnemy(data.slice(5, 10));
      })
      .then(() => {
        setCardListOrigin(cardList);
        setCardListEnemyOrigin(cardListEnemy);
        console.info(cardListEnemy);
        console.info(cardList);
      });
  }, []);

  const putCardOnField = (cardId) => {
    const cleanTable = ({ newCardList, newCardOnField }, card) => {
      if (card.id !== cardId || card.id + 5 !== cardId) {
        newCardList.push(card);
      } else {
        newCardOnField.push(card);
      }
      return {
        newCardList,
        newCardOnField,
      };
    };

    const { newCardList, newCardOnField } = cardListOrigin.reduce(cleanTable, {
      newCardList: [],
      newCardOnField: [],
    });

    const { newCardListEnemy, newCardOnFieldEnemy } =
      cardListEnemyOrigin.reduce(cleanTable, {
        newCardList: [],
        newCardOnField: [],
      });

    setCardOnFieldEnemy(newCardOnFieldEnemy);
    setCardListEnemy(newCardListEnemy);
    setCardOnField(newCardOnField);
    setCardList(newCardList);
  };

  return (
    <div className="game-field">
      <Field
        cardOnField={cardOnField}
        cardOnFieldEnemy={cardOnFieldEnemy}
        putCardOnField={putCardOnField}
        cardSelect={cardSelect}
        changeCardSelect={changeCardSelect}
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
