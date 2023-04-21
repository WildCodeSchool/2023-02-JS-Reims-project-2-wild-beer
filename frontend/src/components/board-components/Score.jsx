// eslint-disable-next-line react/prop-types
function Score({ isPlayer }) {
  return isPlayer ? (
    <div className="Score">
      <p>Mon Score :</p>
    </div>
  ) : (
    <div className="Score">
      <p>Son Score :</p>
    </div>
  );
}

export default Score;
