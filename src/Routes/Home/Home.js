import React, { Component } from 'react';
import '../../CSS/Header.css'

const Home = () => {
    
    return(
        <div class="main">
        <div class="header">
        <h2>CHAIN SMOKE</h2>
         <p>for everything blockchain</p>
        </div>
        <div class="buttons">
           <a href="/personal"><div class="butleft">
             <h3>Personal</h3>
             </div></a>
             <a href="http://54.180.31.43:3000/"><div class="butright" href="#">
             <h3>Business</h3>
             </div></a>
        </div>
        </div>
        );
    };


export default Home;