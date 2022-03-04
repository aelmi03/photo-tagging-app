import React from "react";
import styled, { css } from "styled-components";
import { ILevel, IPosition, ICharacter } from "../../types";
import GameCharacters from "./GameCharacters";
import Characters from "./Characters";
import { useState, useEffect } from "react";
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
  const [gameOver, setGameOver] = useState<boolean>(false);
  const changePositions = (e: React.MouseEvent<HTMLDivElement>): void => {
    const { x, y } = getCoordinates(e);
    setPositions({
      top: String(y),
      left: String(x),
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
  useEffect(() => {
    if (gameCharacters?.every((character) => character.found)) {
      setGameOver(true);
    }
  }, [gameCharacters]);
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
    <GameWrapper gameOver={gameOver}>
      <GameCharacters characters={gameCharacters ? gameCharacters : []} />
      <GameContent onClick={changePositions} gameOver={gameOver}>
        <Characters
          characters={gameCharacters ? gameCharacters : []}
          positions={positions}
          onClick={characterClicked}
        />
        <GameImg src={currentLevel?.imgSrc} gameOver={gameOver} />
      </GameContent>
      <GameModal gameOver={gameOver} />
    </GameWrapper>
  );
};
const GameWrapper = styled.div<{ gameOver: boolean }>`
  ${({ gameOver }) =>
    gameOver === true &&
    css`
      background-color: rgba(0, 0, 0, 0.5);
    `}
`;
const GameImg = styled.img<{ gameOver: boolean }>`
  width: 100%;
  ${({ gameOver }) =>
    gameOver === true &&
    css`
      pointer-events: none;
    `}
`;
const GameContent = styled.div<{ gameOver: boolean }>`
  position: relative;
  ${({ gameOver }) =>
    gameOver === true &&
    css`
      pointer-events: none;
      z-index: -1;
    `}
`;

export default Game;
