import React, { useState } from "react";
import styled from "styled-components";
import { ILevel, IData } from "../../types";
import {
  query,
  collection,
  getFirestore,
  where,
  onSnapshot,
} from "firebase/firestore";

interface IProps {
  level: ILevel | null;
}

const Rankings = ({ level }: IProps) => {
  const [rankings, setRankings] = useState<IData[]>([]);
  const loadRankings = () => {
    const rankingsQuery = query(
      collection(getFirestore(), "sessions"),
      where("username", "!=", null),
      where("level", "==", `${level?.level}`)
    );
    return onSnapshot(rankingsQuery, (snapshot) => {
      setRankings(snapshot.docs.map((doc) => doc.data() as IData));
    });
  };
  return (
    <RankingsWrapper>
      <RankingsTitle>Username</RankingsTitle>

      <RankingsTitle>Rank</RankingsTitle>
      <RankingsTitle>Time(Seconds)</RankingsTitle>
    </RankingsWrapper>
  );
};
const RankingsWrapper = styled.div`
  display: grid;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.palette.common.black};
  padding: 0.5rem;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
`;

const RankingsTitle = styled.h4`
  font-size: 1.6rem;
  font-family: "Cabin", sans-serif;
`;
const RankingsText = styled.h5`
  font-size: 1.4rem;
  font-family: "Poppins", sans-serif;
`;
export default Rankings;
