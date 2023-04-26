import { useState } from "react";
import { Link } from "react-router-dom";

function Menu() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <section className="containerMenu">
      <form className="firstMenu">
        <label>
          Quelle est votre pseudo ?
          <input
            type="text"
            className="inputFirstMenu"
            value={inputValue}
            onChange={handleChange}
          />
        </label>

        <Link to={`/wild-beer-gaming/${inputValue}`}>
          <button type="button" className="buttonFirstMenu">
            Jouer
          </button>
        </Link>
      </form>
    </section>
  );
}

export default Menu;
