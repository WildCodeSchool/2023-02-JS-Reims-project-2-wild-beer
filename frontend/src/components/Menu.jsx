import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../Images/wild-beer-logo.png";

function Menu() {
  const [username, setUsername] = useState("ton pseudo");
  const handleInput = (e) => {
    setUsername(e.target.value);
  };
  return (
    <div className="background">
      <div className="home">
        <img src={logo} alt="" />
        <p>Decouvre le monde zythologie</p>
        <section className="containerMenu">
          <form className="firstMenu">
            <label>
              Quelle est votre pseudo ?
              <input
                value={username}
                onChange={handleInput}
                type="text"
                className="inputFirstMenu"
              />
            </label>
            <h1>{username}</h1>
            <Link to={`/wild-beer-game/${username}`}>
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
