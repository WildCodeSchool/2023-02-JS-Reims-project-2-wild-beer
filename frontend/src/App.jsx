import { useState } from "react";

import Menu from "./components/Menu";

import "./App.css";

import Rules from "./components/Rules";

function App() {
  const [fetchedData, setFetchedData] = useState([]);
  const [rules, setRules] = useState(true);
  const beerFetch = () => {
    fetch("http://localhost:5000/beers")
      .then((response) => response.json())
      .then((data) => {
        setFetchedData(data);
      });
  };

  const showMeTheRules = () => {
    setRules(!rules);
  };

  return (
    <div className="App">
      <Menu />
      <button type="button" onClick={showMeTheRules}>
        Rules
      </button>
      {rules && <Rules />}

      <button type="button" onClick={beerFetch}>
        Viens boire un coup !
      </button>
      {fetchedData.map((beer) => (
        <p key={beer.id}>
          {beer.name} | {beer.ebc} | {beer.srm} | {beer.ibu} | {beer.abv}
        </p>
      ))}
    </div>
  );
}

export default App;
