import { useState } from "react";
import Menu from "./components/Menu";
import "./App.css";

function App() {
  const [fetchedData, setFetchedData] = useState([]);
  const [isMenu, setIsMenu] = useState(true);
  const beerFetch = () => {
    fetch("http://localhost:5000/beers")
      .then((response) => response.json())
      .then((data) => {
        setFetchedData(data);
      });
  };

  return (
    <div className="App">
      {isMenu ? <Menu setIsMenu={setIsMenu} isMenu={isMenu} /> : ""}
      <Menu setIsMenu={setIsMenu} isMenu={isMenu} />
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
