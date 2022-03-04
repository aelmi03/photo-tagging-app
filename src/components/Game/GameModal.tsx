import styled, { css } from "styled-components";
import Button from "../../utils/Button";
import Text from "../../utils/Text";

const GameModal = () => {
  return (
    <GameModalWrapper>
      <ModalContainer flow="column" gap="1rem">
        <ModalTitle>You finished in 3 seconds</ModalTitle>
        <Text color="grey">
          Enter your name to see where you rank in the leaderboards!
        </Text>
      </ModalContainer>
      <ModalContainer flow="row" gap="1rem">
        <ModalLabel>Username:</ModalLabel>
        <ModalInput placeholder="John Doe"></ModalInput>
      </ModalContainer>
      <ModalContainer flow="row" gap="1.5rem">
        <ModalButton color="red">Cancel</ModalButton>
        <ModalButton color="blue">Submit</ModalButton>
      </ModalContainer>
    </GameModalWrapper>
  );
};
const GameModalWrapper = styled.div`
  display: grid;
  position: absolute;
  grid-template-rows: 1fr 3fr 1fr;
  height: 430px;
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
  z-index: 3;
  width: min(95%, 600px);
  border-radius: 7px;
  background-color: ${({ theme }) => theme.palette.common.white};
  > :nth-child(2) {
    border: 1px dotted ${({ theme }) => theme.palette.common.grey};
  }
  > :nth-child(3) {
    justify-self: center;
  }
`;
const ModalTitle = styled(Text)`
  font-size: 2.5rem;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
`;
const ModalLabel = styled.label`
  font-size: 1.6rem;
  font-family: "Poppins", sans-serif;
`;

const ModalInput = styled.input`
  border-radius: 5px;
  box-shadow: 0px 0px 5px ${({ theme }) => theme.palette.common.grey};
  font-size: 1.6rem;
  padding: 1.2rem 1.5rem;
  width: 90%;
`;
const ModalButton = styled(Button)`
  padding: 0.9rem 3.5rem;
  font-size: 1.6rem;
`;
const ModalContainer = styled.div<{ flow: string; gap: string }>`
  display: flex;
  flex-flow: ${({ flow }) => flow} nowrap;
  gap: ${({ gap }) => gap};
  padding: 3rem 1.5rem;
  justify-content: center;
  align-items: center;
  ${({ flow }) =>
    flow === "row" &&
    css`
      align-items: center;
    `};
`;

export default GameModal;
