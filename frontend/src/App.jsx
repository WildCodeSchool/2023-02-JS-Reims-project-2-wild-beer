import { Routes, Route } from "react-router-dom";
// import Menu from "./components/Menu";
import "./App.css";
import Board from "./components/Board";
import AgeVerification from "./components/AgeVerification";
import Menu from "./components/Menu";
import Mineur from "./components/Mineur";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AgeVerification />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Menu/wild-beer-gaming/:username" element={<Board />} />
        <Route path="/Mineur" element={<Mineur />} />
      </Routes>
    </div>
  );
}

export default App;
