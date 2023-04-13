import PropTypes from "prop-types";

function Menu({ handleChangeMenu }) {
  return (
    <section className="containerMenu">
      <form className="firstMenu">
        <label>
          Quelle est votre pseudo ?
          <input type="text" className="inputFirstMenu" />
        </label>
        <button
          type="button"
          onClick={handleChangeMenu}
          className="buttonFirstMenu"
        >
          Jouer
        </button>
      </form>
    </section>
  );
}

Menu.propTypes = {
  handleChangeMenu: PropTypes.func.isRequired,
};

export default Menu;
