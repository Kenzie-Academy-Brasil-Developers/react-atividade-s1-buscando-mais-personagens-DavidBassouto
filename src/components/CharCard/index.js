import { useState } from "react";
import ModalCharacter from "../ModalCharacter";
import "./style.css";
function CharCard({ char }) {
  const [openModal, setOpenModal] = useState(false);

  function openModalChar() {
    setOpenModal(true);
  }

  function closeModalChar() {
    setOpenModal(false);
  }

  console.log(char);
  return (
    <>
      <div onClick={openModalChar} className={"char-card--" + char.status}>
        <div className="char-img">
          <img src={char.image} alt="" />
        </div>
        <div className="char-data">
          <h2>{char.name}</h2>
          <p>{char.species}</p>
          <span>Status:{char.status}</span>
        </div>
      </div>
      {openModal && (
        <ModalCharacter
          openModal={openModal}
          char={char}
          closeModalChar={closeModalChar}
        />
      )}
    </>
  );
}

export default CharCard;
