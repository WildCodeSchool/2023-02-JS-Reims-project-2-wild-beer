import { Link } from "react-router-dom";

function Menu() {
  return (
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
  );
}

export default Menu;
