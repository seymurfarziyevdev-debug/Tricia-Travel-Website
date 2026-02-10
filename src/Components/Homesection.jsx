import React from 'react'
import cloud2 from '../assets/Images/cloud-2.png'
import cloud3 from '../assets/Images/cloud-3.png'
import cloud4 from '../assets/Images/cloud-4.png'
import cloud5 from '../assets/Images/cloud-5.png'
import plane from '../assets/Images/plane.png'
import balon from '../assets/Images/baloon.png'
import birds from '../assets/Images/bird-2.png'
import hero from '../assets/Images/hero-img-2.png'
import '../assets/Css/Homesection.css'
import holidays from '../assets/Images/holidays.svg'
import cruises from '../assets/Images/cruises.svg'
import flights from '../assets/Images/flights.svg'
import Hotels from '../assets/Images/hotels.svg'
import ski from '../assets/Images/ski.svg'

function Homesection() {
  return (
    <>
    <div className='basedivision'>
        <img src={cloud3} className='c2' alt="" />
        <img src={cloud2} className='c1' alt="" />
        <img src={cloud4} className='c3'alt="" />
        <img src={cloud4} className='c4'alt="" />
        <img src={cloud5} className='c5' alt="" />
    </div>
    <div className="infobox">
        <div className="airplane">
          <img src={plane} alt="" />
        </div>
        <div className="infotext">
          <div className="text">
            <h4>Discover the nature new travel</h4>
            <h1> Travel Today Discover <br/> The World</h1>
          </div>
          <div className="birds">
            <img src={birds} alt="" />
          </div>
        </div>
        <div className="balon">
          <img src={balon} alt="" />
        </div>
    </div>
    <div className="heroimg">
      <img src={hero} alt="" />
    </div>
    <div className="tabsection">
    <div className="tabmenu">
      <div className="menu">
        <ul>
          <li><a href=""><img src={holidays} alt="" /><span>Package Holidays</span></a></li>
          <li><a href=""><img src={cruises} alt="" /><span>Cruises</span></a></li>
          <li><a href=""><img src={flights} alt="" /><span>Flights</span></a></li>
          <li><a href=""> <img src={Hotels} alt="" /><span>Hotels</span></a></li>
          <li><a href=""> <img src={ski} alt="" /> <span>Ski</span></a></li>
        </ul>
      </div>
      <div className="tab">

      <form action="">
      
      <div className="formgroup">
        <label htmlFor="">Destination</label>
          <select name="" id="">
            <option value="">Select Destination</option>
            <option value="">Canada</option>
            <option value="">Japan</option>
            <option value="">Australia</option>
            <option value="">Brazil</option>
            <option value="">Italy</option>
            <option value="">Spain</option>
            <option value="">Dubai</option>
          </select>
      </div>
      <div className="formgroup">
        <label htmlFor="">Tour Type</label>
        <select name="" id="">
          <option value="">Select Tour Type</option>
          <option value="">Solo Tour</option>
          <option value="">Couple Tour</option>
          <option value="">Corporate Tour</option>
        </select>
      </div>
      <div className="formgroup">
        <label htmlFor="">When</label>
        <input type="Date" />
      </div>
     
       <div className="formgroup">
        <label htmlFor="">Tour Duration</label>
        <select name="" id="">
          <option value="">1 Day</option>
          <option value="">2 Days</option>
          <option value="">3 Days</option>
          <option value="">4 Days</option>
          <option value="">5 Days</option>
        </select>
      </div>
      </form>
  
      </div>
    </div>
    </div>
    </>
  )
}

export default Homesection