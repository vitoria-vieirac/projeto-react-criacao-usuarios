import styled from "styled-components";

export const ContainerItens = styled.div`
  width: 414px;
  height: 645px;
  top: 251px;
  border-radius: 61px 61px 0px 0px;
  display: flex;
  gap: 1px;
  flex-direction: column;
  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );
  padding: 50px 30px;

  ${(props) =>
    props.isBlur &&
    ` backdrop-filter: blur(45px);
min-height: calc(100vh - 170px);
`}
`;
