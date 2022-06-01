import CharCard from "../CharCard";
import "./style.css";

function Character({ characterList, setPage, page }) {
  return (
    <>
      <h1>Personagens Rick and Morty</h1>

      <div className="container-charCard">
        <div className="container-buttons">
          {page === 1 ? (
            <button className="disabled" > Anterior </button>
          ) : (
            <button onClick={() => setPage(-1)}> Anterior </button>
          )}
          
          {page === 42 ? (
            <button className="disabled"> Próxima </button>
          ) : (
            <button onClick={() => setPage(1)}> Próxima </button>
          )}
          
        </div>
        {characterList.map((char) => (
          <CharCard char={char} key={char.id} />
        ))}
        <div className="container-buttons">
          {page === 1 ? (
            <button className="disabled" > Anterior </button>
          ) : (
            <button onClick={() => setPage(-1)}> Anterior </button>
          )}
          
          {page === 42 ? (
            <button className="disabled"> Próxima </button>
          ) : (
            <button onClick={() => setPage(1)}> Próxima </button>
          )}
          
        </div>
      </div>
    </>
  );
}

export default Character;
