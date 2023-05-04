import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/wild-beer-logo.png";

function Menu() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    const regex = /^[a-zA-Zé-]{0,15}$/;
    if (regex.test(event.target.value)) {
      setInputValue(event.target.value);
    }
  };
  return (
    <div className="background">
      <div className="home">
        <img src={logo} alt="" />
        <section className="containerMenu">
          <form className="firstMenu">
            <label>
              Entrez votre pseudo de Zythologue Amateur
              <input
                type="text"
                className="inputFirstMenu"
                value={inputValue}
                onChange={handleChange}
              />
            </label>
            <Link to={`/Menu/wild-beer-gaming/${inputValue}`}>
              <button type="button" className="buttonFirstMenu">
                Jouer
              </button>
            </Link>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Menu;
