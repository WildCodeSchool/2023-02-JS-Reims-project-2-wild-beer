import PropTypes from "prop-types";

function Menu({ setIsMenu, isMenu }) {
  const handlerChangeMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <div className="firstMenu">
      <h1>Quelle est votre pseudo ?</h1>
      <input type="text" className="inputFirstMenu" />
      <button
        type="button"
        onClick={handlerChangeMenu}
        className="buttonFirstMenu"
      >
        Jouer
      </button>
    </div>
  );
}

Menu.propTypes = {
  setIsMenu: PropTypes.objectOf().isRequired,
  isMenu: PropTypes.bool.isRequired,
};

export default Menu;
