import React,{ useContext, useEffect, useState } from 'react'; // useEffect,
import './style.css';
import {BiUserCircle} from 'react-icons/bi';
import mnemonic from '../../assets/mnemonic.svg';
import leftarrow from '../../assets/leftarrow.svg';
import boy from '../../assets/3rd-boy.png';
// import Vector from '../../assets/Vector.svg';

const Wallets = () => {

        
    
    return(
        <div>
          <div className="whole-welcome">
            <a href="/fiatbalance" style={{position : "relative", left:"870px", bottom: "250px", zIndex: "9999", fontSize: "12px", color: "#fff", transform: "rotate(270deg)"}}>Fiat Balance</a>
               <div className="creater">
                    <div style={{display : "flex",marginTop : "30px",marginLeft : "20px"}}>
                        <div>
                        <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.875 17.8751H11.6025L17.5013 10.7901C17.7771 10.4582 17.9098 10.0304 17.8702 9.60071C17.8305 9.17101 17.6219 8.77466 17.29 8.49883C16.9581 8.22301 16.5303 8.09031 16.1006 8.12992C15.6709 8.16954 15.2746 8.37823 14.9987 8.71008L6.87375 18.4601C6.81909 18.5376 6.7702 18.6191 6.7275 18.7038C6.7275 18.7851 6.7275 18.8338 6.61375 18.9151C6.54009 19.1014 6.50153 19.2997 6.5 19.5001C6.50153 19.7004 6.54009 19.8988 6.61375 20.0851C6.61375 20.1663 6.61375 20.2151 6.7275 20.2963C6.7702 20.3811 6.81909 20.4625 6.87375 20.5401L14.9987 30.2901C15.1515 30.4735 15.3429 30.621 15.5591 30.7221C15.7754 30.8233 16.0113 30.8755 16.25 30.8751C16.6297 30.8758 16.9976 30.7436 17.29 30.5013C17.4545 30.3649 17.5906 30.1974 17.6903 30.0083C17.79 29.8192 17.8514 29.6124 17.871 29.3995C17.8906 29.1867 17.8681 28.9721 17.8046 28.768C17.7412 28.5639 17.6381 28.3743 17.5013 28.2101L11.6025 21.1251H30.875C31.306 21.1251 31.7193 20.9539 32.024 20.6491C32.3288 20.3444 32.5 19.9311 32.5 19.5001C32.5 19.0691 32.3288 18.6558 32.024 18.351C31.7193 18.0463 31.306 17.8751 30.875 17.8751Z" fill="#FFD301"/>
</svg>
                        </div>
                        <div style={{fontSize : "25px",marginLeft : "20px"}}>
                            Wallets and accounts
                            </div>
                            <div style={{marginLeft : "60px", marginTop : "5px"}}>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 6V0H6V6H0V9H6V15H9V9H15V6H9Z" fill="black"/>
</svg>

                            </div>
                    </div>

                   
                 
                
                    
                    <div style={{background: "rgba(0, 149, 6, 0.06)", marginTop : "40px", borderRadius : "9px", paddingTop : "10px", paddingBottom : "10px", paddingLeft : "90px"}}>
                         Multiwallet 1
                    </div>
                    <div className="line-btw">

                    </div>
                    <div style={{background: "rgba(0, 149, 6, 0.06)", borderRadius : "9px", paddingTop : "10px", paddingBottom : "10px", paddingLeft : "90px"}}>
                    Csmart wallet
                    </div>
                    <div className="line-btw">

                    </div>
               </div>
          </div>
        </div>

        
    )
}

export default Wallets