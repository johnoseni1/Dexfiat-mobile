import React, { useContext, useEffect, useState, Fragment } from 'react'; // useEffect,
import './style.css';
import Popup from '../../Popup';
import mnemonic from '../../assets/mnemonic.svg';
import leftarrow from '../../assets/leftarrow.svg';
// import Vector from '../../assets/Vector.svg';

const Mnemonic = ({ history }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className='whole-welcome'>
        <div>
          {isOpen && (
            <Popup
              handleClose={togglePopup}
              className='cream-box'
              content={
                <Fragment>
                  <p className='text-center' style={{ fontWeight: 'bold' }}>
                    Protect your funds
                  </p>
                  <p className='small-font'>
                    -Your Secret Recovery Phrase controls all of your accounts.
                  </p>
                  <p className='small-font'>
                    -Never share your Secret Recovery Phrase with anyone
                    <br />
                    -The Dexfiat team will never ask for your Secret Recovery
                    Phrase
                    <br />
                    -Always keep your Secret Recovery Phrase in a secure and
                    secret place
                  </p>

                  <p className='small-font'>
                    By clicking “Got it” you acknowledge that you have read,
                    understood and agreed to the terms of use.
                  </p>
                  <div className='center'>
                    <div
                      onClick={() => {
                        togglePopup();
                        history.push('/index');
                      }}
                      className='btn-green'
                    >
                      Got it
                    </div>
                  </div>
                </Fragment>
              }
            />
          )}
          <div className='creater'>
            <div className='helper'>
              <div>
                <img src={leftarrow} className='arroeleft' alt='back' />
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
                Enter your Mnemonic
                <br />
                <span className='textty'>Please enter your backup phrase</span>
              </p>
            </div>
            <div className='input-phrase'>
              <input type='text' />
              <br />
              <br />
              <span>Paste Clipboard</span>
            </div>
            <div className='createwallet-btner'>
              <button onClick={togglePopup}>Import wallet</button>

              <br />
              <br />
              {/* <span>Already have a wallet? <a href="/importwallet">import</a></span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mnemonic;
