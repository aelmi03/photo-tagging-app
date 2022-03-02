import LevelCard from "./LevelCard";
import styled from "styled-components";
import { ILevel } from "../../types";
interface IProps {
  levels: ILevel[] | null;
  changeCurrentLevel: (level: ILevel) => void;
}
const Levels = ({ levels, changeCurrentLevel }: IProps) => {
  const levelComponents = () => {
    return levels?.map((level: ILevel) => (
      <LevelCard
        gameLevel={level}
        changeCurrentLevel={changeCurrentLevel}
        key={level.imgSrc}
      />
    ));
  };
  return <LevelsContainer>{levelComponents()}</LevelsContainer>;
};
const LevelsContainer = styled.section`
  display: grid;
  width: 100%;
  justify-items: center;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  @media only screen and (min-width: 768px) {
    gap: 1.4rem;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  }
`;
export default Levels;
