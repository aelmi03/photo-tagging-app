import styled, { css } from "styled-components";

interface ColorProps {
  color: string;
  border?: string;
}
const Button = styled.button<ColorProps>`
  color: ${({ theme }) => theme.palette.common.white};
  font-family: "Poppins", sans-serif;
  padding: 0.8rem 5.5rem;
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
    ${(props) =>
    props.border === "white" &&
    css`
      border: 2px solid ${({ theme }) => theme.palette.common.white};
    `}
`;

export default Button;
