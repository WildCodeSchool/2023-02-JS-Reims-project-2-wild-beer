// eslint-disable-next-line react/prop-types
function Select({ isPlayer }) {
  return isPlayer ? (
    <div className="Selection">
      <p>Ma carte</p>
    </div>
  ) : (
    <div className="Selection">
      <p>Sa carte</p>
    </div>
  );
}
export default Select;
