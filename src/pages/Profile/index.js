import React, { useContext, useEffect, useState } from 'react'; // useEffect,
import './style.css';
import { Link } from 'react-router-dom';
import { BiUserCircle } from 'react-icons/bi';
import mnemonic from '../../assets/mnemonic.svg';
import leftarrow from '../../assets/leftarrow.svg';
import boy from '../../assets/3rd-boy.png';
import MonoConnect from '@mono.co/connect.js';
import Popup from '../../Popup';
// import Vector from '../../assets/Vector.svg';

const Profile = ({ history }) => {
  const theme = localStorage.getItem('theme');

  // CHeckbox
  const [checked, setChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const onContinue = () => {
    togglePopup();
    monoConnect.open();
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
    // localStorage.setItem('popup-index2-status', '1');
  };

  const monoConnect = React.useMemo(() => {
    const monoInstance = new MonoConnect({
      onClose: () => console.log('Widget closed'),
      onLoad: () => console.log('Widget loaded successfully'),
      onSuccess: ({ code }) => console.log(`Linked successfully: ${code}`),
      key: 'test_pk_GZcxyk4xnfd36IQy2iTh',
    });

    monoInstance.setup();

    return monoInstance;
  }, []);

  return (
    <div>
      <div className='whole-welcome'>
        {isOpen && (
          <Popup
            className='index-box'
            content={
              <>
                <p
                  className='text-center small-font'
                  style={{ fontWeight: 'bold' }}
                >
                  Will you like to ease your transactions?
                </p>
                <p className='small-font'>
                  Link existing bank with dexfiat securely. dexfiat deos not
                  store or collect any of your login details, your inputs are
                  encrypted and stored on your device.
                </p>
                <p className='small-font' style={{ fontWeight: 'bold' }}>
                  Benefit of linking
                </p>
                <p className='small-font'>
                  -Automated peer to peer transaction verification
                  <br />
                  -No P2P wating delay (fast transaction)
                </p>

                <p className='small-font'>
                  Dexfiat does not store or keep any of your data. all
                  infomation entered are encripted and routed Mono.
                  <br />
                  This process is only required to verify transactions. Dexfiat
                  CAN NOT tamper with/transfer your funds.
                </p>
                <div className='center' style={{ marginTop: '2rem' }}>
                  <button
                    onClick={onContinue}
                    style={{
                      background: '#549E20',
                      color: '#fff',
                      padding: '13px 50px',
                      fontSize: '17px',
                      borderRadius: '5px',

                      border: 'none',
                    }}
                  >
                    Yes, link me.
                  </button>
                  <label
                    className='checkbox-container'
                    style={{ marginTop: '1rem' }}
                  >
                    <span style={{ fontSize: '14px', fontWeight: 'bold' }}>
                      done, don’t show again
                    </span>
                    <input
                      type='checkbox'
                      onClick={() => {
                        setChecked(!checked);
                      }}
                    />
                    <span className='checkmark'></span>
                  </label>
                  <p
                    style={{
                      fontSize: '14px',
                      fontWeight: 'bold',
                    }}
                  >
                    <div
                      onClick={() => {
                        history.push('/index');
                      }}
                      style={{ color: '#DAAB03', cursor: 'pointer' }}
                    >
                      No, back to My Crypto space
                    </div>
                  </p>
                </div>
              </>
            }
            handleClose={togglePopup}
          />
        )}
        <Link
          to='/fiatbalance'
          style={{
            position: 'relative',
            left: '870px',
            bottom: '250px',
            zIndex: '9999',
            fontSize: '12px',
            color: '#fff',
            transform: 'rotate(270deg)',
          }}
        >
          Fiat Balance
        </Link>
        <div
          className='creater'
          style={{
            background: theme === 'light' ? '#fff' : '#333',
            color: theme === 'light' ? '#000' : '#fff',
          }}
        >
          <div
            style={{ display: 'flex', marginTop: '30px', marginLeft: '20px' }}
          >
            <Link to='/index'>
              <div>
                <svg
                  width='39'
                  height='39'
                  viewBox='0 0 39 39'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M30.875 17.8751H11.6025L17.5013 10.7901C17.7771 10.4582 17.9098 10.0304 17.8702 9.60071C17.8305 9.17101 17.6219 8.77466 17.29 8.49883C16.9581 8.22301 16.5303 8.09031 16.1006 8.12992C15.6709 8.16954 15.2746 8.37823 14.9987 8.71008L6.87375 18.4601C6.81909 18.5376 6.7702 18.6191 6.7275 18.7038C6.7275 18.7851 6.7275 18.8338 6.61375 18.9151C6.54009 19.1014 6.50153 19.2997 6.5 19.5001C6.50153 19.7004 6.54009 19.8988 6.61375 20.0851C6.61375 20.1663 6.61375 20.2151 6.7275 20.2963C6.7702 20.3811 6.81909 20.4625 6.87375 20.5401L14.9987 30.2901C15.1515 30.4735 15.3429 30.621 15.5591 30.7221C15.7754 30.8233 16.0113 30.8755 16.25 30.8751C16.6297 30.8758 16.9976 30.7436 17.29 30.5013C17.4545 30.3649 17.5906 30.1974 17.6903 30.0083C17.79 29.8192 17.8514 29.6124 17.871 29.3995C17.8906 29.1867 17.8681 28.9721 17.8046 28.768C17.7412 28.5639 17.6381 28.3743 17.5013 28.2101L11.6025 21.1251H30.875C31.306 21.1251 31.7193 20.9539 32.024 20.6491C32.3288 20.3444 32.5 19.9311 32.5 19.5001C32.5 19.0691 32.3288 18.6558 32.024 18.351C31.7193 18.0463 31.306 17.8751 30.875 17.8751Z'
                    fill='#FFD301'
                  />
                </svg>
              </div>
            </Link>
            <div style={{ fontSize: '25px', marginLeft: '20px' }}>
              Profile and Setting
            </div>
          </div>

          <div style={{ textAlign: 'right', marginRight: '50px' }}>
            <div style={{ marginRight: '20px' }}>
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M18.7223 11.2194C18.0337 11.4023 17.3242 11.4948 16.6117 11.4947C14.4422 11.4947 12.4048 10.6516 10.8745 9.12183C9.86953 8.11147 9.14705 6.85546 8.77905 5.47899C8.41105 4.10252 8.41038 2.65367 8.7771 1.27687C8.8229 1.10472 8.82261 0.923565 8.77626 0.751569C8.72991 0.579573 8.63913 0.422785 8.51302 0.296932C8.38692 0.17108 8.22993 0.0805886 8.05779 0.0345358C7.88566 -0.011517 7.70443 -0.0115118 7.5323 0.0345506C5.80804 0.493875 4.23492 1.39838 2.97075 2.65733C-0.99025 6.61689 -0.99025 13.0621 2.97075 17.0237C3.91225 17.9701 5.03217 18.7204 6.2657 19.2313C7.49922 19.7422 8.82185 20.0035 10.1571 20C11.4919 20.0037 12.8142 19.7427 14.0474 19.2319C15.2806 18.7212 16.4002 17.971 17.3413 17.0247C18.6017 15.7608 19.5069 14.1874 19.9661 12.4628C20.0117 12.2907 20.0113 12.1097 19.965 11.9378C19.9186 11.7659 19.828 11.6092 19.7021 11.4833C19.5762 11.3575 19.4194 11.2669 19.2474 11.2205C19.0755 11.1742 18.8944 11.1739 18.7223 11.2194ZM15.9055 15.5884C15.1525 16.3452 14.2568 16.9453 13.2702 17.3538C12.2837 17.7624 11.2259 17.9712 10.1581 17.9684C9.08987 17.971 8.03174 17.762 7.04488 17.3533C6.05801 16.9446 5.16199 16.3444 4.40862 15.5874C1.24023 12.4191 1.24023 7.26293 4.40862 4.09468C5.02086 3.48334 5.7277 2.97467 6.50191 2.58825C6.38859 4.05004 6.5923 5.51905 7.09914 6.8949C7.60598 8.27075 8.40398 9.52099 9.43862 10.5602C10.4759 11.5977 11.7263 12.3976 13.1032 12.9047C14.4801 13.4117 15.9508 13.6138 17.4135 13.4969C17.0248 14.2695 16.5158 14.9755 15.9055 15.5884Z'
                  fill='black'
                />
              </svg>
            </div>
            <div style={{ color: '#009506' }}>Themes</div>
          </div>
          <Link to='/wallets'>
            <div
              style={{
                background: 'rgba(0, 149, 6, 0.06)',
                marginTop: '40px',
                borderRadius: '9px',
                paddingTop: '10px',
                paddingBottom: '10px',
                paddingLeft: '90px',
              }}
            >
              Wallets & accounts
            </div>
          </Link>
          {/* <Link to='/wallets'> */}
          <div
            onClick={togglePopup}
            style={{
              background: 'rgba(0, 149, 6, 0.06)',
              // marginTop: '40px',
              borderRadius: '9px',
              paddingTop: '10px',
              cursor: 'pointer ',
              paddingBottom: '10px',
              paddingLeft: '90px',
            }}
          >
            Link your account to mono
          </div>
          {/* </Link> */}
          <div className='line-btw'></div>
          <div
            style={{
              background: 'rgba(0, 149, 6, 0.06)',
              borderRadius: '9px',
              paddingTop: '10px',
              paddingBottom: '10px',
              paddingLeft: '90px',
            }}
          >
            Preference
          </div>
          <div className='line-btw'></div>
          <div
            style={{
              background: 'rgba(0, 149, 6, 0.06)',
              borderRadius: '9px',
              paddingTop: '10px',
              paddingBottom: '10px',
              paddingLeft: '90px',
            }}
          >
            Backup
          </div>
          <div className='line-btw'></div>
          <div
            style={{
              background: 'rgba(0, 149, 6, 0.06)',
              borderRadius: '9px',
              paddingTop: '10px',
              paddingBottom: '10px',
              paddingLeft: '90px',
            }}
          >
            Affiliate (refer and earn)
          </div>
          <div className='line-btw'></div>
          <div
            style={{
              background: 'rgba(0, 149, 6, 0.06)',
              borderRadius: '9px',
              paddingTop: '10px',
              paddingBottom: '10px',
              paddingLeft: '90px',
            }}
          >
            Security
          </div>
          <div className='line-btw'></div>
          <div
            style={{
              background: 'rgba(0, 149, 6, 0.06)',
              borderRadius: '9px',
              paddingTop: '10px',
              paddingBottom: '10px',
              paddingLeft: '90px',
            }}
          >
            Wallet Coonect
          </div>
          <div className='line-btw'></div>
          <div
            style={{
              background: 'rgba(0, 149, 6, 0.06)',
              borderRadius: '9px',
              paddingTop: '10px',
              paddingBottom: '10px',
              paddingLeft: '90px',
            }}
          >
            FAQ & Support
          </div>
          <div className='line-btw'></div>
          <div
            style={{
              background: 'rgba(0, 149, 6, 0.06)',
              borderRadius: '9px',
              paddingTop: '10px',
              paddingBottom: '10px',
              paddingLeft: '90px',
            }}
          >
            Launchpad Governance
          </div>
          <div className='line-btw'></div>
          <div
            style={{
              background: 'rgba(0, 149, 6, 0.06)',
              borderRadius: '9px',
              paddingTop: '10px',
              paddingBottom: '10px',
              paddingLeft: '90px',
            }}
          >
            About
          </div>
          <div className='line-btw'></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
