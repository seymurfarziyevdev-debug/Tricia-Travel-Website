import React from 'react'
import '../assets/Css/Header.css'
import topShape from '../assets/Images/topshapeone.png';
import topShapet from '../assets/Images/topshapetwo.png';
import logo from '../assets/Images/logo.png';
import { RxHamburgerMenu } from "react-icons/rx";


function Header() {
  return (
    <div className='hero'>
      <div className="topbar">
        <div className="imgs">
          <img className='img1' src={topShape}></img>
          <img className='img2' src={topShapet}></img>
        </div>
          <div className="links">
            <div className="logo">
              <img className='logoimg' src={logo} alt="" />
            </div>
            <div className="menu">
              <div className="circlelinks">
                ...
              </div>
              <div className="menulinks">
                <ul>
                  <li><a href=""> Home  + </a></li>
                  <li><a href=""> Pages  + </a></li>
                  <li><a href=""> Tours  + </a></li>
                  <li><a href=""> Destination  + </a></li>
                  <li><a href=""> Blog  + </a></li>
                  <li><a href=""> Contact  + </a></li>

                </ul>
              </div>
              <div className="burgermenu">
                  <RxHamburgerMenu/>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Header