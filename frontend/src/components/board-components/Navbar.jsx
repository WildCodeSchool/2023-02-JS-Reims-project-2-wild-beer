import PropTypes from "prop-types";
import homeAccueil from "../../Images/home.png";
import regleInterrogation from "../../Images/point-interrogation.png";
import Logo from "../../Images/wild-beer-logo.png";

function Navbar({ handleChangeMenu, showMeTheRules }) {
  return (
    <nav className="navbar_nav">
      <button type="button" className="navbar_button" onClick={showMeTheRules}>
        <img src={regleInterrogation} alt="règles" />
      </button>
      <img src={Logo} alt="Wild Beer" className="navbar_logo" />
      <button
        type="button"
        className="navbar_button"
        onClick={handleChangeMenu}
      >
        <img src={homeAccueil} alt="accueil" />
      </button>
    </nav>
  );
}

Navbar.propTypes = {
  handleChangeMenu: PropTypes.func.isRequired,
  showMeTheRules: PropTypes.func.isRequired,
};

export default Navbar;
