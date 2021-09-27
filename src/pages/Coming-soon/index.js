import React, { useContext, useEffect, useState } from 'react'; // useEffect,
import './style.css';
import { Link } from 'react-router-dom';
import Vector from '../../assets/Vector.svg';

const Comingsoon = () => {
  return (
    <div>
      <div className='whole-welcome'>
        <div className='inside-maner'>
          <div className='real-content'>
            <div className='comingna'>
              <div className='textcome'>
                Coming
                <br /> Soon
              </div>
              <div className='coming-btn'>
                <Link to='/convertdft'>
                  <button>Proceed</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comingsoon;
