import { ILevel } from "../../types";
import styled from "styled-components";
import Button from "../../utils/Button";
import GameLevel from "./GameLevel";
import Rankings from "./Rankings";
import { useNavigate } from "react-router-dom";

interface IProps {
  currentLevel: ILevel | null;
  levels: ILevel[];
  changeCurrentLevel: (level: ILevel) => void;
}
const Leaderboard = ({ currentLevel, levels, changeCurrentLevel }: IProps) => {
  const navigate = useNavigate();

  const loadGameLevels = () => {
    return levels.map((level: ILevel) => {
      const isCurrentLevel = currentLevel === level ? true : false;
      return (
        <GameLevel
          level={level}
          isCurrentLevel={isCurrentLevel}
          changeCurrentLevel={changeCurrentLevel}
          key={level.level}
        />
      );
    });
  };
  return (
    <LeaderboardWrapper>
      <LeaderboardTitle>Leaderboard</LeaderboardTitle>
      <LeaderboardContainer>
        <LeaderboardButton color="blue" onClick={() => navigate("/game")}>
          Play Level
        </LeaderboardButton>
        <LeaderboardButton color="red" onClick={() => navigate("/")}>
          Go Back
        </LeaderboardButton>
      </LeaderboardContainer>
      <LeaderboardLevels>{loadGameLevels()}</LeaderboardLevels>
      <Rankings level={currentLevel} />
    </LeaderboardWrapper>
  );
};

const LeaderboardWrapper = styled.div`
  padding: 2rem 0.4rem;
  display: flex;
  flex-flow: column nowrap;
  gap: 3.5rem;
  @media only screen and (min-width: 414px) {
    padding: 2.2rem 1rem;
  }
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
  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  @media only screen and (min-width: 1220px) {
    grid-template-columns: repeat(auto-fit, minmax(235px, 1fr));
  }
`;
const LeaderboardContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 1rem;
`;
const LeaderboardTitle = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 2.4rem;
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
  @media only screen and (min-width: 540px) {
    font-size: 1.4rem;
    padding: 1rem 4rem;
  }
  @media only screen and (min-width: 768px) {
    font-size: 1.6rem;
    padding: 1.2rem 4.8rem;
  }
`;

export default Leaderboard;
