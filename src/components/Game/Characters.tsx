import { ICharacter, IPosition } from "../../types";
import styled from "styled-components";
import GameCharacter from "./GameCharacter";
interface IProps {
  characters: ICharacter[];
  positions: IPosition;
}
const Characters = ({ characters, positions }: IProps) => {
  const loadCharacters = () =>
    characters.map((character) => (
      <GameCharacter key={character.name} flow="row" character={character} />
    ));
  return (
    <CharactersWrapper positions={positions}>
      {loadCharacters()}
    </CharactersWrapper>
  );
};
const CharactersWrapper = styled.div<{ positions: IPosition }>`
  position: absolute;
  display: grid;
  top: ${({ positions }) => positions.top}%;
  left: ${({ positions }) => positions.left}%;
  height: max-content;
  width: 130px;
  align-items: center;
  justify-items: center;
  background-color: ${({ theme }) => theme.palette.common.white};
  border-radius: 5px;
`;
export default Characters;
