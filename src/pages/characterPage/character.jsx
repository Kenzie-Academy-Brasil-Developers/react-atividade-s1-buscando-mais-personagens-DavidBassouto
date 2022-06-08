import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";

function Character() {
  const { id } = useParams();
  const [charPage, setCharPage] = useState(null);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((res) => setCharPage(res));
  }, [id]);

  return (
    <>
      {!!charPage && (
        <div className="charPage-container">
          <div className="container-img">
            <img src={charPage.image || "?"} alt={charPage.name || "?"} />
          </div>

          <div className="container-info">
            <p className="par">Criado em: </p>
            <span className="span">{charPage.created.slice(0, 10) || "?"}</span>
          </div>
          <div className="container-info">
            <p className="par"> Nº Episódios </p>
            <span className="span">{charPage.episode.length || "?"}</span>
          </div>
          <div className="container-info">
            <p className="par">Localização atual: </p>
            <span className="span">{charPage.location.name || "?"}</span>
          </div>
          <div className="container-info">
            <p className="par">Espécie</p>
            <span className="span">{charPage.species || "?"}</span>
          </div>
          <div className="container-info">
            <p className="par">Status:</p>
            <span className="span">{charPage.status || "?"}</span>
          </div>
          <div className="container-info">
            <p className="par">Planeta de Origem: </p>
            <span className="span">{charPage.origin.name || "?"}</span>
          </div>
        </div>
      )}
    </>
  );
}

export { Character };
