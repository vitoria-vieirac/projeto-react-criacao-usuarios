import styled from "styled-components";
import background from "../../assets/backgound1.svg";

export const Container = styled.div`
  background: url("${background}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  height : 100%;
  min-height: 100vh;
`;

export const Image = styled.img`
  margin-top: 30px;
`;

export const H1 = styled.h1`
  font-family: Roboto;
  font-size: 34px;
  font-weight: 700;
  line-height: 39.84px;
  text-align: center;
  color: #ffffff;
`;

export const User = styled.li`

  width: 342px;
  height: 58px;
  padding: 15px 20px 15px 25px;
  margin-top: 20px;
  
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.25);
  border: none;
  outline: none;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  color: #ffffff;

    display: flex;
    align-items: center;
    justify-content: space-around;

    p {
        font-size: 24px;
        font-weight: 400;
        line-height: 28.13px;
        text-align: left;

    }

    button {
        background: none;
        cursor: pointer;
        border: none;
    }

}


`;
