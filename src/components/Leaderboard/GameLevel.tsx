import styled from "styled-components";
import { ILevel } from "../../types";

interface IProps {
  level: ILevel;
}

const GameLevel = ({ level }: IProps) => {
  return (
    <GameLevelWrapper>
      <GameLevelImg src={level.imgSrc} />
      <GameLevelText>Level {level.level}</GameLevelText>
    </GameLevelWrapper>
  );
};
const GameLevelWrapper = styled.div`
  width: 100%;
  box-shadow: 0px 0px 4px ${({ theme }) => theme.palette.secondary.main};
`;
const GameLevelImg = styled.img`
  width: 100%;
  height: 150px;
`;
const GameLevelText = styled.div`
  padding: 0.5rem;
  font-size: 1.3rem;
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => theme.palette.common.black};
`;
export default GameLevel;
