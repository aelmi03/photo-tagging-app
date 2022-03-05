import styled, { css } from "styled-components";
const Text = styled.p<{ color?: string }>`
  font-size: 1.7rem;
  color: ${({ theme }) => theme.palette.common.black};
  font-family: "Josefin Sans", sans-serif;
  ${({ color }) =>
    color === "grey" &&
    css`
      color: ${({ theme }) => theme.palette.secondary.main};
      @media only screen and (min-width: 768px) {
        font-size: 2rem;
      }
    `};
`;

export default Text;
