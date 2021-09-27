import React, { useContext, useEffect, useState } from 'react'; // useEffect,
import './style.css';
import { Link } from 'react-router-dom';
import Vector from '../../assets/Vector.svg';

const Welcome = () => {
  return (
    <div>
      <div className='whole-welcome'>
        <div className='inside-man'>
          <div className='real-content'>
            <div className='upguy'>
              <span style={{ position: 'relative', top: '10px' }}>
                <svg
                  width='40'
                  height='60'
                  viewBox='0 0 40 60'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M0.754341 6.97303C0.735149 8.16283 1.0154 9.33829 1.56919 10.3908C2.12299 11.4433 2.93248 12.339 3.92287 12.995L24.6696 26.7349C25.2227 27.107 25.6753 27.6106 25.987 28.2006C26.2988 28.7907 26.46 29.4489 26.4564 30.1166C26.4527 30.7843 26.2843 31.4407 25.966 32.0273C25.6478 32.6139 25.1897 33.1124 24.6326 33.4784L4.29959 46.6283C3.29965 47.2746 2.47876 48.1635 1.91308 49.2128C1.3474 50.262 1.05527 51.4374 1.06379 52.63V52.9672C1.11761 59.2387 8.67565 62.3474 13.1089 57.9237L38.1039 32.9727C38.4791 32.5986 38.7768 32.1538 38.98 31.664C39.1831 31.1742 39.2877 30.6489 39.2877 30.1185C39.2877 29.588 39.1831 29.0628 38.98 28.573C38.7768 28.0831 38.4791 27.6384 38.1039 27.2643L12.7894 2.07049C8.37629 -2.32628 0.858613 0.735277 0.754341 6.97303Z'
                    fill='white'
                  />
                  <path
                    d='M6.17935 21.2256H4.81709C3.4387 21.2256 2.32129 22.3457 2.32129 23.7274V36.2872C2.32129 37.669 3.4387 38.7891 4.81709 38.7891H6.17935C7.55774 38.7891 8.67515 37.669 8.67515 36.2872V23.7274C8.67515 22.3457 7.55774 21.2256 6.17935 21.2256Z'
                    fill='white'
                  />
                </svg>
              </span>

              <span style={{ marginLeft: '10px' }}>Dexfiat</span>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className='welcome-btn'>
            <Link to='/createwallet'>
              <button>Get started</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
