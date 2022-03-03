import { ICharacter } from "../../types";
import styled from "styled-components";
import GameCharacter from "./GameCharacter";
interface IProps {
  characters: ICharacter[];
}
const Characters = ({ characters }: IProps) => {
  const loadCharacters = () =>
    characters.map((character) => (
      <GameCharacter key={character.name} flow="row" character={character} />
    ));
  return <CharactersWrapper>{loadCharacters()}</CharactersWrapper>;
};
const CharactersWrapper = styled.div`
  position: absolute;
  display: grid;
  min-width: 130px;
  align-items: center;
  justify-items: center;
  background-color: ${({ theme }) => theme.palette.common.white};
  border-radius: 5px;
`;
export default Characters;
