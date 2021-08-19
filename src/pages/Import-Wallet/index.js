import React,{ useContext, useEffect, useState } from 'react'; // useEffect,
import './style.css';
import mnemonic from '../../assets/mnemonic.svg';
import leftarrow from '../../assets/leftarrow.svg';
// import Vector from '../../assets/Vector.svg';

const Mnemonic = () => {

        
    
    return(
        <div>
          <div className="whole-welcome">
                <div>
                    <div className="creater">
                        <div className="helper">
                            <div>
                            <img src={leftarrow} className="arroeleft" alt="back" />
                            <span>Scan Privater key bar code</span>
                            </div>
                            <img src={mnemonic} className="mnemonic" alt="svgs" /><br /><br />
                            {/* <img src={Polygon2} alt="poly1" /> */}
                            {/* <span>Slide</span> */}
                            {/* <img src={Polygon1} alt="poly2" /> */}
                        </div><br />
                        <div className="little-text">
                        <p>
                            Enter your Mnemonic
                            <br />
                        <span className="textty">
                            Please enter your backup phrase
                        </span>
                        </p>
                        </div>
                        <div className="input-phrase">
                            <input type="text" /><br /><br />
                            <span>Paste Clipboard</span>
                        </div>
                        <div className="createwallet-btner">
                            <a href="/index"><button>Import wallet</button></a><br /><br />
                            {/* <span>Already have a wallet? <a href="/importwallet">import</a></span> */}
                        </div>
                    </div>
                </div>
          </div>
        </div>

        
    )
}

export default Mnemonic