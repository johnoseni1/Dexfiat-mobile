import React, { useContext, useEffect, useState } from 'react'; // useEffect,
import './style.css';
import { Link } from 'react-router-dom';
import mnemonic from '../../assets/mnemonic.svg';
import leftarrow from '../../assets/leftarrow.svg';
// import Vector from '../../assets/Vector.svg';

const Dndsend = () => {
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
              <Link to='/fiatbalance'>
                <div>
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
                </div>
              </Link>
              {/* <div style={{marginLeft: "60px"}}>Invest and Earn</div> */}
            </div>
            <div
              style={{
                display: 'flex',
                marginTop: '30px',
                justifyContent: 'center',
              }}
            >
              <div>
                <div>Dexfiat Naira DNGN</div>
                <div style={{ fontSize: '11px' }}>N200,000</div>
              </div>
              <div style={{ marginLeft: '140px' }}>200,000</div>
            </div>
            <div
              style={{
                position: 'relative',
                fontSize: '10px',
                left: '350px',
                top: '40px',
              }}
            >
              Paste
            </div>

            <form className='form-for-transfer'>
              {/* <label>Enter Amount</label><br /> */}
              <input
                placeholder='Reciever address'
                className='inputer'
                type='text'
              />
              <span>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M14.2706 0H12.0312C11.7724 0 11.5625 0.209875 11.5625 0.46875C11.5625 0.727625 11.7724 0.9375 12.0312 0.9375H14.2706C14.7073 0.9375 15.0625 1.29275 15.0625 1.72941V3.96875C15.0625 4.22762 15.2724 4.4375 15.5312 4.4375C15.7901 4.4375 16 4.22762 16 3.96875V1.72941C16 0.775813 15.2242 0 14.2706 0V0Z'
                    fill='#009506'
                  />
                  <path
                    d='M0.46875 4.4375C0.727625 4.4375 0.9375 4.22762 0.9375 3.96875V1.72941C0.9375 1.29275 1.29275 0.9375 1.72938 0.9375H3.96875C4.22762 0.9375 4.4375 0.727625 4.4375 0.46875C4.4375 0.209875 4.22762 0 3.96875 0H1.72938C0.775813 0 0 0.775813 0 1.72941V3.96875C0 4.22762 0.209875 4.4375 0.46875 4.4375Z'
                    fill='#009506'
                  />
                  <path
                    d='M3.96875 15.0625H1.72938C1.29275 15.0625 0.9375 14.7072 0.9375 14.2706V12.0312C0.9375 11.7724 0.727625 11.5625 0.46875 11.5625C0.209875 11.5625 0 11.7724 0 12.0312V14.2706C0 15.2242 0.775813 16 1.72938 16H3.96875C4.22762 16 4.4375 15.7901 4.4375 15.5312C4.4375 15.2724 4.22762 15.0625 3.96875 15.0625Z'
                    fill='#009506'
                  />
                  <path
                    d='M15.5312 11.5625C15.2724 11.5625 15.0625 11.7724 15.0625 12.0312V14.2706C15.0625 14.7072 14.7073 15.0625 14.2706 15.0625H12.0312C11.7724 15.0625 11.5625 15.2724 11.5625 15.5312C11.5625 15.7901 11.7724 16 12.0312 16H14.2706C15.2242 16 16 15.2242 16 14.2706V12.0312C16 11.7724 15.7901 11.5625 15.5312 11.5625Z'
                    fill='#009506'
                  />
                  <path
                    d='M0.03125 8C0.03125 8.25888 0.241125 8.46875 0.5 8.46875H15.5C15.7589 8.46875 15.9688 8.25888 15.9688 8C15.9688 7.74112 15.7589 7.53125 15.5 7.53125H0.5C0.241125 7.53125 0.03125 7.74112 0.03125 8Z'
                    fill='#009506'
                  />
                </svg>
              </span>

              <br />
              <br />
              <label>Enter Amount</label>
              <br />
              <input placeholder='Amount' className='inputer' type='text' />
              <span>Max</span>
              <div className='tranc-in-form'>Transaction fee: xxxxxxx</div>
              <div className='btn-invest'>
                <button>Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dndsend;
