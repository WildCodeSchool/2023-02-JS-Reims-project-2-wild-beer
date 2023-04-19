import React, { useState, useEffect } from "react";
import Carte from "../Carte";

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
    <div className="containertest">
      {cardList.map((card) => (
        <Carte handcard={card} key={card.id} />
      ))}
      ;
    </div>
  );
}

export default Hand;
