import homeAccueil from "../Images/home.png";
import regleInterrogation from "../Images/point-interrogation.png";
import Logo from "../Images/wild-beer.png";

function Navbar() {
  return (
    <header className="navbar_header">
      <button type="button" className="navbar_button">
        <img src={regleInterrogation} alt="règles" />
      </button>
      <img src={Logo} alt="Logo" className="navbar_logo" />
      <button type="button" className="navbar_button">
        <img src={homeAccueil} alt="accueil" />
      </button>
    </header>
  );
}

export default Navbar;
