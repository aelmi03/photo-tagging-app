import { Timestamp } from "firebase/firestore";
export interface ICharacter {
  imgSrc: string;
  name: string;
  positionX: number[];
  positionY: number[];
  found: boolean;
}
export interface ILevel {
  imgSrc: string;
  level: string;
  characters: ICharacter[];
}

export interface IPosition {
  top: string;
  left: string;
  visible: boolean;
}

export interface IData {
  level: string;
  startedAt: Timestamp;
  endedAt: Timestamp;
  seconds: string;
  username: string;
}
