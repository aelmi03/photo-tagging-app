import { ICharacter, IPosition } from "../../types";
import styled, { css } from "styled-components";
import GameCharacter from "./GameCharacter";
import React from "react";
interface IProps {
  characters: ICharacter[];
  positions: IPosition;
  onClick: (e: React.MouseEvent<HTMLDivElement>, character: ICharacter) => void;
}
const Characters = ({ characters, positions, onClick }: IProps) => {
  const loadCharacters = () =>
    characters.map((character) => (
      <GameCharacter
        key={character.name}
        flow="row"
        character={character}
        onClick={onClick}
      />
    ));
  return (
    <CharactersWrapper positions={positions}>
      {loadCharacters()}
    </CharactersWrapper>
  );
};
const CharactersWrapper = styled.div<{ positions: IPosition }>`
  position: absolute;
  display: none;
  ${({ positions }) =>
    positions.visible &&
    css`
      display: grid;
    `}
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
