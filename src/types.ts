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
  startedAt: string;
  endedAt: string;
  seconds: string;
}
