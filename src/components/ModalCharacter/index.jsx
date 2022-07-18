import { Button, Modal } from "@mui/material";
import {
  BackgroundModal,
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalHeaderButton,
  ModalHeaderText,
} from "./style";

function ModalCharacter({ openModal, char, closeModalChar }) {
  return (
    <>
      <Modal open={openModal} onClose={closeModalChar}>
        <BackgroundModal>
          <ModalContainer>
            <ModalHeader>
              <ModalHeaderButton>
                <Button
                  sx={{ minWidth: "5px" }}
                  onClick={closeModalChar}
                  variant="text"
                  color="secondary"
                >
                  X
                </Button>
              </ModalHeaderButton>
              <ModalHeaderText>
                <div className="container-img">
                  <img src={char.image || "?"} alt={char.name || "?"} />
                  <h1>{char.name}</h1>
                </div>
              </ModalHeaderText>
            </ModalHeader>

            <ModalContent>
              <div className="container-info">
                <p className="par">Criado em: </p>
                <span className="span">
                  {char.created.slice(0, 10).split("-").reverse().join("-") ||
                    "?"}
                </span>
              </div>
              <div className="container-info">
                <p className="par"> Nº Episódios </p>
                <span className="span">{char.episode.length || "?"}</span>
              </div>
              <div className="container-info">
                <p className="par">Localização: </p>
                <span className="span">{char.location.name || "?"}</span>
              </div>
              <div className="container-info">
                <p className="par">Espécie</p>
                <span className="span">{char.species || "?"}</span>
              </div>
              <div className="container-info">
                <p className="par">Status:</p>
                <span className="span">{char.status || "?"}</span>
              </div>
              <div className="container-info">
                <p className="par">Origem: </p>
                <span className="span">{char.origin.name || "?"}</span>
              </div>
            </ModalContent>
          </ModalContainer>
        </BackgroundModal>
      </Modal>
    </>
  );
}
export default ModalCharacter;
