import { Link } from "react-router-dom";
import Bar from "../Images/wild-beer-logo.png";

function Menu() {
  return (
    <div className="homepage">
      <div id="showgame">
        <img src={Bar} alt="" className="logobar" />
        <p className="show">DECOUVRE LA ZYTHOLOGIE EN T'AMUSANT</p>
      </div>
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
  );
}

export default Menu;
