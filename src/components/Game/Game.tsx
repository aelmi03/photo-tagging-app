import React from "react";
import styled from "styled-components";
import { ILevel, IPosition } from "../../types";
import GameCharacters from "./GameCharacters";
import Characters from "./Characters";
import { useState } from "react";
interface IProps {
  currentLevel: ILevel | null;
}

const Game = ({ currentLevel }: IProps) => {
  const [positions, setPositions] = useState<IPosition>({
    top: "0",
    left: "0",
    visible: false,
  });
  const testing = (e: any) => {
    console.log(e.nativeEvent);
    const width = e.target.offsetWidth;
    const height = e.target.offsetHeight;
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
  return (
    <GameWrapper>
      <GameCharacters
        characters={currentLevel ? currentLevel.characters : []}
      />
      <GameContent>
        <Characters
          characters={currentLevel ? currentLevel.characters : []}
          positions={positions}
        />
        <GameImg src={currentLevel?.imgSrc} onClick={testing} />
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
