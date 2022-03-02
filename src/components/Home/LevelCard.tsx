import styled from "styled-components";
import Text from "../../utils/Text";
import Character from "../../utils/Character";
import Button from "../../utils/Button";
import { ILevel } from "../../types";

const LevelCard = ({ imgSrc, level, characters }: ILevel) => {
  const loadCharacters = () => {
    return characters.map((character) => <Character src={character.imgSrc} />);
  };
  return (
    <LevelCardWrapper>
      <LevelImg src={imgSrc} alt="A waldo level" />
      <LevelInformation>
        <Text>Level {level}</Text>
        {loadCharacters()}
      </LevelInformation>
      <LevelButton color="red">Play</LevelButton>
    </LevelCardWrapper>
  );
};
const LevelCardWrapper = styled.div`
  min-width: 100%;
  display: grid;
  padding-bottom: 1rem;
  gap: 1.5rem;
  border: 2px solid ${({ theme }) => theme.palette.common.grey};
`;
const LevelInformation = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: column;
  gap: 0.4rem;
  padding: 0.5rem 2rem;
  align-items: center;
`;
const LevelButton = styled(Button)`
  justify-self: center;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
const LevelImg = styled.img`
  width: 100%;
  height: 300px;
`;
export default LevelCard;
