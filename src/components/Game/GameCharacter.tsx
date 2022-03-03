import { ICharacter } from "../../types";
import styled from "styled-components";
import Text from "../../utils/Text";
import Character from "../../utils/Character";
interface IProps {
  character: ICharacter;
}

const GameCharacter = ({ character }: IProps) => {
  return (
    <GameCharacterWrapper>
      <Character src={character.imgSrc} />
      <GameCharacterText>{character.name}</GameCharacterText>
    </GameCharacterWrapper>
  );
};

const GameCharacterWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 1rem;
`;

export default GameCharacter;

const GameCharacterText = styled(Text)`
  color: ${({ theme }) => theme.palette.common.white};
`;
