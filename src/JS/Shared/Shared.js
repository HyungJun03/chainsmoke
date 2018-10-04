import React from "react";
import styled from "styled-components";

export const Card = styled.div`
  padding: 10px;
  background-color: white;
  border-radius: 10px;
  width: 100%;
  min-height: 50vh;
  margin-bottom: 50px;
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Header = styled.div`
  font-weight: 600;
`;

export const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  & * {
    text-align: center;
    width: 15%;
    margin-bottom: 15px;
  }
  & *:nth-child(5) {
    width: 40%;
  }
`;

export const cContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & * {
    text-align: center;
    width: 15%;
    margin-bottom: 15px;
  }
  & *:nth-child(2) {
    width: 40%;
  }
`;

export const Cell = styled.span`
  padding: 10px 0;
  line-height: 2;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const Cell2 = styled.span`
  padding: 10px 0;
  line-height: 2;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: scroll;
`;

export const BlocksHeader = () => (
  <Header>
    <RowContainer>
      <Cell>Index</Cell>
      <Cell>DATA</Cell>
      <Cell>Timestamp</Cell>
      <Cell>Hash</Cell>
      <Cell>PreviousHash</Cell>
    </RowContainer>
  </Header>
);

export const BlocksRow = ({ index, hash, timestamp, data, previousHash }) => (
  <RowContainer>
    <Cell>{index}</Cell>
    <Cell>{data}</Cell>
    <Cell>{timestamp}</Cell>
    <Cell>{hash}</Cell>
    <Cell>{previousHash}</Cell>
  </RowContainer>
);