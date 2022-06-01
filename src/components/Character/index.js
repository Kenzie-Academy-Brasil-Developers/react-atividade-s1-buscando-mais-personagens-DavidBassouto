import CharCard from "../CharCard";
import "./style.css";

function Character({ characterList }) {
  return (
    <>
      <h1>Personagens Rick and Morty</h1>
      <div className="container-charCard">
        {characterList.map((char) => (
          <CharCard char={char} key={char.id} />
        ))}
      </div>
    </>
  );
}

export default Character;
