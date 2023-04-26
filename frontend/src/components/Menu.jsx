import { Link } from "react-router-dom";
import logo from "../Images/wild-beer-logo.png";

function Menu() {
  return (
    <div className="background">
      <div className="home">
        <img src={logo} alt="" />
        <p>Decouvre le monde zythologie</p>
        <section className="containerMenu">
          <form className="firstMenu">
            <label>
              Quelle est votre pseudo ?
              <input type="text" className="inputFirstMenu" />
            </label>

            <Link to="/wild-beer-gaming">
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
