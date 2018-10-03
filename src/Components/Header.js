import React, { Component } from 'react';

import styled from "styled-components";
import { Link } from "react-router-dom";
import '../CSS/Header.css';

const home = styled.h1`
  font-family: Century Gothic, sans-serif;
  margin: -8px;
  color: #232423;

`
const topbar = styled.header`
  margin-left: 150px;
  margin-top: 10px;
  margin-bottom: 3px;
`

const nav = styled.h1`
  display: inline-block;
  float: right;
  margin-right: 150px;
  margin-top: 2px;
`

const SLink = styled.span`
  text-decoration: none;
  font-weight: 600;
  color: ${props => (props.isActive ? "black" : "#676767")};
`;


class App extends Component {
  render() {
    return (
      <home>
  
      <topbar>
        <div class="logo">
          <h1>ChainSmoke</h1>
        </div>
        </topbar>
        <div class="navbar">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="http://54.180.31.43:3000/">About</a></li>
          </ul>
          <ul>
            <a href= "http://54.180.31.43:3000/"><li class="regbut">Register</li></a>
            <li><a href="http://54.180.31.43:3000/">Log In</a></li>
          </ul>
        </div>
      
        
       

      
      </home>
      
     
    
    );
  }
}

export default App;
