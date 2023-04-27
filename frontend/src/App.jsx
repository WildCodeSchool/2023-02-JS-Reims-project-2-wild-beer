import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import "./App.css";
import Board from "./components/Board";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/wild-beer-game/:username" element={<Board />} />
      </Routes>
    </div>
  );
}

export default App;
