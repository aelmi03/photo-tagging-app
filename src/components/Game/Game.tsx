import React from "react";
import styled, { css } from "styled-components";
import { ILevel, IPosition, ICharacter, IData } from "../../types";
import GameCharacters from "./GameCharacters";
import Characters from "./Characters";
import { useState, useEffect } from "react";
import GameModal from "./GameModal";
import { differenceInMilliseconds } from "date-fns";
import { useNavigate } from "react-router-dom";
import {
  getFirestore,
  collection,
  serverTimestamp,
  addDoc,
  updateDoc,
  getDoc,
  doc,
  DocumentReference,
  deleteDoc,
} from "firebase/firestore";
interface IProps {
  currentLevel: ILevel | null;
}
interface ICoordinates {
  x: number;
  y: number;
}
const Game = ({ currentLevel }: IProps) => {
  const navigate = useNavigate();
  const [gameCharacters, setGameCharacters] = useState<ICharacter[] | null>(
    currentLevel ? JSON.parse(JSON.stringify(currentLevel.characters)) : null
  );
  const [positions, setPositions] = useState<IPosition>({
    top: "0",
    left: "0",
    visible: false,
  });
  const [docReference, setDocReference] = useState<DocumentReference>(
    doc(getFirestore(), "placeholder/placeholder")
  );
  const [foundStatusText, setFoundStatusText] = useState<string>("");
  const [seconds, setSeconds] = useState<string>("...");
  const [gameOver, setGameOver] = useState<boolean>(false);
  const changePositions = (e: React.MouseEvent<HTMLDivElement>): void => {
    const { x, y } = getCoordinates(e);
    setPositions({
      top: String(y),
      left: String(x),
      visible: true,
    });
    setFoundStatusText("");
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
  const deleteSession = () => {
    deleteDoc(docReference);
    navigate("/");
  };
  const addUsername = (name: string) => {
    if (!name) return;
    updateDoc(docReference, {
      username: name,
    });
    navigate("/leaderboard");
  };
  useEffect(() => {
    if (gameCharacters?.every((character) => character.found)) {
      setGameOver(true);
    }
  }, [gameCharacters]);
  useEffect(() => {
    const determineSeconds = async () => {
      const gameDoc = await getDoc(docReference);
      const gameData = gameDoc.data() as IData;
      const seconds =
        differenceInMilliseconds(
          gameData.endedAt.toDate(),
          gameData.startedAt.toDate()
        ) / 1000;
      setSeconds(String(seconds));
      updateDoc(docReference, {
        seconds,
      });
    };
    if (gameOver === true) {
      updateDoc(docReference, {
        endedAt: serverTimestamp(),
      }).then((ref) => {
        determineSeconds();
      });
    }
    if (gameOver === false) {
      addDoc(collection(getFirestore(), "sessions"), {
        startedAt: serverTimestamp(),
        level: currentLevel?.level,
        username: null,
      }).then((reference) => {
        setDocReference(reference);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameOver, currentLevel?.level]);

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
      setFoundStatusText(`Nice job you have found ${character.name}! `);
      setGameCharacters(changedCharacters);
    } else {
      setFoundStatusText(`${character.name} is not there. Keep looking!`);
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
      <FoundStatus foundStatusText={foundStatusText}>
        {foundStatusText}
      </FoundStatus>

      <GameCharacters
        characters={gameCharacters ? gameCharacters : []}
        deleteSession={deleteSession}
      ></GameCharacters>
      <GameContent onClick={changePositions} gameOver={gameOver}>
        <Characters
          characters={gameCharacters ? gameCharacters : []}
          positions={positions}
          onClick={characterClicked}
        />
        <GameImg src={currentLevel?.imgSrc} gameOver={gameOver} />
      </GameContent>
      <GameModal
        gameOver={gameOver}
        deleteSession={deleteSession}
        seconds={seconds}
        addUsername={addUsername}
      />
    </GameWrapper>
  );
};
const GameWrapper = styled.div<{ gameOver: boolean }>`
  ${({ gameOver }) =>
    gameOver === true &&
    css`
      background-color: rgba(0, 0, 0, 0.5);
    `}
  min-height:100vh;
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
const FoundStatus = styled.div<{ foundStatusText: string }>`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  padding: 0.8rem 1.3rem;
  font-size: 0.8rem;
  font-family: "Poppins", sans-serif;
  border-radius: 5px;
  z-index: 10;
  position: fixed;
  width: max-content;
  top: 70px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  @media only screen and (min-width: 540px) {
    top: 130px;
    font-size: 1.2rem;
  }
  @media only screen and (min-width: 768px) {
    font-size: 1.55rem;
  }
  ${({ foundStatusText }) =>
    foundStatusText === "" &&
    css`
      width: 0;
      padding: 0;
    `}
`;
export default Game;
