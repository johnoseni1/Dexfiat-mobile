import React,{ useContext, useEffect, useState } from 'react'; // useEffect,
import './style.css';
import Popup from '../../Popup';
import svg1 from '../../assets/svg1.svg';
import caution from '../../assets/caution.svg';
import Polygon1 from '../../assets/Polygon1.svg';
import Polygon2 from '../../assets/Polygon2.svg';
// import Vector from '../../assets/Vector.svg';

const CreateWallet = () => {

    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
      setIsOpen(!isOpen);
    }
    
    return(
        <div>
          <div className="whole-welcome">
                <div>
    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
    {isOpen && <Popup
      content={<>
        <b>Back up your wallet now</b>
        <p style={{color: "#494949", fontSize: "16px"}}>You will be given 12 words/phrases Write down or copy these words in the right other keep them somewhere safe</p>
        <img src={caution} alt="caution" /><br />
        <p style={{fontSize: "17px"}}>Ensure that you are alone and not 
                one or visual device can see your device</p><br />
        <div style={{display : "flex"}} className="checkman">
            <input type="checkbox" />
        <p style={{fontSize: "12px", position: "relative", bottom: "10px",
         textAlign: "left", width: "250px", left: "10px"}}>I understand that if I lose my recovery 
                    phrases, I will not be able to access my wallet</p>
        </div>
       <a href="/createrecoveryphrase">
        <button style={{background : "#C4C4C4", color: "rgba(0, 0, 0, 0.32)",
         padding : "8px 70px", fontSize: "25px", borderRadius: "5px", borderTopColor: "4px solid #549E20"
         }}>Continue</button></a>
      </>}
      handleClose={togglePopup}
    />}
                    <div className="creater">
                        <div className="slider">
                            <img src={svg1} alt="svgs" /><br /><br />
                            <img src={Polygon2} alt="poly1" />
                            <span>Slide</span>
                            <img src={Polygon1} alt="poly2" />
                        </div><br />
                        <div className="createwallet-btn">
                            <button  onClick={togglePopup}>Create a Wallet</button><br /><br />
                            <span>Already have a wallet? <a href="/importwallet">import</a></span>
                        </div>
                    </div>
                </div>
          </div>
        </div>

        
    )
}

export default CreateWallet