import React from "react";
import styled from "styled-components";
import { ILevel, IPosition, ICharacter } from "../../types";
import GameCharacters from "./GameCharacters";
import Characters from "./Characters";
import { useState } from "react";
import GameModal from "./GameModal";
interface IProps {
  currentLevel: ILevel | null;
}
interface ICoordinates {
  x: number;
  y: number;
}
const Game = ({ currentLevel }: IProps) => {
  const [gameCharacters, setGameCharacters] = useState<ICharacter[] | null>(
    currentLevel ? JSON.parse(JSON.stringify(currentLevel.characters)) : null
  );
  const [positions, setPositions] = useState<IPosition>({
    top: "0",
    left: "0",
    visible: false,
  });
  const changePositions = (e: React.MouseEvent<HTMLDivElement>): void => {
    const target = e.target as HTMLDivElement;
    const width = target.offsetWidth;
    const height = target.offsetHeight;
    const xPosition = e.nativeEvent.offsetX;
    const yPosition = e.nativeEvent.offsetY;
    const x = ((xPosition / width) * 100).toFixed(0);
    const y = ((yPosition / height) * 100).toFixed(0);
    setPositions({
      top: y,
      left: x,
      visible: true,
    });
    console.log(`X : ${x}   Y : ${y}`);
  };
  const getCoordinates = (
    e: React.MouseEvent<HTMLDivElement>
  ): ICoordinates => {
    const target = e.target as HTMLDivElement;
    const width = target.offsetWidth;
    const height = target.offsetHeight;
    const xPosition = e.nativeEvent.offsetX;
    const yPosition = e.nativeEvent.offsetY;
    const x = Number(((xPosition / width) * 100).toFixed(0));
    const y = Number(((yPosition / height) * 100).toFixed(0));
    return {
      x,
      y,
    };
  };
  const resetPosition = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setPositions({
      top: "0",
      left: "0",
      visible: false,
    });
  };
  const foundCharacter = (character: ICharacter) => {
    if (
      character.positionX.includes(Number(positions.left)) &&
      character.positionY.includes(Number(positions.top)) &&
      gameCharacters
    ) {
      const changedCharacters = gameCharacters.map((gameCharacter) => {
        if (gameCharacter === character) {
          return {
            ...gameCharacter,
            found: true,
          };
        }
        return {
          ...gameCharacter,
        };
      });
      setGameCharacters(changedCharacters);
    }
  };

  const characterClicked = (
    e: React.MouseEvent<HTMLDivElement>,
    character: ICharacter
  ): void => {
    resetPosition(e);
    if (character.found === true) return;
    foundCharacter(character);
  };
  return (
    <GameWrapper>
      <GameCharacters characters={gameCharacters ? gameCharacters : []} />
      <GameContent onClick={changePositions}>
        <Characters
          characters={gameCharacters ? gameCharacters : []}
          positions={positions}
          onClick={characterClicked}
        />
        <GameModal />
        <GameImg src={currentLevel?.imgSrc} />
      </GameContent>
    </GameWrapper>
  );
};
const GameWrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.common.white};
`;
const GameImg = styled.img`
  width: 100%;
`;
const GameContent = styled.div`
  position: relative;
`;
export default Game;
