import styled, { css } from "styled-components";
import waldo from "../assets/waldo.jpg";
interface ColorProps {
  color: string;
}

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderImg src={waldo} alt="Waldo leaning on a cane" />
      <HeaderTitle color="blue">Where's </HeaderTitle>
      <HeaderTitle color="red">Waldo?</HeaderTitle>
    </HeaderWrapper>
  );
};
const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.palette.common.grey};
`;

const HeaderTitle = styled.h1<ColorProps>`
  font-size: 2.6rem;
  font-family: "Poppins", sans-serif;
  ${({ color }) =>
    color === "blue" &&
    css`
      color: ${({ theme }) => theme.palette.primary.main};
    `}
  ${({ color }) =>
    color === "red" &&
    css`
      color: ${({ theme }) => theme.palette.tertiary.main};
    `}
`;
const HeaderImg = styled.img`
  width: 60px;
`;
export default Header;
