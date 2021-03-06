import styled, { css } from "styled-components";
import Button from "../../utils/Button";
import Text from "../../utils/Text";
import Filter from "bad-words";
import React, { useState } from "react";

interface IProps {
  gameOver: boolean;
  deleteSession: () => void;
  seconds: string;
  addUsername: (name: string) => void;
}
const GameModal = ({
  gameOver,
  deleteSession,
  seconds,
  addUsername,
}: IProps) => {
  const [username, setUsername] = useState<string>("");
  return (
    <GameModalWrapper gameOver={gameOver}>
      <ModalContainer flow="column" gap="1rem">
        <ModalTitle>You finished in {seconds} seconds!</ModalTitle>
        <Text color="grey">
          Enter your name to see where you rank in the leaderboards!
        </Text>
      </ModalContainer>
      <ModalContainer flow="row" gap="1rem">
        <ModalLabel>Username:</ModalLabel>
        <ModalInput
          placeholder="John Doe"
          value={username}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            const inputElement = e.target as HTMLInputElement;
            setUsername(inputElement.value);
          }}
          maxLength={18}
        ></ModalInput>
      </ModalContainer>
      <ModalContainer flow="row" gap="1.5rem">
        <ModalButton color="white-blue" onClick={deleteSession}>
          Cancel
        </ModalButton>
        <ModalButton
          color="blue"
          onClick={() => {
            const filter = new Filter({ placeHolder: "❤" });

            addUsername(filter.clean(username));
          }}
          disabled={!username}
        >
          Submit
        </ModalButton>
      </ModalContainer>
    </GameModalWrapper>
  );
};
const GameModalWrapper = styled.div<{ gameOver: boolean }>`
  display: none;
  position: absolute;
  grid-template-rows: 1fr 3fr 1fr;
  height: 430px;
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
  z-index: 10;
  width: min(95%, 650px);
  border-radius: 7px;
  box-shadow: 0px 0px 5px ${({ theme }) => theme.palette.secondary.main};
  background-color: ${({ theme }) => theme.palette.common.white};
  > :nth-child(2) {
    border-bottom: 2px dotted ${({ theme }) => theme.palette.common.grey};
    border-top: 2px dotted ${({ theme }) => theme.palette.common.grey};
  }
  > :nth-child(3) {
    justify-self: center;
  }
  ${({ gameOver }) =>
    gameOver === true &&
    css`
      display: grid;
    `}
`;
const ModalTitle = styled(Text)`
  font-size: 2.5rem;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  @media only screen and (min-width: 768px) {
    font-size: 2.8rem;
  }
`;
const ModalLabel = styled.label`
  font-size: 1.6rem;
  font-family: "Poppins", sans-serif;
  @media only screen and (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

const ModalInput = styled.input`
  border-radius: 5px;
  box-shadow: 0.5px 0.5px 3px ${({ theme }) => theme.palette.secondary.main};
  font-size: 1.6rem;
  padding: 1.2rem 1.5rem;
  width: 78%;
  @media only screen and (min-width: 768px) {
    padding: 1.4rem 1.7rem;
    font-size: 1.7rem;
  }
`;
const ModalButton = styled(Button)<{ disabled?: boolean }>`
  padding: 0.9rem 3.5rem;
  font-size: 1.6rem;
  ${({ disabled }) =>
    disabled === true &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `}
  @media only screen and (min-width: 768px) {
    padding: 1.1rem 5.3rem;
    font-size: 1.9rem;
  }
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
