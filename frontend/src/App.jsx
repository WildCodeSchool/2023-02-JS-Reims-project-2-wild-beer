import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import "./App.css";
import Board from "./components/Board";
import Carte from "./components/Carte";

import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/wild-beer-gaming" element={<Board />} />
      </Routes>
      <Carte />
      <Cards />
    </div>
  );
}

export default App;
