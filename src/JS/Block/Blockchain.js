import React from "react";

const CryptoJS = require("crypto-js");



class Block{
  constructor(index, hash, previousHash, timestamp, data) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.timestamp = timestamp;
    this.data = data;

  }
}

const nowTime = new Date().getTime() / 1000;

const genesisBlock = new Block(
  0,
  "496AD43AD28D80DE0796D4609B8B57FA6B98E749C76AED3EE8F73DF3C77A736E",
  null,
  nowTime,
  "1"
);

let blockchain = [genesisBlock];

export default blockchain;