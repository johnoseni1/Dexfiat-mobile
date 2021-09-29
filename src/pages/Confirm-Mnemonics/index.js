import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import leftarrow from '../../assets/leftarrow.svg';

const ConfirmMnemonics = () => {
  return (
    <div>
      <div className='whole-welcome'>
        <div>
          <div className='creater'>
            <div className='helper'>
              <div>
                <img src={leftarrow} className='arroeleft' alt='back' />
                <span>Scan Privater key bar code</span>
              </div>

              <br />
              <br />
              {/* <img src={Polygon2} alt="poly1" /> */}
              {/* <span>Slide</span> */}
              {/* <img src={Polygon1} alt="poly2" /> */}
            </div>

            <br />
            <div className='little-text'>
              <p>
                Confirm Mnemonic
                <br />
                <span className='textty'>
                  Please enter your given backup phrase
                </span>
              </p>

              <textarea className='confirm-mnemonics-input' />
            </div>

            <div className='region-wallet-name'>
              <div className='wallet-name-reg' style={{ marginBottom: '20px' }}>
                <p>
                  Enter your desired wallet name. This will be registered as
                  your user ID name
                </p>
                <input type='text' />
              </div>

              <div className='region' style={{ marginBottom: '0' }}>
                <p>Select country / region. Needed for P2P dex integration.</p>
                <select name='country'>
                  <option value='nigeria'>Nigeria</option>
                  <option value='ghana'>Ghana</option>
                  <option value='usa'>USA</option>
                  <option value='canada'>Canada</option>
                </select>
              </div>
            </div>

            <div className='createwallet-btner'>
              <Link to='/index'>
                <button>Create</button>
              </Link>

              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmMnemonics;
