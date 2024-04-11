import styled from "styled-components";

export const Button = styled.button`
  width: 342px;
  height: 74px;
  margin-top: 130px;

  border-radius: 14px;
  border: none;

  background: rgba(0, 0, 0, 0.8);

  font-size: 17px;
  font-weight: 700;
  line-height: 28px;

  cursor: pointer;

  color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
  ${(props) =>
    props.isBack &&
    `
  border: 1px solid #ffffff;
  background: transparent;
  
  img { transform: rotateY(180deg);
  }
  `}
`;
