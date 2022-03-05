import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { FaMedal, FaClock } from "react-icons/fa";
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
import Text from "../../utils/Text";

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
    return rankings.map((userScore: IData, index: number) => {
      let topRanked = false;
      if (index + 1 <= 3) {
        topRanked = true;
      }
      return (
        <RankingContainer key={index}>
          <RankingsText index={index + 1}>
            {topRanked ? <FaMedal /> : ""} <UniqueText>{index + 1}</UniqueText>
          </RankingsText>
          <RankingsText>{userScore.username}</RankingsText>
          <RankingsText>{userScore.seconds}</RankingsText>
        </RankingContainer>
      );
    });
  };
  return (
    <RankingsWrapper>
      <RankingContainer>
        <RankingsTitle>
          Rank <FaMedal />
        </RankingsTitle>
        <RankingsTitle>Username</RankingsTitle>
        <RankingsTitle>
          Time (Seconds)
          <FaClock />
        </RankingsTitle>
      </RankingContainer>

      {loadRankings()}
    </RankingsWrapper>
  );
};
const RankingsWrapper = styled.div`
  display: grid;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.palette.secondary.main};
  padding: 2rem 0rem;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  border-radius: 5px;
  > :nth-child(1) {
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.palette.common.grey};
  }
  > :last-child {
    border-bottom: 2px solid ${({ theme }) => theme.palette.common.grey};
  }
`;

const RankingsTitle = styled.h4`
  font-size: 1.2rem;
  font-family: "Cabin", sans-serif;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.palette.secondary.main};
  @media only screen and (min-width: 540px) {
    font-size: 1.6rem;
  }
  @media only screen and (min-width: 540px) {
    font-size: 1.8rem;
  }
`;
const UniqueText = styled.h4`
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => theme.palette.common.black};
  @media only screen and (min-width: 540px) {
    font-size: 1.5rem;
  }
`;
const RankingsText = styled.h5<{ index?: number }>`
  display: flex;
  flex-flow: row nowrap;
  gap: 0.45rem;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  ${({ index }) =>
    index === 1 &&
    css`
      color: gold;
    `}
  ${({ index }) =>
    index === 2 &&
    css`
      color: silver;
    `}
    ${({ index }) =>
    index === 3 &&
    css`
      color: #bf360c;
    `}
    ${({ index }) =>
    index &&
    index > 3 &&
    css`
      margin-left: 1.5rem;
    `}
  @media only screen and (min-width: 540px) {
    font-size: 1.4rem;
  }
`;

const RankingContainer = styled.div`
  display: grid;
  grid-column: 1/-1;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  width: 100%;
  padding: 1.8rem 0rem;
  border-top: 1px solid ${({ theme }) => theme.palette.common.grey};
  border-bottom: 1px solid ${({ theme }) => theme.palette.common.grey};
`;
export default Rankings;
