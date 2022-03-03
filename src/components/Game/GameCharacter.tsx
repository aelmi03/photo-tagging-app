import { ICharacter } from "../../types";
import styled, { css } from "styled-components";
import Text from "../../utils/Text";
import Character from "../../utils/Character";
interface IProps {
  character: ICharacter;
  flow: string;
}

const GameCharacter = ({ character, flow }: IProps) => {
  return (
    <GameCharacterWrapper flow={flow}>
      <StyledCharacter src={character.imgSrc} flow={flow} />
      <GameCharacterText flow={flow}>{character.name}</GameCharacterText>
    </GameCharacterWrapper>
  );
};

const GameCharacterWrapper = styled.div<{ flow: string }>`
  display: flex;
  flex-flow: ${({ flow }) => flow} nowrap;
  align-items: center;
  gap: 1rem;
  ${({ flow }) =>
    flow === "row" &&
    css`
      padding: 1rem;
      min-width: 100%;
      cursor: pointer;
      &:hover {
        background-color: ${({ theme }) => theme.palette.common.grey};
      }
    `}
`;

const GameCharacterText = styled(Text)<{ flow: string }>`
  color: ${({ theme }) => theme.palette.common.white};
  font-size: 0.9rem;
  ${({ flow }) =>
    flow === "row" &&
    css`
      color: ${({ theme }) => theme.palette.common.black};
    `}

  @media only screen and (min-width: 540px) {
    font-size: 1.76rem;
    ${({ flow }) =>
      flow === "row" &&
      css`
        font-size: 1rem;
      `}
  }
`;

const StyledCharacter = styled(Character)<{ flow: string }>`
  width: 40px;
  height: 40px;
  @media only screen and (min-width: 540px) {
    width: 65px;
    height: 65px;

    font-size: 1.76rem;
    ${({ flow }) =>
      flow === "row" &&
      css`
        width: 40px;
        height: 40px;
      `}
  }
`;
export default GameCharacter;
