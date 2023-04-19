import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import "./App.css";
import Board from "./components/Board";
import Carte from "./components/Carte";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/wild-beer-gaming" element={<Board />} />
      </Routes>
      <Carte />
    </div>
  );
}

export default App;
