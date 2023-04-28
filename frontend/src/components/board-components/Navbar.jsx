import { Link } from "react-router-dom";
import { useState } from "react";

import Rules from "../Rules";
// Images Importer
import homeAccueil from "../../Images/home.png";
import regleInterrogation from "../../Images/point-interrogation.png";
import Logo from "../../Images/wild-beer-logo.png";

function Navbar() {
  const [rules, setRules] = useState(false);
  const showMeTheRules = () => {
    setRules(!rules);
  };
  return (
    <nav className="navbar_nav">
      <button type="button" className="navbar_button" onClick={showMeTheRules}>
        <img src={regleInterrogation} alt="règles" />
      </button>
      {rules && <Rules />}
      <img src={Logo} alt="Wild Beer" className="navbar_logo" />

      <Link to="/menu">
        <button type="button" className="navbar_button">
          <img src={homeAccueil} alt="accueil" />
        </button>
      </Link>
    </nav>
  );
}

export default Navbar;
