import { useHistory } from "react-router-dom";

function Fruits() {
  const history = useHistory();

  return (
    <div>
      <button onClick={() => history.push("/")}>Pagina inicial</button>
      Fruits
    </div>
  );
}
export default Fruits;
