import React, { useState, useEffect } from "react";
import Field from "./Field";
import Hand from "./Hand";

function Gamefield() {
  const [cardList, setCardList] = useState([]);
  const [cardOnField, setCardOnField] = useState([]);
  const [cardSelect, setCardSelect] = useState(0);

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

    const { newCardList, newCardOnField } = cardList.reduce(cleanTable, {
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
