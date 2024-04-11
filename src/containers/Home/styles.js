import styled from "styled-components";
import background from "../../assets/background.svg";

export const Container = styled.div`
  background: url("${background}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
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

export const InputLabel = styled.p`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  text-align: left;
  margin-left: 15px;
  color: #eeeeee;
`;

export const Input = styled.input`
  width: 342px;
  height: 58px;
  padding: 15px 20px 15px 25px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.25);
  border: none;
  outline: none;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  font-family: Roboto;
  font-size: 24px;
  font-weight: 400;
  line-height: 28.13px;
  text-align: left;
  margin-bottom: 34px;

  color: #ffffff;
`;


