import styled from "styled-components";
import Text from "../utils/Text";
import Character from "../utils/Character";
import LevelImg from "../utils/LevelImg";
import Button from "../utils/Button";
const LevelCard = ({ imgSrc, level, characters }: any) => {
  return (
    <LevelCardWrapper>
      <LevelImg src={imgSrc} alt="A waldo level" />
      <LevelInformation>
        <Text>Level {level}</Text>
        <Character src="https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_740,w_1100/v1555285691/shape/mentalfloss/waldomain.png?itok=SpMGe5nM" />
        <Character src="https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_740,w_1100/v1555285691/shape/mentalfloss/waldomain.png?itok=SpMGe5nM" />
        <Character src="https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_740,w_1100/v1555285691/shape/mentalfloss/waldomain.png?itok=SpMGe5nM" />
      </LevelInformation>
      <LevelButton>Play</LevelButton>
    </LevelCardWrapper>
  );
};
const LevelCardWrapper = styled.div`
  display: grid;
  padding-bottom: 1rem;
  gap: 1.5rem;
  width: 300px;
  border: 1px solid ${({ theme }) => theme.palette.common.grey};
`;

const LevelInformation = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: column;
  gap: 0.4rem;
  padding: 0.5rem;
  align-items: center;
`;
const LevelButton = styled(Button)`
  justify-self: center;
`;
export default LevelCard;
