import userWallet from './userWallet';
// import fs from 'fs';
const { Harmony } = require('@harmony-js/core');
const { BN } = require('@harmony-js/crypto');
const { ChainType } = require('@harmony-js/utils');
const {	toWei, } = require('@harmony-js/utils');

const hmy =  new Harmony(
  // let's assume we deploy smart contract to this end-point URL
  'https://api.s0.b.hmny.io',
  {
    chainType: ChainType.Harmony,
    chainId: 2,
  },
);

                                            

// const initializeContract = async (wallet)=>{
//     const contract = require("./contracts/Counter.json");
//     // contract = JSON.parse(contract)
//     const abi = contract.abi;
//     const contractAddress = contract.networks['2'].address;
//     const contractInstance = hmy.contracts.createContract(abi,contractAddress);
//     return contractInstance    
// }
// let contract;


// async function initWallet () {
//     const wallet = new userWallet();
//     await wallet.signin();
//     const unattachedContract = await initializeContract();
//     contract = wallet.attachToContract(unattachedContract);
//     const result = await contract.methods.getCount().call()
//     console.log(result.toString())

//     const one = new BN('1')
//     let options = {
// 		gasPrice: 1000000000,
// 		gasLimit: 210000,
// 		value: toWei(one, hmy.utils.Units.one),
//     };
    
//     const increment = await contract.methods.addMoney().send(options)
// }



// const show  = document.getElementById("showtoken");
// show.addEventListener('click', showValue)

// async function showValue(){
//   const value = await contract.methods.getMoneyStored().call();
//   console.log(value.toString())
//   const para = document.createElement("p")
//   para.innerHTML = value.toString();
//   show.after(para)
// }

export default {hmy};      