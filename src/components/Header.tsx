import styled from "styled-components";
import waldo from "../assets/waldo.png";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderImg src={waldo} alt="Waldo leaning on a cane" />
      <HeaderTitle>Where's Waldo?</HeaderTitle>
    </HeaderWrapper>
  );
};
const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.palette.primary.main};
  border-bottom: 4px dotted ${({ theme }) => theme.palette.common.white};
  @media only screen and (min-width: 768px) {
    gap: 1.4rem;
  }
`;

const HeaderTitle = styled.h1`
  font-size: 2.6rem;
  color: white;
  font-family: "Poppins", sans-serif;

  @media only screen and (min-width: 768px) {
    font-size: 3.9rem;
  }
`;
const HeaderImg = styled.img`
  width: 70px;
  height: 50px;
  @media only screen and (min-width: 768px) {
    width: 120px;
    height: 100px;
  }
`;
export default Header;
