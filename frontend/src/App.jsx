import { useState } from "react";

import Menu from "./components/Menu";

import "./App.css";

import Rules from "./components/Rules";
import Board from "./components/Board";

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
        <Board
          handleChangeMenu={handleChangeMenu}
          showMeTheRules={showMeTheRules}
        />
      )}
      {rules && <Rules />}
    </div>
  );
}

export default App;
