import styled from "styled-components";
import { ICharacter } from "../../types";
import GameCharacter from "./GameCharacter";
interface IProps {
  characters: ICharacter[];
}

const GameCharacters = ({ characters }: IProps) => {
  return <GameCharactersWrapper></GameCharactersWrapper>;
};

const GameCharactersWrapper = styled.section`
  background-color: ${({ theme }) => theme.palette.primary.main};
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-items: flex-start;
  gap: 2rem;
`;

export default GameCharacters;
