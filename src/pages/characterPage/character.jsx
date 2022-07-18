import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ModalCharacter from "../../components/ModalCharacter";
import "./style.css";

function Character() {
  const { id } = useParams();
  const [charPage, setCharPage] = useState(null);
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => setCharPage(res.data));
    // fetch(`https://rickandmortyapi.com/api/character/${id}`)
    //   .then((res) => res.json())
    //   .then((res) => setCharPage(res));
  }, [id]);

  return (
    <>
      {<ModalCharacter charPage={charPage} />}
    </>
  );
}

export { Character };
