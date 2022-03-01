import LevelCard from "./LevelCard";
import styled from "styled-components";
const Levels = () => {
  return (
    <LevelsContainer>
      <LevelCard />
      <LevelCard />
      <LevelCard />
      <LevelCard />
      <LevelCard />
      <LevelCard />
    </LevelsContainer>
  );
};
const LevelsContainer = styled.section`
  display: grid;
  width: 100%;
  justify-items: center;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;
export default Levels;
