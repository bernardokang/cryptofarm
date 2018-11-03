const Web3 = require('web3');
// web3 인젝터 납치해서 내 프로바이더로 바꿔버리기 하이재킹
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

// const web3 = new Web3(window.web3.curruentProvider);
export default web3;
