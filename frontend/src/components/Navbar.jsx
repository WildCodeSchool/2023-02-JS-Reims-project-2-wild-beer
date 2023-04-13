import homeAccueil from "../Images/home.png";
import regleInterrogation from "../Images/point-interrogation.png";
import Logo from "../Images/wild-beer.png";

function Navbar() {
  return (
    <nav className="navbar_nav">
      <button type="button" className="navbar_button">
        <img src={regleInterrogation} alt="règles" />
      </button>
      <img src={Logo} alt="Wild Beer" className="navbar_logo" />
      <button type="button" className="navbar_button">
        <img src={homeAccueil} alt="accueil" />
      </button>
    </nav>
  );
}

export default Navbar;
