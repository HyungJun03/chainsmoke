import React, { Component } from 'react';
import Card2 from 'antd/lib/card';
import styled from "styled-components";
import "../../CSS/Block/Block.css";
import blockchain from './Blockchain';
import Data from './Data';
import Previoushash from './PreviousHash';
import Hash from './Hash';
import Index from './Index';
import  { TimeS } from '../until'
import {
  Card,
  BlocksHeader,
  BlocksRow,
} from "../Shared";
import '../../CSS/test.css'

const TableContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 100px;
`;

const Block = props => {
  return (
    <TableContainer>    
    <Card2
        className="block is-valid block-shadow">
      <BlocksHeader />
      {blockchain.map((block, index) => (
        <BlocksRow
          index={`${block.index === 0 ? "Genesis" : "{block.index}"}`}
          hash={block.hash}
          timestamp={TimeS(block.timestamp)}
          data={block.data}
          previousHash={block.previousHash}
          
        />
      ))}
    </Card2>
  </TableContainer>
    );
}
  

  
  export default Block;