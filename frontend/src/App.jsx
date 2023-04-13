import { useState } from "react";

import Menu from "./components/Menu";

import "./App.css";

import Navbar from "./components/Navbar";

import Rules from "./components/Rules";

function App() {
  const [rules, setRules] = useState(false);
  const [isMenu, setIsMenu] = useState(true);

  const handleChangeMenu = () => {
    setIsMenu(!isMenu);
    if (rules && !isMenu) {
      setRules(!rules);
    }
  };
  const showMeTheRules = () => {
    setRules(!rules);
  };

  return (
    <div className="App">
      {isMenu ? (
        <Menu handleChangeMenu={handleChangeMenu} />
      ) : (
        <Navbar
          handleChangeMenu={handleChangeMenu}
          showMeTheRules={showMeTheRules}
        />
      )}
      {rules && <Rules />}
    </div>
  );
}

export default App;
