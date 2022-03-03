import React from "react";
import styled from "styled-components";
import { ILevel } from "../../types";
import GameCharacters from "./GameCharacters";

interface IProps {
  currentLevel: ILevel | null;
}
const Game = ({ currentLevel }: IProps) => {
  const testing = (e: any) => {
    console.log(e.nativeEvent);
    const width = e.target.offsetWidth;
    const height = e.target.offsetHeight;
    const xPosition = e.nativeEvent.offsetX;
    const yPosition = e.nativeEvent.offsetY;
    const x = ((xPosition / width) * 100).toFixed(0);
    const y = ((yPosition / height) * 100).toFixed(0);
    console.log(`X : ${x}   Y : ${y}`);
  };
  return (
    <GameWrapper>
      <GameCharacters
        characters={currentLevel ? currentLevel.characters : []}
      />
      <GameImg src={currentLevel?.imgSrc} onClick={testing} />
    </GameWrapper>
  );
};
const GameWrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.common.white};
`;
const GameImg = styled.img`
  width: 100%;
`;
export default Game;
