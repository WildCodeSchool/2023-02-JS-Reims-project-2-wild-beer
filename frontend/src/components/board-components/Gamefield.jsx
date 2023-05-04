import React, { useState, useEffect } from "react";
import Field from "./Field";
import Hand from "./Hand";

function Gamefield() {
  const [cardList, setCardList] = useState([]);
  const [cardOnField, setCardOnField] = useState([]);
  const [enemyCard, setEnemyCard] = useState([]);
  const [cardSelect, setCardSelect] = useState(-1);

  // fonction appelé lorsque l'on clique sur une carte et permet d'afficher un bouton en dessous
  const changeCardSelect = (idCard) => {
    setCardSelect(idCard);
  };

  // variable qui permet de choisir aléatoirement une page de 5 bière dans l'api
  const randomBeerPage = Math.floor(Math.random() * 63);

  // fetch de l'API qui va retourner un tableau de 5 objets qu'on mettra dans notre state cardList qui sera afficher dans le composant hand
  useEffect(() => {
    fetch(
      `https://api.punkapi.com/v2/beers?page=${randomBeerPage}&per_page=5&abvgt=1&ibu_gt=1&ebc_gt=1`
    )
      .then((response) => response.json())
      .then((data) => {
        for (let i = 0; i < 5; i += 1) {
          Object.defineProperty(data[i], "id", { value: i });
        }
        setCardList(data.slice(0, 5));
      });
  }, []);
  // fonction qui s'exécute lorsque l'on joue une carte, plusieurs éléments s'exécute
  const putCardOnField = (cardId) => {
    // Tout d'abord création de la fonction cleanTable qui permet de préparer la fonction qui sera dans le reduce par la suite, on a deux paramètres (newCardList, newCardOnField) qui seront les deux accumulateurs
    const cleanTable = ({ newCardList, newCardOnField }, card) => {
      // en fonction de l'id de la carte choisi on mettra une condition qui répartira les cartes
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
    // On appelle la fonction cleanTable dans le reduce de cardList qui va checker les cartes en fonction de l'id
    const { newCardList, newCardOnField } = cardList.reduce(cleanTable, {
      newCardList: [],
      newCardOnField: [],
    });
    // ajout des deux accumulateurs sortis du reduce dans les states correspondants
    setCardOnField(newCardOnField);
    setCardList(newCardList);

    // Création d'une variable random pour générer la carte adverse dans le fetch juste en dessous
    const randomBeerEnemyPage = Math.floor(Math.random() * 300);
    fetch(
      `https://api.punkapi.com/v2/beers?page=${randomBeerEnemyPage}&per_page=1&abvgt=1&ibu_gt=1&ebc_gt=1`
    )
      .then((response) => response.json())
      .then((data) => {
        setEnemyCard(data);
      });
  };

  return (
    <div className="game-field">
      <Field
        cardOnField={cardOnField}
        putCardOnField={putCardOnField}
        cardSelect={cardSelect}
        changeCardSelect={changeCardSelect}
        enemyCard={enemyCard}
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
