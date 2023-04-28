import { Link } from "react-router-dom";
import logo from "../Images/wild-beer-logo.png";

function AgeVerification() {
  return (
    <div className="background">
      <div className="home">
        <img src={logo} alt="" />
        <p className="home-p">Decouvre le monde zythologie</p>
        <section className="containerMenu containerMenu-AgeVerification">
          <form className="firstMenu">
            <h1>Avez vous plus de 18 ans ?</h1>
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
