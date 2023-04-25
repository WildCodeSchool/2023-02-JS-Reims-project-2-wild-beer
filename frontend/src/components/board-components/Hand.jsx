import React, { useState, useEffect } from "react";
import Card from "../Card";

function Hand() {
  const [cardList, setCardList] = useState([]);
  /* This is fetch API */
  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6")
      .then((response) => response.json())
      .then((data) => {
        setCardList(data.slice(0, 5));
        console.info(data.slice(0, 5));
      });
  }, []);
  return (
    <ul className="containertest">
      {cardList.map((card) => (
        <li key={card.id}>
          <Card card={card} />
        </li>
      ))}
      ;
    </ul>
  );
}

export default Hand;
