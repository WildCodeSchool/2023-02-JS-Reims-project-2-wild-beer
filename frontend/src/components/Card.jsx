import PropTypes from "prop-types";

function Card({ card }) {
  const getColorClassName = () => {
    let colorClassName = "";
    if (card.ebc <= 20) {
      colorClassName = "blonde";
    } else if (card.ebc <= 30) {
      colorClassName = "ambre";
    } else if (card.ebc <= 75) {
      colorClassName = "brunes";
    } else if (card.ebc > 75) {
      colorClassName = "noires";
    }
    return colorClassName;
  };
  return (
    <section className={`card ${getColorClassName()}`} key={card.id}>
      <h1>{card.name}</h1>
      <ul>
        <li>EBC : {card.ebc}</li>
        <li>ABV : {card.abv}</li>
        <li>IBU : {card.ibu}</li>
        <li>SRM : {card.srm}</li>
      </ul>
    </section>
  );
}

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    ebc: PropTypes.number.isRequired,
    abv: PropTypes.number.isRequired,
    ibu: PropTypes.number.isRequired,
    srm: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;
