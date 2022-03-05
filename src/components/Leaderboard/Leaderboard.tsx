import { ILevel } from "../../types";
import styled from "styled-components";
import Button from "../../utils/Button";
import GameLevel from "./GameLevel";

interface IProps {
  currentLevel: ILevel | null;
  levels: ILevel[];
}
const Leaderboard = ({ currentLevel, levels }: IProps) => {
  const loadGameLevels = () => {
    return levels.map((level: ILevel) => {
      return <GameLevel level={level} isCurrentLevel={false} />;
    });
  };
  return (
    <LeaderboardWrapper>
      <LeaderboardTitle>Leaderboard</LeaderboardTitle>
      <LeaderboardContainer>
        <LeaderboardButton color="blue">Play Level</LeaderboardButton>
        <LeaderboardButton color="red">Go Back</LeaderboardButton>
      </LeaderboardContainer>
      <LeaderboardLevels>{loadGameLevels()}</LeaderboardLevels>
    </LeaderboardWrapper>
  );
};

const LeaderboardWrapper = styled.div`
  padding: 2rem 0.75rem;
  display: flex;
  flex-flow: column nowrap;
  gap: 2rem;
  @media only screen and (min-width: 540px) {
    padding: 2.5rem 2rem;
  }
`;
const LeaderboardLevels = styled.div`
  display: grid;
  width: 100%;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  @media only screen and (min-width: 540px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  @media only screen and (min-width: 760px) {
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  }
`;
const LeaderboardContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 1rem;
`;
const LeaderboardTitle = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 2.2rem;
  font-weight: bold;
  text-align: center;
  @media only screen and (min-width: 540px) {
    font-size: 3rem;
  }
  @media only screen and (min-width: 768px) {
    font-size: 3.5rem;
  }
`;
const LeaderboardButton = styled(Button)`
  padding: 0.75rem 2.5rem;
  font-size: 1.2rem;
`;

export default Leaderboard;
