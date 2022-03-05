import styled, { css } from "styled-components";
import { ILevel } from "../../types";

interface IProps {
  level: ILevel;
  isCurrentLevel: boolean;
}

const GameLevel = ({ level, isCurrentLevel }: IProps) => {
  return (
    <GameLevelWrapper isCurrentLevel={isCurrentLevel}>
      <GameLevelImg src={level.imgSrc} />
      <GameLevelText>Level {level.level}</GameLevelText>
    </GameLevelWrapper>
  );
};
const GameLevelWrapper = styled.div<{ isCurrentLevel: boolean }>`
  box-shadow: 0px 0px 4px ${({ theme }) => theme.palette.secondary.main};
  cursor: pointer;
  padding: 0rem 0rem 2rem 0rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  ${({ isCurrentLevel }) =>
    isCurrentLevel === true &&
    css`
      background-color: ${({ theme }) => theme.palette.lightPrimary};
    `}
`;
const GameLevelImg = styled.img`
  width: 100%;
  height: 150px;
`;
const GameLevelText = styled.div`
  padding: 1rem 1.5rem;
  font-size: 1.3rem;
  font-family: "Josefin Sans", sans-serif;
  color: ${({ theme }) => theme.palette.common.black};
`;
export default GameLevel;
