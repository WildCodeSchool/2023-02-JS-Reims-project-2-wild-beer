
import { useParams } from "react-router-dom";

import React, { useState, useEffect } from "react";
import Field from "./Field";


import Score from "../Score";
import Hand from "./Hand";

function Gamefield() {

  const { username } = useParams();
  return (
    <div className="game-field">
      <div>Hello {username} !</div>
  const [cardList, setCardList] = useState([]);
  const [cardListOrigin, setCardListOrigin] = useState([]);
  const [cardOnField, setCardOnField] = useState([]);
  const [cardSelect, setCardSelect] = useState(-1);

  const changeCardSelect = (idCard) => {
    setCardSelect(idCard);
  };
  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6")
      .then((response) => response.json())
      .then((data) => {
        for (let i = 0; i < 5; i += 1) {
          Object.defineProperty(data[i], "id", { value: i });
        }
        setCardList(data.slice(0, 5));
        setCardListOrigin(data.slice(0, 5));
      });
  }, []);

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

    const { newCardList, newCardOnField } = cardListOrigin.reduce(cleanTable, {
      newCardList: [],
      newCardOnField: [],
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
