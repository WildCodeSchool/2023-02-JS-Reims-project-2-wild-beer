/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

function Carte({ handcard, isShown }) {
  return isShown ? (
    <section className="card" key={handcard.id}>
      <h1>{handcard.name}</h1>
      <ul>
        <li>EBC : {handcard.ebc}</li>
        <li>ABV : {handcard.abv}</li>
        <li>IBU : {handcard.ibu}</li>
        <li>SRM : {handcard.srm}</li>
      </ul>
    </section>
  ) : (
    <section className="Backcard" key={handcard.id} />
  );
}

Carte.defaultProps = {
  handcard: {},
};

Carte.propTypes = {
  handcard: PropTypes.objectOf(),
};

export default Carte;
