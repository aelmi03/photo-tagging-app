import Levels from "./Levels";
import LeaderboardPreview from "./LeadboardPreview";
import styled from "styled-components";
import { ILevel } from "../../types";
interface IProps {
  levels: ILevel[] | null;
}
const Home = ({ levels }: IProps) => {
  return (
    <HomeWrapper>
      <Levels levels={levels} />
      <LeaderboardPreview />
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  display: grid;
  gap: 3rem;
  justify-items: center;
  margin-bottom: 5rem;
  padding: 0.5rem;
  @media only screen and (min-width: 540px) {
    padding: 3rem 1.5rem;
    gap: 10rem;
  }
`;
export default Home;
