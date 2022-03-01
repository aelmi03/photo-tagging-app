import styled, { css } from "styled-components";

interface ColorProps {
  color: string;
}
const Button = styled.button<ColorProps>`
  color: ${({ theme }) => theme.palette.common.white};
  font-family: "Poppins", sans-serif;
  padding: 0.6rem 5.5rem;
  font-size: 1.8rem;
  border-radius: 5px;
  ${(props) =>
    props.color === "red" &&
    css`
      background-color: ${({ theme }) => theme.palette.tertiary.main};
    `}
  ${(props) =>
    props.color === "blue" &&
    css`
      background-color: ${({ theme }) => theme.palette.primary.main};
    `}
`;

export default Button;
