import { useEffect, useState } from "react";
import Character from "../components/Character";

function Home() {
  const [characterList, setCharacterList] = useState([]);
  const [page, setPage] = useState(1);
  function handlePage(number){
    setPage(page+number)
  }

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((res) => res.json())
      .then((res) => setCharacterList(res.results));
  },[page]);
  console.log(page)
  return (
    <>
      <Character characterList={characterList} setPage={handlePage} page={page}/>
    </>
  );
}

export default Home;
