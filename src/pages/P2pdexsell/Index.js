import React, { useContext, useEffect, useState } from 'react'; // useEffect,
import './style.css';
import { Link } from 'react-router-dom';
import mnemonic from '../../assets/mnemonic.svg';
import leftarrow from '../../assets/leftarrow.svg';
// import Vector from '../../assets/Vector.svg';

const P2pDexSell = () => {
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
            <div
              style={{
                display: 'flex',
                paddingTop: '50px',
                paddingLeft: '40px',
              }}
            >
              <Link to='/p2pmarketsell'>
                <svg
                  width='27'
                  height='23'
                  viewBox='0 0 27 23'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M24.875 9.87508H5.6025L11.5013 2.79008C11.7771 2.45823 11.9098 2.0304 11.8702 1.60071C11.8305 1.17101 11.6219 0.774657 11.29 0.498832C10.9581 0.223007 10.5303 0.090306 10.1006 0.129923C9.67093 0.16954 9.27457 0.37823 8.99875 0.710082L0.87375 10.4601C0.819086 10.5376 0.770204 10.6191 0.7275 10.7038C0.7275 10.7851 0.7275 10.8338 0.61375 10.9151C0.540095 11.1014 0.501529 11.2997 0.5 11.5001C0.501529 11.7004 0.540095 11.8988 0.61375 12.0851C0.61375 12.1663 0.61375 12.2151 0.7275 12.2963C0.770204 12.3811 0.819086 12.4625 0.87375 12.5401L8.99875 22.2901C9.15154 22.4735 9.34286 22.621 9.55912 22.7221C9.77539 22.8233 10.0113 22.8755 10.25 22.8751C10.6297 22.8758 10.9976 22.7436 11.29 22.5013C11.4545 22.3649 11.5906 22.1974 11.6903 22.0083C11.79 21.8192 11.8514 21.6124 11.871 21.3995C11.8906 21.1867 11.8681 20.9721 11.8046 20.768C11.7412 20.5639 11.6381 20.3743 11.5013 20.2101L5.6025 13.1251H24.875C25.306 13.1251 25.7193 12.9539 26.024 12.6491C26.3288 12.3444 26.5 11.9311 26.5 11.5001C26.5 11.0691 26.3288 10.6558 26.024 10.351C25.7193 10.0463 25.306 9.87508 24.875 9.87508Z'
                    fill='#FFD301'
                  />
                </svg>
              </Link>
              <div style={{ marginLeft: '60px' }}>P2P Dex Sell</div>
            </div>

            <div className='buy-method'>
              <Link to='/p2pdexbuy'>
                <div className='with-fiat'>
                  <div>Buy with Fiat</div>
                  <div></div>
                </div>
              </Link>

              <Link to='/convertdft'>
                <div className='with-crypto'>
                  <div>Buy with Crypto</div>
                  <div></div>
                </div>
              </Link>
            </div>

            <div className='buy-rate'>
              <div></div>
              <div>1 DNGN = 1 NGN</div>
            </div>

            <div className='buy-input-wrapper'>
              <div className='buy-input'>
                <input type='number' placeholder='Enter amount' />
                <div>All</div>
              </div>
            </div>

            <div className='line-break'>
              <div></div>
            </div>

            <div className='quantity'>
              <div></div>
              <div>Quantity you will pay</div>
              <div>----NGN</div>
            </div>
            <div className='quantity'>
              <div></div>
              <div>Quantity you will receive</div>
              <div>----NGN</div>
            </div>

            <div className='payment-btn sell'>
              <div>Make Payment</div>
            </div>

            <div className='attention'>
              <div>Attention!</div>
              <div>
                Please read the P2P term and condition carfully, Non-compliance
                may result to fund loss or failed transaction
              </div>
            </div>

            <div className='trade-info'>
              <b>Trade info</b>
              <div>
                <div>Payment window</div>
                <div>15 minutes</div>
              </div>
              <div>
                <div>Seller’s Nickname</div>
                <div>Smart</div>
              </div>
              <div>
                <div>Payment method</div>
                <div>Bank Transfer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default P2pDexSell;
