import CharCard from "../CharCard";
import "./style.css";

function Character({ characterList }) {
  return (
    <>
      <h1>Personagens Rick and Morty</h1>

      <div className="container-charCard">
        <div className="container-buttons">
          <button> Anterior </button>
          <button> Próxima </button>
        </div>
        {characterList.map((char) => (
          <CharCard char={char} key={char.id} />
        ))}
      </div>
    </>
  );
}

export default Character;
