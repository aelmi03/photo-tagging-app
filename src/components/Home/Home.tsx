import Levels from "./Levels";
import LeaderboardPreview from "./LeadboardPreview";
import styled from "styled-components";
import firebase from "firebase/app";
import levels from "../../utils/levels";
import { doc, getFirestore, setDoc } from "firebase/firestore";

const Home = () => {
  async function postLevels() {
    await levels.forEach(async (levelObject) => {
      const levelDoc = doc(getFirestore(), `levels/level${levelObject.level}`);
      await setDoc(levelDoc, levelObject);
    });
  }
  postLevels();
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
  margin-bottom: 5rem;
  padding: 0.5rem;
  @media only screen and (min-width: 540px) {
    padding: 3rem 1.5rem;
    gap: 10rem;
  }
`;
export default Home;
