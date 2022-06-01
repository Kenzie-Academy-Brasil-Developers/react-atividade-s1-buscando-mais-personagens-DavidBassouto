import { useEffect, useState } from "react";
import Character from "../components/Character";

function Home() {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((res) => res.json())
      .then((res) => setCharacterList(res.results));
  }, []);
  return (
    <>
      <Character characterList={characterList} />
    </>
  );
}

export default Home;
