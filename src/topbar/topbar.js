import React from 'react';
import './topbar.css';
import Groot from '../groot.jpg';

export default function Topbar() {
  return (
    <div className='top'>
        <div className='topleft'>
            <i className="topIcon fa-brands fa-facebook"></i>
            <i className="topIcon fa-brands fa-twitter"></i>
            <i className="topIcon fa-brands fa-pinterest"></i>
            <i className="topIcon fa-brands fa-instagram"></i>
        </div>
        <div className='topcenter'>
            <ul className='topList'>
                <li className='topListItem'>HOME</li>
                <li className='topListItem'>ABOUT-US</li>
                <li className='topListItem'>CONTACT</li>
                <li className='topListItem'>WRITE TO US</li>
                <li className='topListItem'>LOGIN</li>
            </ul>
        </div>
        <div className='topright'>
            <img className='topImage' src={Groot} alt='nhi daal raha alt'></img>
            <div className=" topSearchIcon"> 
            <i className="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    </div>
  )
}
