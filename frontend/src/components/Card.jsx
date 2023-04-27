import PropTypes from "prop-types";

function Card({
  card,
  cardSelect,
  changeCardSelect,
  putCardOnField,
  isPlayed,
}) {
  // Check si les valeurs sont null (cas rare mais possible)

  const ebc = card.ebc === null ? Math.floor(Math.random() * 100) : card.ebc;
  const srm = card.srm === null ? Math.floor(ebc * 0.508) : card.srm;
  const abv = card.abv === null ? (Math.random() * 15).toFixed(2) : card.abv;
  const ibu = card.ibu === null ? Math.floor(Math.random() * 100) : card.ibu;

  // Eviter que le nom de la bière soit trop long
  const maxCharName = 15;
  let beerName = card.name;
  beerName = beerName.split(" ");
  let totalChar = 0;
  let finalName = "";
  for (let i = 0; i < beerName.length; i += 1) {
    if (totalChar < maxCharName) {
      totalChar += beerName[i].length;
      finalName += `${beerName[i]} `;
    }
  }

  const getColorClassName = () => {
    let colorClassName = "";
    if (ebc <= 15) {
      colorClassName = "blonde";
    } else if (ebc <= 30) {
      colorClassName = "ambre";
    } else if (ebc <= 75) {
      colorClassName = "brunes";
    } else if (ebc > 75) {
      colorClassName = "noires";
    }
    return colorClassName;
  };
  return (
    <>
      <button
        type="button"
        className={`card ${getColorClassName()}`}
        key={card.id}
        onClick={() => {
          changeCardSelect(card.id);
        }}
      >
        <h1>{finalName}</h1>
        <ul>
          <li>EBC : {ebc}</li>
          <li>ABV : {abv}</li>
          <li>IBU : {ibu}</li>
          <li>SRM : {srm}</li>
        </ul>
      </button>
      {cardSelect === card.id && isPlayed && (
        <button
          className="button-play"
          type="button"
          onClick={() => {
            putCardOnField(card.id);
          }}
        >
          Joue
        </button>
      )}
    </>
  );
}

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    ebc: PropTypes.number,
    abv: PropTypes.number,
    ibu: PropTypes.number,
    srm: PropTypes.number,
  }).isRequired,
  cardSelect: PropTypes.number.isRequired,
  changeCardSelect: PropTypes.func.isRequired,
  putCardOnField: PropTypes.func.isRequired,
  isPlayed: PropTypes.bool.isRequired,
};

export default Card;
