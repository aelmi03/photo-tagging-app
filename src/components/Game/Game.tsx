import { ILevel } from "../../types";

interface IProps {
  currentLevel: ILevel | null;
}
const Game = ({ currentLevel }: IProps) => {
  return <h1>LEVEL {currentLevel?.level}</h1>;
};

export default Game;
