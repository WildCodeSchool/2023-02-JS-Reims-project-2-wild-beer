import React, { useState, useEffect } from "react";

function Carte() {
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/beers")
      .then((response) => response.json())
      .then((data) => setCardList(data));
  }, []);

  return (
    <div>
      <ul>
        {cardList.map((card) => (
          <li key={card.id}>{card.name}</li>
        ))}
        ;
      </ul>
    </div>
  );
}
export default Carte;
