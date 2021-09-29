import React, { useContext, useEffect, useState, Fragment } from 'react'; // useEffect,
import './style.css';
import { Link } from 'react-router-dom';
import Popup from '../../Popup';
import { AiFillCopy } from 'react-icons/ai';
import mnemonic from '../../assets/mnemonic.svg';
import leftarrow from '../../assets/leftarrow.svg';
// import Vector from '../../assets/Vector.svg';

const CreateRecovery = () => {
  return (
    <div>
      <div className='whole-welcome'>
        <div>
          <div className='creater'>
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
            <br />
            <div className='little-text'>
              <p>
                Your Recovery Phrase
                <br />
                <div
                  style={{
                    fontSize: '14px',
                    color: '#494949',
                    width: '250px',
                    margin: '16px auto',
                  }}
                >
                  Write down or copy these words in the right other keep them
                  somewhere safe
                </div>
              </p>
            </div>
            <div className='input-phraser'>
              <input value='1, Gravity' />
              <input value='2, Jesu2' />
              <input value='3, Rocket' />
              <input value='4, Grain' />
              <input value='5, Bolt' />
              <input value='6, Money' />
              <input value='7, Heavy' />
              <input value='8, Gas' />
              <input value='9, Wet' />
              <input value='10, Weath' />
              <input value='11, Pick' />
              <input value='12, Tommy' />
              <br />
              <br />
              <span>
                <AiFillCopy />
                Copy Phrase
              </span>
            </div>

            <div className='createwallet-btner'>
              <Link to='/confirmmnemonics'>
                <button style={{ color: '#fff' }}>Proceed</button>
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

export default CreateRecovery;
