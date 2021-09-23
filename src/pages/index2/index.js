import React,{ useContext, useEffect, useState } from 'react'; // useEffect,
import './style.css';
import {BiUserCircle} from 'react-icons/bi';
import Vector from '../../assets/Vector.svg';
import boy from '../../assets/3rd-boy.png';
const Index2 = () => {

        
    
    return(
        <div>
        <div className="whole-welcome">
          <a href="/index" style={{position : "relative", left:"470px",  bottom: "220px", zIndex: "9999", fontSize: "12px", color: "#fff", transform: "rotate(270deg)",}}>Crypto Balance</a>
              <div className="createryer">
                 <div className="">
                    <div className="content">
                        <div className="manny">
                        <div style={{marginLeft: "30px"}}>
                        <svg width="19" height="28" viewBox="0 0 19 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.000431981 3.25408C-0.00854612 3.80932 0.122553 4.35787 0.381618 4.84904C0.640682 5.34022 1.01936 5.75819 1.48266 6.06433L11.1879 12.4763C11.4466 12.65 11.6584 12.8849 11.8042 13.1603C11.95 13.4357 12.0255 13.7428 12.0237 14.0544C12.022 14.366 11.9432 14.6723 11.7944 14.9461C11.6455 15.2198 11.4312 15.4525 11.1706 15.6233L1.65889 21.7599C1.19112 22.0615 0.807108 22.4763 0.542486 22.966C0.277864 23.4556 0.141206 24.0041 0.145193 24.5607V24.718C0.170369 27.6447 3.706 29.0955 5.77985 27.0311L17.4724 15.3872C17.6479 15.2127 17.7872 15.0051 17.8822 14.7765C17.9773 14.5479 18.0262 14.3028 18.0262 14.0553C18.0262 13.8077 17.9773 13.5626 17.8822 13.334C17.7872 13.1055 17.6479 12.8979 17.4724 12.7233L5.63037 0.96623C3.56595 -1.0856 0.0492101 0.343129 0.000431981 3.25408Z" fill="#009506"/>
<path d="M2.53868 9.90527H1.90141C1.25661 9.90527 0.733887 10.428 0.733887 11.0728V16.934C0.733887 17.5789 1.25661 18.1016 1.90141 18.1016H2.53868C3.18348 18.1016 3.7062 17.5789 3.7062 16.934V11.0728C3.7062 10.428 3.18348 9.90527 2.53868 9.90527Z" fill="#009506"/>
</svg>

                          <span style={{color: "#009506", fontSize: "30px"}}>Dexfiat</span>
                        </div>
                        <a href="/invest">
                        <div style={{marginLeft: "50px"}}>
                          <button style={{color: "#009506", fontSize: "15px", backgroundColor: "#ceebcf", border :"none", padding:"15px 18px", borderRadius: "5px"}}>
<span style={{ position: "relative", bottom: "1px"}}><b>Invest</b></span></button>
                        </div>
                        </a>
                        <div style={{marginLeft: "10px", marginRight : "10px", width: "130px"}}>
                          <a href="/convertdft">
                          <button style={{color: "#009506", fontSize: "11px", backgroundColor: "#DAAB03", opacity : "0.6" ,border :"none", padding:"7px 11px", borderRadius: "5px"}}>

<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.6443 6.56905L17.767 5.67749H16.3333H1.16667C0.999365 5.67749 0.832719 5.60738 0.705204 5.47238L0.344436 5.81313L0.705203 5.47238C0.576774 5.3364 0.5 5.14619 0.5 4.94228C0.5 4.73837 0.576774 4.54815 0.705203 4.41218C0.832719 4.27717 0.999365 4.20707 1.16667 4.20707H16.4267H17.8303L16.7428 3.31967L14.913 1.82663C14.9127 1.82641 14.9125 1.82619 14.9122 1.82597C14.7715 1.70961 14.6738 1.53299 14.65 1.33108C14.6262 1.12861 14.6801 0.92767 14.7937 0.773188L14.3962 0.480943L14.7937 0.773187C14.9066 0.619615 15.0664 0.527229 15.2335 0.505195C15.4001 0.48323 15.5719 0.531245 15.712 0.646669L15.7123 0.646925L20.2156 4.35255L20.2156 4.35257L20.2191 4.3554C20.3012 4.4217 20.3701 4.5091 20.4183 4.61234L20.8713 4.40063L20.4183 4.61234C20.4666 4.71565 20.4923 4.83077 20.4923 4.94845C20.4923 5.06614 20.4666 5.18126 20.4183 5.28457C20.3703 5.38721 20.302 5.47421 20.2205 5.54037C20.2201 5.54075 20.2196 5.54113 20.2191 5.54151L15.5557 9.24451C15.4402 9.33629 15.3036 9.38311 15.1667 9.38311C15.0681 9.38311 14.9697 9.35889 14.8788 9.31081C14.7879 9.26264 14.706 9.19123 14.6413 9.10001C14.5866 9.0228 14.5459 8.93348 14.5225 8.83687C14.4991 8.74023 14.4939 8.63926 14.5072 8.54008C14.5206 8.44091 14.5522 8.34664 14.5992 8.26263C14.6461 8.17866 14.7072 8.10721 14.7776 8.0513L16.6443 6.56905ZM4.35574 14.4324L3.23295 15.324H4.66667H19.8333C20.0006 15.324 20.1673 15.3941 20.2948 15.5291L20.6583 15.1857L20.2948 15.5291C20.4232 15.665 20.5 15.8553 20.5 16.0592C20.5 16.2631 20.4232 16.4533 20.2948 16.5893C20.1673 16.7243 20.0006 16.7944 19.8333 16.7944H4.57333H3.1697L4.25723 17.6818L6.08471 19.1729C6.08531 19.1734 6.08591 19.1739 6.0865 19.1744C6.22538 19.2911 6.32139 19.4669 6.34437 19.6673C6.36747 19.8687 6.31358 20.0684 6.20059 20.222L6.19893 20.2242C6.1344 20.313 6.05338 20.3824 5.9637 20.4293C5.87465 20.4758 5.77841 20.4995 5.68197 20.5C5.54265 20.4992 5.40386 20.45 5.28743 20.3543L0.784367 16.6489L0.78438 16.6489L0.780874 16.646C0.69881 16.5797 0.629945 16.4923 0.581696 16.3891C0.533412 16.2858 0.507711 16.1707 0.507711 16.053C0.507711 15.9353 0.533413 15.8202 0.581695 15.7169C0.62967 15.6142 0.698027 15.5272 0.779478 15.4611L5.44426 11.7569C5.58558 11.6447 5.75764 11.6 5.92355 11.6251C6.09005 11.6503 6.24833 11.7457 6.35866 11.9014C6.46964 12.0581 6.51995 12.2598 6.49276 12.4614C6.4656 12.6627 6.36488 12.837 6.22241 12.9501L4.35574 14.4324Z" fill="white"/>
<path d="M16.6443 6.56905L17.767 5.67749H16.3333H1.16667C0.999365 5.67749 0.832719 5.60738 0.705204 5.47238L0.344436 5.81313L0.705203 5.47238C0.576774 5.3364 0.5 5.14619 0.5 4.94228C0.5 4.73837 0.576774 4.54815 0.705203 4.41218C0.832719 4.27717 0.999365 4.20707 1.16667 4.20707H16.4267H17.8303L16.7428 3.31967L14.913 1.82663C14.9127 1.82641 14.9125 1.82619 14.9122 1.82597C14.7715 1.70961 14.6738 1.53299 14.65 1.33108C14.6262 1.12861 14.6801 0.92767 14.7937 0.773188L14.3962 0.480943L14.7937 0.773187C14.9066 0.619615 15.0664 0.527229 15.2335 0.505195C15.4001 0.48323 15.5719 0.531245 15.712 0.646669L15.7123 0.646925L20.2156 4.35255L20.2156 4.35257L20.2191 4.3554C20.3012 4.4217 20.3701 4.5091 20.4183 4.61234L20.8713 4.40063L20.4183 4.61234C20.4666 4.71565 20.4923 4.83077 20.4923 4.94845C20.4923 5.06614 20.4666 5.18126 20.4183 5.28457C20.3703 5.38721 20.302 5.47421 20.2205 5.54037C20.2201 5.54075 20.2196 5.54113 20.2191 5.54151L15.5557 9.24451C15.4402 9.33629 15.3036 9.38311 15.1667 9.38311C15.0681 9.38311 14.9697 9.35889 14.8788 9.31081C14.7879 9.26264 14.706 9.19123 14.6413 9.10001C14.5866 9.0228 14.5459 8.93348 14.5225 8.83687C14.4991 8.74023 14.4939 8.63926 14.5072 8.54008C14.5206 8.44091 14.5522 8.34664 14.5992 8.26263C14.6461 8.17866 14.7072 8.10721 14.7776 8.0513L16.6443 6.56905ZM4.35574 14.4324L3.23295 15.324H4.66667H19.8333C20.0006 15.324 20.1673 15.3941 20.2948 15.5291L20.6583 15.1857L20.2948 15.5291C20.4232 15.665 20.5 15.8553 20.5 16.0592C20.5 16.2631 20.4232 16.4533 20.2948 16.5893C20.1673 16.7243 20.0006 16.7944 19.8333 16.7944H4.57333H3.1697L4.25723 17.6818L6.08471 19.1729C6.08531 19.1734 6.08591 19.1739 6.0865 19.1744C6.22538 19.2911 6.32139 19.4669 6.34437 19.6673C6.36747 19.8687 6.31358 20.0684 6.20059 20.222L6.19893 20.2242C6.1344 20.313 6.05338 20.3824 5.9637 20.4293C5.87465 20.4758 5.77841 20.4995 5.68197 20.5C5.54265 20.4992 5.40386 20.45 5.28743 20.3543L0.784367 16.6489L0.78438 16.6489L0.780874 16.646C0.69881 16.5797 0.629945 16.4923 0.581696 16.3891C0.533412 16.2858 0.507711 16.1707 0.507711 16.053C0.507711 15.9353 0.533413 15.8202 0.581695 15.7169C0.62967 15.6142 0.698027 15.5272 0.779478 15.4611L5.44426 11.7569C5.58558 11.6447 5.75764 11.6 5.92355 11.6251C6.09005 11.6503 6.24833 11.7457 6.35866 11.9014C6.46964 12.0581 6.51995 12.2598 6.49276 12.4614C6.4656 12.6627 6.36488 12.837 6.22241 12.9501L4.35574 14.4324Z" stroke="#DAAB03"/>
<path d="M16.6443 6.56905L17.767 5.67749H16.3333H1.16667C0.999365 5.67749 0.832719 5.60738 0.705204 5.47238L0.344436 5.81313L0.705203 5.47238C0.576774 5.3364 0.5 5.14619 0.5 4.94228C0.5 4.73837 0.576774 4.54815 0.705203 4.41218C0.832719 4.27717 0.999365 4.20707 1.16667 4.20707H16.4267H17.8303L16.7428 3.31967L14.913 1.82663C14.9127 1.82641 14.9125 1.82619 14.9122 1.82597C14.7715 1.70961 14.6738 1.53299 14.65 1.33108C14.6262 1.12861 14.6801 0.92767 14.7937 0.773188L14.3962 0.480943L14.7937 0.773187C14.9066 0.619615 15.0664 0.527229 15.2335 0.505195C15.4001 0.48323 15.5719 0.531245 15.712 0.646669L15.7123 0.646925L20.2156 4.35255L20.2156 4.35257L20.2191 4.3554C20.3012 4.4217 20.3701 4.5091 20.4183 4.61234L20.8713 4.40063L20.4183 4.61234C20.4666 4.71565 20.4923 4.83077 20.4923 4.94845C20.4923 5.06614 20.4666 5.18126 20.4183 5.28457C20.3703 5.38721 20.302 5.47421 20.2205 5.54037C20.2201 5.54075 20.2196 5.54113 20.2191 5.54151L15.5557 9.24451C15.4402 9.33629 15.3036 9.38311 15.1667 9.38311C15.0681 9.38311 14.9697 9.35889 14.8788 9.31081C14.7879 9.26264 14.706 9.19123 14.6413 9.10001C14.5866 9.0228 14.5459 8.93348 14.5225 8.83687C14.4991 8.74023 14.4939 8.63926 14.5072 8.54008C14.5206 8.44091 14.5522 8.34664 14.5992 8.26263C14.6461 8.17866 14.7072 8.10721 14.7776 8.0513L16.6443 6.56905ZM4.35574 14.4324L3.23295 15.324H4.66667H19.8333C20.0006 15.324 20.1673 15.3941 20.2948 15.5291L20.6583 15.1857L20.2948 15.5291C20.4232 15.665 20.5 15.8553 20.5 16.0592C20.5 16.2631 20.4232 16.4533 20.2948 16.5893C20.1673 16.7243 20.0006 16.7944 19.8333 16.7944H4.57333H3.1697L4.25723 17.6818L6.08471 19.1729C6.08531 19.1734 6.08591 19.1739 6.0865 19.1744C6.22538 19.2911 6.32139 19.4669 6.34437 19.6673C6.36747 19.8687 6.31358 20.0684 6.20059 20.222L6.19893 20.2242C6.1344 20.313 6.05338 20.3824 5.9637 20.4293C5.87465 20.4758 5.77841 20.4995 5.68197 20.5C5.54265 20.4992 5.40386 20.45 5.28743 20.3543L0.784367 16.6489L0.78438 16.6489L0.780874 16.646C0.69881 16.5797 0.629945 16.4923 0.581696 16.3891C0.533412 16.2858 0.507711 16.1707 0.507711 16.053C0.507711 15.9353 0.533413 15.8202 0.581695 15.7169C0.62967 15.6142 0.698027 15.5272 0.779478 15.4611L5.44426 11.7569C5.58558 11.6447 5.75764 11.6 5.92355 11.6251C6.09005 11.6503 6.24833 11.7457 6.35866 11.9014C6.46964 12.0581 6.51995 12.2598 6.49276 12.4614C6.4656 12.6627 6.36488 12.837 6.22241 12.9501L4.35574 14.4324Z" stroke="url(#paint0_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="10.5" y1="7.14" x2="10.5" y2="21" gradientUnits="userSpaceOnUse">
<stop stop-color="#009706"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
</defs>
</svg><span style={{position: "relative", bottom : "3px", left: "3px", }}>Convert
DFT to FIAT</span></button></a>
                        </div> 
                        </div>
                      <div style={{display: "flex", overflow : "hidden"}}>
                        <a href="/index">  <div className="first-na">

                          </div></a>
                        <div className="sec-card">
                      
        <div className="textty-man">
          <span>Total Balance </span><br />
          <span style={{fontSize: "30px", fontWeight:"bold", }}>200,000 DNGN</span><br />
          <span style={{fontSize : "20px", }}>N200,000</span><br />
        </div><br /><br />
        <div style={{marginTop: "10px"}} className="buttoner-card">
          <a href="/convertdft"><button style={{width : "130px"}}>Fund wallet/ Sell off</button></a>
          <a href="/dndsend"><button style={{maxWidth : "70px"}}>Send<br />DNGN</button></a>
          <a href="/receivefiat"><button style={{width : "100px"}}>Receive<br />DNGN</button></a>
        </div>
        <div style={{position : "relative", left: "110px", top: "30px", display: "flex" }}>
       <div>
       <svg width="13" height="5" viewBox="0 0 13 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="13" height="5" rx="2.5" transform="matrix(1 0 0 -1 0 5)" fill="#DAAB03"/>
</svg>
       </div>
        <div>
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="8" height="5" rx="2.5" transform="matrix(1 0 0 -1 0 5)" fill="#C4C4C4"/>
</svg>
        </div>

        </div>
        
                      </div>
                    <div>
                        
                    </div>
                  </div>
                  </div>

                    <div className="sec-info">
                        <span style={{position: "relative", top: "10px"}}>Transaction History</span>
                    </div>
                    <div>
                    <div className="">
                    <div className="line-function">
                      <div className="">
                      <div className="lines">
                      <div style={{marginLeft: "45px"}}>
                      <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.53853e-06 22.7813L1.00375e-06 16.6641C9.52828e-07 16.0816 0.472184 15.6094 1.05469 15.6094C1.63719 15.6094 2.10938 16.0816 2.10938 16.6641L2.10938 22.7813C2.10938 23.9444 3.05564 24.8906 4.21875 24.8906L22.7812 24.8906C23.9444 24.8906 24.8906 23.9444 24.8906 22.7812L24.8906 11.3906C24.8906 10.2275 23.9444 9.28125 22.7812 9.28125L17.7187 9.28125C17.1362 9.28125 16.6641 8.80907 16.6641 8.22656C16.6641 7.64406 17.1362 7.17187 17.7187 7.17187L22.7812 7.17187C25.1075 7.17187 27 9.06441 27 11.3906L27 22.7812C27 25.1075 25.1075 27 22.7812 27L4.21875 27C1.89253 27 1.7419e-06 25.1075 1.53853e-06 22.7813ZM1.05469 12.4453C1.63719 12.4453 2.10938 11.9731 2.10938 11.3906C2.10938 10.2275 3.05564 9.28125 4.21875 9.28125L9.28125 9.28125C9.86375 9.28125 10.3359 8.80907 10.3359 8.22656C10.3359 7.64406 9.86375 7.17187 9.28125 7.17187L4.21875 7.17188C1.89253 7.17188 3.39369e-07 9.06441 5.42734e-07 11.3906C5.93658e-07 11.9731 0.472184 12.4453 1.05469 12.4453ZM4.06055 17.1387C4.06055 17.7212 4.53273 18.1934 5.11524 18.1934C5.69774 18.1934 6.16992 17.7212 6.16992 17.1387C6.16992 16.5562 5.69774 16.084 5.11524 16.084C4.53273 16.084 4.06055 16.5562 4.06055 17.1387ZM22.9395 17.1387C22.9395 16.5562 22.4673 16.084 21.8848 16.084C21.3023 16.084 20.8301 16.5562 20.8301 17.1387C20.8301 17.7212 21.3023 18.1934 21.8848 18.1934C22.4673 18.1934 22.9395 17.7212 22.9395 17.1387ZM10.4972 4.59981L12.4453 2.67469L12.4453 12.4453C12.4453 13.0278 12.9175 13.5 13.5 13.5C14.0825 13.5 14.5547 13.0278 14.5547 12.4453L14.5547 2.77894L16.3973 4.59981C16.8117 5.00924 17.4794 5.00523 17.8889 4.59095C18.2983 4.17661 18.2943 3.50884 17.88 3.09941L15.6868 0.932132C15.0885 0.330958 14.2934 -7.96501e-07 13.4473 -7.22531e-07C12.6011 -6.48561e-07 11.8061 0.330959 11.2077 0.932132L9.01452 3.09941C8.60024 3.50884 8.59623 4.17661 9.00566 4.59095C9.41514 5.00528 10.0829 5.00929 10.4972 4.59981ZM10.5905 13.6152C10.4139 13.5015 10.2161 13.4471 10.0205 13.4472C9.67391 13.4472 9.3344 13.6179 9.1328 13.9309C8.50542 14.9052 8.17383 16.0166 8.17383 17.1451C8.17383 20.2855 10.5632 22.8404 13.5 22.8404C16.4368 22.8404 18.8262 20.2855 18.8262 17.1451C18.8262 15.9372 18.5204 14.8544 17.9174 13.927C17.5999 13.4387 16.9466 13.3002 16.4583 13.6178C15.97 13.9353 15.8315 14.5885 16.149 15.0769C16.5257 15.6564 16.7168 16.3521 16.7168 17.1451C16.7168 19.1224 15.2738 20.731 13.5 20.731C11.7262 20.731 10.2832 19.1224 10.2832 17.1451C10.2832 16.4225 10.4986 15.706 10.9063 15.073C11.2216 14.5832 11.0803 13.9306 10.5905 13.6152Z" fill="#DAAB02"/>
</svg>

                      </div>
                      <div style={{display : "flex", flexDirection: "column"}}>
                        <span style={{color: "#333", marginLeft: "10px"}}>-N200,000</span>
                        {/* <span style={{fontSize: "12px", color: "#333", marginLeft: "10px"}}>$27.77</span> */}
                      </div>
                      <div>
                      {/* <span style={{marginLeft : "65px", fontSize : "12px", color : "#009706"}}>4% </span> */}
                      </div>
                      <div style={{display : "flex", flexDirection: "column", marginLeft: "140px"}}>
                        {/* <span style={{marginLeft : "15px"}}>10.5</span> */}
                        <span style={{fontSize: "12px", color: "#333"}}>23-3-2020</span>
                      </div>
                      </div>
                      <div style={{backgroundColor: "#E7E7E7", height : "2px", width : "340px", margin : "10px auto"}}>

                      </div>
                      
                    </div>

                    
                    <div>
                      <div className="lines">
                      <div style={{marginLeft: "45px"}}>
                      <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27 4.21876L27 10.3359C27 10.9184 26.5278 11.3906 25.9453 11.3906C25.3628 11.3906 24.8906 10.9184 24.8906 10.3359L24.8906 4.21875C24.8906 3.05565 23.9444 2.10938 22.7812 2.10938L4.21875 2.10938C3.05564 2.10938 2.10937 3.05564 2.10937 4.21875L2.10937 15.6094C2.10937 16.7725 3.05564 17.7188 4.21875 17.7188L9.28125 17.7188C9.86375 17.7188 10.3359 18.1909 10.3359 18.7734C10.3359 19.3559 9.86375 19.8281 9.28125 19.8281L4.21875 19.8281C1.89253 19.8281 -3.13596e-06 17.9356 -2.72923e-06 15.6094L-7.3763e-07 4.21875C-3.30901e-07 1.89253 1.89253 3.30901e-07 4.21875 7.3763e-07L22.7812 3.9832e-06C25.1075 4.38993e-06 27 1.89254 27 4.21876ZM25.9453 14.5547C25.3628 14.5547 24.8906 15.0269 24.8906 15.6094C24.8906 16.7725 23.9444 17.7188 22.7812 17.7188L17.7187 17.7188C17.1362 17.7188 16.6641 18.1909 16.6641 18.7734C16.6641 19.3559 17.1362 19.8281 17.7187 19.8281L22.7812 19.8281C25.1075 19.8281 27 17.9356 27 15.6094C27 15.0269 26.5278 14.5547 25.9453 14.5547ZM22.9394 9.86133C22.9394 9.27883 22.4673 8.80665 21.8848 8.80665C21.3023 8.80665 20.8301 9.27883 20.8301 9.86133C20.8301 10.4438 21.3023 10.916 21.8848 10.916C22.4673 10.916 22.9394 10.4438 22.9394 9.86133ZM4.06055 9.86133C4.06055 10.4438 4.53273 10.916 5.11523 10.916C5.69774 10.916 6.16992 10.4438 6.16992 9.86133C6.16992 9.27883 5.69774 8.80664 5.11523 8.80664C4.53273 8.80664 4.06055 9.27883 4.06055 9.86133ZM16.5028 22.4002L14.5547 24.3253L14.5547 14.5547C14.5547 13.9722 14.0825 13.5 13.5 13.5C12.9175 13.5 12.4453 13.9722 12.4453 14.5547L12.4453 24.2211L10.6027 22.4002C10.1883 21.9908 9.52055 21.9948 9.11112 22.4091C8.70169 22.8234 8.7057 23.4912 9.11998 23.9006L11.3132 26.0679C11.9115 26.669 12.7066 27 13.5527 27C14.3989 27 15.1939 26.669 15.7923 26.0679L17.9855 23.9006C18.3998 23.4912 18.4038 22.8234 17.9943 22.4091C17.5849 21.9947 16.9171 21.9907 16.5028 22.4002ZM16.4095 13.3848C16.5861 13.4985 16.7839 13.5529 16.9795 13.5528C17.3261 13.5528 17.6656 13.3821 17.8672 13.0691C18.4946 12.0948 18.8262 10.9834 18.8262 9.8549C18.8262 6.71451 16.4368 4.15959 13.5 4.15958C10.5632 4.15958 8.17383 6.71451 8.17383 9.8549C8.17383 11.0628 8.47958 12.1456 9.0826 13.073C9.40011 13.5613 10.0534 13.6998 10.5417 13.3822C11.03 13.0647 11.1685 12.4115 10.851 11.9231C10.4743 11.3436 10.2832 10.6479 10.2832 9.8549C10.2832 7.87762 11.7262 6.26896 13.5 6.26896C15.2738 6.26896 16.7168 7.87762 16.7168 9.8549C16.7168 10.5775 16.5014 11.294 16.0937 11.927C15.7784 12.4168 15.9197 13.0694 16.4095 13.3848Z" fill="#009706"/>
</svg>



                      </div>
                      <div style={{display : "flex", flexDirection: "column"}}>
                        <span style={{color: "#333", marginLeft: "10px"}}>+N400,000</span>
                        {/* <span style={{fontSize: "12px", color: "#333", marginLeft: "10px"}}>$27.77</span> */}
                      </div>
                      <div>
                      {/* <span style={{marginLeft : "65px", fontSize : "12px", color : "#009706"}}>4% </span> */}
                      </div>
                      <div style={{display : "flex", flexDirection: "column", marginLeft: "130px"}}>
                        {/* <span style={{marginLeft : "15px"}}>10.5</span> */}
                        <span style={{fontSize: "12px", color: "#333"}}>23-3-2020</span>
                      </div>
                      </div>
                      <div style={{backgroundColor: "#E7E7E7", height : "2px", width : "340px", margin : "10px auto"}}>

                      </div>
                    </div>
                    <div>
                      </div>
                      </div>
                      <div className="bottom-naver">
                        <div className="iconer">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.21" width="30" height="30" rx="5" fill="#DAAA00" fill-opacity="0.99"/>
<path d="M23.381 11.8194V9.55367C23.381 8.37209 22.6119 7.41081 21.6667 7.41081H19.4554L15.7606 3.30555C15.5441 3.06498 15.2178 3.06498 15.0013 3.30555L11.3065 7.41085H9.85713C8.2817 7.41085 7 9.01298 7 10.9823V19.5537C7 21.523 8.2817 23.1251 9.85713 23.1251H21.6666C22.6119 23.1251 23.3809 22.1638 23.3809 20.9823V18.7165C24.046 18.4217 24.5238 17.6277 24.5238 16.6965V13.8394C24.5238 12.9082 24.046 12.1143 23.381 11.8194ZM15.381 4.79507L17.7351 7.41085H13.0268L15.381 4.79507ZM22.2381 20.9823C22.2381 21.3761 21.9817 21.6966 21.6666 21.6966H9.85713C8.91187 21.6966 8.14285 20.7353 8.14285 19.5537V10.9823C8.14285 9.80069 8.91187 8.83941 9.85713 8.83941H21.6666C21.9817 8.83941 22.2381 9.15985 22.2381 9.55371V11.6966H20.5238C18.9484 11.6966 17.6667 13.2987 17.6667 15.268C17.6667 17.2373 18.9484 18.8394 20.5238 18.8394H22.2381V20.9823ZM23.381 16.6965C23.381 17.0904 23.1246 17.4108 22.8095 17.4108H20.5238C19.5785 17.4108 18.8095 16.4496 18.8095 15.268C18.8095 14.0864 19.5785 13.1251 20.5238 13.1251H22.8095C23.1246 13.1251 23.381 13.4456 23.381 13.8394V16.6965Z" fill="#009706"/>
<path d="M20.5236 15.9824C20.8392 15.9824 21.095 15.6626 21.095 15.2681C21.095 14.8736 20.8392 14.5538 20.5236 14.5538C20.208 14.5538 19.9521 14.8736 19.9521 15.2681C19.9521 15.6626 20.208 15.9824 20.5236 15.9824Z" fill="#009706"/>
</svg><br />
<span style={{fontSize : "12px"}}>Wallet</span>
                        </div>
                        <div className="icons-downer">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.23295 21.6771L6.35574 20.7855L9.02241 18.668C9.27097 18.4706 9.44182 18.1709 9.48774 17.8306C9.53368 17.4901 9.4492 17.1471 9.25866 16.8782C9.06876 16.6101 8.79203 16.4405 8.49426 16.3954C8.19707 16.3505 7.89167 16.4313 7.64426 16.6278L0.980875 21.9189C0.980398 21.9193 0.979921 21.9197 0.979445 21.9201C0.836866 22.0356 0.718953 22.1863 0.636864 22.3619L0.183895 22.1502L0.636863 22.3619C0.554466 22.5382 0.511016 22.7337 0.511016 22.9328C0.511016 23.132 0.554465 23.3274 0.636864 23.5037C0.719228 23.68 0.837657 23.831 0.980875 23.9467L0.98438 23.9496L0.984367 23.9496L7.41743 29.2431L5.23295 21.6771ZM5.23295 21.6771H6.66667M5.23295 21.6771H6.66667M8.85044 29.8177L8.61883 29.3746C8.46131 29.4569 8.28977 29.4993 8.11698 29.5C7.8673 29.4989 7.62136 29.4106 7.4177 29.2433L8.85044 29.8177ZM8.85044 29.8177L8.61883 29.3746C8.77699 29.2919 8.91782 29.1706 9.02893 29.0178L9.03059 29.0155C9.22478 28.7516 9.31531 28.412 9.27628 28.0717C9.23736 27.7324 9.07416 27.4301 8.83155 27.2269C8.83094 27.2264 8.83032 27.2258 8.82971 27.2253L6.21723 25.0936L5.1297 24.2062H6.53333H28.3333C28.6332 24.2062 28.9271 24.0804 29.1483 23.8461C29.3705 23.6108 29.5 23.286 29.5 22.9417C29.5 22.5974 29.3705 22.2725 29.1483 22.0372C28.9271 21.8029 28.6332 21.6771 28.3333 21.6771H6.66667M8.85044 29.8177L6.66667 21.6771M23.6443 9.21655L24.767 8.32498H23.3333H1.66667C1.36676 8.32498 1.07293 8.19911 0.85165 7.96482C0.629452 7.72957 0.5 7.4047 0.5 7.0604C0.5 6.71609 0.629452 6.39122 0.85165 6.15597C1.07293 5.92169 1.36676 5.79581 1.66667 5.79581H23.4667H24.8703L23.7828 4.90842L21.168 2.77483C21.1677 2.77455 21.1673 2.77427 21.167 2.774C20.9216 2.5713 20.7559 2.26789 20.7158 1.92658C20.6755 1.58463 20.766 1.24301 20.9612 0.977614C21.1556 0.713126 21.4353 0.548668 21.7341 0.509261C22.0324 0.469922 22.3372 0.556685 22.582 0.758455L22.5823 0.758711L29.0156 6.05247L29.0156 6.05248L29.0191 6.05531C29.1623 6.17101 29.2808 6.3221 29.3631 6.49833C29.4455 6.67463 29.489 6.87009 29.489 7.06922C29.489 7.26835 29.4455 7.46381 29.3631 7.64011C29.2811 7.81574 29.1632 7.96639 29.0206 8.08193C29.0201 8.08233 29.0196 8.08273 29.0191 8.08313L22.3557 13.3743C22.1536 13.5348 21.9118 13.6187 21.6667 13.6187C21.4905 13.6187 21.3155 13.5754 21.1552 13.4905C20.9948 13.4056 20.8525 13.2808 20.7413 13.1239C20.6472 12.9911 20.5778 12.8385 20.5381 12.6745C20.4984 12.5105 20.4896 12.3395 20.5123 12.1715C20.5349 12.0035 20.5885 11.843 20.6689 11.6992C20.7493 11.5554 20.8547 11.4317 20.9776 11.334L23.6443 9.21655Z" fill="white"/>
<path d="M5.23295 21.6771L6.35574 20.7855L9.02241 18.668C9.27097 18.4706 9.44182 18.1709 9.48774 17.8306C9.53368 17.4901 9.4492 17.1471 9.25866 16.8782C9.06876 16.6101 8.79203 16.4405 8.49426 16.3954C8.19707 16.3505 7.89167 16.4313 7.64426 16.6278L0.980875 21.9189C0.980398 21.9193 0.979921 21.9197 0.979445 21.9201C0.836866 22.0356 0.718953 22.1863 0.636864 22.3619L0.183895 22.1502L0.636863 22.3619C0.554466 22.5382 0.511016 22.7337 0.511016 22.9328C0.511016 23.132 0.554465 23.3274 0.636864 23.5037C0.719228 23.68 0.837657 23.831 0.980875 23.9467L0.98438 23.9496L0.984367 23.9496L7.41743 29.2431L5.23295 21.6771ZM5.23295 21.6771H6.66667M5.23295 21.6771H6.66667M8.85044 29.8177L8.61883 29.3746C8.46131 29.4569 8.28977 29.4993 8.11698 29.5C7.8673 29.4989 7.62136 29.4106 7.4177 29.2433L8.85044 29.8177ZM8.85044 29.8177L8.61883 29.3746C8.77699 29.2919 8.91782 29.1706 9.02893 29.0178L9.03059 29.0155C9.22478 28.7516 9.31531 28.412 9.27628 28.0717C9.23736 27.7324 9.07416 27.4301 8.83155 27.2269C8.83094 27.2264 8.83032 27.2258 8.82971 27.2253L6.21723 25.0936L5.1297 24.2062H6.53333H28.3333C28.6332 24.2062 28.9271 24.0804 29.1483 23.8461C29.3705 23.6108 29.5 23.286 29.5 22.9417C29.5 22.5974 29.3705 22.2725 29.1483 22.0372C28.9271 21.8029 28.6332 21.6771 28.3333 21.6771H6.66667M8.85044 29.8177L6.66667 21.6771M23.6443 9.21655L24.767 8.32498H23.3333H1.66667C1.36676 8.32498 1.07293 8.19911 0.85165 7.96482C0.629452 7.72957 0.5 7.4047 0.5 7.0604C0.5 6.71609 0.629452 6.39122 0.85165 6.15597C1.07293 5.92169 1.36676 5.79581 1.66667 5.79581H23.4667H24.8703L23.7828 4.90842L21.168 2.77483C21.1677 2.77455 21.1673 2.77427 21.167 2.774C20.9216 2.5713 20.7559 2.26789 20.7158 1.92658C20.6755 1.58463 20.766 1.24301 20.9612 0.977614C21.1556 0.713126 21.4353 0.548668 21.7341 0.509261C22.0324 0.469922 22.3372 0.556685 22.582 0.758455L22.5823 0.758711L29.0156 6.05247L29.0156 6.05248L29.0191 6.05531C29.1623 6.17101 29.2808 6.3221 29.3631 6.49833C29.4455 6.67463 29.489 6.87009 29.489 7.06922C29.489 7.26835 29.4455 7.46381 29.3631 7.64011C29.2811 7.81574 29.1632 7.96639 29.0206 8.08193C29.0201 8.08233 29.0196 8.08273 29.0191 8.08313L22.3557 13.3743C22.1536 13.5348 21.9118 13.6187 21.6667 13.6187C21.4905 13.6187 21.3155 13.5754 21.1552 13.4905C20.9948 13.4056 20.8525 13.2808 20.7413 13.1239C20.6472 12.9911 20.5778 12.8385 20.5381 12.6745C20.4984 12.5105 20.4896 12.3395 20.5123 12.1715C20.5349 12.0035 20.5885 11.843 20.6689 11.6992C20.7493 11.5554 20.8547 11.4317 20.9776 11.334L23.6443 9.21655Z" stroke="#DAAB03"/>
<path d="M5.23295 21.6771L6.35574 20.7855L9.02241 18.668C9.27097 18.4706 9.44182 18.1709 9.48774 17.8306C9.53368 17.4901 9.4492 17.1471 9.25866 16.8782C9.06876 16.6101 8.79203 16.4405 8.49426 16.3954C8.19707 16.3505 7.89167 16.4313 7.64426 16.6278L0.980875 21.9189C0.980398 21.9193 0.979921 21.9197 0.979445 21.9201C0.836866 22.0356 0.718953 22.1863 0.636864 22.3619L0.183895 22.1502L0.636863 22.3619C0.554466 22.5382 0.511016 22.7337 0.511016 22.9328C0.511016 23.132 0.554465 23.3274 0.636864 23.5037C0.719228 23.68 0.837657 23.831 0.980875 23.9467L0.98438 23.9496L0.984367 23.9496L7.41743 29.2431L5.23295 21.6771ZM5.23295 21.6771H6.66667M5.23295 21.6771H6.66667M8.85044 29.8177L8.61883 29.3746C8.46131 29.4569 8.28977 29.4993 8.11698 29.5C7.8673 29.4989 7.62136 29.4106 7.4177 29.2433L8.85044 29.8177ZM8.85044 29.8177L8.61883 29.3746C8.77699 29.2919 8.91782 29.1706 9.02893 29.0178L9.03059 29.0155C9.22478 28.7516 9.31531 28.412 9.27628 28.0717C9.23736 27.7324 9.07416 27.4301 8.83155 27.2269C8.83094 27.2264 8.83032 27.2258 8.82971 27.2253L6.21723 25.0936L5.1297 24.2062H6.53333H28.3333C28.6332 24.2062 28.9271 24.0804 29.1483 23.8461C29.3705 23.6108 29.5 23.286 29.5 22.9417C29.5 22.5974 29.3705 22.2725 29.1483 22.0372C28.9271 21.8029 28.6332 21.6771 28.3333 21.6771H6.66667M8.85044 29.8177L6.66667 21.6771M23.6443 9.21655L24.767 8.32498H23.3333H1.66667C1.36676 8.32498 1.07293 8.19911 0.85165 7.96482C0.629452 7.72957 0.5 7.4047 0.5 7.0604C0.5 6.71609 0.629452 6.39122 0.85165 6.15597C1.07293 5.92169 1.36676 5.79581 1.66667 5.79581H23.4667H24.8703L23.7828 4.90842L21.168 2.77483C21.1677 2.77455 21.1673 2.77427 21.167 2.774C20.9216 2.5713 20.7559 2.26789 20.7158 1.92658C20.6755 1.58463 20.766 1.24301 20.9612 0.977614C21.1556 0.713126 21.4353 0.548668 21.7341 0.509261C22.0324 0.469922 22.3372 0.556685 22.582 0.758455L22.5823 0.758711L29.0156 6.05247L29.0156 6.05248L29.0191 6.05531C29.1623 6.17101 29.2808 6.3221 29.3631 6.49833C29.4455 6.67463 29.489 6.87009 29.489 7.06922C29.489 7.26835 29.4455 7.46381 29.3631 7.64011C29.2811 7.81574 29.1632 7.96639 29.0206 8.08193C29.0201 8.08233 29.0196 8.08273 29.0191 8.08313L22.3557 13.3743C22.1536 13.5348 21.9118 13.6187 21.6667 13.6187C21.4905 13.6187 21.3155 13.5754 21.1552 13.4905C20.9948 13.4056 20.8525 13.2808 20.7413 13.1239C20.6472 12.9911 20.5778 12.8385 20.5381 12.6745C20.4984 12.5105 20.4896 12.3395 20.5123 12.1715C20.5349 12.0035 20.5885 11.843 20.6689 11.6992C20.7493 11.5554 20.8547 11.4317 20.9776 11.334L23.6443 9.21655Z" stroke="url(#paint0_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="15" y1="10.2" x2="15" y2="30" gradientUnits="userSpaceOnUse">
<stop stop-color="#009706"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
</defs>
</svg><br />
<span>P2P Transfer</span>
                        </div>
                        <div className="icons-down">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.3913 30H6.32609H22.3696C24.5 30 26.3043 28.9608 27.7826 26.8825C29.2609 24.8042 30 22.2892 30 19.3373C30 16.3855 29.2609 13.8705 27.7826 11.7922C26.3043 9.71386 24.5 8.6747 22.3696 8.6747H21.913C21.5652 6.20482 20.6957 4.14157 19.3043 2.48494C17.913 0.828313 16.2826 0 14.413 0C12.2826 0 10.4674 1.03916 8.96739 3.11747C7.46739 5.19578 6.71739 7.71084 6.71739 10.6627C6.71739 10.7229 6.72826 10.7982 6.75 10.8886C6.77174 10.9789 6.78261 11.0542 6.78261 11.1145H6.71739C4.84783 11.1145 3.26087 12.0331 1.95652 13.8705C0.652174 15.7078 0 17.9518 0 20.6024C0 23.0723 0.619565 25.2259 1.8587 27.0633C3.09783 28.9006 4.6087 29.8795 6.3913 30Z" fill="white"/>
<path d="M22.3696 29.5H6.40858C4.82359 29.3876 3.44494 28.5211 2.27323 26.7837C1.09608 25.0382 0.5 22.9845 0.5 20.6024C0.5 18.0367 1.12996 15.8986 2.36423 14.1599C3.59663 12.4239 5.04416 11.6145 6.71739 11.6145H6.78261H7.28261V11.1145C7.28261 10.9996 7.26268 10.882 7.23613 10.7716C7.21921 10.7013 7.21739 10.6683 7.21739 10.6627C7.21739 7.79938 7.94331 5.39074 9.37282 3.41009C10.8004 1.43209 12.4769 0.5 14.413 0.5C16.1108 0.5 17.6085 1.24319 18.9215 2.8065C20.2437 4.38092 21.0811 6.35286 21.4179 8.74442L21.4785 9.1747H21.913H22.3696C24.305 9.1747 25.9697 10.106 27.3752 12.082C28.7841 14.0628 29.5 16.4725 29.5 19.3373C29.5 22.2022 28.7841 24.6119 27.3752 26.5927C25.9697 28.5687 24.305 29.5 22.3696 29.5Z" stroke="#009506" stroke-opacity="0.8"/>
<path d="M22.3696 29.5H6.40858C4.82359 29.3876 3.44494 28.5211 2.27323 26.7837C1.09608 25.0382 0.5 22.9845 0.5 20.6024C0.5 18.0367 1.12996 15.8986 2.36423 14.1599C3.59663 12.4239 5.04416 11.6145 6.71739 11.6145H6.78261H7.28261V11.1145C7.28261 10.9996 7.26268 10.882 7.23613 10.7716C7.21921 10.7013 7.21739 10.6683 7.21739 10.6627C7.21739 7.79938 7.94331 5.39074 9.37282 3.41009C10.8004 1.43209 12.4769 0.5 14.413 0.5C16.1108 0.5 17.6085 1.24319 18.9215 2.8065C20.2437 4.38092 21.0811 6.35286 21.4179 8.74442L21.4785 9.1747H21.913H22.3696C24.305 9.1747 25.9697 10.106 27.3752 12.082C28.7841 14.0628 29.5 16.4725 29.5 19.3373C29.5 22.2022 28.7841 24.6119 27.3752 26.5927C25.9697 28.5687 24.305 29.5 22.3696 29.5Z" stroke="url(#paint0_linear)" stroke-opacity="0.9"/>
<defs>
<linearGradient id="paint0_linear" x1="14.6809" y1="6.58537" x2="15.1002" y2="29.9982" gradientUnits="userSpaceOnUse">
<stop stop-color="#DAAA02"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
</defs>
</svg><br />
<span>Democracy</span>
                        </div>
                        <a href="/liquidity">
                        <div className="icons-downy">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 12.5001C23.2843 12.5001 30 9.70188 30 6.25006C30 2.79825 23.2843 0 15 0C6.71573 0 0 2.79825 0 6.25006C0 9.70188 6.71573 12.5001 15 12.5001Z" fill="#009506"/>
<path d="M26.5553 14.2269C23.4243 15.5314 19.3206 16.2499 15 16.2499C10.6794 16.2499 6.57568 15.5314 3.44473 14.2269C2.01187 13.6299 0.884004 12.9513 0 12.2316V14.8748C0 16.5443 1.56018 18.1139 4.39342 19.2943C7.22648 20.4748 10.9933 21.125 15 21.125C19.0067 21.125 22.7735 20.4749 25.6066 19.2943C28.4397 18.1139 30 16.5443 30 14.8748V12.2316C29.116 12.9513 27.9881 13.6297 26.5553 14.2269Z" fill="#009506"/>
<path d="M26.5553 22.8519C23.4244 24.1564 19.3206 24.875 15 24.875C10.6794 24.875 6.57562 24.1564 3.44473 22.8518C2.01182 22.2548 0.883945 21.5765 0 20.8567V23.75C0 27.2017 6.71572 30 15 30C23.2843 30 30 27.2017 30 23.7499V20.8568C29.1161 21.5764 27.9882 22.2549 26.5553 22.8519Z" fill="#009506"/>
</svg><br/>
<span>Earn</span>
                        </div>
                        </a>
                        <div className="icons-down">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M13.7735 21.25H3.43721L3.30971 21.2587C3.0744 21.2911 2.86015 21.4116 2.71025 21.5959C2.56036 21.7801 2.48599 22.0144 2.50218 22.2514C2.51837 22.4884 2.62391 22.7104 2.79747 22.8725C2.97104 23.0347 3.19968 23.1249 3.43721 23.125H13.8447C13.7492 22.5048 13.7253 21.8757 13.7735 21.25ZM3.43721 16.25H16.0122C15.4785 16.805 15.0247 17.4362 14.6647 18.125H3.43721C3.19968 18.1249 2.97104 18.0347 2.79747 17.8725C2.62391 17.7104 2.51837 17.4884 2.50218 17.2514C2.48599 17.0144 2.56036 16.7801 2.71025 16.5959C2.86015 16.4116 3.0744 16.2911 3.30971 16.2587L3.43721 16.25ZM26.5622 11.25H3.43721L3.30971 11.2587C3.0744 11.2911 2.86015 11.4116 2.71025 11.5959C2.56036 11.7801 2.48599 12.0144 2.50218 12.2514C2.51837 12.4884 2.62391 12.7104 2.79747 12.8725C2.97104 13.0347 3.19968 13.1249 3.43721 13.125H26.5622L26.6897 13.1162C26.925 13.0839 27.1393 12.9634 27.2892 12.7791C27.4391 12.5949 27.5134 12.3606 27.4972 12.1236C27.4811 11.8866 27.3755 11.6646 27.202 11.5025C27.0284 11.3403 26.7997 11.2501 26.5622 11.25ZM26.5622 6.25H3.43721L3.30971 6.25875C3.0744 6.29113 2.86015 6.41162 2.71025 6.59588C2.56036 6.78013 2.48599 7.01442 2.50218 7.2514C2.51837 7.48838 2.62391 7.71037 2.79747 7.87253C2.97104 8.03469 3.19968 8.12493 3.43721 8.125H26.5622L26.6897 8.11625C26.925 8.08387 27.1393 7.96338 27.2892 7.77912C27.4391 7.59487 27.5134 7.36058 27.4972 7.1236C27.4811 6.88662 27.3755 6.66463 27.202 6.50247C27.0284 6.34031 26.7997 6.25007 26.5622 6.25ZM17.8472 17.4687C17.9407 17.792 17.9679 18.1308 17.9273 18.4648C17.8867 18.7989 17.7791 19.1213 17.6109 19.4127C17.4427 19.7042 17.2174 19.9587 16.9485 20.161C16.6796 20.3633 16.3726 20.5092 16.046 20.59L15.316 20.77C15.199 21.5186 15.2015 22.281 15.3235 23.0287L15.9985 23.1912C16.3279 23.2706 16.6378 23.4161 16.9093 23.619C17.1808 23.8218 17.4082 24.0777 17.5778 24.3712C17.7473 24.6646 17.8554 24.9895 17.8955 25.326C17.9356 25.6625 17.9068 26.0037 17.811 26.3287L17.5772 27.1187C18.1272 27.6012 18.7522 27.9925 19.4322 28.27L20.0497 27.6225C20.2832 27.3769 20.5643 27.1813 20.8758 27.0476C21.1872 26.9139 21.5226 26.845 21.8616 26.845C22.2005 26.845 22.5359 26.9139 22.8474 27.0476C23.1589 27.1813 23.4399 27.3769 23.6735 27.6225L24.296 28.2787C24.9728 28.0035 25.5992 27.6179 26.1497 27.1375L25.9022 26.28C25.8089 25.9568 25.7818 25.6181 25.8225 25.2843C25.8632 24.9504 25.9709 24.6281 26.1391 24.3368C26.3073 24.0455 26.5325 23.7911 26.8013 23.5889C27.0701 23.3867 27.377 23.2408 27.7035 23.16L28.4335 22.98C28.5509 22.231 28.5483 21.4682 28.426 20.72L27.751 20.5575C27.4215 20.4781 27.1116 20.3326 26.8401 20.1298C26.5686 19.9269 26.3412 19.671 26.1717 19.3776C26.0021 19.0841 25.894 18.7593 25.854 18.4227C25.8139 18.0862 25.8426 17.7451 25.9385 17.42L26.1722 16.6325C25.6223 16.1475 24.9954 15.7576 24.3172 15.4787L23.701 16.1275C23.4674 16.3733 23.1863 16.5691 22.8747 16.7029C22.5631 16.8366 22.2276 16.9056 21.8885 16.9056C21.5494 16.9056 21.2138 16.8366 20.9022 16.7029C20.5906 16.5691 20.3095 16.3733 20.076 16.1275L19.4535 15.4712C18.7735 15.7462 18.1485 16.1337 17.5997 16.6112L17.8472 17.4687ZM21.8747 23.75C20.8747 23.75 20.0622 22.91 20.0622 21.875C20.0622 20.8387 20.8747 20 21.8747 20C22.8747 20 23.6872 20.8387 23.6872 21.875C23.6872 22.91 22.8747 23.75 21.8747 23.75Z" fill="#DAAB03"/>
</g>
</svg><br />
<span>Profile</span>

                        </div>
                      </div>
                    </div>
                   </div>
                </div>
                 </div>
        </div>
      </div>

        
    )
}

export default Index2;