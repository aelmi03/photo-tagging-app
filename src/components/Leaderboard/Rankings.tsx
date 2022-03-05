import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ILevel, IData } from "../../types";
import {
  query,
  collection,
  getFirestore,
  where,
  onSnapshot,
  limit,
  orderBy,
} from "firebase/firestore";

interface IProps {
  level: ILevel | null;
}

const Rankings = ({ level }: IProps) => {
  const [rankings, setRankings] = useState<IData[]>([]);
  console.log(rankings);

  useEffect(() => {
    const updateRankings = () => {
      const rankingsQuery = query(
        collection(getFirestore(), "sessions"),
        where("username", "!=", null),
        where("level", "==", `${level?.level}`),
        limit(100)
      );
      return onSnapshot(rankingsQuery, (snapshot) => {
        setRankings(
          snapshot.docs
            .map((doc) => doc.data() as IData)
            .sort((a: IData, b: IData) => Number(a.seconds) - Number(b.seconds))
        );
      });
    };
    const unsubscribe = updateRankings();
    return () => {
      unsubscribe();
    };
  }, [level]);
  const loadRankings = () => {
    return rankings.map((userScore: IData, index: number) => (
      <React.Fragment key={index}>
        <RankingsText>{index + 1}</RankingsText>
        <RankingsText>{userScore.username}</RankingsText>
        <RankingsText>{userScore.seconds}</RankingsText>
      </React.Fragment>
    ));
  };
  return (
    <RankingsWrapper>
      <RankingsTitle>Rank</RankingsTitle>
      <RankingsTitle>Username</RankingsTitle>
      <RankingsTitle>Time (Seconds)</RankingsTitle>
      {loadRankings()}
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
  row-gap: 1rem;
  > {
    border: 1px solid ${({ theme }) => theme.palette.common.grey};
  }
`;

const RankingsTitle = styled.h4`
  font-size: 1.6rem;
  font-family: "Cabin", sans-serif;
`;
const RankingsText = styled.h5`
  font-size: 1.4rem;
  font-family: "Poppins", sans-serif;
`;

const RankingContainer = styled.div`
  grid-column: 1/-1;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export default Rankings;
