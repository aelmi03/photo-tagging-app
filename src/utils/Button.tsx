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
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
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
    props.color === "black" &&
    css`
      background-color: ${({ theme }) => theme.palette.secondary.main};
    `}
    ${(props) =>
    props.border === "white" &&
    css`
      border: 2px solid ${({ theme }) => theme.palette.common.white};
    `}
    
    ${(props) =>
    props.color === "white-blue" &&
    css`
      color: ${({ theme }) => theme.palette.primary.main};
      box-shadow: 0px 0px 4px ${({ theme }) => theme.palette.secondary.main};
      background-color: white;
    `}
`;

export default Button;
