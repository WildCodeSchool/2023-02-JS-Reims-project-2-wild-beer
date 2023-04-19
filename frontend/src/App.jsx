import { Routes, Route } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Carte from "./components/Carte";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/wild-beer-gaming" element={<Navbar />} />
      </Routes>
      <Carte />
    </div>
  );
}

export default App;
