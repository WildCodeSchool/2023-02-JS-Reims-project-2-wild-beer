import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/wild-beer-gaming" element={<Navbar />} />
      </Routes>
    </div>
  );
}

export default App;
