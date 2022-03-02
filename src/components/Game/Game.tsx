import { ILevel } from "../../types";

interface IProps {
  currentLevel: ILevel | null;
}
const Game = ({ currentLevel }: IProps) => {
  return <h1>Game</h1>;
};

export default Game;
