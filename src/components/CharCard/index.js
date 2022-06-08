import { useHistory } from "react-router-dom";
import "./style.css";
function CharCard({ char }) {
  const history = useHistory();
  function goToChar(){
    history.push(`/character/${char.id}`)
  }
  return (
    <div onClick={goToChar} className={"char-card--" + char.status}>
      <div className="char-img">
        <img src={char.image} alt="" />
      </div>
      <div className="char-data">
        <h2>{char.name}</h2>
        <p>{char.species}</p>
        <span>Status:{char.status}</span>
      </div>
    </div>
  );
}

export default CharCard;
