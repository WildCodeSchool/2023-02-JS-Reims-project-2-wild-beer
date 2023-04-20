import PropTypes from "prop-types";

function Card({ handcard }) {
  return (
    <section className="card" key={handcard.id}>
      <h1>{handcard.name}</h1>
      <ul>
        <li>EBC : {handcard.ebc}</li>
        <li>ABV : {handcard.abv}</li>
        <li>IBU : {handcard.ibu}</li>
        <li>SRM : {handcard.srm}</li>
      </ul>
    </section>
  );
}

Card.propTypes = {
  handcard: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    ebc: PropTypes.number.isRequired,
    abv: PropTypes.number.isRequired,
    ibu: PropTypes.number.isRequired,
    srm: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;
