import styled from "styled-components";
import * as muiStyles from "@mui/material/styles";
import { TextField } from "@mui/material";

export const BackgroundModal = styled.div`
  padding: 0.625rem;
  width: 100vw;
  height: 100vh;
  margin: auto;
  top: 0;
  left: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div`
  width: 95%;
  max-width: 30rem;
  height: 35rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  background: white;
  border-radius: 0.625rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
`;

export const ModalHeader = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const ModalHeaderButton = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: end;
  padding: 0.625rem 1.25rem 0 0;
`;

export const ModalHeaderText = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #3d97b4;
  font-weight: bolder;
  font-size: 1.3rem;
  padding: 0.5rem;

  > .container-img {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > img {
      width: 50%;
    }
    > h1 {
      font-size: 3rem;
      margin: 0;
      width: 100%;
      text-align: center;
    }
  }
`;

export const ModalContent = styled.div`
  width: 100%;
  height: 15rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 0.5rem;
  gap: 0.625rem;

  > div {
    width: 45%;
    height: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(145, 47, 145);
    border-radius: 1rem;

    p {
      color: #3d97b4;
      width: 100%;
      font-size: 1.2rem;
      display: flex;
      font-weight: bolder;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
    span {
      width: 90%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
      height: 2.2rem;
      font-weight: bolder;
      color: black;
      text-shadow: none;
    }
  }
`;
