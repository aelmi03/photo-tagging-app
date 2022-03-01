import Levels from "./Levels";
import LeaderboardPreview from "./LeadboardPreview";
import styled from "styled-components";
import firebase from "firebase/app";
import { doc, getFirestore, setDoc } from "firebase/firestore";
const Home = () => {
  console.log(getFirestore());
  testing();
  return (
    <HomeWrapper>
      <Levels />
      <LeaderboardPreview />
    </HomeWrapper>
  );
};
async function testing() {
  const testingDoc = doc(getFirestore(), "testing/firstText");
  await setDoc(testingDoc, {
    testing: "true",
  });
}
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
