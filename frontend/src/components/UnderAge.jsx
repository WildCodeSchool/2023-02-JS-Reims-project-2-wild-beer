import { Link } from "react-router-dom";
import logo from "../Images/wild-beer-logo.png";

function Mineur() {
  return (
    <div className="background">
      <div className="home">
        <img src={logo} alt="" />
        <p className="home-p">Decouvre le monde zythologie</p>
        <section className="containerMenu containerMenu-Mineur">
          <form className="firstMenu">
            <p>
              Désolé, mais l'accès est réservé aux personnes majeures et vous ne
              remplissez pas les critères d'âge requis pour jouer au jeu.
            </p>
            <Link to="/">
              <button type="button" className="buttonFirstMenu">
                Retour à l'accueil
              </button>
            </Link>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Mineur;
