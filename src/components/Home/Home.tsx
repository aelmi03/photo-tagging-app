import Levels from "./Levels";
import LeaderboardPreview from "./LeadboardPreview";
import styled from "styled-components";
const Home = () => {
  return (
    <HomeWrapper>
      <Levels />
      <LeaderboardPreview />
    </HomeWrapper>
  );
};
const HomeWrapper = styled.div`
  display: grid;
  gap: 3rem;
  justify-items: center;
  margin-bottom: 2rem;
  padding: 0.5rem;
`;
export default Home;
