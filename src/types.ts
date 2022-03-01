export interface ICharacter {
  imgSrc: string;
  name: string;
}
export interface ILevel {
  imgSrc: string;
  level: string;
  characters: ICharacter[];
}
