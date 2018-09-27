import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="home">
  
      <div class="topbar">
        <div class="logo">
          <h1>Blockademy</h1>
        </div>
        <div class="navbar">
          <ul>
            <li><a href="http://54.180.31.43:3000/">Premium</a></li>
            <li><a href="http://54.180.31.43:3000/">About</a></li>
          </ul>
          <ul>
            <a href= "http://54.180.31.43:3000/"><li class="regbut">Register</li></a>
            <li><a href="http://54.180.31.43:3000/">Log In</a></li>
          </ul>
        </div>
      </div>
      
      <div class="main">
        <div class="header">
          <h2>Zero to Hero</h2>
          <p>in everything blockchain</p>
        </div>
        <div class="buttons">
           <a href="http://54.180.31.43:3000/"><div class="butleft">
             <h3>Personal</h3>
             </div></a>
           <a href="http://54.180.31.43:3000/"><div class="butright" href="#">
             <h3>Business</h3>
             </div></a>
        </div>
      </div>
      
      <div class="second">
        <div class="blockchain">
          <div class="headb">
            <h4>Blockchain</h4>
            <p>The blockchain is a ledger ditributed among a vast network of computers that allows members to execute transactions with each other without the need for an intermediary.</p>
          </div>
          
          <div class="emblems">
            <div class="bitcoin">
              <p>BITCOIN</p>
              <p><a href="http://54.180.31.43:3000/">Learn more</a></p>
            </div>
            <div class="middles">
            </div>
            <div class="ethereum">
              <p>ETHEREUM</p>
              <p><a href="http://54.180.31.43:3000/">Learn more</a></p>
            </div>
          </div>
          
        </div>
        
        
        
      </div>
      
      
    </div>
    
    );
  }
}

export default App;
