import { useState } from "react";

function Menu() {
  const [isMenu, setIsMenu] = useState(true);
  const handleChangeMenu = () => {
    setIsMenu(!isMenu);
    console.info(isMenu);
  };

  return (
    <div className="firstMenu">
      <p>Quelle est votre pseudo ?</p>
      <input type="text" className="inputFirstMenu" />
      <button
        type="button"
        onClick={handleChangeMenu}
        className="buttonFirstMenu"
      >
        Jouer
      </button>
    </div>
  );
}

export default Menu;
