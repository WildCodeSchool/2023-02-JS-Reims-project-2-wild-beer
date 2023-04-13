import { useState } from "react";

function Menu() {
  const [isMenu, setIsMenu] = useState(true);
  const handleChangeMenu = () => {
    setIsMenu(!isMenu);
    console.info(isMenu);
  };

  return (
    <form className="firstMenu">
      <label>
        Quelle est votre pseudo ?
        <input type="text" className="inputFirstMenu" />
      </label>
      <button
        type="button"
        onClick={handleChangeMenu}
        className="buttonFirstMenu"
      >
        Jouer
      </button>
    </form>
  );
}

export default Menu;
