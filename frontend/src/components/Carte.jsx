import React, { useState, useEffect } from "react";

function Carte() {
  const [cardList, setCardList] = useState([]);
  /* This is fetch API */
  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6")
      .then((response) => response.json())
      .then((data) => setCardList(data.slice(0, 5)));
  }, []);

  return (
    <div className="containertest">
      {cardList.map((card) => (
        <div className="container" key={card.id}>
          <ul>
            <li>{card.name}</li>
            <li>{card.id}</li>
            <li>{card.ibu}</li>
            <li>{card.abv}</li>
            <li>{card.ebc}</li>
            <li>{card.srm}</li>
            <li>{card.tagline}</li>
          </ul>
        </div>
      ))}
      ;
    </div>
  );
}
export default Carte;
