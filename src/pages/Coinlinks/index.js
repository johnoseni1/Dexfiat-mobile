import React, { useContext, useEffect, useState } from 'react'; // useEffect,
import './style.css';
import { Link } from 'react-router-dom';
import mnemonic from '../../assets/mnemonic.svg';
import leftarrow from '../../assets/leftarrow.svg';
// import Vector from '../../assets/Vector.svg';

const Coinlink = () => {
  return (
    <div>
      <div className='whole-welcome'>
        <div>
          <div className='creater'>
            <div
              style={{
                display: 'flex',
                paddingTop: '50px',
                paddingLeft: '40px',
              }}
            >
              <Link to='/cryptodeposit'>
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
              <div style={{ marginLeft: '60px', fontSize: '25px' }}>
                Crypto Deposit
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '40px',
              }}
            >
              <div style={{ display: 'flex' }}>
                <div>
                  <svg
                    width='42'
                    height='42'
                    viewBox='0 0 42 42'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M21 42C32.598 42 42 32.598 42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42Z'
                      fill='#8AC9FE'
                    />
                    <path
                      d='M31.4197 2.76367C33.5933 6.07101 34.8591 10.0282 34.8591 14.2817C34.8591 25.8797 25.4571 35.2817 13.8591 35.2817C10.0672 35.2817 6.51013 34.2762 3.43945 32.518C7.19279 38.2287 13.6555 42 21 42C32.598 42 42 32.598 42 21C42 13.1939 37.7407 6.38314 31.4197 2.76367Z'
                      fill='#60B7FF'
                    />
                    <path
                      d='M20.9999 39.2861C31.0989 39.2861 39.2859 31.0992 39.2859 21.0001C39.2859 10.901 31.0989 2.71411 20.9999 2.71411C10.9008 2.71411 2.71387 10.901 2.71387 21.0001C2.71387 31.0992 10.9008 39.2861 20.9999 39.2861Z'
                      fill='#EAF6FF'
                    />
                    <path
                      d='M21 31.2331C20.7758 31.2331 20.5516 31.1767 20.3494 31.0638L12.3795 26.6147C11.9571 26.3789 11.6953 25.933 11.6953 25.4493V16.5509C11.6953 16.0672 11.9571 15.6213 12.3795 15.3855L20.3494 10.9364C20.7538 10.7107 21.2461 10.7107 21.6505 10.9364L29.6204 15.3855C30.0428 15.6213 30.3046 16.0672 30.3046 16.5509V25.4493C30.3046 25.933 30.0428 26.3789 29.6204 26.6147L21.6505 31.0638C21.4483 31.1767 21.2241 31.2331 21 31.2331ZM14.7165 24.862L20.6655 28.183C20.8734 28.299 21.1265 28.299 21.3344 28.183L27.2834 24.862C27.5005 24.7408 27.635 24.5116 27.635 24.2629V17.7372C27.635 17.4886 27.5005 17.2593 27.2834 17.1381L21.3344 13.8172C21.1265 13.7011 20.8734 13.7011 20.6655 13.8172L14.7165 17.1381C14.4994 17.2594 14.3649 17.4886 14.3649 17.7372V24.2629C14.3648 24.5116 14.4994 24.7409 14.7165 24.862Z'
                      fill='#60B7FF'
                    />
                    <path
                      d='M33.9226 8.0625C34.5311 10.0278 34.8592 12.1164 34.8592 14.2817C34.8592 25.8797 25.4571 35.2817 13.8592 35.2817C12.1408 35.2817 10.4711 35.0737 8.87256 34.6844C12.1002 37.5469 16.3467 39.2861 21.0001 39.2861C31.0992 39.2861 39.2861 31.0991 39.2861 21.0001C39.286 15.9467 37.2361 11.3721 33.9226 8.0625Z'
                      fill='#D8ECFE'
                    />
                  </svg>
                </div>
                <div style={{ marginLeft: '10px' }}>
                  <div>Chainlink</div>
                  <div style={{ fontSize: '12px', marginTop: '4px' }}>
                    $23,459
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  color: '#009706',
                  marginLeft: '100px',
                }}
              >
                <div>
                  <svg
                    width='13'
                    height='15'
                    viewBox='0 0 13 15'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M9.57895 0H1.36842C0.615789 0 0 0.613636 0 1.36364V10.9091H1.36842V1.36364H9.57895V0ZM11.6316 2.72727H4.10526C3.35263 2.72727 2.73684 3.34091 2.73684 4.09091V13.6364C2.73684 14.3864 3.35263 15 4.10526 15H11.6316C12.3842 15 13 14.3864 13 13.6364V4.09091C13 3.34091 12.3842 2.72727 11.6316 2.72727ZM11.6316 13.6364H4.10526V4.09091H11.6316V13.6364Z'
                      fill='#009706'
                    />
                  </svg>
                </div>
                <div style={{ marginLeft: '10px' }}>Copy address</div>
              </div>
            </div>

            <div className='before-qurer'>
              <svg
                width='303'
                height='301'
                viewBox='0 0 303 301'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M12.12 0H0V12.04H12.12V0Z' fill='black' />
                <path d='M24.24 0H12.12V12.04H24.24V0Z' fill='black' />
                <path d='M36.36 0H24.24V12.04H36.36V0Z' fill='black' />
                <path d='M48.48 0H36.36V12.04H48.48V0Z' fill='black' />
                <path d='M60.6 0H48.48V12.04H60.6V0Z' fill='black' />
                <path d='M72.72 0H60.6V12.04H72.72V0Z' fill='black' />
                <path d='M84.84 0H72.72V12.04H84.84V0Z' fill='black' />
                <path d='M109.08 0H96.96V12.04H109.08V0Z' fill='black' />
                <path d='M121.2 0H109.08V12.04H121.2V0Z' fill='black' />
                <path d='M133.32 0H121.2V12.04H133.32V0Z' fill='black' />
                <path d='M145.44 0H133.32V12.04H145.44V0Z' fill='black' />
                <path d='M169.68 0H157.56V12.04H169.68V0Z' fill='black' />
                <path d='M181.8 0H169.68V12.04H181.8V0Z' fill='black' />
                <path d='M193.92 0H181.8V12.04H193.92V0Z' fill='black' />
                <path d='M206.04 0H193.92V12.04H206.04V0Z' fill='black' />
                <path d='M230.28 0H218.16V12.04H230.28V0Z' fill='black' />
                <path d='M242.4 0H230.28V12.04H242.4V0Z' fill='black' />
                <path d='M254.52 0H242.4V12.04H254.52V0Z' fill='black' />
                <path d='M266.64 0H254.52V12.04H266.64V0Z' fill='black' />
                <path d='M278.76 0H266.64V12.04H278.76V0Z' fill='black' />
                <path d='M290.88 0H278.76V12.04H290.88V0Z' fill='black' />
                <path d='M303 0H290.88V12.04H303V0Z' fill='black' />
                <path d='M12.12 12.04H0V24.08H12.12V12.04Z' fill='black' />
                <path
                  d='M84.84 12.04H72.72L72.72 24.08H84.84V12.04Z'
                  fill='black'
                />
                <path
                  d='M133.32 12.04H121.2V24.08H133.32V12.04Z'
                  fill='black'
                />
                <path
                  d='M145.44 12.04H133.32V24.08H145.44V12.04Z'
                  fill='black'
                />
                <path d='M181.8 12.04H169.68V24.08H181.8V12.04Z' fill='black' />
                <path
                  d='M230.28 12.04H218.16V24.08H230.28V12.04Z'
                  fill='black'
                />
                <path d='M303 12.04H290.88V24.08H303V12.04Z' fill='black' />
                <path d='M12.12 24.08H0V36.12H12.12V24.08Z' fill='black' />
                <path d='M36.36 24.08H24.24V36.12H36.36V24.08Z' fill='black' />
                <path d='M48.48 24.08H36.36V36.12H48.48V24.08Z' fill='black' />
                <path d='M60.6 24.08H48.48V36.12H60.6V24.08Z' fill='black' />
                <path d='M84.84 24.08H72.72V36.12H84.84V24.08Z' fill='black' />
                <path
                  d='M157.56 24.08H145.44V36.12H157.56V24.08Z'
                  fill='black'
                />
                <path d='M181.8 24.08H169.68V36.12H181.8V24.08Z' fill='black' />
                <path
                  d='M193.92 24.08H181.8V36.12H193.92V24.08Z'
                  fill='black'
                />
                <path
                  d='M230.28 24.08H218.16V36.12H230.28V24.08Z'
                  fill='black'
                />
                <path
                  d='M254.52 24.08H242.4V36.12H254.52V24.08Z'
                  fill='black'
                />
                <path
                  d='M266.64 24.08H254.52V36.12H266.64V24.08Z'
                  fill='black'
                />
                <path
                  d='M278.76 24.08H266.64V36.12H278.76V24.08Z'
                  fill='black'
                />
                <path d='M303 24.08H290.88V36.12H303V24.08Z' fill='black' />
                <path d='M12.12 36.12H0V48.16H12.12V36.12Z' fill='black' />
                <path d='M36.36 36.12H24.24V48.16H36.36V36.12Z' fill='black' />
                <path d='M48.48 36.12H36.36V48.16H48.48V36.12Z' fill='black' />
                <path d='M60.6 36.12H48.48V48.16H60.6V36.12Z' fill='black' />
                <path d='M84.84 36.12H72.72V48.16H84.84V36.12Z' fill='black' />
                <path
                  d='M109.08 36.12H96.96V48.16H109.08V36.12Z'
                  fill='black'
                />
                <path d='M121.2 36.12H109.08V48.16H121.2V36.12Z' fill='black' />
                <path
                  d='M169.68 36.12H157.56V48.16H169.68V36.12Z'
                  fill='black'
                />
                <path
                  d='M206.04 36.12H193.92V48.16H206.04V36.12Z'
                  fill='black'
                />
                <path
                  d='M230.28 36.12H218.16V48.16H230.28V36.12Z'
                  fill='black'
                />
                <path
                  d='M254.52 36.12H242.4V48.16H254.52V36.12Z'
                  fill='black'
                />
                <path
                  d='M266.64 36.12H254.52V48.16H266.64V36.12Z'
                  fill='black'
                />
                <path
                  d='M278.76 36.12H266.64V48.16H278.76V36.12Z'
                  fill='black'
                />
                <path d='M303 36.12H290.88V48.16H303V36.12Z' fill='black' />
                <path d='M12.12 48.16H0V60.2H12.12V48.16Z' fill='black' />
                <path d='M36.36 48.16H24.24V60.2H36.36V48.16Z' fill='black' />
                <path d='M48.48 48.16H36.36V60.2H48.48V48.16Z' fill='black' />
                <path d='M60.6 48.16H48.48V60.2H60.6V48.16Z' fill='black' />
                <path d='M84.84 48.16H72.72V60.2H84.84V48.16Z' fill='black' />
                <path d='M109.08 48.16H96.96V60.2H109.08V48.16Z' fill='black' />
                <path d='M121.2 48.16H109.08V60.2H121.2V48.16Z' fill='black' />
                <path d='M133.32 48.16H121.2V60.2H133.32V48.16Z' fill='black' />
                <path
                  d='M157.56 48.16H145.44V60.2H157.56V48.16Z'
                  fill='black'
                />
                <path d='M181.8 48.16H169.68V60.2H181.8V48.16Z' fill='black' />
                <path
                  d='M206.04 48.16H193.92V60.2H206.04V48.16Z'
                  fill='black'
                />
                <path
                  d='M230.28 48.16H218.16V60.2H230.28V48.16Z'
                  fill='black'
                />
                <path d='M254.52 48.16H242.4V60.2H254.52V48.16Z' fill='black' />
                <path
                  d='M266.64 48.16H254.52V60.2H266.64V48.16Z'
                  fill='black'
                />
                <path
                  d='M278.76 48.16H266.64V60.2H278.76V48.16Z'
                  fill='black'
                />
                <path d='M303 48.16H290.88V60.2H303V48.16Z' fill='black' />
                <path d='M12.12 60.2H0V72.24H12.12V60.2Z' fill='black' />
                <path d='M84.84 60.2H72.72V72.24H84.84V60.2Z' fill='black' />
                <path d='M109.08 60.2H96.96V72.24H109.08V60.2Z' fill='black' />
                <path d='M121.2 60.2H109.08V72.24H121.2V60.2Z' fill='black' />
                <path d='M133.32 60.2H121.2V72.24H133.32V60.2Z' fill='black' />
                <path d='M157.56 60.2H145.44V72.24H157.56V60.2Z' fill='black' />
                <path d='M169.68 60.2H157.56V72.24H169.68V60.2Z' fill='black' />
                <path d='M206.04 60.2H193.92V72.24H206.04V60.2Z' fill='black' />
                <path d='M230.28 60.2H218.16V72.24H230.28V60.2Z' fill='black' />
                <path d='M303 60.2H290.88V72.24H303V60.2Z' fill='black' />
                <path d='M12.12 72.24H0V84.28H12.12V72.24Z' fill='black' />
                <path
                  d='M24.24 72.24L12.12 72.24V84.28H24.24V72.24Z'
                  fill='black'
                />
                <path d='M36.36 72.24H24.24V84.28H36.36V72.24Z' fill='black' />
                <path d='M48.48 72.24H36.36V84.28H48.48V72.24Z' fill='black' />
                <path d='M60.6 72.24H48.48V84.28H60.6V72.24Z' fill='black' />
                <path
                  d='M72.72 72.24L60.6 72.24V84.28H72.72L72.72 72.24Z'
                  fill='black'
                />
                <path
                  d='M84.84 72.24H72.72L72.72 84.28H84.84V72.24Z'
                  fill='black'
                />
                <path
                  d='M109.08 72.24H96.96V84.28H109.08V72.24Z'
                  fill='black'
                />
                <path
                  d='M133.32 72.24H121.2V84.28H133.32V72.24Z'
                  fill='black'
                />
                <path
                  d='M157.56 72.24H145.44V84.28H157.56V72.24Z'
                  fill='black'
                />
                <path
                  d='M181.8 72.24L169.68 72.24V84.28H181.8V72.24Z'
                  fill='black'
                />
                <path
                  d='M206.04 72.24H193.92V84.28H206.04V72.24Z'
                  fill='black'
                />
                <path
                  d='M230.28 72.24H218.16V84.28H230.28V72.24Z'
                  fill='black'
                />
                <path
                  d='M242.4 72.24L230.28 72.24V84.28H242.4V72.24Z'
                  fill='black'
                />
                <path
                  d='M254.52 72.24H242.4V84.28H254.52V72.24Z'
                  fill='black'
                />
                <path
                  d='M266.64 72.24H254.52V84.28H266.64V72.24Z'
                  fill='black'
                />
                <path
                  d='M278.76 72.24H266.64V84.28H278.76V72.24Z'
                  fill='black'
                />
                <path
                  d='M290.88 72.24L278.76 72.24V84.28H290.88V72.24Z'
                  fill='black'
                />
                <path d='M303 72.24H290.88V84.28H303V72.24Z' fill='black' />
                <path
                  d='M109.08 84.28H96.96V96.32H109.08V84.28Z'
                  fill='black'
                />
                <path
                  d='M133.32 84.28H121.2V96.32H133.32V84.28Z'
                  fill='black'
                />
                <path
                  d='M169.68 84.28H157.56V96.32H169.68V84.28Z'
                  fill='black'
                />
                <path d='M12.12 96.32H0V108.36H12.12V96.32Z' fill='black' />
                <path d='M24.24 96.32H12.12V108.36H24.24V96.32Z' fill='black' />
                <path d='M36.36 96.32H24.24V108.36H36.36V96.32Z' fill='black' />
                <path d='M60.6 96.32H48.48V108.36H60.6V96.32Z' fill='black' />
                <path d='M84.84 96.32H72.72V108.36H84.84V96.32Z' fill='black' />
                <path
                  d='M109.08 96.32H96.96V108.36H109.08V96.32Z'
                  fill='black'
                />
                <path
                  d='M121.2 96.32H109.08V108.36H121.2V96.32Z'
                  fill='black'
                />
                <path
                  d='M169.68 96.32H157.56V108.36H169.68V96.32Z'
                  fill='black'
                />
                <path
                  d='M206.04 96.32H193.92V108.36H206.04V96.32Z'
                  fill='black'
                />
                <path
                  d='M218.16 96.32H206.04V108.36H218.16V96.32Z'
                  fill='black'
                />
                <path
                  d='M230.28 96.32H218.16V108.36H230.28V96.32Z'
                  fill='black'
                />
                <path
                  d='M242.4 96.32H230.28V108.36H242.4V96.32Z'
                  fill='black'
                />
                <path
                  d='M254.52 96.32H242.4V108.36H254.52V96.32Z'
                  fill='black'
                />
                <path
                  d='M266.64 96.32H254.52V108.36H266.64V96.32Z'
                  fill='black'
                />
                <path d='M303 96.32H290.88V108.36H303V96.32Z' fill='black' />
                <path d='M12.12 108.36H0V120.4H12.12V108.36Z' fill='black' />
                <path
                  d='M24.24 108.36H12.12V120.4H24.24V108.36Z'
                  fill='black'
                />
                <path
                  d='M121.2 108.36H109.08V120.4H121.2V108.36Z'
                  fill='black'
                />
                <path
                  d='M145.44 108.36H133.32V120.4H145.44V108.36Z'
                  fill='black'
                />
                <path
                  d='M157.56 108.36H145.44V120.4H157.56V108.36Z'
                  fill='black'
                />
                <path
                  d='M193.92 108.36H181.8V120.4H193.92V108.36Z'
                  fill='black'
                />
                <path
                  d='M230.28 108.36H218.16V120.4H230.28V108.36Z'
                  fill='black'
                />
                <path
                  d='M242.4 108.36H230.28V120.4H242.4V108.36Z'
                  fill='black'
                />
                <path
                  d='M254.52 108.36H242.4V120.4H254.52V108.36Z'
                  fill='black'
                />
                <path
                  d='M278.76 108.36H266.64V120.4H278.76V108.36Z'
                  fill='black'
                />
                <path
                  d='M290.88 108.36H278.76V120.4H290.88V108.36Z'
                  fill='black'
                />
                <path d='M84.84 120.4H72.72V132.44H84.84V120.4Z' fill='black' />
                <path d='M96.96 120.4H84.84V132.44H96.96V120.4Z' fill='black' />
                <path
                  d='M121.2 120.4H109.08V132.44H121.2V120.4Z'
                  fill='black'
                />
                <path
                  d='M133.32 120.4H121.2V132.44H133.32V120.4Z'
                  fill='black'
                />
                <path
                  d='M157.56 120.4H145.44V132.44H157.56V120.4Z'
                  fill='black'
                />
                <path
                  d='M169.68 120.4H157.56V132.44H169.68V120.4Z'
                  fill='black'
                />
                <path
                  d='M206.04 120.4H193.92V132.44H206.04V120.4Z'
                  fill='black'
                />
                <path
                  d='M254.52 120.4H242.4V132.44H254.52V120.4Z'
                  fill='black'
                />
                <path d='M12.12 132.44H0V144.48H12.12V132.44Z' fill='black' />
                <path d='M60.6 132.44H48.48V144.48H60.6V132.44Z' fill='black' />
                <path
                  d='M133.32 132.44H121.2V144.48H133.32V132.44Z'
                  fill='black'
                />
                <path
                  d='M181.8 132.44H169.68V144.48H181.8V132.44Z'
                  fill='black'
                />
                <path
                  d='M193.92 132.44H181.8V144.48H193.92V132.44Z'
                  fill='black'
                />
                <path
                  d='M218.16 132.44H206.04V144.48H218.16V132.44Z'
                  fill='black'
                />
                <path
                  d='M230.28 132.44H218.16V144.48H230.28V132.44Z'
                  fill='black'
                />
                <path
                  d='M24.24 144.48H12.12V156.52H24.24V144.48Z'
                  fill='black'
                />
                <path
                  d='M36.36 144.48H24.24V156.52H36.36V144.48Z'
                  fill='black'
                />
                <path
                  d='M48.48 144.48H36.36V156.52H48.48V144.48Z'
                  fill='black'
                />
                <path
                  d='M72.72 144.48H60.6V156.52H72.72V144.48Z'
                  fill='black'
                />
                <path
                  d='M84.84 144.48H72.72V156.52H84.84V144.48Z'
                  fill='black'
                />
                <path
                  d='M133.32 144.48H121.2V156.52H133.32V144.48Z'
                  fill='black'
                />
                <path
                  d='M145.44 144.48H133.32V156.52H145.44V144.48Z'
                  fill='black'
                />
                <path
                  d='M157.56 144.48H145.44V156.52H157.56V144.48Z'
                  fill='black'
                />
                <path
                  d='M181.8 144.48H169.68V156.52H181.8V144.48Z'
                  fill='black'
                />
                <path
                  d='M218.16 144.48H206.04V156.52H218.16V144.48Z'
                  fill='black'
                />
                <path
                  d='M242.4 144.48H230.28V156.52H242.4V144.48Z'
                  fill='black'
                />
                <path
                  d='M254.52 144.48H242.4V156.52H254.52V144.48Z'
                  fill='black'
                />
                <path
                  d='M278.76 144.48H266.64V156.52H278.76V144.48Z'
                  fill='black'
                />
                <path d='M303 144.48H290.88V156.52H303V144.48Z' fill='black' />
                <path
                  d='M36.36 156.52H24.24V168.56H36.36V156.52Z'
                  fill='black'
                />
                <path
                  d='M48.48 156.52H36.36V168.56H48.48V156.52Z'
                  fill='black'
                />
                <path d='M60.6 156.52H48.48V168.56H60.6V156.52Z' fill='black' />
                <path
                  d='M96.96 156.52H84.84V168.56H96.96V156.52Z'
                  fill='black'
                />
                <path
                  d='M121.2 156.52H109.08V168.56H121.2V156.52Z'
                  fill='black'
                />
                <path
                  d='M133.32 156.52H121.2V168.56H133.32V156.52Z'
                  fill='black'
                />
                <path
                  d='M206.04 156.52H193.92V168.56H206.04V156.52Z'
                  fill='black'
                />
                <path
                  d='M218.16 156.52H206.04V168.56H218.16V156.52Z'
                  fill='black'
                />
                <path
                  d='M242.4 156.52H230.28V168.56H242.4V156.52Z'
                  fill='black'
                />
                <path d='M303 156.52H290.88V168.56H303V156.52Z' fill='black' />
                <path d='M12.12 168.56H0V180.6H12.12V168.56Z' fill='black' />
                <path
                  d='M84.84 168.56H72.72V180.6H84.84V168.56Z'
                  fill='black'
                />
                <path
                  d='M121.2 168.56H109.08V180.6H121.2V168.56Z'
                  fill='black'
                />
                <path
                  d='M169.68 168.56H157.56V180.6H169.68V168.56Z'
                  fill='black'
                />
                <path
                  d='M181.8 168.56H169.68V180.6H181.8V168.56Z'
                  fill='black'
                />
                <path
                  d='M242.4 168.56H230.28V180.6H242.4V168.56Z'
                  fill='black'
                />
                <path
                  d='M254.52 168.56H242.4V180.6H254.52V168.56Z'
                  fill='black'
                />
                <path
                  d='M266.64 168.56H254.52V180.6H266.64V168.56Z'
                  fill='black'
                />
                <path
                  d='M290.88 168.56H278.76V180.6H290.88V168.56Z'
                  fill='black'
                />
                <path d='M303 168.56H290.88V180.6H303V168.56Z' fill='black' />
                <path d='M48.48 180.6H36.36V192.64H48.48V180.6Z' fill='black' />
                <path
                  d='M121.2 180.6H109.08V192.64H121.2V180.6Z'
                  fill='black'
                />
                <path
                  d='M133.32 180.6L121.2 180.6V192.64H133.32V180.6Z'
                  fill='black'
                />
                <path
                  d='M145.44 180.6H133.32V192.64H145.44V180.6Z'
                  fill='black'
                />
                <path
                  d='M157.56 180.6L145.44 180.6V192.64H157.56V180.6Z'
                  fill='black'
                />
                <path
                  d='M169.68 180.6H157.56V192.64H169.68V180.6Z'
                  fill='black'
                />
                <path
                  d='M181.8 180.6H169.68V192.64H181.8V180.6Z'
                  fill='black'
                />
                <path
                  d='M206.04 180.6H193.92V192.64H206.04V180.6Z'
                  fill='black'
                />
                <path
                  d='M242.4 180.6H230.28V192.64H242.4V180.6Z'
                  fill='black'
                />
                <path
                  d='M254.52 180.6H242.4V192.64H254.52V180.6Z'
                  fill='black'
                />
                <path
                  d='M278.76 180.6H266.64V192.64H278.76V180.6Z'
                  fill='black'
                />
                <path
                  d='M24.24 192.64H12.12V204.68H24.24V192.64Z'
                  fill='black'
                />
                <path
                  d='M48.48 192.64H36.36V204.68H48.48V192.64Z'
                  fill='black'
                />
                <path d='M60.6 192.64H48.48V204.68H60.6V192.64Z' fill='black' />
                <path
                  d='M84.84 192.64H72.72V204.68H84.84V192.64Z'
                  fill='black'
                />
                <path
                  d='M96.96 192.64H84.84V204.68H96.96V192.64Z'
                  fill='black'
                />
                <path
                  d='M109.08 192.64H96.96V204.68H109.08V192.64Z'
                  fill='black'
                />
                <path
                  d='M145.44 192.64H133.32V204.68H145.44V192.64Z'
                  fill='black'
                />
                <path
                  d='M169.68 192.64H157.56V204.68H169.68V192.64Z'
                  fill='black'
                />
                <path
                  d='M193.92 192.64H181.8L181.8 204.68H193.92V192.64Z'
                  fill='black'
                />
                <path
                  d='M206.04 192.64H19Receivelink3.92V204.68H206.04V192.64Z'
                  fill='black'
                />
                <path
                  d='M218.16 192.64H206.04V204.68H218.16V192.64Z'
                  fill='black'
                />
                <path
                  d='M230.28 192.64H218.16V204.68H230.28V192.64Z'
                  fill='black'
                />
                <path
                  d='M242.4 192.64H230.28V204.68H242.4V192.64Z'
                  fill='black'
                />
                <path
                  d='M254.52 192.64H242.4V204.68H254.52V192.64Z'
                  fill='black'
                />
                <path
                  d='M266.64 192.64H254.52V204.68H266.64V192.64Z'
                  fill='black'
                />
                <path
                  d='M278.76 192.64H266.64V204.68H278.76V192.64Z'
                  fill='black'
                />
                <path d='M303 192.64H290.88V204.68H303V192.64Z' fill='black' />
                <path
                  d='M109.08 204.68H96.96V216.72H109.08V204.68Z'
                  fill='black'
                />
                <path
                  d='M121.2 204.68H109.08V216.72H121.2V204.68Z'
                  fill='black'
                />
                <path
                  d='M169.68 204.68H157.56V216.72H169.68V204.68Z'
                  fill='black'
                />
                <path
                  d='M181.8 204.68H169.68V216.72H181.8L181.8 204.68Z'
                  fill='black'
                />
                <path
                  d='M193.92 204.68H181.8L181.8 216.72H193.92V204.68Z'
                  fill='black'
                />
                <path
                  d='M206.04 204.68H193.92V216.72H206.04V204.68Z'
                  fill='black'
                />
                <path
                  d='M254.52 204.68H242.4V216.72H254.52V204.68Z'
                  fill='black'
                />
                <path
                  d='M278.76 204.68H266.64V216.72H278.76V204.68Z'
                  fill='black'
                />
                <path d='M303 204.68H290.88V216.72H303V204.68Z' fill='black' />
                <path d='M12.12 216.72H0V228.76H12.12V216.72Z' fill='black' />
                <path
                  d='M24.24 216.72H12.12V228.76H24.24V216.72Z'
                  fill='black'
                />
                <path
                  d='M36.36 216.72H24.24V228.76H36.36V216.72Z'
                  fill='black'
                />
                <path
                  d='M48.48 216.72H36.36V228.76H48.48V216.72Z'
                  fill='black'
                />
                <path d='M60.6 216.72H48.48V228.76H60.6V216.72Z' fill='black' />
                <path
                  d='M72.72 216.72H60.6V228.76H72.72V216.72Z'
                  fill='black'
                />
                <path
                  d='M84.84 216.72H72.72V228.76H84.84V216.72Z'
                  fill='black'
                />
                <path
                  d='M133.32 216.72H121.2V228.76H133.32V216.72Z'
                  fill='black'
                />
                <path
                  d='M157.56 216.72H145.44V228.76H157.56V216.72Z'
                  fill='black'
                />
                <path
                  d='M181.8 216.72H169.68V228.76H181.8V216.72Z'
                  fill='black'
                />
                <path
                  d='M206.04 216.72H193.92V228.76H206.04V216.72Z'
                  fill='black'
                />
                <path
                  d='M230.28 216.72H218.16V228.76H230.28V216.72Z'
                  fill='black'
                />
                <path
                  d='M254.52 216.72H242.4V228.76H254.52V216.72Z'
                  fill='black'
                />
                <path
                  d='M266.64 216.72H254.52V228.76H266.64V216.72Z'
                  fill='black'
                />
                <path d='M12.12 228.76H0V240.8H12.12V228.76Z' fill='black' />
                <path
                  d='M84.84 228.76H72.72L72.72 240.8H84.84V228.76Z'
                  fill='black'
                />
                <path
                  d='M121.2 228.76H109.08V240.8H121.2V228.76Z'
                  fill='black'
                />
                <path
                  d='M133.32 228.76H121.2V240.8H133.32V228.76Z'
                  fill='black'
                />
                <path
                  d='M145.44 228.76H133.32V240.8H145.44V228.76Z'
                  fill='black'
                />
                <path
                  d='M193.92 228.76H181.8L181.8 240.8H193.92V228.76Z'
                  fill='black'
                />
                <path
                  d='M206.04 228.76H193.92V240.8H206.04V228.76Z'
                  fill='black'
                />
                <path
                  d='M254.52 228.76H242.4V240.8H254.52V228.76Z'
                  fill='black'
                />
                <path
                  d='M290.88 228.76H278.76V240.8H290.88V228.76Z'
                  fill='black'
                />
                <path d='M12.12 240.8H0V252.84H12.12V240.8Z' fill='black' />
                <path d='M36.36 240.8H24.24V252.84H36.36V240.8Z' fill='black' />
                <path d='M48.48 240.8H36.36V252.84H48.48V240.8Z' fill='black' />
                <path d='M60.6 240.8H48.48V252.84H60.6V240.8Z' fill='black' />
                <path d='M84.84 240.8H72.72V252.84H84.84V240.8Z' fill='black' />
                <path
                  d='M109.08 240.8H96.96V252.84H109.08V240.8Z'
                  fill='black'
                />
                <path
                  d='M121.2 240.8H109.08V252.84H121.2V240.8Z'
                  fill='black'
                />
                <path
                  d='M169.68 240.8H157.56V252.84H169.68V240.8Z'
                  fill='black'
                />
                <path
                  d='M181.8 240.8H169.68V252.84H181.8L181.8 240.8Z'
                  fill='black'
                />
                <path
                  d='M206.04 240.8H193.92V252.84H206.04V240.8Z'
                  fill='black'
                />
                <path
                  d='M218.16 240.8H206.04V252.84H218.16V240.8Z'
                  fill='black'
                />
                <path
                  d='M230.28 240.8H218.16V252.84H230.28V240.8Z'
                  fill='black'
                />
                <path
                  d='M242.4 240.8H230.28V252.84H242.4V240.8Z'
                  fill='black'
                />
                <path
                  d='M254.52 240.8H242.4V252.84H254.52V240.8Z'
                  fill='black'
                />
                <path
                  d='M278.76 240.8H266.64V252.84H278.76V240.8Z'
                  fill='black'
                />
                <path
                  d='M290.88 240.8H278.76V252.84H290.88V240.8Z'
                  fill='black'
                />
                <path d='M12.12 252.84H0V264.88H12.12V252.84Z' fill='black' />
                <path
                  d='M36.36 252.84H24.24V264.88H36.36V252.84Z'
                  fill='black'
                />
                <path
                  d='M48.48 252.84H36.36V264.88H48.48V252.84Z'
                  fill='black'
                />
                <path d='M60.6 252.84H48.48V264.88H60.6V252.84Z' fill='black' />
                <path
                  d='M84.84 252.84H72.72V264.88H84.84V252.84Z'
                  fill='black'
                />
                <path
                  d='M121.2 252.84H109.08V264.88H121.2V252.84Z'
                  fill='black'
                />
                <path
                  d='M133.32 252.84H121.2V264.88H133.32V252.84Z'
                  fill='black'
                />
                <path
                  d='M145.44 252.84H133.32V264.88H145.44V252.84Z'
                  fill='black'
                />
                <path
                  d='M181.8 252.84H169.68V264.88H181.8V252.84Z'
                  fill='black'
                />
                <path
                  d='M193.92 252.84H181.8V264.88H193.92V252.84Z'
                  fill='black'
                />
                <path
                  d='M278.76 252.84H266.64V264.88H278.76V252.84Z'
                  fill='black'
                />
                <path d='M303 252.84H290.88V264.88H303V252.84Z' fill='black' />
                <path d='M12.12 264.88H0V276.92H12.12V264.88Z' fill='black' />
                <path
                  d='M36.36 264.88H24.24V276.92H36.36V264.88Z'
                  fill='black'
                />
                <path
                  d='M48.48 264.88H36.36V276.92H48.48V264.88Z'
                  fill='black'
                />
                <path d='M60.6 264.88H48.48V276.92H60.6V264.88Z' fill='black' />
                <path
                  d='M84.84 264.88H72.72V276.92H84.84V264.88Z'
                  fill='black'
                />
                <path
                  d='M109.08 264.88H96.96V276.92H109.08V264.88Z'
                  fill='black'
                />
                <path
                  d='M121.2 264.88H109.08V276.92H121.2V264.88Z'
                  fill='black'
                />
                <path
                  d='M145.44 264.88H133.32V276.92H145.44V264.88Z'
                  fill='black'
                />
                <path
                  d='M181.8 264.88H169.68V276.92H181.8V264.88Z'
                  fill='black'
                />
                <path
                  d='M193.92 264.88H181.8V276.92H193.92V264.88Z'
                  fill='black'
                />
                <path
                  d='M206.04 264.88H193.92V276.92H206.04V264.88Z'
                  fill='black'
                />
                <path
                  d='M218.16 264.88H206.04V276.92H218.16V264.88Z'
                  fill='black'
                />
                <path
                  d='M278.76 264.88H266.64V276.92H278.76V264.88Z'
                  fill='black'
                />
                <path
                  d='M290.88 264.88H278.76V276.92H290.88V264.88Z'
                  fill='black'
                />
                <path d='M12.12 276.92H0V288.96H12.12V276.92Z' fill='black' />
                <path
                  d='M84.84 276.92H72.72V288.96H84.84V276.92Z'
                  fill='black'
                />
                <path
                  d='M109.08 276.92H96.96V288.96H109.08V276.92Z'
                  fill='black'
                />
                <path
                  d='M121.2 276.92H109.08V288.96H121.2V276.92Z'
                  fill='black'
                />
                <path
                  d='M145.44 276.92H133.32V288.96H145.44V276.92Z'
                  fill='black'
                />
                <path
                  d='M169.68 276.92H157.56V288.96H169.68V276.92Z'
                  fill='black'
                />
                <path
                  d='M181.8 276.92H169.68V288.96H181.8V276.92Z'
                  fill='black'
                />
                <path
                  d='M206.04 276.92H193.92V288.96H206.04V276.92Z'
                  fill='black'
                />
                <path
                  d='M218.16 276.92H206.04V288.96H218.16V276.92Z'
                  fill='black'
                />
                <path
                  d='M242.4 276.92H230.28V288.96H242.4V276.92Z'
                  fill='black'
                />
                <path
                  d='M254.52 276.92H242.4V288.96H254.52V276.92Z'
                  fill='black'
                />
                <path
                  d='M266.64 276.92H254.52V288.96H266.64V276.92Z'
                  fill='black'
                />
                <path
                  d='M278.76 276.92H266.64V288.96H278.76V276.92Z'
                  fill='black'
                />
                <path
                  d='M290.88 276.92H278.76V288.96H290.88V276.92Z'
                  fill='black'
                />
                <path d='M12.12 288.96H0V301H12.12V288.96Z' fill='black' />
                <path d='M24.24 288.96H12.12V301H24.24V288.96Z' fill='black' />
                <path d='M36.36 288.96H24.24V301H36.36V288.96Z' fill='black' />
                <path d='M48.48 288.96H36.36V301H48.48V288.96Z' fill='black' />
                <path d='M60.6 288.96H48.48V301H60.6V288.96Z' fill='black' />
                <path
                  d='M72.72 288.96H60.6V301H72.72L72.72 288.96Z'
                  fill='black'
                />
                <path
                  d='M84.84 288.96H72.72L72.72 301H84.84V288.96Z'
                  fill='black'
                />
                <path
                  d='M109.08 288.96H96.96V301H109.08V288.96Z'
                  fill='black'
                />
                <path
                  d='M133.32 288.96H121.2V301H133.32V288.96Z'
                  fill='black'
                />
                <path
                  d='M145.44 288.96H133.32V301H145.44V288.96Z'
                  fill='black'
                />
                <path
                  d='M157.56 288.96H145.44V301H157.56V288.96Z'
                  fill='black'
                />
                <path d='M181.8 288.96H169.68V301H181.8V288.96Z' fill='black' />
                <path
                  d='M193.92 288.96H181.8V301H193.92V288.96Z'
                  fill='black'
                />
                <path
                  d='M230.28 288.96H218.16V301H230.28V288.96Z'
                  fill='black'
                />
                <path
                  d='M254.52 288.96H242.4V301H254.52V288.96Z'
                  fill='black'
                />
                <path
                  d='M266.64 288.96H254.52V301H266.64V288.96Z'
                  fill='black'
                />
                <path
                  d='M278.76 288.96H266.64V301H278.76V288.96Z'
                  fill='black'
                />
                <path
                  d='M290.88 288.96H278.76V301H290.88V288.96Z'
                  fill='black'
                />
                <path d='M303 288.96H290.88V301H303V288.96Z' fill='black' />
              </svg>
            </div>
            <div className='copy-now'>
              <div className='copy-text'>oneDNGN289snjw9n9sa9jnabfncxxsaso</div>
              <div className='svg-in-copy'>
                <svg
                  width='13'
                  height='15'
                  viewBox='0 0 13 15'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M9.57895 0H1.36842C0.615789 0 0 0.613636 0 1.36364V10.9091H1.36842V1.36364H9.57895V0ZM11.6316 2.72727H4.10526C3.35263 2.72727 2.73684 3.34091 2.73684 4.09091V13.6364C2.73684 14.3864 3.35263 15 4.10526 15H11.6316C12.3842 15 13 14.3864 13 13.6364V4.09091C13 3.34091 12.3842 2.72727 11.6316 2.72727ZM11.6316 13.6364H4.10526V4.09091H11.6316V13.6364Z'
                    fill='white'
                  />
                </svg>
              </div>
            </div>
            <br />
            <div className='share-btn'>
              <button>Share Address</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coinlink;
