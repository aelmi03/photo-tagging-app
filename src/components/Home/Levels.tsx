import LevelCard from "./LevelCard";
import styled from "styled-components";
import { ILevel } from "../../types";
interface IProps {
  levels: ILevel[] | null;
}
const Levels = ({ levels }: IProps) => {
  const levelComponents = () => {
    return levels?.map((level: any) => (
      <LevelCard
        imgSrc={level.imgSrc}
        characters={level.characters}
        level={level.level}
        key={level.level}
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
