import CharCard from "../CharCard";
import ModalCharacter from "../ModalCharacter";
import { useState } from "react";

import "./style.css";

function Character({ characterList, setPage, thisPage }) {
  return (
    <>
      <h1>Personagens Rick and Morty</h1>

      <div className="container-charCard">
        <div className="container-buttons">
          {thisPage.prev === null ? (
            <button className="disabled"> Anterior </button>
          ) : (
            <button onClick={() => setPage(-1)}> Anterior </button>
          )}

          {thisPage.next === null ? (
            <button className="disabled"> Próxima </button>
          ) : (
            <button onClick={() => setPage(1)}> Próxima </button>
          )}
        </div>

        {characterList.map((char) => (
          <>
            <CharCard char={char} key={char.id} />
          </>
        ))}

        <div className="container-buttons">
          {thisPage.prev === null ? (
            <button className="disabled"> Anterior </button>
          ) : (
            <button onClick={() => setPage(-1)}> Anterior </button>
          )}

          {thisPage.next === null ? (
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
