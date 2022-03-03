import styled from "styled-components";
import { ICharacter } from "../../types";
import GameCharacter from "./GameCharacter";
import Button from "../../utils/Button";
import { useNavigate } from "react-router-dom";
interface IProps {
  characters: ICharacter[];
}

const GameCharacters = ({ characters }: IProps) => {
  const navigate = useNavigate();
  const loadGameCharacters = () => {
    return characters.map((character) => (
      <GameCharacter character={character} />
    ));
  };
  return (
    <GameCharactersWrapper>
      {loadGameCharacters()}{" "}
      <GameButton color="black" onClick={() => navigate("/")}>
        Go Back
      </GameButton>
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
  padding: 1rem 1.8rem;
  min-width: max-content;
  margin-left: auto;
  font-size: 1rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  @media only screen and (min-width: 540px) {
    font-size: 1.4rem;
    padding: 1rem 4rem;
  }
  @media only screen and (min-width: 768px) {
    font-size: 2rem;
    padding: 1.3rem 5.3rem;
  }
`;

export default GameCharacters;