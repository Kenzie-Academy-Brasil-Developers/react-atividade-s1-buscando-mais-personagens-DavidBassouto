import { useEffect, useState } from "react";
import Character from "../components/Character";
import axios from "axios";

function Home() {
  const [characterList, setCharacterList] = useState([]);
  const [page, setPage] = useState(1);
  const [thisPage, setThisPage] = useState(false);
  function handlePage(number) {
    setPage(page + number);
  }

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((res) => setCharacterList(res.data.results));
    // fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    //   .then((res) => res.json())
    //   .then((res) => setCharacterList(res.results));
  }, [page]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((res) => res.json())
      .then((res) => setThisPage(res.info));
  }, [page]);

  return (
    <>
      <Character
        characterList={characterList}
        setPage={handlePage}
        thisPage={thisPage}
      />
    </>
  );
}

export default Home;
