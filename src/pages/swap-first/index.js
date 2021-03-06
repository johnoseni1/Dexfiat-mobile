import React, { useContext, useEffect, useState } from 'react'; // useEffect,
import './style.css';
import { Link } from 'react-router-dom';
import Popup from '../../Popup';
import Report from '../../assets/report-icon.png';
import QuestionMark from '../../assets/question-mark.png';
// import './init';
import Web3 from "web3";
import abi from '../utils/abi.json'
// import hmy from './init';
// import initWallet from './init';
import userWallet from './userWallet';
import WhiteQuestionMark from '../../assets/white-question-mark.png';
import Harmonyer from '../../assets/harmony.png';
import WalletConnecter from '../../assets/wallet-connect.png';
import WalletConnect from "@walletconnect/client";
import './connect';
import Metamask from '../../assets/metamask.png';
import QRCodeModal from "@walletconnect/qrcode-modal";
import { BiUserCircle } from 'react-icons/bi';
import mnemonic from '../../assets/mnemonic.svg';
import leftarrow from '../../assets/leftarrow.svg';
import boy from '../../assets/3rd-boy.png';
// import Vector from '../../assets/Vector.svg';
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
const Swap = () => {
  const theme = localStorage.getItem('theme');

  const [progress, setProgress] = useState(3);

  const [swap, setSwap] = useState('market');

  const [InputedAddress, setInputedAddress] = useState("");
  const [secondHeader, setSecondHeader] = useState('second-header')
  const [message, setMessage] = useState("Connect wallet and enter an address");

  const [contractData, setContractData] = useState({
    bnbBalance: 0,
    tikiBalance: 0,
    totalBNB: 0,
    processedIndex: 0,
    myPayOut: 0
})

const tikiTokenContractAddress = "0x6ee20e2c7046cdADfACA37bf04D25188A9446E84"
const web3 = new Web3(Web3.givenProvider);
let everTikiContract = new web3.eth.Contract(abi, tikiTokenContractAddress);

const connectWallet = async () => {
    if(!window.ethereum || !window.web3) return;

    const [address] = await window.ethereum.request({ method: 'eth_requestAccounts' });

    console.log(address)
}

// HANDLE CHANGE WHEN ADDRESS IS PASTED INTO INPUT FEILD
const handleChange = (e) => {

    setInputedAddress(e.target.value);

    if(!web3.utils.isAddress(e.target.value)) return;

   getDetailsByAddress(e.target.value);
}




const getDetailsByAddress = async (address) => {

    const bnbBal = await web3.eth.getBalance(address);
    const tikiHolding = await everTikiContract.methods.dividendTokenBalanceOf(address).call()
    const accountDividendInfo = await everTikiContract.methods.getAccountDividendsInfo(address).call()
    const totalDividendsDistributed = await everTikiContract.methods.getTotalDividendsDistributed().call()
    const lastProcessedIndex = await everTikiContract.methods.getLastProcessedIndex().call()

    setContractData({
        bnbBalance: web3.utils.fromWei(bnbBal.toString(), 'ether'),
        tikiBalance: web3.utils.fromWei(tikiHolding.toString(), 'ether'),
        totalBNB: web3.utils.fromWei(totalDividendsDistributed.toString(), 'ether'),
        processedIndex: lastProcessedIndex,
        myPayOut: accountDividendInfo[1]
    })

    setMessage(`${address} | BNB in your wallet: ${web3.utils.fromWei(bnbBal.toString(), 'ether')} ($0.00) - YOU NEED TO HOLD MORE THAN 10K TIKI TO RECEIVE DIVIDENDS`)
    setSecondHeader("second-header-2")


    console.log("tiki holding: ", tikiHolding.toString());
    console.log("bnb balance: ", bnbBal);
    console.log(" account div: ", accountDividendInfo[1].toString());
    console.log("total dividends distributed: ", totalDividendsDistributed);
    console.log("Last processed index: ", lastProcessedIndex);


}
  
  const initializeContract = async (wallet)=>{
    let contract = require("./contracts/Counter.json");
    // contract = JSON.parse(contract)
    const abi = contract.abi;
    const contractAddress = contract.networks['2'].address;
    const contractInstance = hmy.contracts.createContract(abi,contractAddress);
    return contractInstance    
}
let contract;


async function initWallet () {
    const wallet = new userWallet();
    await wallet.signin();
    const unattachedContract = await initializeContract();
    contract = wallet.attachToContract(unattachedContract);
    const result = await contract.methods.getCount().call()
    console.log(result.toString())

    const one = new BN('1')
    let options = {
		gasPrice: 1000000000,
		gasLimit: 210000,
		value: toWei(one, hmy.utils.Units.one),
    };
    
    const increment = await contract.methods.addMoney().send(options)
}

  const [toggleExpert, setToggleExpert] = useState(false);

  const [toggleMultihops, setToggleMultihops] = useState(false);

  const [speed, setSpeed] = useState({
    standard: false,
    fast: true,
    instant: false,
  });

  async function walletConnect () {
    const connector = new WalletConnect({
      bridge: "https://bridge.walletconnect.org", // Required
      qrcodeModal: QRCodeModal,
    });
   

  if (!connector.connected) {
    // create new session
    connector.createSession();
  }
  
  // Subscribe to connection events
  connector.on("connect", (error, payload) => {
    if (error) {
      throw error;
    }
  
    // Get provided accounts and chainId
    const { accounts, chainId } = payload.params[0];
  });
  
  connector.on("session_update", (error, payload) => {
    if (error) {
      throw error;
    }
  
    // Get updated accounts and chainId
    const { accounts, chainId } = payload.params[0];
  });
  
  connector.on("disconnect", (error, payload) => {
    if (error) {
      throw error;
    }
  
    // Delete connector
  });
}

  // Transaction speed
  const onSetStandard = () => {
    setSpeed({
      standard: true,
      fast: false,
      instant: false,
    });
  };

  const onSetFast = () => {
    setSpeed({
      standard: false,
      fast: true,
      instant: false,
    });
  };

  const onSetInstant = () => {
    setSpeed({
      standard: false,
      fast: false,
      instant: true,
    });
  };

  // Toggle
  const onChangeToggleExpert = () => {
    setToggleExpert(!toggleExpert);
  };

  const onChangeToggleMultihops = () => {
    setToggleMultihops(!toggleMultihops);
  };

  // Proress

  const onChangeProgress = (value) => {
    setProgress(value);
  };

  // Popup 1
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  // Popup 2
  const [isOpen2, setIsOpen2] = useState(false);

  const togglePopup2 = () => {
    setIsOpen2(!isOpen2);
  };

  // POpup 3
  const [isOpen3, setIsOpen3] = useState(false);

  const togglePopup3 = () => {
    setIsOpen3(!isOpen3);
  };

  return (
    <div>
      <div className='whole-welcome'>
        <div
          className='creater'
          style={{
            background: theme === 'light' ? '#fff' : '#333',
            color: theme === 'light' ? '#000' : '#fff',
          }}
        >
          <div className='contenter'>
            <div className='manny'>
              <div style={{ marginLeft: '30px' }}>
                <svg
                  width='19'
                  height='28'
                  viewBox='0 0 19 28'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M0.000431981 3.25408C-0.00854612 3.80932 0.122553 4.35787 0.381618 4.84904C0.640682 5.34022 1.01936 5.75819 1.48266 6.06433L11.1879 12.4763C11.4466 12.65 11.6584 12.8849 11.8042 13.1603C11.95 13.4357 12.0255 13.7428 12.0237 14.0544C12.022 14.366 11.9432 14.6723 11.7944 14.9461C11.6455 15.2198 11.4312 15.4525 11.1706 15.6233L1.65889 21.7599C1.19112 22.0615 0.807108 22.4763 0.542486 22.966C0.277864 23.4556 0.141206 24.0041 0.145193 24.5607V24.718C0.170369 27.6447 3.706 29.0955 5.77985 27.0311L17.4724 15.3872C17.6479 15.2127 17.7872 15.0051 17.8822 14.7765C17.9773 14.5479 18.0262 14.3028 18.0262 14.0553C18.0262 13.8077 17.9773 13.5626 17.8822 13.334C17.7872 13.1055 17.6479 12.8979 17.4724 12.7233L5.63037 0.96623C3.56595 -1.0856 0.0492101 0.343129 0.000431981 3.25408Z'
                    fill='#009506'
                  />
                  <path
                    d='M2.53868 9.90527H1.90141C1.25661 9.90527 0.733887 10.428 0.733887 11.0728V16.934C0.733887 17.5789 1.25661 18.1016 1.90141 18.1016H2.53868C3.18348 18.1016 3.7062 17.5789 3.7062 16.934V11.0728C3.7062 10.428 3.18348 9.90527 2.53868 9.90527Z'
                    fill='#009506'
                  />
                </svg>
                <span style={{ color: '#009506', fontSize: '30px' }}>
                  Dexfiat
                </span>
              </div>
              <div style={{ marginLeft: '10px' }}>
                <Link to='/pool'>
                  <button
                    style={{
                      color: '#009506',
                      fontSize: '15px',
                      backgroundColor: '#ceebcf',
                      border: 'none',
                      padding: '13px 18px',
                      borderRadius: '5px',
                    }}
                  >
                    <span>Pool</span>
                  </button>
                </Link>
              </div>
              <div style={{ marginLeft: '10px' }}></div>
              <div style={{ marginLeft: '10px', width: '120px' }}>
                <button
                  onClick={togglePopup3}
                  style={{
                    color: '#009506',
                    opacity: '0.5',
                    fontSize: '13px',
                    backgroundColor: '#DAAA02',
                    border: 'none',
                    padding: '7px 11px',
                    borderRadius: '5px',
                  }}
                >
                  Connect External Wallet
                </button>
              </div>
            </div>
            <div className='sec-manny'>
              <Link to='/index'>
                <div className='left-guy'>
                  <div style={{ marginLeft: '20px' }}>
                    <svg
                      width='21'
                      height='18'
                      viewBox='0 0 21 18'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M18.9 4V2C18.9 0.897 17.9581 0 16.8 0H3.15C1.4133 0 0 1.346 0 3V15C0 17.201 1.8837 18 3.15 18H18.9C20.0581 18 21 17.103 21 16V6C21 4.897 20.0581 4 18.9 4ZM16.8 13H14.7V9H16.8V13ZM3.15 4C2.87965 3.98848 2.62438 3.87809 2.43734 3.69182C2.2503 3.50554 2.14592 3.25774 2.14592 3C2.14592 2.74226 2.2503 2.49446 2.43734 2.30818C2.62438 2.12191 2.87965 2.01152 3.15 2H16.8V4H3.15Z'
                        fill='white'
                      />
                    </svg>
                    <span style={{ marginLeft: '10px' }}>Wallet</span>
                  </div>
                </div>
              </Link>
              <div className='report' onClick={togglePopup2}>
                <img
                  src={Report}
                  alt=''
                  style={{ height: '22px', width: '20px' }}
                />
              </div>
              <div className='setting'>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g clip-path='url(#clip0)'>
                    <path
                      d='M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z'
                      stroke='black'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                    <path
                      d='M16.1667 12.4999C16.0558 12.7513 16.0227 13.0301 16.0717 13.3004C16.1207 13.5707 16.2496 13.8202 16.4417 14.0166L16.4917 14.0666C16.6467 14.2214 16.7696 14.4052 16.8535 14.6075C16.9373 14.8098 16.9805 15.0267 16.9805 15.2458C16.9805 15.4648 16.9373 15.6817 16.8535 15.884C16.7696 16.0863 16.6467 16.2701 16.4917 16.4249C16.3369 16.5799 16.1531 16.7028 15.9508 16.7867C15.7484 16.8706 15.5316 16.9137 15.3125 16.9137C15.0935 16.9137 14.8766 16.8706 14.6743 16.7867C14.472 16.7028 14.2882 16.5799 14.1334 16.4249L14.0834 16.3749C13.887 16.1828 13.6375 16.0539 13.3672 16.0049C13.0969 15.9559 12.8181 15.989 12.5667 16.0999C12.3202 16.2056 12.11 16.381 11.962 16.6045C11.8139 16.8281 11.7344 17.0901 11.7334 17.3583V17.4999C11.7334 17.9419 11.5578 18.3659 11.2452 18.6784C10.9327 18.991 10.5087 19.1666 10.0667 19.1666C9.62468 19.1666 9.20076 18.991 8.8882 18.6784C8.57563 18.3659 8.40004 17.9419 8.40004 17.4999V17.4249C8.39359 17.1491 8.30431 16.8816 8.1438 16.6572C7.98329 16.4328 7.75899 16.2618 7.50004 16.1666C7.24869 16.0557 6.96988 16.0226 6.69955 16.0716C6.42922 16.1206 6.17977 16.2495 5.98337 16.4416L5.93337 16.4916C5.77858 16.6465 5.59477 16.7695 5.39244 16.8533C5.19011 16.9372 4.97323 16.9804 4.75421 16.9804C4.53518 16.9804 4.3183 16.9372 4.11597 16.8533C3.91364 16.7695 3.72983 16.6465 3.57504 16.4916C3.42008 16.3368 3.29715 16.153 3.21327 15.9507C3.1294 15.7483 3.08623 15.5314 3.08623 15.3124C3.08623 15.0934 3.1294 14.8765 3.21327 14.6742C3.29715 14.4719 3.42008 14.288 3.57504 14.1332L3.62504 14.0833C3.81715 13.8869 3.94603 13.6374 3.99504 13.3671C4.04406 13.0967 4.01097 12.8179 3.90004 12.5666C3.7944 12.3201 3.619 12.1099 3.39543 11.9618C3.17185 11.8138 2.90986 11.7343 2.64171 11.7333H2.50004C2.05801 11.7333 1.63409 11.5577 1.32153 11.2451C1.00897 10.9325 0.833374 10.5086 0.833374 10.0666C0.833374 9.62456 1.00897 9.20063 1.32153 8.88807C1.63409 8.57551 2.05801 8.39992 2.50004 8.39992H2.57504C2.85087 8.39347 3.11838 8.30418 3.34279 8.14368C3.5672 7.98317 3.73814 7.75886 3.83337 7.49992C3.9443 7.24857 3.97739 6.96976 3.92838 6.69943C3.87936 6.4291 3.75049 6.17965 3.55837 5.98325L3.50837 5.93325C3.35341 5.77846 3.23048 5.59465 3.14661 5.39232C3.06273 5.18999 3.01956 4.97311 3.01956 4.75408C3.01956 4.53506 3.06273 4.31818 3.14661 4.11585C3.23048 3.91352 3.35341 3.72971 3.50837 3.57492C3.66316 3.41996 3.84698 3.29703 4.04931 3.21315C4.25164 3.12928 4.46851 3.08611 4.68754 3.08611C4.90657 3.08611 5.12344 3.12928 5.32577 3.21315C5.5281 3.29703 5.71192 3.41996 5.86671 3.57492L5.91671 3.62492C6.11311 3.81703 6.36255 3.94591 6.63288 3.99492C6.90321 4.04394 7.18203 4.01085 7.43337 3.89992H7.50004C7.74651 3.79428 7.95672 3.61888 8.10478 3.39531C8.25285 3.17173 8.3323 2.90974 8.33337 2.64159V2.49992C8.33337 2.05789 8.50897 1.63397 8.82153 1.32141C9.13409 1.00885 9.55801 0.833252 10 0.833252C10.4421 0.833252 10.866 1.00885 11.1786 1.32141C11.4911 1.63397 11.6667 2.05789 11.6667 2.49992V2.57492C11.6678 2.84307 11.7472 3.10506 11.8953 3.32864C12.0434 3.55221 12.2536 3.72762 12.5 3.83325C12.7514 3.94418 13.0302 3.97727 13.3005 3.92826C13.5709 3.87924 13.8203 3.75037 14.0167 3.55825L14.0667 3.50825C14.2215 3.35329 14.4053 3.23036 14.6076 3.14649C14.81 3.06261 15.0268 3.01944 15.2459 3.01944C15.4649 3.01944 15.6818 3.06261 15.8841 3.14649C16.0864 3.23036 16.2702 3.35329 16.425 3.50825C16.58 3.66304 16.7029 3.84685 16.7868 4.04918C16.8707 4.25151 16.9139 4.46839 16.9139 4.68742C16.9139 4.90644 16.8707 5.12332 16.7868 5.32565C16.7029 5.52798 16.58 5.7118 16.425 5.86658L16.375 5.91658C16.1829 6.11298 16.0541 6.36243 16.005 6.63276C15.956 6.90309 15.9891 7.1819 16.1 7.43325V7.49992C16.2057 7.74639 16.3811 7.9566 16.6047 8.10466C16.8282 8.25272 17.0902 8.33218 17.3584 8.33325H17.5C17.9421 8.33325 18.366 8.50885 18.6785 8.82141C18.9911 9.13397 19.1667 9.55789 19.1667 9.99992C19.1667 10.4419 18.9911 10.8659 18.6785 11.1784C18.366 11.491 17.9421 11.6666 17.5 11.6666H17.425C17.1569 11.6677 16.8949 11.7471 16.6713 11.8952C16.4477 12.0432 16.2723 12.2534 16.1667 12.4999V12.4999Z'
                      stroke='black'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0'>
                      <rect width='20' height='20' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            {isOpen && (
              <Popup
                className='white-box'
                content={
                  <>
                    <div>
                      <div>
                        <div className='top-section'>
                          <svg
                            width='143'
                            height='143'
                            viewBox='0 0 143 143'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M71.5 143C110.988 143 143 110.988 143 71.5C143 32.0116 110.988 0 71.5 0C32.0116 0 0 32.0116 0 71.5C0 110.988 32.0116 143 71.5 143Z'
                              fill='#009506'
                            />
                            <path
                              d='M131.675 33L68 98.0109L68.1125 105H71.0375L140 50.1957C137.975 44.0941 135.162 38.2142 131.675 33Z'
                              fill='#076D0B'
                            />
                            <path
                              d='M141.745 29.7043L129.135 17.251C127.461 15.583 124.671 15.583 122.886 17.251L68.9865 72.7346L45.6638 49.8296C43.9898 48.1617 41.2001 48.1617 39.4148 49.8296L28.2555 60.8374C26.5815 62.5054 26.5815 65.2851 28.2555 66.953L65.5273 103.757C66.5317 104.757 67.8708 105.091 69.2098 104.98C70.5489 105.091 71.8879 104.757 72.8924 103.757L141.745 35.9308C143.418 34.1516 143.418 31.3719 141.745 29.7043Z'
                              fill='#F2F1EF'
                            />
                            <path
                              d='M72.8248 103.757L141.743 35.9979C143.419 34.3316 143.419 31.5546 141.743 29.8883L139.733 28L69.027 97.0925L29.9323 59.2139L28.2567 60.8802C26.5811 62.5465 26.5811 65.3235 28.2567 66.9898L65.5644 103.758C66.5698 104.758 67.9101 105.091 69.2505 104.98C70.4791 105.09 71.8194 104.757 72.8248 103.757Z'
                              fill='#E6E5E3'
                            />
                          </svg>

                          <div style={{ margin: '10px 0', color: '#494949' }}>
                            Swap Successful
                          </div>
                          <div style={{ fontSize: '12px', color: '#009706' }}>
                            click to view transaction on the blockchain
                          </div>
                        </div>

                        <div className='bottom-section'>
                          <div style={{ fontWeight: 'bold', color: '#009706' }}>
                            Earn from liquidity pool fees
                          </div>
                          <p style={{ fontSize: '14px', color: '#494949' }}>
                            Provide Liquidity?
                          </p>
                          <div className='two-btns'>
                            <div>
                              <Link to='/pool'>Yes</Link>
                            </div>
                            <div onClick={togglePopup}>No</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                }
                handleClose={togglePopup}
              />
            )}
            {isOpen2 && (
              <Popup
                closeBtn={true}
                className='white-box'
                content={
                  <>
                    <div className='swap-report'>
                      <div>
                        <p className='align-center'>
                          <span>Default Transaction Speed (GWEI) </span>
                          <img src={QuestionMark} alt='' />
                        </p>

                        <div className='trans-speed'>
                          <div
                            onClick={onSetStandard}
                            style={{
                              background: speed.standard ? '#00b006' : '#fff',
                              color: speed.standard ? '#fff' : '#000',
                            }}
                          >
                            <span>Standard</span>{' '}
                            <img
                              src={
                                speed.standard
                                  ? WhiteQuestionMark
                                  : QuestionMark
                              }
                              alt=''
                            />
                          </div>
                          <div
                            onClick={onSetFast}
                            style={{
                              background: speed.fast ? '#00b006' : '#fff',
                              color: speed.fast ? '#fff' : '#000',
                            }}
                          >
                            <span>Fast</span>{' '}
                            <img
                              src={
                                speed.fast ? WhiteQuestionMark : QuestionMark
                              }
                              alt=''
                            />
                          </div>
                          <div
                            onClick={onSetInstant}
                            style={{
                              background: speed.instant ? '#00b006' : '#fff',
                              color: speed.instant ? '#fff' : '#000',
                            }}
                          >
                            <span>Instant</span>{' '}
                            <img
                              src={
                                speed.instant ? WhiteQuestionMark : QuestionMark
                              }
                              alt=''
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <p className='align-center'>
                          <span>Slippage tolerance</span>{' '}
                          <img src={QuestionMark} alt='' />
                        </p>
                        <div className='slippage'>
                          <div className='slippage-percent'>
                            <div>0.5%</div>
                            <div>1%</div>
                            <div>7%</div>
                          </div>
                          <div className='slippage-input'>
                            <input type='number' />
                            <div>%</div>
                          </div>
                        </div>
                      </div>

                      <div className='trans-deadline'>
                        <p className='align-center'>
                          <span>Transaction deadline</span>{' '}
                          <img src={QuestionMark} alt='' />
                        </p>
                        <input type='number' placeholder='min' />
                      </div>

                      <div>
                        <div className='expert-mode'>
                          <p className='align-center'>
                            <span>Expert Mode</span>{' '}
                            <img src={QuestionMark} alt='' />
                          </p>
                          <div
                            className='toggle-bar'
                            onClick={onChangeToggleExpert}
                          >
                            <div
                              style={{ width: !toggleExpert ? '16px' : '62px' }}
                            ></div>
                          </div>
                        </div>
                        <div className='multihops'>
                          <p className='align-center'>
                            <span>Disable Multihops</span>{' '}
                            <img src={QuestionMark} alt='' />
                          </p>
                          <div
                            className='toggle-bar'
                            onClick={onChangeToggleMultihops}
                          >
                            <div
                              style={{
                                width: !toggleMultihops ? '16px' : '62px',
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                }
                handleClose={togglePopup2}
              />
            )}
            {isOpen3 && (
              <Popup
                closeBtn={true}
                className='white-box'
                handleClose={togglePopup3}
                content={
                  <>
                    <div className='wallets'>
                      <p style={{ marginTop: '40px' }}>Connect your wallet</p>
                      <div onClick={initWallet}>
                        <img src={Harmonyer} alt='' />
                        <span>Harmony</span>
                      </div>
                      <div onClick={walletConnect}>
                        <img src={WalletConnecter}
                          style={{ height: '20px', width: '20px' }}
                          alt=''
                        />
                        <span>Wallet connect</span>
                      </div>
                      <div onClick={connectWallet}>
                        <img src={Metamask} alt='' />
                        <span>Metamask</span>
                      </div>
                      <p className='learn-more'>
                        <img src={QuestionMark} alt='' />{' '}
                        <span>Learn how to connect</span>
                      </p>
                    </div>
                  </>
                }
              />
            )}
            <div
              style={{
                textAlign: 'center',
                position: 'relative',
                top: '30px',
                color: '#494949',
              }}
            >
              Swap
            </div>
            <div className='talksinit'>
              <div className='guyna'>
                <span
                  className='picking'
                  onClick={() => {
                    setSwap('market');
                  }}
                  style={{
                    border: swap === 'market' ? '1px solid #009506' : '0',
                  }}
                >
                  Market
                </span>
                <span
                  className='picker'
                  onClick={() => {
                    setSwap('limit');
                  }}
                  style={{
                    border: swap === 'limit' ? '1px solid #009506' : '0',
                  }}
                >
                  Limit
                </span>
              </div>
              <div className='remain'>
                <div className='top-guy'>
                  <span>You Send</span>
                  <span style={{ marginLeft: '90px' }}>Balance:0.23329</span>
                </div>
                <div className='down-now'>
                  <span style={{ fontSize: '30px' }}>0.0</span>
                  <span
                    style={{
                      color: '#009506',
                      marginLeft: '40px',
                      fontSize: '13px',
                    }}
                  >
                    Max
                  </span>
                  <span className='this-guy'>
                    {/* <svg
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z'
                        fill='#8AC9FE'
                      />
                      <path
                        d='M11.9694 1.05273C12.7975 2.31267 13.2797 3.82017 13.2797 5.44055C13.2797 9.85883 9.69799 13.4405 5.27971 13.4405C3.83515 13.4405 2.48008 13.0575 1.3103 12.3877C2.74015 14.5632 5.20211 15.9999 8.00002 15.9999C12.4183 15.9999 16 12.4182 16 7.99989C16 5.02617 14.3774 2.43158 11.9694 1.05273Z'
                        fill='#60B7FF'
                      />
                      <path
                        d='M8.00015 14.9661C11.8474 14.9661 14.9662 11.8473 14.9662 8.00003C14.9662 4.15276 11.8474 1.03394 8.00015 1.03394C4.15288 1.03394 1.03406 4.15276 1.03406 8.00003C1.03406 11.8473 4.15288 14.9661 8.00015 14.9661Z'
                        fill='#EAF6FF'
                      />
                      <path
                        d='M8.00044 11.8984C7.91503 11.8984 7.82962 11.8769 7.75259 11.8339L4.71644 10.139C4.55553 10.0492 4.45581 9.87931 4.45581 9.69502V6.30518C4.45581 6.1209 4.55553 5.95102 4.71644 5.86121L7.75259 4.16631C7.90665 4.08031 8.09422 4.08031 8.24828 4.16631L11.2844 5.86121C11.4453 5.95102 11.5451 6.1209 11.5451 6.30518V9.69502C11.5451 9.87931 11.4453 10.0492 11.2844 10.139L8.24828 11.8339C8.17125 11.8769 8.08584 11.8984 8.00044 11.8984ZM5.60675 9.47131L7.87303 10.7364C7.95222 10.7806 8.04865 10.7806 8.12784 10.7364L10.3941 9.47131C10.4768 9.42512 10.5281 9.33781 10.5281 9.24309V6.75709C10.5281 6.66237 10.4768 6.57503 10.3941 6.52887L8.12784 5.26374C8.04865 5.21952 7.95222 5.21952 7.87303 5.26374L5.60675 6.52887C5.52403 6.57506 5.47278 6.66237 5.47278 6.75709V9.24309C5.47275 9.33781 5.52403 9.42515 5.60675 9.47131Z'
                        fill='#60B7FF'
                      />
                      <path
                        d='M12.923 3.07129C13.1548 3.81998 13.2798 4.61563 13.2798 5.44051C13.2798 9.85879 9.69807 13.4405 5.27978 13.4405C4.62516 13.4405 3.9891 13.3613 3.38013 13.213C4.60969 14.3034 6.22741 14.966 8.00013 14.966C11.8474 14.966 14.9662 11.8471 14.9662 7.99988C14.9662 6.07479 14.1853 4.3321 12.923 3.07129Z'
                        fill='#D8ECFE'
                      />
                    </svg> */}
                    {/* <span style={{ marginLeft: '10px' }}>Link</span> */}
                    <select id='coin'>
                      <option value='one'>One</option>
                      <option value='bnb'>BNB</option>
                      <option value='btc'>BTC</option>
                    </select>
                  </span>
                </div>
              </div>

              <div style={{ padding: '0 15px' }}>
                <progress value={progress} max='100'></progress>
                <div className='percentage'>
                  <div
                    onClick={() => {
                      onChangeProgress(3);
                    }}
                  >
                    0%
                  </div>
                  <div
                    onClick={() => {
                      onChangeProgress(25);
                    }}
                  >
                    25%
                  </div>
                  <div
                    onClick={() => {
                      onChangeProgress(50);
                    }}
                  >
                    50%
                  </div>
                  <div
                    onClick={() => {
                      onChangeProgress(75);
                    }}
                  >
                    75%
                  </div>
                  <div
                    onClick={() => {
                      onChangeProgress(100);
                    }}
                  >
                    100%
                  </div>
                </div>
              </div>

              {swap === 'limit' && (
                <div className='limit-extension'>
                  <div className='price'>
                    <p>Price</p>
                    <input type='number' />
                  </div>
                  <div className='expires'>
                    <p>Expires in</p>
                    <input type='text' value='7days' />
                  </div>
                </div>
              )}

              <div className='remain' style={{ marginTop: '15px' }}>
                <div className='top-guy'>
                  <span style={{ marginRight: '180px' }}>You Send</span>
                  {/* <span style={{marginLeft: "90px"}}>Balance:0.23329</span> */}
                </div>
                <div className='down-now'>
                  <span style={{ fontSize: '30px' }}>0.0</span>
                  {/* <span style={{color: "#009506",marginLeft: "40px", fontSize: "13px"}}>Max</span> */}
                  <span className='this-guyer'>Select Token</span>
                </div>
              </div>
              <div className='supply-liquider'>
                <button onClick={togglePopup}>Make Swap</button>
                <div className='view-chart'>
                  <Link to=''>View Chart</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swap;
