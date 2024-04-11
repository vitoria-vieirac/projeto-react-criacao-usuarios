import React, { useState, useRef } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

import People from "../../assets/people.svg"
import Arrow from "../../assets/arrow.svg";

import ContainerItens from "../../components/containerItens";
import Button from "../../components/button";

import {
  Container,
  Image,
  H1,
  InputLabel,
  Input,
} from "./styles";


const App = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate()
  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers([...users, newUser]);

    navigate("/users")
  }

  return (
    <Container>
      <Image alt="imagem-people" src={People} />

      <ContainerItens>
        <H1>Olá!</H1>
        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome"></Input>

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade"></Input>

        <Button onClick={addNewUser}>
          Cadastrar <img alt="arrow" src={Arrow} />
        </Button>

      </ContainerItens>
    </Container>
  );
};

export default App;
