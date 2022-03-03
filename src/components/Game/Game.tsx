import styled from "styled-components";
import { ILevel } from "../../types";
import GameCharacters from "./GameCharacters";
interface IProps {
  currentLevel: ILevel | null;
}
const Game = ({ currentLevel }: IProps) => {
  return (
    <GameWrapper>
      <GameCharacters
        characters={currentLevel ? currentLevel.characters : []}
      />
    </GameWrapper>
  );
};
const GameWrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.common.white};
`;
export default Game;
