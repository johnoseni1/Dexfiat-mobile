import React, { useContext, useEffect, useState } from 'react'; // useEffect,
import './style.css';
import { Link } from 'react-router-dom';
import Popup from '../../Popup';
import QuestionMark from '../../assets/question-mark.png';
import Harmony from '../../assets/harmony.png';
import WalletConnect from '../../assets/wallet-connect.png';
import Metamask from '../../assets/metamask.png';
import { BiUserCircle } from 'react-icons/bi';
import mnemonic from '../../assets/mnemonic.svg';
import leftarrow from '../../assets/leftarrow.svg';
import boy from '../../assets/3rd-boy.png';
// import Vector from '../../assets/Vector.svg';

const Pool = () => {
  const theme = localStorage.getItem('theme');

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
            {isOpen3 && (
              <Popup
                closeBtn={true}
                className='white-box'
                handleClose={togglePopup3}
                content={
                  <>
                    <div className='wallets'>
                      <p style={{ marginTop: '40px' }}>Connect your wallet</p>
                      <div>
                        <img src={Harmony} alt='' />
                        <span>Harmony</span>
                      </div>
                      <div>
                        <img
                          style={{ height: '20px', width: '20px' }}
                          src={WalletConnect}
                          alt=''
                        />
                        <span>Wallet connect</span>
                      </div>
                      <div>
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
              <div style={{ marginLeft: '40px' }}>
                <Link to='/swap'>
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
                    <svg
                      width='15'
                      height='14'
                      viewBox='0 0 15 14'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M0.833333 4.11832H11.6667L10.3333 5.10649C10.2458 5.17138 10.172 5.25266 10.1163 5.34572C10.0605 5.43877 10.0239 5.54176 10.0084 5.64881C9.9929 5.75587 9.99891 5.86488 10.0261 5.96964C10.0532 6.0744 10.101 6.17284 10.1667 6.25935C10.2443 6.36163 10.3449 6.44464 10.4607 6.50181C10.5764 6.55898 10.704 6.58874 10.8333 6.58874C11.0136 6.58874 11.1891 6.53095 11.3333 6.42405L14.6667 3.95363C14.7686 3.87678 14.8512 3.77773 14.9081 3.66418C14.9649 3.55064 14.9945 3.42566 14.9945 3.29897C14.9945 3.17228 14.9649 3.0473 14.9081 2.93376C14.8512 2.82021 14.7686 2.72116 14.6667 2.64431L11.45 0.173889C11.2754 0.039574 11.054 -0.0207007 10.8344 0.00632475C10.6148 0.0333502 10.4151 0.145462 10.2792 0.317997C10.1432 0.490532 10.0822 0.709356 10.1096 0.926332C10.1369 1.14331 10.2504 1.34066 10.425 1.47498L11.7333 2.47138H0.833333C0.61232 2.47138 0.400358 2.55814 0.244078 2.71257C0.0877973 2.867 0 3.07645 0 3.29485C0 3.51325 0.0877973 3.7227 0.244078 3.87713C0.400358 4.03157 0.61232 4.11832 0.833333 4.11832ZM14.1667 9.88264H3.33333L4.66667 8.89447C4.84348 8.76343 4.96037 8.56835 4.99162 8.35215C5.02288 8.13594 4.96594 7.91632 4.83333 7.74161C4.70073 7.56689 4.50331 7.45138 4.28452 7.42049C4.06573 7.38961 3.84348 7.44587 3.66667 7.57691L0.333333 10.0473C0.231411 10.1242 0.148806 10.2232 0.0919473 10.3368C0.0350882 10.4503 0.00550787 10.5753 0.00550787 10.702C0.00550787 10.8287 0.0350882 10.9537 0.0919473 11.0672C0.148806 11.1808 0.231411 11.2798 0.333333 11.3567L3.55 13.8271C3.69546 13.9386 3.87421 13.9994 4.05833 14C4.1856 13.9997 4.3111 13.9706 4.42522 13.9149C4.53934 13.8593 4.63903 13.7785 4.71667 13.6788C4.85199 13.5072 4.91306 13.2896 4.88651 13.0735C4.85997 12.8575 4.74797 12.6607 4.575 12.526L3.26667 11.5296H14.1667C14.3877 11.5296 14.5996 11.4428 14.7559 11.2884C14.9122 11.134 15 10.9245 15 10.7061C15 10.4877 14.9122 10.2783 14.7559 10.1238C14.5996 9.96939 14.3877 9.88264 14.1667 9.88264Z'
                        fill='#009345'
                      />
                    </svg>
                    <span
                      style={{
                        marginLeft: '10px',
                        position: 'relative',
                        bottom: '2px',
                      }}
                    >
                      Swap
                    </span>
                  </button>
                </Link>
              </div>
              <div style={{ marginLeft: '10px', width: '120px' }}>
                <button
                  onClick={togglePopup3}
                  style={{
                    color: '#009506',
                    opacity: '0.5',
                    fontSize: '13px',
                    backgroundColor: '#DAAA02',
                    border: 'none',
                    padding: '7px 13px',
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
            </div>
            <div className='talksinit'>
              <div className='sec-colorer'>
                Liquidity providers earn a 0.3% fee on all trades proportional
                to their share of the pool. Fees are added to the pool, accrue
                in real time and can be claimed by withdrawing your liquidity.
              </div>
              <div className='supply-liquider'>
                <Link to='/liquidity'>
                  <button>Add Liquidity</button>
                </Link>
                <div className='view-chart'>
                  <Link to='/liquidity'>Create Liquidity</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pool;
