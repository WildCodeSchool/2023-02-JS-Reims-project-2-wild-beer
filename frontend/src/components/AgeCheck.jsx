import { Link } from "react-router-dom";
import logo from "../Images/wild-beer-logo.png";

function AgeVerification() {
  return (
    <div className="background">
      <div className="home">
        <img src={logo} alt="" />
        <p className="home-p">Decouvre le monde de la zythologie</p>
        <section className="containerMenu containerMenu-AgeVerification">
          <form className="firstMenu">
            <p>Avez-vous plus de 18 ans ?</p>
            <Link to="/Menu">
              <button type="button" className="buttonFirstMenu">
                Oui
              </button>
            </Link>
            <Link to="/Mineur">
              <button type="button" className="buttonFirstMenu">
                Non
              </button>
            </Link>
          </form>
        </section>
      </div>
    </div>
  );
}

export default AgeVerification;
