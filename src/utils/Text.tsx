import styled, { css } from "styled-components";
const Text = styled.p<{ color?: string }>`
  font-size: 1.7rem;
  color: ${({ theme }) => theme.palette.common.black};
  font-family: "Poppins", sans-serif;
  ${({ color }) =>
    color === "grey" &&
    css`
      color: ${({ theme }) => theme.palette.common.grey};
    `};
`;

export default Text;
