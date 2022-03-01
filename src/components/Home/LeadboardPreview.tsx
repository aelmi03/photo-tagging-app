import styled from "styled-components";
import Text from "../../utils/Text";
import Button from "../../utils/Button";
const LeaderboardPreview = () => {
  return (
    <LeaderboardPreviewWrapper>
      <LeaderboardTitle>Are You A Waldo Professional?</LeaderboardTitle>
      <LeaderboardTitle>
        See Where You Rank Against Other Players!
      </LeaderboardTitle>
      <Button color="blue" border="white">
        View Leaderboard
      </Button>
    </LeaderboardPreviewWrapper>
  );
};
const LeaderboardPreviewWrapper = styled.div`
  display: grid;
  padding: 3rem;
  border-radius: 5px;
  gap: 2rem;
  justify-items: center;
  width: min(90%, 850px);
  background-color: ${({ theme }) => theme.palette.primary.main};
`;
const LeaderboardTitle = styled(Text)`
  color: ${({ theme }) => theme.palette.common.white};
  background-color: ${({ theme }) => theme.palette.primary.main};
  font-size: 2.5rem;
  font-family: "Josefin Sans", sans-serif;
  text-align: center;
  font-weight: bold;
`;
export default LeaderboardPreview;
