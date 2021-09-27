import React, { useContext, useEffect, useState, Fragment } from 'react'; // useEffect,
import './style.css';
import Popup from '../../Popup';
import { AiFillCopy } from 'react-icons/ai';
import mnemonic from '../../assets/mnemonic.svg';
import leftarrow from '../../assets/leftarrow.svg';
// import Vector from '../../assets/Vector.svg';

const CreateRecovery = ({ history }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
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
                      -Your Secret Recovery Phrase controls all of your
                      accounts.
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
            <div className='createwallet-btner'>
              <button onClick={togglePopup} style={{ color: '#fff' }}>
                Proceed
              </button>

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

export default CreateRecovery;
