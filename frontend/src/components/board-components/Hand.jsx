import React from "react";

import PropTypes from "prop-types";
import Card from "../Card";

function Hand({
  cardList,
  putCardOnField,
  cardSelect,
  changeCardSelect,
  isPlayed,
}) {
  return (
    <ul className="containertest">
      {cardList.map((card) => (
        <li key={card.id}>
          <Card
            card={card}
            cardSelect={cardSelect}
            changeCardSelect={changeCardSelect}
            putCardOnField={putCardOnField}
            isPlayed={isPlayed}
          />
        </li>
      ))}
      ;
    </ul>
  );
}

Hand.propTypes = {
  cardList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      abv: PropTypes.number.isRequired,
      ibu: PropTypes.number.isRequired,
      ebc: PropTypes.number.isRequired,
      srm: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  putCardOnField: PropTypes.func.isRequired,
  cardSelect: PropTypes.number.isRequired,
  changeCardSelect: PropTypes.func.isRequired,
  isPlayed: PropTypes.bool.isRequired,
};

export default Hand;
