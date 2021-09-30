import React, { useContext, useEffect, useState, Fragment } from 'react'; // useEffect,
import './style.css';
import { Link } from 'react-router-dom';
import Popup from '../../Popup';
import mnemonic from '../../assets/mnemonic.svg';
import leftarrow from '../../assets/leftarrow.svg';
// import Vector from '../../assets/Vector.svg';

const Mnemonic = () => {
  const theme = localStorage.getItem('theme');
  return (
    <div>
      <div className='whole-welcome'>
        <div>
          <div
            className='creater'
            style={{
              background: theme === 'light' ? '#fff' : '#333',
              color: theme === 'light' ? '#000' : '#fff',
            }}
          >
            <div className='helper'>
              <div>
                <Link to='/createwallet'>
                  <img src={leftarrow} className='arroeleft' alt='back' />
                </Link>
                <span>Scan Privater key bar code</span>
              </div>
              <img src={mnemonic} className='mnemonic' alt='svgs' />
              <br />
              <br />
              {/* <img src={Polygon2} alt="poly1" /> */}
              {/* <span>Slide</span> */}
              {/* <img src={Polygon1} alt="poly2" /> */}
            </div>
            <div className='region-wallet-name'>
              <div className='region'>
                <p>Select country / region. Needed for P2P dex integration.</p>
                <div className='picky'>
                  <select>
                    <option>Nigeria | NG</option>
                    <option>USA | US</option>
                    <option>Ethopia | ET</option>
                  </select>
                </div>
              </div>
              <div className='wallet-name-reg'>
                <p>
                  Enter your desired wallet name. This will be registered as
                  your user ID name
                </p>
                <input type='text' />
              </div>
            </div>
            <br />
            <div className='little-text'>
              <p>
                Enter your Mnemonic
                <br />
                <span className='textty'>Please enter your backup phrase</span>
              </p>
            </div>
            <div className='input-phrase'>
              <textarea />
              <br />
              <br />
              <span>Paste Clipboard</span>
            </div>
            <div className='createwallet-btner'>
              <Link to='/index'>
                <button>Import wallet</button>
              </Link>

              <br />
              <br />
              {/* <span>Already have a wallet? <Link to="/importwallet">import</Link></span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mnemonic;
