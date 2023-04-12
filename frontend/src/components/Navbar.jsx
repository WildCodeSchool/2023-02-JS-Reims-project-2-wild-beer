import homeAccueil from "../Images/home.png";

import regleInterrogation from "../Images/point-interrogation.png";

function Navbar() {
  return (
    <header className="navbar_header">
      <div>
        <img src={regleInterrogation} alt="règles" />
        <img src="#" alt="Logo" />
        <img src={homeAccueil} alt="accueil" />
      </div>
    </header>
  );
}

export default Navbar;
