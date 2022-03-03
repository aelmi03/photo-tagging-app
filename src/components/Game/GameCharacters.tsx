import styled from "styled-components";
import { ICharacter } from "../../types";
import GameCharacter from "./GameCharacter";
import Button from "../../utils/Button";
interface IProps {
  characters: ICharacter[];
}

const GameCharacters = ({ characters }: IProps) => {
  const loadGameCharacters = () => {
    return characters.map((character) => (
      <GameCharacter character={character} />
    ));
  };
  return (
    <GameCharactersWrapper>
      {loadGameCharacters()} <GameButton color="black">Go Back</GameButton>
    </GameCharactersWrapper>
  );
};

const GameCharactersWrapper = styled.section`
  background-color: ${({ theme }) => theme.palette.primary.main};
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-items: flex-start;
  gap: 2rem;
`;
const GameButton = styled(Button)`
  padding: 1rem 1.5rem;
  min-width: max-content;
  margin-left: auto;
  font-size: 1rem;
  @media only screen and (min-width: 540px) {
    font-size: 1.4rem;
    padding: 1rem 4rem;
  }
  @media only screen and (min-width: 768px) {
    font-size: 1.8rem;
    padding: 1.5rem 6rem;
  }
`;

export default GameCharacters;
