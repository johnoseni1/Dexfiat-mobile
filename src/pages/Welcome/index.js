import React,{ useContext, useEffect, useState } from 'react'; // useEffect,
import './style.css';
import Vector from '../../assets/Vector.svg';

const Welcome = () => {

        
    
    return(
        <div>
            <div className="whole-welcome">
                <div className="inside-man">
                    <div className="real-content">
                    <div className="upguy">
                    <img src={Vector} alt="Logo" />
                    <span>Dexfiat</span>
                    </div>
                </div><br /><br/><br />
                <div className="welcome-btn">
                           <a href="/createwallet">
                               <button>
                                Get started
                            </button>
                           </a>
                </div>
                </div>
            </div> 
        </div>

        
    )
}

export default Welcome;