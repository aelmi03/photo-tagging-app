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
      <StyledCharacter src={character.imgSrc} />
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

const GameCharacterText = styled(Text)`
  color: ${({ theme }) => theme.palette.common.white};
  font-size: 1rem;
  @media only screen and (min-width: 540px) {
    font-size: 1.4rem;
  }
`;

const StyledCharacter = styled(Character)`
  width: 40px;
  height: 40px;
  @media only screen and (min-width: 540px) {
    width: 65px;
    height: 65px;
  }
`;
export default GameCharacter;
