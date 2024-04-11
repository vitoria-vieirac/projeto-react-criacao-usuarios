import React, { useEffect, useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

import Avatar from "../../assets/avatar.svg";
import Arrow from "../../assets/arrow.svg";
import Trash from "../../assets/trash.svg";

import ContainerItens from "../../components/containerItens";
import Button from "../../components/button";

import { Container, Image, H1, User } from "./styles";

const Users = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`);

    const newUsers = users.filter((user) => user.id !== userId);

    setUsers(newUsers);
  }

  useEffect(() => {
    const fetchUsers = async () => {
      const { data: newUsers } = await axios.get("http://localhost:3001/users");

      setUsers(newUsers);
    };

    fetchUsers();
  }, []);

  const goBackPage = () => {
    navigate("/");
  };

  return (
    <Container>
      <Image alt="imagem-people" src={Avatar} />

      <ContainerItens isBlur={true}>
        <H1>Usuários</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> - <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img alt="trash" src={Trash} />
              </button>
            </User>
          ))}
        </ul>

        <Button isBack={true} onClick={goBackPage}>
          <img alt="arrow" src={Arrow} /> Voltar
        </Button>
      </ContainerItens>
    </Container>
  );
};

export default Users;
